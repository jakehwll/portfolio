import { graphql } from "@octokit/graphql";

export const GITHUB_USERNAME = "jakehwll";
export const CONTRIBUTION_MONTHS = 9;

type GraphqlSuccess<T> = { ok: true; data: T };
type GraphqlFailure = { ok: false; reason: string };
export type GraphqlResult<T> = GraphqlSuccess<T> | GraphqlFailure;

function getToken(): string | undefined {
  return process.env.GITHUB_TOKEN ?? import.meta.env.GITHUB_TOKEN;
}

/** Shared GraphQL client against api.github.com. */
export async function githubGraphql<T>(
  query: string,
  variables?: Record<string, unknown>,
): Promise<GraphqlResult<T>> {
  const token = getToken();
  if (!token) return { ok: false, reason: "Missing GITHUB_TOKEN" };

  try {
    const data = await graphql<T>(query, {
      ...variables,
      headers: {
        authorization: `Bearer ${token}`,
        "user-agent": GITHUB_USERNAME,
      },
    });
    return { ok: true, data };
  } catch (error) {
    return {
      ok: false,
      reason: error instanceof Error ? error.message : String(error),
    };
  }
}

/** Dev → dummy data; prod → null, with a consistent warn. */
export function githubFallback<T>(label: string, reason: string, dummy: T): T | null {
  const dev = Boolean(import.meta.env.DEV);
  console.warn(`[${label}] ${reason}${dev ? "; using dummy data for dev." : ""}`);
  return dev ? dummy : null;
}
