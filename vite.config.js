/* const path = require('path')

export default {
  root: path.resolve(__dirname, 'src'),
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
  build: {
    outDir: "../dist",
  },
  server: {
    port: 8080,
    hot: true
  }
} */
/* 
const { resolve } = require('path')

const root = resolve(__dirname, 'src')

export default {
    base: '/restaurant-css-framework/',
    root,
    resolve: {
        alias: {
            '~bootstrap': resolve(__dirname, 'node_modules/bootstrap'),
        }
    },
    build: {
      outDir: '../dist',
      rollupOptions: {
          input: {
              main: resolve(root, 'index.html'),
              menu: resolve(root, 'menu.html'),
              contact: resolve(root, 'contact.html'),
              restaurant: resolve(root, 'restaurant.html'),
              galerie1: resolve(root, 'galerie-1.html'),
              galerie2: resolve(root, 'galerie-2.html'),
              galerie3: resolve(root, 'galerie-3.html')
          },
      },
    },
    server: {
      port: 8080,
      hot: true
    }
}  */

import path from "path";
import { resolve } from "path";
import { defineConfig } from "vite";

/* Vite config */
export default defineConfig({
  base: "/hot-doog/",
  root: path.resolve(__dirname, "src"),
  resolve: {
    alias: {
      "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
    },
  },
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        //main: path.resolve(__dirname, "src/js/main.js"),
        main: path.resolve(__dirname, "src/index.html"),
        menu: path.resolve(__dirname, "src/menu.html"),
        galerie1: path.resolve(__dirname, "src/galerie-1.html"),
        galerie2: path.resolve(__dirname, "src/galerie-2.html"),
        galerie3: path.resolve(__dirname, "src/galerie-3.html"),
        contact: path.resolve(__dirname, "src/contact.html"),
        restaurant: path.resolve(__dirname, "src/restaurant.html"),
      },
    },
    server: {
      port: 8080,
    },
  },
});