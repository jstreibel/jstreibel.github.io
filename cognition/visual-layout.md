# Visual layout

`src/components/SiteLayout.jsx` renders the shared page chrome:

- fixed navigation on the left
- a fixed vertical rule at 20% of the viewport width
- main content padded into the center-right area
- variant-specific main and corner images
- a fixed link in the bottom-right corner for switching site variants

`src/styles/global.scss` defines the palette and all shared positioning. The personal variant uses `jojo-papa.png` as its main image and `calvin.webp` as its corner image. The professional variant uses `pro.jpeg` and has no corner image.

Pages currently do not have page-specific styles or CSS modules. New content should first reuse semantic HTML and the global layout unless a distinct visual requirement calls for new styles.

The shared [[blog-entry-component]] exposes CSS hooks for entry-specific styling without requiring page-specific markup.

Related: [[architecture]], [[page-conventions]].
