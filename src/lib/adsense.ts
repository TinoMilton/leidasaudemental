const env = import.meta.env;

export const adsenseClient: string | undefined = env.VITE_ADSENSE_CLIENT || undefined;

export const adSlots = {
  blogInArticle: env.VITE_ADSENSE_SLOT_BLOG_INARTICLE || undefined,
  blogFooter: env.VITE_ADSENSE_SLOT_BLOG_FOOTER || undefined,
  blogList: env.VITE_ADSENSE_SLOT_BLOG_LIST || undefined,
  home: env.VITE_ADSENSE_SLOT_HOME || undefined,
} as const;

const SCRIPT_ID = 'adsbygoogle-js';

/** Injects the AdSense script once. No-op when VITE_ADSENSE_CLIENT is not set. */
export function loadAdSense() {
  if (!adsenseClient || document.getElementById(SCRIPT_ID)) return;

  const script = document.createElement('script');
  script.id = SCRIPT_ID;
  script.async = true;
  script.crossOrigin = 'anonymous';
  script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`;
  document.head.appendChild(script);
}
