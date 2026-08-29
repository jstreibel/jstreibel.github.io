# Architecture

The site is a small React 18 single-page application built by Vite 5.

## Stack

- React and React DOM
- React Router using `HashRouter`
- Redux Toolkit and React Redux are installed; the store lives under `src/app`, although the pages inspected here do not use it directly.
- Sass provides the global stylesheet.

## Important files

- `src/main.jsx` — application entry point
- `src/App.jsx` — route declarations
- `src/components/SiteLayout.jsx` — shared variant-aware shell
- `src/config/siteVariants.js` — navigation and imagery for each site variant
- `src/styles/global.scss` — global layout and visual rules
- `src/pages/personal/` — personal pages
- `src/pages/professional/` — professional pages

The Vite build also emits several legacy HTML entry files configured in `vite.config.js`.

Related: [[routing-and-navigation]], [[page-conventions]], [[visual-layout]].
