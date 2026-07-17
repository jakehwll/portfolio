## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

Prefer Bun (`bun install`, `bun run build`) over npm/yarn.

## Project notes

- Personal homepage for Jake Howell (`jake.hwll.me`), not a generic template.
- GitHub data (pinned repos, contribution graph) is fetched at **build time** via GraphQL; needs `GITHUB_TOKEN` locally (see `.env.example`).
- Site URL lives in `astro.config.mjs` (`site`). GitHub username / shared API helpers live in `src/lib/github.ts`.
- Deploy: GitHub Actions → Pages (`.github/workflows/deploy.yml`).

## Documentation

Full Astro docs: https://docs.astro.build
