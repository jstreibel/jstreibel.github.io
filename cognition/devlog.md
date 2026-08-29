# DevLog

The personal DevLog was added in August 2026.

## Implementation

- Component: `src/pages/personal/DevLogPage.jsx`
- Route: `/personal/devlog`
- Navigation label: `DevLog`
- Browser title: `DevLog | João Streibel`

The page introduces itself as notes about things being built, learned, and figured out. Its `entries` array is currently empty, so it displays `No entries yet.`

The component already maps entries to semantic `article`, `h2`, `time`, and `p` elements. Each future entry should have this shape:

```js
{
  date: 'YYYY-MM-DD',
  title: 'Entry title',
  body: 'Entry text',
}
```

The rendered key combines `date` and `title`, so that pair should be unique.

Related: [[routing-and-navigation]], [[page-conventions]], [[verification]].
