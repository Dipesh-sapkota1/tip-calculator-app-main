import { defineConfig } from 'vite';
import { resolve } from 'path';

function adjustHtmlPlugin() {
  return {
    name: 'adjust-html',
    transformIndexHtml(html) {
      // Adjust CSS paths and remove crossorigin attribute
      html = html.replace(
        /<link rel="stylesheet"[^>]*href="([^"]*)"(.*?)>/g,
        (match, p1, p2) => {
          const newPath = p1.replace(/^\//, './');
          const newAttrs = p2.replace(/crossorigin=["'][^"']*["']\s*/, '');
          return `<link rel="stylesheet" href="${newPath}"${newAttrs}>`;
        }
      );

      // Adjust script paths and remove crossorigin attribute
      html = html.replace(
        /<script[^>]*src="([^"]*)"(.*?)><\/script>/g,
        (match, p1, p2) => {
          const newPath = p1.replace(/^\//, './');
          const newAttrs = p2.replace(/crossorigin=["'][^"']*["']\s*/, '');
          return `<script type="module" src="${newPath}"${newAttrs}></script>`;
        }
      );

      return html;
    }
  };
}

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html')
      }
    },
    assetsDir: 'assets'
  },
  plugins: [adjustHtmlPlugin()],
  server: {
    open: '/index.html'
  }
});
