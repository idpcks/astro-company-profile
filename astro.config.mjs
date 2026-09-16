// @ts-check
import { defineConfig } from 'astro/config';
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
    server: {
        host: true,
    },
    integrations: [icon()],
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
