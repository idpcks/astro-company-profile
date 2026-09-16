// @ts-check
import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import Compress from '@playform/compress';

// https://astro.build/config
export default defineConfig({
    server: {
        host: true,
    },
    build: {
        // Critical CSS: inline semua CSS ke <head> tiap halaman → hilangkan
        // satu request render-blocking (CSS bundle 11 KB satu-satunya).
        inlineStylesheets: 'always',
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
    ],
    i18n: {
        // Locale default (id) TIDAK berprefix → tetap di "/", "/about", dst.
        // Locale kedua (en) berprefix → "/en", "/en/about", dst.
        defaultLocale: 'id',
        locales: ['id', 'en'],
        routing: {
            prefixDefaultLocale: false,
            redirectToDefaultLocale: false,
        },
    },
});
