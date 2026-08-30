# Visual layout

`src/components/SiteLayout.jsx` renders the shared page chrome:

- a sticky left rail containing the main image and navigation
- a vertical separator drawn at the rail's right edge
- main content in a separate, shrink-safe grid column
- variant-specific main and corner images
- a fixed link in the bottom-right corner for switching site variants

`src/styles/global.scss` defines the palette and all shared positioning. The personal variant uses `jojo-papa.png` as its main image and `calvin.webp` as its corner image. The professional variant uses `pro.jpeg` and has no corner image.

## Responsive behavior

The signature composition is preserved at every viewport size: the portrait remains top-left, navigation remains in the left rail, the vertical separator remains visible, and Calvin remains bottom-right on the personal variant.

The layout uses shared fluid variables for the rail, its gutter, the corner image, and vertical margins. A two-column grid reserves real space for the left rail rather than relying on unrelated fixed offsets. The rail is sticky and internally places the portrait and navigation in separate grid rows, preventing them from colliding on short windows. The main content column uses `min-width: 0`, fluid padding, and right-side space derived from Calvin's size.

At `32rem` or narrower, the same composition scales down: rail gutters, Calvin, navigation text, and the version link become smaller, but none of the signature elements is hidden. Embedded media is constrained to content width, and entry code blocks scroll horizontally instead of widening the page.

Long-form entry content is capped at `65ch` for a comfortable reading measure, while fenced code blocks retain the full available content width. The active navigation link uses `--color-red` as a restrained orientation cue.

Pages currently do not have page-specific styles or CSS modules. New content should first reuse semantic HTML and the global layout unless a distinct visual requirement calls for new styles.

The shared [[blog-entry-component]] exposes CSS hooks for entry-specific styling without requiring page-specific markup.

The personal [[hello-page]] adds narrowly scoped prose and subtle asterisk-footnote styles in the global stylesheet.

Related: [[architecture]], [[page-conventions]].
