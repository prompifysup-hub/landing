# Prompify landing page template

A one-page site assembled from Tailark "Dusk" sections (https://github.com/tailark/blocks, MIT,
see `LICENSE.md`), moved from Next.js to Vite.

Sections (in `src/sections`, order in `src/App.tsx`): hero and header from Dusk landing page 8,
logo cloud, photo feature cards (page 8), intro content (page 2), map / uptime / chart section
(page 7), stats, pricing, testimonials (page 8), FAQs, call to action and footer (page 2).

Section code is Tailark's, unchanged apart from import paths. `src/components/link.tsx` and
`image.tsx` replace Next.js `<Link>` and `<Image>`. Type annotations Tailark's registry had stripped
were restored in `components/ui/accordion.tsx`, `chart.tsx` and the logo components.

`src/lib/leads.ts` saves visitor details to Prompify's `leads` table.

The preview of all 10 Dusk landing pages is kept in `../_sources/tailark-dusk-preview`.

Run locally: `npm install && npm run dev`.
