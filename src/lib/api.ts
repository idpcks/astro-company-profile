/**
 * api.ts — SATU-SATUNYA tempat yang tahu alamat backend & cara memanggilnya (SOT).
 *
 * Aturan pemakaian:
 *  - String endpoint HANYA boleh ditulis sekali, di `API_ENDPOINTS`. Komponen,
 *    halaman, dan fasad lain dilarang menulis URL endpoint sendiri.
 *  - `fetch()` HANYA boleh dipakai di dalam `apiFetch()`. Semua request lewat
 *    wrapper ini supaya header, timeout, dan error handling seragam.
 *  - Pemakai hari ini: src/lib/form.ts (kirim pesan kontak). Nantinya
 *    src/services/content.ts (getter konten) ikut lewat sini.
 *
 * Catatan URL & cara deploy (subdomain + base path):
 *  - DILARANG mem-prefix URL API dengan `basePath` / `ASTRO_BASE` — base path
 *    itu milik FRONTEND (aset & route dalam halaman), bukan milik backend.
 *    Path berawalan `/` selalu di-resolve ke root origin, jadi frontend
 *    `sub.example.com/rs/` tetap memanggil `sub.example.com/api/v1/...`.
 *  - Client-side (form): path relatif cukup — browser menyelesaikannya ke
 *    origin halaman.
 *  - Build-time (blog loader di Node): `fetch()` relatif TIDAK berfungsi di
 *    Node — wajib absolute via `resolveApiUrl()` + env `PUBLIC_API_URL`.
 *  - Backend di domain/subdomain terpisah → set `PUBLIC_API_URL` (absolute).
 */

/** Versi API internal — naikkan saat ada breaking change. */
const API_VERSION = 'v1';
/** Path dasar API, relatif ke origin subdomain (TANPA base path frontend). */
const API_PATH = `/api/${API_VERSION}`;

/** Batas waktu satu request — mencegah hang saat backend lambat/jatuh. */
const API_TIMEOUT_MS = 10_000;

/**
 * SOT path endpoint (logis). NAMA tetap, URL boleh berubah.
 *
 * `contact`: kirim pesan kontak via FormSubmit (AJAX). Perlu aktivasi: pada
 * kiriman pertama FormSubmit mengirim email konfirmasi ke alamat di dalam URL
 * ini — klik tautannya sekali agar aktif. Ganti ke provider/API sendiri nanti
 * cukup dengan mengubah URL di baris ini.
 */
export const API_ENDPOINTS = {
  contact: `https://formsubmit.co/ajax/mail.idpcks@gmail.com`,
  /**
   * Daftar artikel blog (cadangan loader src/loaders/blog.ts). Berjalan pada
   * BUILD TIME (Node) → wajib absolute via `resolveApiUrl()` + `PUBLIC_API_URL`.
   */
  posts: `${API_PATH}/posts`,
} as const;

/**
 * Resolve path endpoint → URL siap fetch.
 *
 * - Tanpa `PUBLIC_API_URL`: mengembalikan path relatif (aman untuk client-side;
 *   browser menyelesaikan ke origin, base path frontend tidak ikut).
 * - Dengan `PUBLIC_API_URL`: mengembalikan URL absolute — WAJIB untuk fetch
 *   build-time di Node (blog loader) dan untuk backend di domain/subdomain
 *   terpisah.
 *
 * @param path Ambil dari `API_ENDPOINTS`, jangan tulis sendiri.
 */
export function resolveApiUrl(path: string): string {
  const base = import.meta.env.PUBLIC_API_URL;
  return base ? `${base.replace(/\/+$/, '')}${path}` : path;
}

/**
 * KONTRAK WIRE (JSON) — bahasa-agnostik. Backend bahasa apa pun tinggal
 * mengikuti bentuk JSON di bawah, TANPA dependensi ke kode frontend.
 *
 * GET {API_PATH}/posts → 200
 * {
 *   "data": [
 *     {
 *       "slug": "artikel",
 *       "locale": "id",                         // "id" | "en"
 *       "title": "Judul",
 *       "description": "Ringkasan",
 *       "pubDate": "2026-01-01T00:00:00.000Z",  // ISO-8601
 *       "updatedDate": "2026-02-01T00:00:00.000Z", // opsional
 *       "author": "Admin",                      // opsional, default "Admin"
 *       "image": "/img/artikel.webp",           // opsional
 *       "tags": ["ragi", "gula"],               // opsional, default []
 *       "content": "# Markdown ..."             // isi artikel (raw)
 *     }
 *   ]
 * }
 *
 * Yang WAJIB dipertahankan saat loader mengonsumsinya: id koleksi
 * `{slug}::{locale}` dan field `rendered` (hasil renderMarkdown) —
 * dua-duanya urusan src/loaders/blog.ts, bukan backend.
 */
export interface ApiPost {
  slug: string;
  locale: 'id' | 'en';
  title: string;
  description: string;
  pubDate: string;
  updatedDate?: string;
  author?: string;
  image?: string;
  tags?: string[];
  content: string;
}

export interface ApiPostsResponse {
  data: ApiPost[];
}

/** Kesalahan satu-satunya yang dilempar `apiFetch` — kode status + pesan. */
export class ApiError extends Error {
  constructor(
    /** Kode HTTP bila server menjawab; undefined bila jaringan/timeout. */
    readonly status: number | undefined,
    message: string
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

/**
 * Fetch dengan konsistensi: header JSON, timeout, error handling.
 *
 * @param endpoint Endpoint penuh — ambil dari `API_ENDPOINTS`, jangan tulis sendiri.
 * @param init      RequestInit standar (method, body, dst).
 * @returns Parsing JSON bertipe T (null bila body tidak JSON / kosong).
 * @throws ApiError dengan `status` HTTP, atau `status=undefined` untuk
 *         gagal koneksi / timeout.
 */
export async function apiFetch<T>(
  endpoint: string,
  init?: Parameters<typeof fetch>[1]
): Promise<T> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), API_TIMEOUT_MS);
  try {
    const res = await fetch(endpoint, {
      ...init,
      signal: controller.signal,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        ...init?.headers,
      },
    });

    if (!res.ok) {
      throw new ApiError(res.status, `Request gagal: ${res.status} ${res.statusText}`);
    }

    // Body non-JSON yang sah (mis. 204) bukan error — serahkan ke caller.
    const json = (await res.json().catch(() => null)) as T | null;
    return json as T;
  } catch (error) {
    if (error instanceof ApiError) throw error;
    if (controller.signal.aborted) {
      throw new ApiError(undefined, `Request timeout (>${API_TIMEOUT_MS} ms)`);
    }
    throw new ApiError(undefined, 'Gagal terhubung ke server');
  } finally {
    clearTimeout(timer);
  }
}
