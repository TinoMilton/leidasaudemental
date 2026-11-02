import type { BlogPost } from '../data/blogPosts';

export const SITE_URL = 'https://leidasaudemental.com.br';

interface SitemapEntry {
  path: string;
  lastmod?: string;
}

// Static routes plus one entry per blog post; lastmod uses the post's updatedAt
export function buildSitemap(posts: BlogPost[]): string {
  const newest = posts.map(p => p.updatedAt).sort().at(-1);
  const entries: SitemapEntry[] = [
    { path: '/', lastmod: newest },
    { path: '/blog', lastmod: newest },
    { path: '/privacidade' },
    ...posts.map(p => ({ path: `/blog/${p.slug}`, lastmod: p.updatedAt })),
  ];

  const urls = entries
    .map(({ path, lastmod }) => {
      const lastmodTag = lastmod ? `<lastmod>${lastmod}</lastmod>` : '';
      return `  <url><loc>${SITE_URL}${path}</loc>${lastmodTag}</url>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}
