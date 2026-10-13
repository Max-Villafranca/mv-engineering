# MV Engineering

Fast, static marketing website for digital services, virtual assistance, and software. Published by the existing GitHub Pages setup at https://mvengineering.dev.

## Content updates

Edit `scripts/build.mjs` for page content, metadata, navigation, structured data, and contact details. Run `node scripts/build.mjs` to refresh the committed HTML pages, sitemap, and robots.txt. The hosting platform serves those files directly; there is no runtime framework or package installation.

Shared styling lives in `assets/site.css`. The small `assets/site.js` handles the mobile menu and contact form only. The original n8n contact endpoint and JSON keys (`name`, `email`, `message`) are preserved. The selected service is included in the message.

## Performance and search

- No Spline, 3D scene, canvas, background animation, or Tailwind browser compiler.
- One self-hosted Manrope Latin variable font; its OFL license is included.
- Static decorative SVG, semantic HTML, native FAQ disclosures, and visible content without JavaScript.
- Unique page titles and descriptions, canonical URLs, Organization/Service structured data, social metadata, sitemap, and robots.txt.
- No analytics or advertising tracking scripts. A Google Ads account is not needed to index the site.

## Validation

Run `node scripts/check.mjs` after rebuilding. It checks internal files and anchors, metadata, structured data, contact number consistency, and page asset budgets.

Preview through a local static HTTP server and check desktop and mobile layouts. Verify the contact form with mocked network responses during QA; do not send test inquiries into the live workflow. Production delivery still depends on the existing n8n workflow accepting submissions and allowing the site origin.

Search Console and live Google Ads conversion tracking are account-level setup tasks outside the static site. Add them only when the actual account settings and consent requirements are known.
