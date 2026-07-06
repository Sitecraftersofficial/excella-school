# excella-school TODO

## Step 1: Fix Netlify/Vite build failure (missing asset import)

- [x] Identify failing import in Netlify logs.
- [x] Inspect `src/routes/gallery.tsx` and locate incorrect import for campus1 image.
- [x] Fix import path casing: `excella-campus1.png` -> `Excella-campus1.png`.
- [ ] Verify remaining asset resolution issues on Netlify/Linus case-sensitivity.
- [ ] If still failing, ensure aliased paths resolve in production by checking `vite.config.ts` (tsconfigPaths plugin) and verifying the asset is committed/exact filename.
