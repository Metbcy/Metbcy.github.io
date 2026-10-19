# bredy.dev

Personal site of Amir Bredy. Next.js static export, deployed to GitHub Pages on every push to `main`.

## Editing

- **Words:** `src/content/site.ts` holds everything the home page says (intro, case studies, open source, background).
- **Notes:** add a Markdown file to `src/content/notes/` with `title`, `date`, `excerpt` and `tags` frontmatter. It shows up under Writing automatically. Add its URL to `public/sitemap.xml`.
- **Resume:** replace `public/resume.pdf`.
- **Link preview image:** `public/og.png` (1200x630).

## Running locally

```bash
npm ci
npm run dev     # http://localhost:3000
npm run build   # static site in out/
npm run lint
```

## Hosting

GitHub Pages with the custom domain `bredy.dev`. DNS lives in Cloudflare (A/AAAA records to GitHub, `www` CNAME to `metbcy.github.io`, all DNS-only). `metbcy.github.io` redirects to `bredy.dev`.
