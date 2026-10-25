# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
npm run dev      # Start development server (port 8080)
npm run build    # Production build
npm run lint     # Run ESLint
npm test         # Run Vitest unit tests
npm run preview  # Preview production build
```

## Architecture

This is a marketing/informational website about Lei 14.831/2024 (Saúde Mental no Trabalho) built with React, Vite, TypeScript, and shadcn/ui components.

### Tech Stack
- **Vite** with SWC for fast React compilation
- **React Router** for client-side routing (`/`, `/blog`, `/blog/:slug`)
- **TanStack Query** for server state management (QueryClientProvider)
- **Tailwind CSS** with shadcn/ui component library
- **@tailwindcss/typography** for markdown/prose styling
- **Supabase** for database (future blog backend)
- **Lucide React** for icons
- **Inter** font (Google Fonts)
- **Vitest** for unit tests
- **Google AdSense** (env-gated) with Consent Mode v2 defaults in index.html

### Project Structure
- `src/pages/` - Route-level page components:
  - `Index.tsx` - Landing page with all sections
  - `blog/BlogList.tsx` - Blog listing with search and category filters
  - `blog/BlogPost.tsx` - Individual blog post with markdown parsing, table of contents, sharing
  - `Privacy.tsx` - Privacy policy page
- `src/sections/` - Landing page section components (12 total):
  - `Navbar.tsx` - Fixed navbar with scroll effect and mobile menu
  - `Hero.tsx` - Hero section with badge, features, CTAs
  - `Statistics.tsx` - Count-up statistics bar
  - `AboutLaw.tsx` - About the legislation section
  - `Pillars.tsx` - 3 pillars/requirements cards
  - `ComplianceSteps.tsx` - 5-step compliance timeline
  - `BlogPreview.tsx` - Blog articles preview with newsletter
  - `Benefits.tsx` - Benefits with stats
  - `FAQ.tsx` - Accordion FAQ
  - `CTASection.tsx` - Call to action with dark green gradient
  - `Contact.tsx` - Contact form with info cards
  - `Footer.tsx` - Full footer with links, newsletter, social
- `src/components/ui/` - shadcn/ui primitives (do not modify directly)
- `src/hooks/` - Custom hooks:
  - `useScrollAnimation` - IntersectionObserver-based scroll animations
  - `useScrollProgress` - Page scroll progress tracker
  - `useNavbarScroll` - Navbar transparency on scroll
  - `useCountUp` - Animated count-up numbers
  - `useBlogPosts`, `useBlogPost`, `useBlogContent` - Supabase blog hooks
  - `use-toast`, `use-mobile` - UI utility hooks
- `src/data/blogPosts.ts` - Static blog posts data (3 articles with markdown content)
- `src/types/database.ts` - TypeScript types for Supabase tables
- `src/lib/supabase.ts` - Supabase client configuration
- `src/lib/adsense.ts` - AdSense env config (`VITE_ADSENSE_*`) and script loader; ads are disabled when unset
- `src/lib/markdown.tsx` - Blog markdown parser (`parseContent`, with `beforeH2` hook for in-article ads)
- `src/components/AdSlot.tsx` - Single AdSense unit; renders nothing without client + slot IDs
- `src/lib/utils.ts` - Utility functions including `cn()` for className merging

### Design System
- **Primary color**: Green `#4A7C59` (--green-primary)
- **Dark green**: `#2D4A3A` (--green-dark)
- **Light green**: `#E8F5E9` (--green-light)
- **Accent green**: `#8FBC8F` (--green-accent)
- **No dark mode** - Light theme only
- CSS utility classes: `.btn-primary`, `.btn-secondary`, `.section-label`, `.section-title`, `.gradient-green`, `.gradient-dark-green`
- Scroll animations via IntersectionObserver hooks
- Custom scrollbar and selection colors

### Routes
- `/` - Landing page (all sections)
- `/blog` - Blog listing with search/filter
- `/blog/:slug` - Individual blog post
- `/privacidade` - Privacy policy (required for AdSense / LGPD)
- `*` - Redirects to `/`

### Path Aliases
Use `@/` for imports from `src/` directory (configured in vite.config.ts and tsconfig.json).

### AdSense
Ads are inert until `VITE_ADSENSE_*` env vars are set (see `.env.example`). Activation steps (Cloudflare Pages env vars, `public/ads.txt`, consent message) are in `docs/superpowers/specs/2026-10-25-adsense-design.md` under "Post-deploy steps".
