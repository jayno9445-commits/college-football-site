# Assets

Drop your images in this folder.

## Logo (recommended)

Save your **COLLEGE FOOTBALL** logo here as:

```
assets/logo.png
```

When that file exists it is used automatically for:

- the big hero logo (it replaces the built-in styled text version), and
- the browser tab icon (favicon) + social share preview.

A transparent PNG around **800–1200px wide** works best. (Until you add it,
the site falls back to a clean CSS recreation of the wordmark, so nothing looks broken.)

## Screenshots (optional)

Add in-game captures and swap them into the "Screenshots" section in
`index.html` (replace the placeholder `<figure class="shot">` blocks with
`<img>` tags pointing at your files), e.g.

```html
<figure class="shot reveal"><img src="assets/gameplay-1.png" alt="Gameplay" /></figure>
```
