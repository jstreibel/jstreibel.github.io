# Routing and navigation

Routes are declared in `src/App.jsx` under two instances of the shared `SiteLayout`.

## Personal routes

- `/personal/hello` → `HelloPage`
- `/personal/notes` → `NotesPage`
- `/personal/devlog` → `DevLogPage`
- `/personal/links` → `LinksPage`

## Professional routes

- `/professional/about` → `AboutPage`
- `/professional/work` → `WorkPage`

The root route and all unknown routes redirect to `/personal/hello`. Because the app uses `HashRouter`, browser-facing URLs contain a hash, such as `#/personal/devlog`.

Navigation is data-driven. `src/config/siteVariants.js` defines a `navigation` array for each variant, and `SiteLayout` maps that array to React Router `Link` elements. A page intended to appear in navigation therefore needs both a route in `App.jsx` and an item in `siteVariants.js`.

## Known inconsistency

The personal-to-professional switch points to `/professional/about`, but the professional-to-personal switch currently points to `/personal/about`. No `/personal/about` route exists, so the catch-all redirects it to `/personal/hello`.

Related: [[architecture]], [[page-conventions]], [[devlog]].
