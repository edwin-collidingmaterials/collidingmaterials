# Colliding Materials — Static Site

Static landing site built with React + Vite, hosted on GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

## Deploy to GitHub Pages

```bash
npm run deploy
```

## Custom domain

When ready, add your domain in GitHub → Settings → Pages → Custom domain,
then change `base: '/collidingmaterials/'` to `base: '/'` in vite.config.js
and run `npm run deploy` again.
