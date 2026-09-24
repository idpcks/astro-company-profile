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

/**
 * BASE PATH (subfolder deploy) — pola dari docs Astro: ketika `base`
 * diset di astro.config.mjs, SEMUA URL yang Astro hasilkan otomatis
 * di-prefix, tapi string path yang kita bangun sendiri TIDAK. Karena
 * itu helper di file ini base-aware lewat `basePath` + `stripBase`.
 * Di deploy root / subdomain (base '/'), `basePath` = '' → tak ada
 * perubahan perilaku.
 */
export const basePath = (import.meta.env.BASE_URL ?? '/').replace(/\/+$/, '');

/** Lepas prefix base dari sebuah pathname (defensif — aman dipanggil
 *  meski path tidak berprefix / base kosong). */
export function stripBase(pathname: string): string {
  return basePath && pathname.startsWith(basePath)
    ? pathname.slice(basePath.length) || '/'
    : pathname;
}

/** Ambil locale dari URL. Kalau path tidak berawalan locale → default. */
export function getLangFromUrl(url: URL): Lang {
  const [, maybeLang] = stripBase(url.pathname).split('/');
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

/** Path internal sesuai locale (+ base path). "/about" + "en" → "/en/about". */
export function localePath(path: string, lang: Lang): string {
  // Base sudah kebablasan? Lepas dulu agar tidak ganda (defensif).
  const cleaned = stripBase(path);
  // id = tanpa prefix (lihat astro.config.mjs)
  if (lang === defaultLang) return `${basePath}${cleaned === '/' ? '/' : cleaned}`;
  // Hindari prefix ganda kalau path sudah berprefix (defensif)
  if (cleaned.startsWith(`/${lang}/`) || cleaned === `/${lang}`) return `${basePath}${cleaned}`;
  const normalized = cleaned === '/' ? '' : cleaned;
  return `${basePath}/${lang}${normalized}`;
}

/** Path padanan di locale lain — untuk hreflang & tombol ganti bahasa. */
export function alternatePath(path: string, targetLang: Lang): string {
  const cleaned = stripBase(path);
  const [, maybeLang, ...rest] = cleaned.split('/');
  const isPrefixed = maybeLang in languages;
  const withoutLang = isPrefixed ? `/${rest.join('/')}` : cleaned;
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
