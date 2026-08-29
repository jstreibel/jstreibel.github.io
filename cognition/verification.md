# Verification

Use the existing production build as the primary validation:

```sh
npm run build
```

The DevLog change passed this build with Vite 5.4.21. Sass emitted a warning that its legacy JavaScript API is deprecated, but the build completed successfully.

Also check patches for whitespace errors and inspect the working tree:

```sh
git diff --check
git status --short
```

Related: [[architecture]], [[devlog]].
