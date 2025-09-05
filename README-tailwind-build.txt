# Tailwind Build (X-Frequency)

## Quick start
```bash
npm install
npm run build:css
# -> generates tailwind.min.css in repo root
```

## HTML switch (after first build)
Replace the Play CDN:
```html
<!-- remove -->
<script src="https://cdn.tailwindcss.com"></script>
<!-- add -->
<link rel="stylesheet" href="tailwind.min.css">
```

## Notes
- `tailwind.config.js` scans all `*.htm/*.html/*.js` for classnames.
- `safelist` keeps arbitrary classes like `min-w-[14rem]`.
- The GitHub Action builds CSS on push to `main` and commits `tailwind.min.css` back.
