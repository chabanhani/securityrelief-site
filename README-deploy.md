# SecurityRelief — static site (deploy guide)

Two-route static marketing site. **`/` = Arabic (canonical, RTL)**, **`/en/` = English (LTR)**.
Generated from the approved mockup `2026-06-16-securityrelief-website-reskin.html` via `build-site.js`.

```
securityrelief-site/
├── index.html          ← Arabic (root)
├── en/index.html       ← English
├── assets/
│   ├── css/styles.css
│   ├── js/site.js       ← mobile menu + portal "coming soon" modal
│   └── img/             ← logo, brush variants, favicon (shared, cached)
├── robots.txt
└── sitemap.xml
```

## Local preview
Open `index.html` in a browser (assets load via relative paths). The **EN** link goes to `en/`, **ع** returns to `/`.

## Deploy (recommended: Cloudflare Pages or Netlify — free, fast, HTTPS)
1. Create a project and point it at this folder (drag-and-drop the folder, or connect a Git repo containing it).
2. **Build command:** none. **Output/publish directory:** this folder (the one with `index.html`).
3. Add the custom domain **securityrelief.com** in the host dashboard and follow its DNS instructions (CNAME/A records at your registrar). Keep `assessment.` and `portal.` subdomains pointing where they already do.
4. Confirm HTTPS is on (automatic on both hosts).

> DNS + host account = Hani's action (credentials). Can also be routed to `personal/agent-tech`.

## After deploy — verify
- `/` loads Arabic RTL; `/en/` loads English LTR; the language switch links work.
- `view-source` shows correct `<html lang/dir>`, `canonical`, and `hreflang` (ar/en/x-default).
- Submit `sitemap.xml` in Google Search Console.

## Open items (from the dev-spec — not blockers)
- **Privacy & Terms pages** — footer links are `#` placeholders; build the pages and wire them.
- **Vector master (.svg)** for logo + brushstroke — currently optimized PNGs; commission for crisp scaling.
- **White-reversed logo** — for any future dark-field logo placement.
- **Proper OG image (1200×630)** — currently falls back to the logo asset; design a dedicated share image.
- **Self-host fonts** — currently Google Fonts CDN with `display:swap`; self-host as a later speed/privacy pass.
- **Portal Login** — currently opens a "coming soon → assessment" modal; switch to the real portal URL once it's live.

## Rebuild
After editing the source mockup: `npm install cheerio` then `node build-site.js` (run from `outputs/`).
