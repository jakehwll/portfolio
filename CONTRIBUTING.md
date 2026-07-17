# Contributing

This is a personal site. Issues and PRs are welcome for bugs, accessibility, and small improvements — no need for a formal process.

Keep changes focused. Personal copy, branding, and bio are intentional — please don't "genericize" them in a PR unless we ask.

## Setup

Requires [Bun](https://bun.sh) and Node.js `>=22.12.0`.

1. Fork and clone
2. Install and run:

```sh
bun install
cp .env.example .env
bun dev
```

3. Optionally set `GITHUB_TOKEN` in `.env` if you want live GitHub data (see below)

### GitHub token (optional locally)

Pinned repos and the contribution graph use the GitHub GraphQL API at build time.

| Environment | Token |
| --- | --- |
| Local | Set `GITHUB_TOKEN` in `.env` — classic PAT with `read:user`, or a fine-grained token that can read public profile data |
| GitHub Actions | Uses `secrets.GITHUB_TOKEN` automatically |

Without a token, the build still succeeds with empty/fallback data.

```sh
bun run build
bun run preview
```
