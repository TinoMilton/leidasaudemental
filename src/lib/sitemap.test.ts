import { describe, it, expect } from 'vitest';
import { buildSitemap } from './sitemap';
import { blogPosts } from '../data/blogPosts';

describe('buildSitemap', () => {
  const xml = buildSitemap(blogPosts);

  it('lists the static routes', () => {
    expect(xml).toContain('<loc>https://leidasaudemental.com.br/</loc>');
    expect(xml).toContain('<loc>https://leidasaudemental.com.br/blog</loc>');
    expect(xml).toContain('<loc>https://leidasaudemental.com.br/privacidade</loc>');
  });

  it('lists every post with its updatedAt', () => {
    for (const post of blogPosts) {
      expect(xml).toContain(
        `<loc>https://leidasaudemental.com.br/blog/${post.slug}</loc><lastmod>${post.updatedAt}</lastmod>`,
      );
    }
  });
});
