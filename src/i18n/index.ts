/**
 * Modul inti i18n — pola resmi dari docs Astro (advanced recipe),
 * diperluas untuk project ini.
 *
 * KONSEP:
 *  - `ui`  : kamus teks UI per locale. Key flat "titik.nama" —
 *            mudah dicari (grep) dan tidak bertingkat.
 *  - `t()` : terjemahan dengan fallback — kalau key belum ada di `en`,
 *            jatuh ke `id` supaya halaman tidak pernah kosong.
 *  - `localePath()` : membangun path sesuai locale
 *            (id → "/about", en → "/en/about"). SEMUA link internal
 *            WAJIB lewat sini, jangan href "/..." mentah di komponen
 *            yang menerima `lang`.
 *  - `alternatePath()` : path padanan di locale lain untuk
 *            <link rel="alternate" hreflang> di BaseLayout (SEO).
 */
import { ui as dictionary, type UiKeys } from './ui';

/** Re-export kamus & tipenya agar konsumen cukup impor dari `index`. */
export { dictionary as ui };
export type { UiKeys };

export const languages = {
  id: 'Bahasa Indonesia',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'id';

/** Ambil locale dari URL. Kalau path tidak berawalan locale → default. */
export function getLangFromUrl(url: URL): Lang {
  const [, maybeLang] = url.pathname.split('/');
  if (maybeLang in languages) return maybeLang as Lang;
  return defaultLang;
}

/** Fungsi terjemahan untuk satu halaman — dipanggil sekali di frontmatter. */
export function tFactory(lang: Lang) {
  return function t(key: UiKeys): string {
    const translations = dictionary[lang];
    // Fallback ke defaultLang supaya key yang belum diterjemahkan
    // tidak pernah merender "undefined".
    return translations[key] ?? dictionary[defaultLang][key] ?? key;
  };
}

/** Path internal sesuai locale. "/about" + "en" → "/en/about". */
export function localePath(path: string, lang: Lang): string {
  // id = tanpa prefix (lihat astro.config.mjs)
  if (lang === defaultLang) return path;
  // Hindari prefix ganda kalau path sudah berprefix (defensif)
  if (path.startsWith(`/${lang}/`) || path === `/${lang}`) return path;
  const normalized = path === '/' ? '' : path;
  return `/${lang}${normalized}`;
}

/** Path padanan di locale lain — untuk hreflang & tombol ganti bahasa. */
export function alternatePath(path: string, targetLang: Lang): string {
  const [, maybeLang, ...rest] = path.split('/');
  const isPrefixed = maybeLang in languages;
  const withoutLang = isPrefixed ? `/${rest.join('/')}` : path;
  // Root home direpresentasikan "/" (bukan "") supaya localePath
  // untuk defaultLang (id, tanpa prefix) menghasilkan "/"—bukan kosong.
  return localePath(withoutLang === '/' ? '/' : withoutLang, targetLang);
}

/**
 * Teks data-driven per locale (layanan, testimoni, dll).
 * Pola: `{ id: T, en: T }` — dipilih di komponen via helper ini.
 * Data TANPA locale (kontak, sosmed) tetap langsung dari file data.
 */
export function localized<T>(value: { id: T; en: T }, lang: Lang): T {
  return value[lang];
}
