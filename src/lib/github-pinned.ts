import { GITHUB_USERNAME, githubFallback, githubGraphql } from "./github";

type PinnedRepo = {
  name: string;
  nameWithOwner: string;
  description: string | null;
  url: string;
};

type PinnedQuery = {
  user?: {
    pinnedItems?: {
      nodes?: Array<PinnedRepo | null>;
    };
  };
};

const QUERY = `
  query ($login: String!) {
    user(login: $login) {
      pinnedItems(first: 6, types: [REPOSITORY]) {
        nodes {
          ... on Repository {
            name
            nameWithOwner
            description
            url
          }
        }
      }
    }
  }
`;

/** Stand-in pins for local dev when the GitHub API is unavailable. */
const DUMMY_PINNED: PinnedRepo[] = [
  {
    name: "wynnjs",
    nameWithOwner: `${GITHUB_USERNAME}/wynnjs`,
    description: "A TypeScript client for exploring the Wynncraft API",
    url: `https://github.com/${GITHUB_USERNAME}/wynnjs`,
  },
  {
    name: "intertui",
    nameWithOwner: `${GITHUB_USERNAME}/intertui`,
    description: "A terminal client for Intercept",
    url: `https://github.com/${GITHUB_USERNAME}/intertui`,
  },
  {
    name: "minecraftle-v2",
    nameWithOwner: `${GITHUB_USERNAME}/minecraftle-v2`,
    description: "Wordle with a Minecraft spin",
    url: `https://github.com/${GITHUB_USERNAME}/minecraftle-v2`,
  },
];

export async function fetchPinnedRepos(): Promise<PinnedRepo[] | null> {
  const result = await githubGraphql<PinnedQuery>(QUERY, {
    login: GITHUB_USERNAME,
  });

  if (!result.ok) {
    return githubFallback("github-pinned", result.reason, DUMMY_PINNED);
  }

  const nodes = result.data.user?.pinnedItems?.nodes;
  if (!nodes) {
    return githubFallback("github-pinned", "No pinned items in response", DUMMY_PINNED);
  }

  return nodes.filter((node): node is PinnedRepo => node != null);
}
