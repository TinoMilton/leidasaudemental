import { useEffect } from 'react';
import { SITE_URL } from '@/lib/sitemap';

interface PageMeta {
  title: string;
  description: string;
  // Route path, e.g. '/blog/o-que-e-nr-1'
  path: string;
  image?: string;
  type?: 'website' | 'article';
}

// Sets an attribute on an existing head element (or creates it) and returns an undo function
function setHeadAttr(selector: string, create: () => HTMLElement, attr: string, value: string) {
  let el = document.head.querySelector<HTMLElement>(selector);
  const created = !el;
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  const previous = el.getAttribute(attr);
  el.setAttribute(attr, value);
  return () => {
    if (created) el!.remove();
    else if (previous !== null) el!.setAttribute(attr, previous);
  };
}

function setMeta(key: 'name' | 'property', id: string, content: string) {
  return setHeadAttr(
    `meta[${key}="${id}"]`,
    () => {
      const meta = document.createElement('meta');
      meta.setAttribute(key, id);
      return meta;
    },
    'content',
    content,
  );
}

// Per-route title, description, canonical and social tags; index.html values are restored on unmount
export function usePageMeta({ title, description, path, image, type = 'website' }: PageMeta) {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;
    const previousTitle = document.title;
    document.title = title;

    const undo = [
      setMeta('name', 'title', title),
      setMeta('name', 'description', description),
      setHeadAttr(
        'link[rel="canonical"]',
        () => {
          const link = document.createElement('link');
          link.rel = 'canonical';
          return link;
        },
        'href',
        url,
      ),
      setMeta('property', 'og:type', type),
      setMeta('property', 'og:url', url),
      setMeta('property', 'og:title', title),
      setMeta('property', 'og:description', description),
      setMeta('property', 'twitter:url', url),
      setMeta('property', 'twitter:title', title),
      setMeta('property', 'twitter:description', description),
      ...(image
        ? [
            setMeta('property', 'og:image', `${SITE_URL}${image}`),
            setMeta('property', 'twitter:image', `${SITE_URL}${image}`),
          ]
        : []),
    ];

    return () => {
      document.title = previousTitle;
      undo.forEach(fn => fn());
    };
  }, [title, description, path, image, type]);
}
