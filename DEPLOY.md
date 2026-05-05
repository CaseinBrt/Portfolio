# Deployment Guide

This Next.js resume/portfolio site can be deployed to multiple platforms.

---

## Option 1: Vercel (Recommended ✅)

Vercel is the easiest and supports all features (API routes, PDF generation, contact form).

### Quick Deploy

1. Push your code to GitHub:
```bash
git add -A
git commit -m "Ready for deployment"
git push origin main
```

2. Go to [vercel.com](https://vercel.com) → Import Project
   - Select your `CaseinBrt/resume-portfolio` repository
   - Vercel auto-detects Next.js settings
   - Click **Deploy**

3. Wait ~2 minutes. Your site will be live at `https://your-repo-name.vercel.app`

4. (Optional) Add custom domain in Vercel project settings

### Manual Deploy via Vercel CLI

```bash
npm i -g vercel
vercel --prod
```

---

## Option 2: GitHub Pages (Static Only ⚠️)

GitHub Pages only serves static files. Some features **will not work**:
- ❌ Contact form (requires server API)
- ❌ PDF generation (requires server API)
- ✅ All other pages (Home, Experience, Skills, Portfolio, Print view)

### If you still want GitHub Pages:

1. **Create/use the repository** `CaseinBrt/CaseinBrt.github.io`
   - This special repo name automatically publishes to `https://caseinbrt.github.io`

2. **Configure** `next.config.ts` already has `output: 'export'` set

3. **Build** locally:
```bash
bun install
bun run build
```

4. **Copy build output** to a `docs/` folder:
```bash
cp -r out/* docs/
```

5. **Commit and push**:
```bash
git add docs/
git commit -m "Deploy to GitHub Pages"
git push origin main
```

6. **Enable GitHub Pages** in repo Settings → Pages → Source: `Deploy from a branch` → `main` → `/docs` folder

**Visit:** `https://caseinbrt.github.io` (may take 1-2 minutes)

---

## Option 3: Netlify (All Features Work)

1. Push to GitHub
2. Go to [netlify.com](https://netlify.com) → New site from Git
3. Select repo → Deploy

Netlify supports serverless functions, so your API routes work.

---

## Current Repository Status

- Remote: `origin https://github.com/CaseinBrt/CaseinBrt.github.io.git`
- Branch: `main`
- Build command: `bun run build` (or `next build`)
- Publish directory: `out` (or `docs` if you copy)

---

## Quick Start (Vercel — 2 minutes)

```bash
# Ensure all changes are committed
git add -A
git commit -m "Final portfolio update"

# Push to GitHub
git push origin main

# Then deploy on vercel.com
```

Your portfolio will be live instantly.
