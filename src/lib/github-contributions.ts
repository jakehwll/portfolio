import { CONTRIBUTION_MONTHS, GITHUB_USERNAME, githubFallback, githubGraphql } from "./github";

export type ContributionLevel =
  | "NONE"
  | "FIRST_QUARTILE"
  | "SECOND_QUARTILE"
  | "THIRD_QUARTILE"
  | "FOURTH_QUARTILE";

type ContributionDay = {
  contributionCount: number;
  contributionLevel: ContributionLevel;
  date: string;
};

type ContributionWeek = ContributionDay[];

type Contributions = {
  weeks: ContributionWeek[];
  total: number;
};

type ContributionsQuery = {
  user?: {
    contributionsCollection?: {
      contributionCalendar?: {
        totalContributions: number;
        weeks: {
          contributionDays: ContributionDay[];
        }[];
      };
    };
  };
};

const QUERY = `
  query ($login: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $login) {
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              contributionLevel
              date
            }
          }
        }
      }
    }
  }
`;

function monthsAgoISO(months: number, now = new Date()): string {
  const d = new Date(now);
  d.setMonth(d.getMonth() - months);
  return d.toISOString();
}

function toDateString(d: Date): string {
  return d.toISOString().slice(0, 10);
}

/** Deterministic pseudo-random in [0, 1) from a string seed. */
function hash01(seed: string): number {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return (h >>> 0) / 0xffffffff;
}

function levelForCount(count: number): ContributionLevel {
  if (count <= 0) return "NONE";
  if (count <= 2) return "FIRST_QUARTILE";
  if (count <= 5) return "SECOND_QUARTILE";
  if (count <= 9) return "THIRD_QUARTILE";
  return "FOURTH_QUARTILE";
}

/** Fake calendar for local dev when the GitHub API is unavailable. */
function createDummyContributions(months = CONTRIBUTION_MONTHS): Contributions {
  const weeksCount = Math.round(months * (52 / 12));
  const today = new Date();
  // Align to the start of the current week (Sunday), matching GitHub's grid.
  const end = new Date(today);
  end.setHours(12, 0, 0, 0);
  end.setDate(end.getDate() - end.getDay());

  const start = new Date(end);
  start.setDate(start.getDate() - (weeksCount - 1) * 7);

  const weeks: ContributionWeek[] = [];
  let total = 0;

  for (let w = 0; w < weeksCount; w++) {
    const week: ContributionDay[] = [];
    for (let weekday = 0; weekday < 7; weekday++) {
      const date = new Date(start);
      date.setDate(start.getDate() + w * 7 + weekday);
      const key = toDateString(date);
      const r = hash01(key);
      // Weekends quieter; weekdays busier — looks a bit more real.
      const weekend = weekday === 0 || weekday === 6;
      const active = r > (weekend ? 0.55 : 0.28);
      const count = active ? Math.floor(hash01(key + ":n") * (weekend ? 6 : 14)) + 1 : 0;
      total += count;
      week.push({
        contributionCount: count,
        contributionLevel: levelForCount(count),
        date: key,
      });
    }
    weeks.push(week);
  }

  return { weeks, total };
}

export async function fetchContributions(
  months = CONTRIBUTION_MONTHS,
): Promise<Contributions | null> {
  const dummy = () => createDummyContributions(months);

  const result = await githubGraphql<ContributionsQuery>(QUERY, {
    login: GITHUB_USERNAME,
    from: monthsAgoISO(months),
    to: new Date().toISOString(),
  });

  if (!result.ok) {
    return githubFallback("github-contributions", result.reason, dummy());
  }

  const calendar = result.data.user?.contributionsCollection?.contributionCalendar;
  if (!calendar) {
    return githubFallback("github-contributions", "No contribution calendar in response", dummy());
  }

  return {
    weeks: calendar.weeks.map((week) => week.contributionDays),
    total: calendar.totalContributions,
  };
}
