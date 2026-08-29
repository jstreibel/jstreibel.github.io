# Blog entry component

`src/components/BlogEntry.jsx` is the shared semantic renderer for entries on [[devlog]], Notes, and the future Blog page.

## API

| Prop | Required | Purpose |
| --- | --- | --- |
| `title` | yes | Entry heading rendered as an `h2` |
| `date` | no | Machine-readable and visible date on a `time` element |
| `time` | no | Time of day in 24-hour `HH:MM` format |
| `body` | no | Entry content provided as a Markdown or HTML string |
| `format` | no | `md` by default; use `html` for trusted HTML strings |
| `children` | no | JSX fallback used when `body` is not provided |

Example:

```jsx
<BlogEntry
  title="A useful discovery"
  date="2026-08-28"
  time="14:30"
  body="What was **learned** and why it matters."
  format="md"
/>
```

When both date and time are present, the component emits a combined HTML datetime such as `2026-08-28T14:30` and displays `2026-08-28 · 14:30`. This allows multiple entries within one day to carry distinct timestamps. Entry list keys also include date, time, and title.

The component generates a stable React `useId` value to connect each `article`'s `aria-labelledby` attribute to its heading. It exposes `blog-entry` and `blog-entry-content` class names for future styling, but they currently have no dedicated rules in `global.scss`.

Markdown bodies are rendered by `react-markdown`. Fenced code blocks are syntax-highlighted by `rehype-highlight`/`highlight.js` using the GitHub Dark theme; declare the language after the opening fence, such as `bash`. HTML bodies use React's `dangerouslySetInnerHTML`, so `format="html"` is only safe for trusted, repository-authored content. Sanitize HTML first if entry content ever comes from users or another untrusted source. If both `body` and `children` are provided, `body` takes precedence.

Notes and DevLog each keep their own entry data and empty state. This component owns presentation only; it does not own storage, ordering, filtering, or routing.

Related: [[page-conventions]], [[routing-and-navigation]], [[visual-layout]].
