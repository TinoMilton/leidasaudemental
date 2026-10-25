const env = import.meta.env;

const read = (value?: string) => value?.trim() || undefined;

export const adsenseClient = read(env.VITE_ADSENSE_CLIENT);

export const adSlots = {
  blogInArticle: read(env.VITE_ADSENSE_SLOT_BLOG_INARTICLE),
  blogFooter: read(env.VITE_ADSENSE_SLOT_BLOG_FOOTER),
  blogList: read(env.VITE_ADSENSE_SLOT_BLOG_LIST),
  home: read(env.VITE_ADSENSE_SLOT_HOME),
} as const;

const SCRIPT_ID = 'adsbygoogle-js';

/** Injects the AdSense script once. No-op when VITE_ADSENSE_CLIENT is not set. */
export function loadAdSense() {
  if (!adsenseClient || document.getElementById(SCRIPT_ID)) return;

  const script = document.createElement('script');
  script.id = SCRIPT_ID;
  script.async = true;
  script.crossOrigin = 'anonymous';
  script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(adsenseClient)}`;
  document.head.appendChild(script);
}
