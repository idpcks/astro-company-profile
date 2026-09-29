/**
 * blog.ts — loader koleksi `blog` (Content Layer API). SUMBER artikel.
 *
 * SEKARANG: membaca file Markdown lokal via `glob()` — perilaku SAMA seperti
 * sebelum dibungkus. Pola, base, dan `generateId` dipindah dari
 * src/content.config.ts ke sini supaya content.config.ts cukup memasang
 * `loader: blogLoader()` dan bermigrasi tanpa menyentuh yang lain.
 *
 * NANTI (backend sudah ada): ganti isi blogLoader() dengan custom loader
 * yang mengambil `apiFetch(resolveApiUrl(API_ENDPOINTS.posts))` dari
 * src/lib/api.ts (build time = Node, jadi wajib absolute via PUBLIC_API_URL), lalu:
 *   - entry.id dibentuk `{slug}::{locale}` — FORMAT WAJIB sama persis, karena
 *     `parseEntryId` di src/lib/blog.ts dan fallback bilingual bergantung padanya;
 *   - isi artikel dirender lewat `context.renderMarkdown(content)` agar
 *     `<Content />` / `entry.rendered.html` di halaman detail tetap bekerja;
 *   - koleksi, halaman, dan src/lib/blog.ts TIDAK perlu disentuh.
 */
import { glob, type Loader } from 'astro/loaders';

/** Loader koleksi blog — sumber lokal hari ini, siap di-swap ke API. */
export function blogLoader(): Loader {
  return glob({
    pattern: ['*.md', '*.en.md'],
    base: './src/content/blog',
    generateId: ({ entry }) => {
      // Path relatif dari base (mis. "artikel.en.md").
      const fileName = String(entry).split('/').pop() ?? '';
      const isEn = /\.en\.md$/.test(fileName);
      const locale = isEn ? 'en' : 'id';
      const baseSlug = fileName.replace(/\.en\.md$|\.md$/, '');
      return `${baseSlug}::${locale}`;
    },
  });
}
