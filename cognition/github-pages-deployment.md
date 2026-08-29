# GitHub Pages deployment

The site must be deployed as Vite build output, not directly from the repository branch.

## Intended path

`.github/workflows/deploy.yml` runs on pushes to `main`, installs dependencies, runs `npm run build`, uploads `./dist`, and deploys that artifact with `actions/deploy-pages`.

The GitHub repository's **Settings → Pages → Build and deployment → Source** must therefore be set to **GitHub Actions**.

## Diagnosed conflict

On August 29, 2026, both the custom `Deploy Site` workflow and GitHub's automatic Jekyll `pages build and deployment` workflow ran for commit `1045fbe`. The latter deployed after the Vite workflow and published the raw repository `index.html`, whose script points to `/src/main.jsx`. That source file requires Vite transformation, so publishing it directly does not produce the working React site.

If the live site returns an `index.html` containing `/src/main.jsx`, check that Pages is configured for **GitHub Actions**, not **Deploy from a branch**. After changing the setting, rerun the custom `Deploy Site` workflow or push a new commit.

Related: [[architecture]], [[verification]].
