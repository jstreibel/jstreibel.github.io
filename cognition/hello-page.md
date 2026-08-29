# Hello page

`src/pages/personal/HelloPage.jsx` is the personal site's introduction at `/personal/hello`.

Its prose uses semantic paragraphs inside `.hello-page`, rather than paired `br` elements. This gives the introduction consistent line height and paragraph spacing through `src/styles/global.scss`.

## Footnote pattern

The page has a single, visually muted asterisk footnote:

- The inline `*` is a superscript link from `#footnote-ref-asterisk` to `#footnote-asterisk`.
- The footnote is a compact `aside` with a subtle top rule and muted text.
- A visible `↩` backlink returns keyboard and pointer users to the inline reference.
- Both links have descriptive accessible labels and red hover/focus states.

This handcrafted JSX pattern is specific to static page prose. Markdown entry bodies use [[blog-entry-component]] and have a separate rendering path.

Related: [[page-conventions]], [[visual-layout]], [[routing-and-navigation]].
