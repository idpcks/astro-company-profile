# Struktur Project

Dokumen ini menjelaskan struktur folder, konvensi penamaan, dan aturan penggunaan tiap bagian di project ini. Tujuannya supaya siapa pun (termasuk kamu sendiri 6 bulan lagi) bisa tau harus taruh/cari sesuatu di mana tanpa nebak-nebak.

## Tech Stack

- **Framework:** Astro 7
- **Package manager:** Bun
- **Bahasa:** TypeScript
- **Routing:** File-based routing (bawaan Astro)

## Struktur Folder

```
project-root/
├── public/
│   ├── favicon.svg
│   ├── og-image.jpg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── ui/
│   │   ├── shared/
│   │   ├── sections/
│   │   └── blog/
│   ├── layouts/
│   ├── content/
│   │   └── blog/
│   ├── content.config.ts
│   ├── data/
│   ├── lib/
│   ├── styles/
│   ├── types/
│   ├── pages/
│   │   └── blog/
│   └── assets/
│       └── images/
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Penjelasan Tiap Folder

### `public/`
File statis yang **tidak diproses** Astro — dicopy apa adanya ke hasil build. Isinya: `favicon.svg`, `robots.txt`, gambar untuk social preview (`og-image.jpg`), atau file lain yang butuh URL tetap (misal PDF).

> Bedanya dengan `src/assets/`: gambar di `public/` tidak dioptimasi (tidak di-resize/convert format), sedangkan gambar di `src/assets/` diproses otomatis oleh Astro kalau dipakai lewat komponen `<Image />`.

### `src/components/ui/`
Elemen kecil generik yang dipakai berulang di banyak tempat: `Button.astro`, `Card.astro`, `Badge.astro`, `SectionHeading.astro`. Komponen di sini **tidak boleh** punya konten spesifik (misal teks "Layanan Kami" hardcode di dalam) — semua konten harus lewat props.

**Aturan:** kalau sebuah tombol/kartu dipakai di lebih dari satu tempat, taruh di sini. Kalau cuma dipakai sekali dan sangat spesifik ke satu section, biarkan menyatu di komponen section-nya.

### `src/components/shared/`
Bagian struktural yang muncul di (hampir) semua halaman: `Header.astro`, `Footer.astro`. Dipakai dari dalam `layouts/`, bukan langsung dari `pages/`.

> Sengaja dinamai `shared/`, bukan `layout/`, supaya tidak rancu dengan folder `src/layouts/` (lihat penjelasan di bawah).

### `src/components/sections/`
Blok-blok konten besar yang menyusun satu halaman, biasanya satu section = satu scroll di landing page: `Hero.astro`, `AboutUs.astro`, `Services.astro`, `Testimonials.astro`, `CTASection.astro`.

**Aturan:** satu file = satu section visual. Kalau sebuah section mulai terlalu panjang/kompleks, pecah jadi sub-komponen di dalam folder yang sama (misal `sections/Services/` berisi `Services.astro` + `ServiceCard.astro`).

### `src/components/blog/`
Komponen khusus untuk fitur blog: `PostCard.astro` (preview artikel di halaman listing), `PostMeta.astro` (tanggal, author, tag).

### `src/layouts/`
Wrapper untuk **seluruh halaman** — bukan komponen, tapi kerangka HTML penuh (`<html>`, `<head>`, meta tag SEO) yang membungkus isi tiap page.

| File | Dipakai untuk |
|---|---|
| `BaseLayout.astro` | Semua halaman umum (Beranda, About, Services, Contact) |
| `BlogPostLayout.astro` | Khusus halaman detail artikel blog |

**Bedanya dengan `components/shared/`:** layout itu level "bingkai foto" (satu per halaman), sedangkan `shared/` itu "isi di dalam bingkai" (Header & Footer yang di-import ke dalam layout).

```
pages/index.astro
  └── pakai <BaseLayout>              (dari src/layouts/)
        └── import <Header /> & <Footer />   (dari components/shared/)
```

### `src/content/` + `src/content.config.ts`
Ini "Content Collections" (Content Layer API, Astro 5+) — mengelola konten Markdown dengan validasi struktur data.

**Koleksi blog BILINGUAL** — konvensi file per-locale via akhiran nama:

```
src/content/blog/
├── mengenali-tanda-gula-darah-tinggi.md       → versi Bahasa Indonesia (locale id)
└── mengenali-tanda-gula-darah-tinggi.en.md    → versi English (locale en)
```

- Locale diambil dari akhiran `.en.md` (tanpa akhiran = `id`).
- **Slug URL disamakan antar locale** — nama file `.en.md` HARUS sama persis dengan nama file versi id. URL EN hanya dibedakan prefix `/en/`.
- `generateId` di `content.config.ts` membentuk `entry.id = "{slug}::{locale}"`; penguraian + pairing terjemahan ada di `src/lib/blog.ts`.
- Halaman detail `/en/blog/<slug>` HANYA di-generate bila file `.en.md` benar-benar ada — artikel yang belum diterjemahkan tidak pernah jadi duplikat konten.

**Aturan:** kalau menambah field baru di frontmatter artikel, field itu **harus** ditambahkan juga di schema `content.config.ts`. Kalau tidak, Astro akan error saat build.

### `src/data/`
Data terstruktur yang jarang berubah, ditulis sebagai objek/array TypeScript — bukan konten panjang seperti artikel.

| File | Isinya |
|---|---|
| `site.ts` | Nama brand, tagline, URL, kontak, social media |
| `nav.ts` | Daftar menu navigasi |
| `services.ts` | Daftar layanan perusahaan |

```ts
// src/data/site.ts
export const SITE = {
  name: 'Nama Perusahaan',
  tagline: 'Tagline singkat',
  url: 'https://example.com',
  email: 'hello@example.com',
  phone: '+62 8xx-xxxx-xxxx',
};
```

**Aturan (Single Source of Truth):** kalau sebuah data (nama perusahaan, nomor telepon, daftar menu, dll) dipakai di **lebih dari satu komponen**, data itu **wajib** ditarik ke sini — tidak boleh hardcode ulang di tiap komponen yang memakainya.

### `src/styles/`
- `global.css` — reset CSS, font, style dasar yang berlaku global.
- `tokens.css` — CSS variables (warna, spacing, font-size) yang dipakai konsisten di semua komponen lewat `var(--nama-token)`, termasuk override tema gelap di blok `[data-theme='dark']` (lihat bagian **Tema Gelap/Terang** di bawah).

**Aturan:** komponen tidak boleh hardcode warna/ukuran langsung (`color: #FF5733`). Selalu lewat token (`color: var(--color-primary)`), supaya ganti warna brand cukup edit satu file.

### `src/types/`
Interface/type TypeScript yang dipakai bersama oleh beberapa file, misalnya bentuk data di `data/services.ts` dan komponen `Services.astro` yang mengonsumsinya.

```ts
// src/types/index.ts
export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}
```

### `src/pages/`
Satu-satunya folder yang **wajib** ada di Astro. Nama file = nama route otomatis (file-based routing).

| File | URL |
|---|---|
| `pages/index.astro` | `/` (Beranda) |
| `pages/about.astro` | `/about` |
| `pages/services.astro` | `/services` |
| `pages/contact.astro` | `/contact` |
| `pages/blog/index.astro` | `/blog` (listing artikel, id) |
| `pages/blog/[slug].astro` | `/blog/nama-artikel` (detail artikel id, dinamis) |
| `pages/[lang]/index.astro` … `pages/[lang]/contact.astro` | `/en`, `/en/about`, … (versi EN via `getStaticPaths`) |
| `pages/[lang]/blog.astro` | `/en/blog` (listing EN + fallback konten id) |
| `pages/[lang]/blog/[slug].astro` | `/en/blog/nama-artikel` (hanya slug yang punya `.en.md`) |
| `pages/404.astro` | Halaman 404 (di-serve host untuk URL tidak dikenal) |

**Aturan i18n:** isi halaman ada di `components/pages/*Content.astro` (menerima prop `lang`); file di `pages/` hanya wrapper tipis — root = locale id, `[lang]/` = locale en. Detail lengkap di bagian [Internasionalisasi](#internasionalisasi-i18n-iden).

**Aturan:** file di `pages/` hanya boleh berisi *komposisi* (susunan) komponen dari `sections/`, `layouts/`, dan `data/`. Hindari menulis markup mentah langsung di sini — kalau ada bagian UI yang cukup besar, pecah jadi komponen.

### `src/assets/`
Gambar/media yang mau dioptimasi otomatis oleh Astro (lewat komponen `<Image />`), bukan sekadar dicopy mentah seperti isi `public/`.

## Import Aliases

Dikonfigurasi di `tsconfig.json`:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"],
      "@components/*": ["./src/components/*"],
      "@layouts/*": ["./src/layouts/*"],
      "@data/*": ["./src/data/*"]
    }
  }
}
```

| Alias | Contoh pemakaian |
|---|---|
| `@components/*` | `import Header from '@components/shared/Header.astro'` |
| `@layouts/*` | `import BaseLayout from '@layouts/BaseLayout.astro'` |
| `@data/*` | `import { SITE } from '@data/site'` |
| `@/*` | Fallback untuk folder lain yang belum punya alias spesifik, misal `import type { Service } from '@/types'` |

**Aturan:** selalu pakai alias, jangan pakai relative path berantai (`../../../`). Kalau habis pindah folder file dan import-nya rusak, itu tandanya lupa pakai alias.

> **Catatan teknis:** `baseUrl` sengaja tidak dipakai di `tsconfig.json` karena sudah dideprecate TypeScript (akan dihapus total di TS 7.0). Path di atas ditulis eksplisit relatif ke lokasi `tsconfig.json` (`"./src/*"`), jadi tidak butuh `baseUrl` sama sekali.

## Prinsip DRY & SOT

- **DRY (Don't Repeat Yourself):** kalau ada UI/markup yang sama muncul di 2+ tempat, jadikan komponen di `components/ui/` atau `components/shared/`.
- **SOT (Single Source of Truth):** kalau ada data yang sama dipakai di 2+ tempat (nama perusahaan, daftar menu, daftar layanan), taruh di `data/` — jangan ditulis ulang manual.

Aturan cepat: **"dipakai lebih dari sekali → tarik keluar, jangan copy-paste."**

## Panduan Cepat

**Menambah halaman baru (misal "/portfolio")**
1. Buat `src/pages/portfolio.astro`
2. Bungkus dengan `<BaseLayout title="..." description="...">`
3. Susun dari komponen di `components/sections/`, tambahkan section baru kalau perlu

**Menambah artikel blog baru**
1. Buat file `.md` baru di `src/content/blog/`
2. Isi frontmatter sesuai schema di `content.config.ts` (title, description, pubDate, dll)
3. Tulis isi artikel dalam Markdown di bawah frontmatter — otomatis muncul di `/blog` dan punya halaman sendiri di `/blog/nama-file`

**Menambah komponen UI baru**
1. Kalau generik dan bisa dipakai di banyak tempat → `components/ui/`
2. Kalau khusus untuk satu section tertentu → boleh jadi sub-komponen di dalam folder section itu

**Mengubah data perusahaan (nomor telepon, alamat, dll)**
1. Edit langsung di `src/data/site.ts`
2. Tidak perlu cari-cari ke komponen lain — semua yang import dari sana otomatis ikut update

## Tema Gelap/Terang (Dark Mode)

Situs ini mendukung dua tema. Mekanismenya **token override**, bukan CSS per-komponen:

- Nilai warna terang = default di `:root`; nilai gelap = blok `:root[data-theme='dark']` di `src/styles/tokens.css`.
- Tema aktif = atribut `data-theme="light|dark"` di `<html>`, dipasang oleh script inline di `<head>` (BaseLayout) **sebelum paint pertama** supaya tidak ada kedipan putih saat reload (FOUC). Pilihan user disimpan di `localStorage`, key `themechoice`.
- Tombol pengganti tema: `components/ui/ThemeToggle.astro` (dipasang di Header). Perpindahan ikon sun/moon murni lewat CSS (`[data-theme='dark']`), tanpa JS tambahan.

**Aturan menulis warna:**

1. Komponen **tidak boleh** hardcode warna yang bergantung tema. Selalu lewat token: `var(--color-...)`.
2. Bedakan token **background** dan token **teks** — inilah kunci kontras di dua tema:
   - `--color-primary` → background/gradient aksen (aman dipakai di dua tema, teks di atasnya selalu putih).
   - `--color-primary-text` → warna teks/ikon aksen **di atas background halaman** (di tema gelap bernilai teal terang, bukan teal-700).
   - `--color-emergency` (background) vs `--color-emergency-text` (teks) — pola sama.
3. Token permukaan: `--color-background` (halaman), `--color-surface` (kartu/header bar), `--color-surface-alt` (section selang-seling), `--color-surface-inverse` (permukaan yang **selalu gelap di dua tema**: footer, blok kode).
4. Menambah token warna baru → **wajib** diisi di blok `:root` DAN blok `[data-theme='dark']` sekaligus. Kalau salah satu ketinggalan, tema gelap akan pakai nilai light tanpa peringatan.
5. Pengecualian yang disengaja: teks putih (`#ffffff`) di atas gradient `primary-dark → primary` boleh hardcode, karena permukaan gradient itu sama di dua tema (CTA band, panel stats).

## Header: Struktur & Aturan Jarak

Header disusun dari **tiga grup fungsional** — bukan tiga elemen bebas:

```text
[Brand] ····· [Nav: link menu] ····· [EN] [🌙] [☰]
 kiri          margin-left: auto → ke kanan          klaster aksi
```

- **`.header__inner`** — flex, `align-items: center`, gap `--space-4`, `min-height: 4rem`.
- **`.site-nav`** — diberi `margin-left: auto` supaya nav + klaster aksi menempel kanan; brand tetap kiri.
- **`.header__actions`** — klaster kanan berisi ThemeToggle + hamburger mobile. **Jangan** menaruh keduanya langsung sebagai anak `.header__inner`: di mobile, `space-between` akan mendorong hamburger ke tengah header (bug yang sudah pernah terjadi).

**Aturan jarak (prinsip proximity — item dalam grup lebih rapat daripada antar grup):**

| Relasi | Jarak |
|---|---|
| Antar item dalam satu grup (link nav, dalam klaster aksi) | `--space-3` – `--space-6` |
| Antar grup fungsional (nav → CTA, CTA → klaster aksi) | `2rem` (konsisten) |

Kalau menambah aksi baru di header (mis. pemilih bahasa), masukkan ke klaster yang tepat — jangan menjadi anak keempat `.header__inner`.

**Perilaku mobile:** nav berubah jadi dropdown (`.site-nav.is-open`), klaster aksi tetap terlihat di kanan. Hamburger men-toggle `aria-expanded` + class `.is-open` via `<script>` di Header.astro; teks "Buka menu navigasi" memakai `.sr-only` (tersembunyi visual, terbaca screen reader).

## Internasionalisasi (i18n: id/en)

**URL strategy** (`astro.config.mjs`, `prefixDefaultLocale: false`):

| Locale | Pola URL | Contoh |
|---|---|---|
| `id` (default) | tanpa prefix | `/`, `/about`, `/blog` |
| `en` | prefix `/en/` | `/en/`, `/en/about`, `/en/blog` |

**Struktur `src/i18n/`:**

| File | Isi |
|---|---|
| `ui.ts` | Kamus teks UI — key flat `"domain.nama"`, object `id` & `en`. Type `UiKeys` di-generate dari object `id`. |
| `index.ts` | Fungsi inti: `tFactory(lang)` → `t()`, `getLangFromUrl()`, `localePath()`, `alternatePath()`, `localized()` + re-export `ui`, `Lang`, `UiKeys`. |
| `utils.ts` | Shim kompatibilitas dengan recipe docs Astro (`useTranslations(lang)`). Implementasi tetap di `index.ts`. |

**Aturan menulis teks (wajib):**

1. **Teks UI statis** → key di `ui.ts`, WAJIB diisi di kedua locale. `t()` mem-fallback ke `id` kalau key `en` kurang, tapi jangan andalkan itu — TypeScript menandai key tak-dikenal lewat type `UiKeys`.
2. **Semua link internal** di komponen yang menerima `lang` wajib lewat `localePath('/about', lang)` — dilarang hardcode `href="/..."`. Pelanggaran paling umum: link di `sections/` lupa prefix `/en`.
3. **Teks data-driven** (layanan, testimoni, jam buka) → field bertipe `{ id: T; en: T }` di `src/data/*.ts`, dipilih komponen via `localized(value, lang)`. Data tanpa dimensi bahasa (alamat, telepon, sosmed) tetap langsung dari data file.
4. **Blog bilingual**: artikel boleh punya versi EN — simpan sebagai file kembar `nama-artikel.en.md` di `content/blog/` (slug = nama file, sama persis dengan versi id). Semua query blog lewat `src/lib/blog.ts` (`getPostsForListing`, `getPostBySlug`, `getAllSlugs`) — dilarang `getCollection('blog')` langsung di halaman. Artikel yang belum diterjemahkan: listing `/en/blog` menampilkan konten id (fallback, tanpa duplikat URL), detail `/en/blog/<slug>` tidak di-generate, dan `LangSwitcher` di halaman id jatuh ke listing `/en/blog`. Layout artikel menampilkan link "juga tersedia dalam …" sesuai `availableLocales`, dan hreflang per-artikel hanya menunjuk terjemahan yang benar-benar ada.

**Struktur halaman (pola "content component + wrapper"):**

Isi halaman diekstrak ke `src/components/pages/*Content.astro` (menerima prop `lang`, menerjemahkan dirinya sendiri). File di `src/pages/` hanya wrapper tipis:

- `pages/index.astro`, `pages/about.astro`, … → locale `id` (hardcode `lang="id"`).
- `pages/[lang]/index.astro`, `pages/[lang]/about.astro`, … → locale `en` via `getStaticPaths` yang menghasilkan `/en/…`.

**Menambah halaman baru = 3 file:** `components/pages/XContent.astro` (isi), `pages/x.astro` (wrapper id), `pages/[lang]/x.astro` (wrapper en) + key judul/deskripsi di `ui.ts`.

**SEO:** `BaseLayout` menerima `lang` + `alternatePath` dan merender `<link rel="alternate" hreflang>` untuk `id`, `en`, dan `x-default` di `<head>`. `<html lang>` ikut locale aktif. `LangSwitcher.astro` (di Header, klaster aksi) menautkan ke padanan halaman aktif di locale lain — membaca `Astro.url.pathname` sendiri, tanpa props.
