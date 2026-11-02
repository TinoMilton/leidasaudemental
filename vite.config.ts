import { defineConfig, loadEnv, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { blogPosts } from "./src/data/blogPosts";
import { buildSitemap } from "./src/lib/sitemap";

// Adds <meta name="google-adsense-account"> so AdSense can verify the site from static HTML
function adsenseVerification(client?: string): Plugin {
  return {
    name: "adsense-verification",
    transformIndexHtml() {
      if (!client) return [];
      return [
        {
          tag: "meta",
          attrs: { name: "google-adsense-account", content: client },
          injectTo: "head",
        },
      ];
    },
  };
}

// Emits sitemap.xml from the static blog posts on every build
function sitemap(): Plugin {
  return {
    name: "sitemap",
    apply: "build",
    generateBundle() {
      this.emitFile({ type: "asset", fileName: "sitemap.xml", source: buildSitemap(blogPosts) });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");

  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      mode === 'development' &&
      componentTagger(),
      adsenseVerification(env.VITE_ADSENSE_CLIENT?.trim()),
      sitemap(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
