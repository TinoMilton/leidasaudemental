# Google AdSense Integration — Design

**Date:** 2026-10-25
**Status:** Approved for planning

## Goal

Monetize the organic traffic (seen in Cloudflare analytics) with Google AdSense, on both the blog and the landing page, without hurting layout stability or the landing page's conversion CTAs.

The user has **no AdSense account yet**. The site must therefore:

1. Be deployable now with ads fully inactive.
2. Meet AdSense review prerequisites (privacy policy, ads.txt, site verification).
3. Turn ads on purely by setting environment variables in Cloudflare Pages — no code change after approval.

## Decisions

| Topic | Decision |
|-------|----------|
| Network | Google AdSense (manual ad units, not Auto ads) |
| Placement | Blog posts, blog list, and landing page (2 slots) |
| Consent | Google's free certified CMP (AdSense › Privacy & messaging) + Consent Mode v2 defaults in code |
| Activation | Env vars; everything renders nothing when unset |

## Configuration

New env vars (documented in `.env.example`):

```
VITE_ADSENSE_CLIENT=            # ca-pub-XXXXXXXXXXXXXXXX
VITE_ADSENSE_SLOT_BLOG_INARTICLE=
VITE_ADSENSE_SLOT_BLOG_FOOTER=
VITE_ADSENSE_SLOT_BLOG_LIST=
VITE_ADSENSE_SLOT_HOME=
```

The landing page's two placements share `VITE_ADSENSE_SLOT_HOME`; both in-article blog placements share `VITE_ADSENSE_SLOT_BLOG_INARTICLE`. AdSense allows reusing a unit ID on one page.

## Components

### 1. `src/lib/adsense.ts` — config + loader

- Exports `adsenseClient` (string | undefined) read from `import.meta.env.VITE_ADSENSE_CLIENT`, and an `adSlots` object mapping placement names to env slot IDs.
- Exports `loadAdSense()`: if `adsenseClient` is set and the script is not already in the document, appends
  `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=<id>" crossorigin="anonymous">` to `<head>`. Idempotent.
- Called once from `src/main.tsx` before rendering.
- No client configured → no network request, no globals touched.

### 2. Site verification meta tag — `vite.config.ts`

A small inline Vite plugin using `transformIndexHtml` injects
`<meta name="google-adsense-account" content="<id>">` into `<head>` when `VITE_ADSENSE_CLIENT` is set at build time (read via `loadEnv`). Nothing injected otherwise. This lets the AdSense crawler verify ownership from static HTML, which is more reliable than the runtime script for an SPA.

### 3. `src/components/AdSlot.tsx`

Props:

```ts
interface AdSlotProps {
  slot?: string;                       // slot ID; component renders null if missing
  format?: 'auto' | 'fluid';           // default 'auto'
  layout?: 'in-article';               // sets data-ad-layout
  className?: string;
}
```

Behavior:

- Returns `null` when `adsenseClient` or `slot` is falsy.
- Renders a wrapper `<aside aria-label="Publicidade">` with a small uppercase "Publicidade" label (`text-xs text-[#9CA3AF]`), then `<ins className="adsbygoogle" style={{display:'block'}} data-ad-client data-ad-slot data-ad-format data-full-width-responsive="true" [data-ad-layout]>`.
- Reserves space to limit CLS: `min-h-[280px]` for `auto`, `min-h-[200px]` for `fluid`.
- On mount, calls `(window.adsbygoogle = window.adsbygoogle || []).push({})` inside `try/catch`, guarded by a `useRef` flag so React StrictMode's double effect does not push twice.
- Route changes unmount/remount the page, so each navigation gets a fresh ad. No manual refresh logic.
- Styling: `my-10`, centered, neutral; no shadows or green fills that would make it look like site content (AdSense policy forbids disguising ads).
- A global type declaration `adsbygoogle?: unknown[]` on `Window` in `src/vite-env.d.ts`.

### 4. Placements

**Blog post (`src/pages/blog/BlogPost.tsx`)**

- `parseContent` currently returns an array of React elements. Add an optional parameter `insertAfterHeadings: number[]`; when an `##` (h2) heading with that ordinal (1-based) is encountered, insert the in-article `<AdSlot>` **immediately before** that heading, i.e. at the end of the previous section. Use `[3, 6]` — ads land after sections 2 and 5.
- Posts with fewer h2 headings simply get fewer (or zero) in-article ads.
- One `<AdSlot slot={adSlots.blogFooter} />` after `</article>` and before the Tags block.

**Blog list (`src/pages/blog/BlogList.tsx`)**

- One `<AdSlot slot={adSlots.blogList} />` rendered as a full-width row (`col-span-full`) after the 3rd post card, only if more than 3 posts are shown.

**Landing page (`src/pages/Index.tsx`)**

- `<AdSlot slot={adSlots.home} />` between `<Pillars />` and `<ComplianceSteps />`.
- `<AdSlot slot={adSlots.home} />` between `<FAQ />` and `<CTASection />`.
- Each wrapped in a `container`-width div with page padding so it aligns with sections.
- No ads in Hero, Statistics, CTASection, Contact, or Footer.

### 5. Privacy policy page — `/privacidade`

- New `src/pages/Privacy.tsx`, using `Navbar` + `Footer` and the existing `prose` styling.
- Portuguese content covering: who operates the site; data collected (GA4 analytics, AdSense/DoubleClick cookies, form data if any); that Google and third-party vendors use cookies to serve ads based on prior visits, with links to `https://policies.google.com/technologies/ads` and `https://adssettings.google.com`; LGPD legal bases and data-subject rights; how to manage consent (CMP / browser settings); contact email; last-updated date.
- Route `/privacidade` added in `App.tsx` above the `*` catch-all.
- Footer: add "Política de Privacidade" link (react-router `Link`) in the bottom bar.

### 6. `public/ads.txt`

```
# Replace pub-0000000000000000 with your AdSense publisher ID after signup.
google.com, pub-0000000000000000, DIRECT, f08c47fec0942fa0
```

Served at `https://leidasaudemental.com.br/ads.txt` by Cloudflare Pages. The publisher ID is not secret; it is committed in plain text once known.

### 7. Consent Mode v2 defaults — `index.html`

Inserted **before** the existing gtag.js snippet:

```js
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied',
  wait_for_update: 500
});
```

The existing snippet's duplicate `dataLayer`/`gtag` definitions are merged so `gtag` is defined once. Google's CMP (enabled later in the AdSense dashboard) shows the banner and issues `gtag('consent','update',…)`. GA4 keeps sending cookieless pings while denied, so analytics continues with modeled data.

**Trade-off accepted:** until the CMP is enabled, GA4 runs in denied mode (reduced measurement fidelity). This is the LGPD-safe default.

## Out of scope

- Custom consent banner UI.
- Auto ads, anchor/vignette formats.
- Ad performance tracking beyond AdSense's own reporting.
- Writing additional blog posts (recommended separately, see below).

## Testing / verification

1. `npm run lint` and `npm run build` pass.
2. With no `VITE_ADSENSE_*` vars: built `dist/index.html` has no `google-adsense-account` meta; dev server shows no `adsbygoogle` script or `<ins>` elements on `/`, `/blog`, `/blog/:slug`.
3. With `VITE_ADSENSE_CLIENT=ca-pub-0000000000000000` and dummy slot IDs: meta tag present in `dist/index.html`; script tag loaded once; `<ins>` elements appear in exactly the placements above; navigating between posts does not throw `adsbygoogle.push() error` in the console (blank ads with a test ID are expected).
4. `/privacidade` renders and is linked from the footer; `/ads.txt` is served.
5. Consent defaults appear before `gtag('config', …)` in `index.html`.

## Post-deploy steps for the site owner

1. Sign up at AdSense with `leidasaudemental.com.br`.
2. Set `VITE_ADSENSE_CLIENT` in Cloudflare Pages env, redeploy; uncomment the record in `public/ads.txt` and set the publisher ID.
3. Request review in AdSense.
4. After approval: create 4 display/in-article ad units, set the `VITE_ADSENSE_SLOT_*` vars, redeploy.
5. Enable the consent message in AdSense › Privacy & messaging (European regulations + US states messages as offered).

## Risk

AdSense frequently rejects small sites for "low-value content". With 3 blog posts, approval may require more original articles first — aim for ~10–15 substantial posts before requesting review.

## As-built deviations (2026-10-25)

Changes made during implementation review; the code is the source of truth.

- **Parser hook:** `parseContent(content, { beforeH2 })` in `src/lib/markdown.tsx` (moved out of BlogPost) instead of an `insertAfterHeadings` array; BlogPost inserts in-article ads before h2 #3 and #6.
- **Env values** are trimmed (`src/lib/adsense.ts` and `vite.config.ts`); the client is URL-encoded in the script src.
- **AdSlot:** `not-prose`, label color `#6B7280` with `aria-hidden` (the `<aside>` carries the accessible name), `data-full-width-responsive` only for `format="auto"`.
- **Blog post route** is keyed by slug (`BlogPostRoute` in `App.tsx`) so ads and page state reset between articles; posts scroll to top on mount.
- **Landing ads** sit in full-bleed `bg-[#F5F7F5]` wrappers matching the preceding sections.
- **ads.txt** ships comment-only until the publisher ID exists.
- **Consent defaults** (owner decision): EEA/UK/CH deny everything until consent (with `wait_for_update: 500`); elsewhere ads are denied until consent and `analytics_storage` is granted. GA4 therefore measures normally outside EEA/UK/CH.
- **Privacy policy** text describes current behavior (forms don't submit data; consent notice "quando exibido").

### Post-deploy note: consent outside Europe
Ad storage is denied by default everywhere, so visitors only get personalized ads after accepting a consent message. In AdSense › Privacy & messaging, check whether a message can target Brazil / other regions; without one, Brazilian traffic is served limited/non-personalized ads (lower RPM). Revisit the defaults in `index.html` if that trade-off isn't acceptable.
