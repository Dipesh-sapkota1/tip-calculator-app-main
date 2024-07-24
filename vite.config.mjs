import { defineConfig } from 'vite';
import { resolve } from 'path';

function adjustHtmlPlugin() {
  return {
    name: 'adjust-html',
    transformIndexHtml(html) {
      return html.replace(
        /<link rel="stylesheet"[^>]*href="([^"]*)"[^>]*>/g,
        (match, p1) => {
          const newPath = p1.replace(/^\//, './');
          return `<link rel="stylesheet" href="${newPath}">`;
        }
      );
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