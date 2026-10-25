/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ADSENSE_CLIENT?: string;
  readonly VITE_ADSENSE_SLOT_BLOG_INARTICLE?: string;
  readonly VITE_ADSENSE_SLOT_BLOG_FOOTER?: string;
  readonly VITE_ADSENSE_SLOT_BLOG_LIST?: string;
  readonly VITE_ADSENSE_SLOT_HOME?: string;
}

interface Window {
  adsbygoogle?: unknown[];
}
