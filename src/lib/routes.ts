/**
 * routes.ts — SINGLE SOURCE OF TRUTH untuk path halaman internal.
 *
 * SEMUA path halaman ditulis SEKALI di sini, lalu dipakai oleh
 * nav (src/data/nav.ts), komponen, dan lib lain. Dilarang menulis
 * path literal (`"/about"`) di komponen — selalu via `ROUTES.x`.
 *
 * Catatan penting:
 *  - `ROUTES.x` adalah path TANPA prefix locale & TANPA base path.
 *    Setiap link internal yang menerima `lang` TETAP harus lewat
 *    `localePath(ROUTES.x, lang)` dari src/i18n (yang menambahkan
 *    `/en` dan base). SOT ini menghilangkan string ajaib, bukan
 *    menggantikan localePath.
 *  - `blogPath(slug)` → "/blog/<slug>" untuk halaman detail artikel.
 *  - Path dengan anchor (mis. `/kemitraan#kerjasama`) dibangun dengan
 *    helper `routeWithAnchor`.
 *  - Base path (deploy subfolder) TIDAK ada di sini — urusan i18n.
 */

/** Path statis semua halaman — nama halaman ↔ path URL. */
export const ROUTES = {
  home: '/',
  about: '/about',
  profil: '/profil',
  sejarah: '/sejarah',
  visiMisi: '/visi-misi',
  strukturOrganisasi: '/struktur-organisasi',
  manajemen: '/manajemen',
  tataKelolaPerusahaan: '/tata-kelola-perusahaan',
  wbs: '/wbs',
  penghargaan: '/penghargaan',
  akreditasi: '/akreditasi',
  kemitraan: '/kemitraan',
  laporanKeuangan: '/laporan-keuangan',
  layananBisnis: '/layanan-bisnis',
  services: '/services',
  klinik: '/klinik',
  blog: '/blog',
  kmNews: '/km-news',
  galeri: '/galeri',
  faq: '/faq',
  reviews: '/reviews',
  karir: '/karir',
  contact: '/contact',
  privacy: '/privacy',
  terms: '/terms',
  /** Lebih jelas dibanding string ajaib `'/'` di komponen. */
} as const;

/** Anchor di dalam halaman — dipakai untuk link yang menuju seksi. */
export const ANCHORS = {
  /** Kemitraan & Pengadaan (/kemitraan#…) */
  kemitraanKerjasama: 'kerjasama',
  kemitraanCsr: 'csr',
  kemitraanLelangPengadaan: 'lelang-pengadaan',
} as const;

/** Path halaman detail blog — "/blog/<slug>" (belum termasuk locale). */
export function blogPath(slug: string): string {
  return `${ROUTES.blog}/${slug}`;
}

/**
 * Router untuk path + anchor, mis. routeWithAnchor('/kemitraan', 'csr')
 * → "/kemitraan#csr". Aman bila `anchor` kosong (kembali path polos).
 */
export function routeWithAnchor(path: string, anchor?: string): string {
  return anchor ? `${path}#${anchor}` : path;
}

/** Path ke satu kartu klinik di /klinik — "/klinik#<slug-klinik>". */
export function clinicCardPath(slug: string): string {
  return `${ROUTES.klinik}#${slug}`;
}
