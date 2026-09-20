// @ts-check
import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import Compress from '@playform/compress';
import sitemap from '@astrojs/sitemap';
import { loadEnv } from 'vite';

// .env / .env.development / .env.production - lihat file .env.example.
// loadEnv memberi prioritas ke variabel di shell, lalu file env.
const { ASTRO_SITE } = loadEnv(process.env.NODE_ENV ?? 'development', process.cwd(), '');

// https://astro.build/config
export default defineConfig({
    // Site URL untuk sitemap & canonical. Default = domain produksi;
    // overridden oleh .env (dev -> localhost, prod -> domain).
    site: ASTRO_SITE || 'https://www.krakataumedika.co.id/',
    server: {
        host: true,
    },
    // Workaround crash watcher Vite/chokidar di Windows:
    // event liar di luar root (mis. 'E:\System Volume Information',
    // folder sistem yang Access-Denied) membunuh dev server dengan
    // EINVAL lstat. Abaikan path tersebut secara eksplisit
    // lewat opsi watcher Vite.
    vite: {
        server: {
            watch: {
                ignored: ['**/System Volume Information/**'],
            },
        },
    },
    build: {
        // Critical CSS: inline semua CSS ke <head> tiap halaman -> hilangkan
        // satu request render-blocking (CSS bundle 11 KB satu-satunya).
        inlineStylesheets: 'always',
    },
    prefetch: {
        // Mode selektif: karena ClientRouter otomatis menyalakan prefetchAll,
        // kita matikan di sini (prefetchAll: false) agar HANYA link yang
        // diberi data-astro-prefetch yang di-prefetch (nav utama, hover).
        // 'tap' = strategi default untuk atribut tanpa nilai (tak dipakai).
        prefetchAll: false,
        defaultStrategy: 'tap',
    },
    integrations: [
        icon(),
        Compress({
            HTML: true,
            CSS: true,
            JavaScript: true,
            SVG: true,
            JSON: true,
            Image: true,
        }),
       sitemap({
           // Hreflang alternates antar locale di setiap URL (SEO i18n).
           // defaultLocale = locale tanpa prefix di URL (id).
           i18n: {
               defaultLocale: 'id',
               locales: {
                   id: 'id-ID',
                   en: 'en-US',
               },
           },
           // Halaman noindex (error, demo internal) tidak layak di sitemap.
           filter: (page) =>
               !/(\/404|\/500|\/skeleton-demo)(\/)?$/.test(page),
       }),
    ],
    i18n: {
        // Locale default (id) TIDAK berprefix -> tetap di "/", "/about", dst.
        // Locale kedua (en) berprefix -> "/en", "/en/about", dst.
        defaultLocale: 'id',
        locales: ['id', 'en'],
        routing: {
            prefixDefaultLocale: false,
            redirectToDefaultLocale: false,
        },
    },
});
