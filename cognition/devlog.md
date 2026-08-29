# DevLog

The personal DevLog was added in August 2026.

## Implementation

- Component: `src/pages/personal/DevLogPage.jsx`
- Route: `/personal/devlog`
- Navigation label: `DevLog`
- Browser title: `DevLog | João Streibel`

The page introduces itself as notes about things being built, learned, and figured out. Its first entry is timestamped August 28, 2026 at 22:02 and is titled “ML & Signal Processing - 01.” The `No entries yet.` fallback remains available when the entries array is empty.

The page maps its entry data through the shared [[blog-entry-component]]. Each future entry should have this shape:

```js
{
  date: 'YYYY-MM-DD',
  time: 'HH:MM',
  title: 'Entry title',
  format: 'md', // or 'html' for trusted HTML
  body: 'Entry text',
}
```

The rendered key combines `date`, `time`, and `title`, allowing multiple entries on the same day. That combination should be unique.

Related: [[routing-and-navigation]], [[page-conventions]], [[verification]].
