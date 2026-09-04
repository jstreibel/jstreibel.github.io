# Reach page

`src/pages/personal/ReachPage.jsx` is the personal contact page at `/personal/reach`.

It lists e-mail, LinkedIn, X, and Instagram using semantic `address` markup. Contact values are centralized in the file's `contacts` array. The initial values are placeholders and must be replaced with the owner's real addresses and handles before publishing.

Each contact has three fields:

```js
{
  label: 'Service name',
  href: 'Destination URL',
  text: 'Visible address or handle',
}
```

The route is registered in `src/App.jsx`, and its navigation item is configured in `src/config/siteVariants.js`.

Related: [[routing-and-navigation]], [[page-conventions]], [[visual-layout]].
