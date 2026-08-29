# Page conventions

Page components are function components stored below `src/pages/personal` or `src/pages/professional`.

Existing pages are deliberately lightweight and rely on global browser-element styling. They commonly return a fragment beginning with an `h1`. Pages that set a browser title use `useEffect`:

```jsx
useEffect(() => {
  document.title = 'Page name | João Streibel';
}, []);
```

To add a navigable personal page:

1. Create its component in `src/pages/personal/`.
2. Import it and declare its route inside the personal `SiteLayout` route in `src/App.jsx`.
3. Add its label and path to `siteVariants.personal.navigation`.
4. Run the checks in [[verification]].

There is no test framework or lint script currently declared in `package.json`.

Related: [[routing-and-navigation]], [[devlog]].
