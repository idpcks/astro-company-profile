# PRD — Website RS Krakatau Medika

> Product Requirements Document. Mendefinisikan **apa** yang dibangun dan **mengapa** — bukan *bagaimana* (itu domain `STRUCTURE.md`). Target pembaca: product owner, kontributor, dan siapa pun yang meninjau kelengkapan situs.

**Versi:** 1.0
**Terakhir diperbarui:** 2026-09-23
**Status:** Aktif (dokumentasi kondisi saat ini, bukan rencana belum-terbangun)

---

## 1. Ringkasan Produk

Website korporat **RS Krakatau Medika** — rumah sakit swasta di Cilegon, Banten (Jl. Semang Raya No. 1, Kotabumi). Situs statis (static site) yang menjadi *single point of presence* digital: memberitakan identitas, layanan, klinik satelit, artikel kesehatan, hingga wahana pelaporan pengaduan (WBS).

### Tujuan Produk

1. **Menjawab pertanyaan dasar calon pasien** dalam hitungan detik: layanan apa, jam buka, kontak IGD, cara buat janji.
2. **Membangun kepercayaan** (trust) lewat profil, visi-misi, testimoni, galeri fasilitas, dan artikel kesehatan yang kredibel.
3. **Menyalurkan aksi** (conversion) menjadi panggilan telepon / WhatsApp / kirim pesan kontak.
4. **Menjadi kanal formal** untuk konten wajib institusi: lelang pengadaan, laporan keuangan, karir, kebijakan privasi, dan WBS.

### Target Pengguna (Persona)

| Persona | Kebutuhan utama |
|---|---|
| Calon pasien umum (Cilegon & sekitar) | Jam operasional, daftar layanan, kontak, cara janji temu |
| Peserta Medical Checkup / korporat | Info paket MCU & layanan bisnis, klinik korporat |
| Pasien / keluarga pasien | Lokasi IGD, fasilitas rawat inap, testimoni |
| Pembaca berita kesehatan | Artikel blog yang mudah dipahami |
| Pemangku kepentingan institusi | Pengadaan, laporan keuangan, karir, WBS |
| Pengunjung internasional | Versi bahasa Inggris (`/en/...`) |

### Keluaran (Non-Goals)

- **Bukan** portal pasien online (booking online, rekam medis, payment gateway tidak ada).
- **Bukan** aplikasi dinamis — seluruh konten dirender statis saat build.
- Formulir kontak tersedia, tetapi pengiriman memakai FormSubmit pihak ketiga (tanpa backend sendiri).

---

## 2. Identitas & Data Kunci

Seluruh data mengikuti prinsip **Single Source of Truth (SOT)** di `src/data/` — tidak boleh hardcode ulang di komponen:

| Data | Sumber | Isi penting |
|---|---|---|
| `site.ts` | `SITE` | Nama, tagline, deskripsi per-locale, email, telepon umum & IGD, alamat, jam operasional, koordinat GPS, 6 sosmed, link resmi (jadwal dokter, maps RS + klinik) |
| `nav.ts` | `NAV_ITEMS` | Menu utama (7 level atas, termasuk dropdown "Tentang", "Layanan", "Klinik", "Informasi") |
| `services.ts` | `SERVICES` | 6 layanan unggulan: IGD 24 jam, Poliklinik Spesialis, Rawat Inap, Bedah Sentral, Lab & Radiologi, Medical Checkup |
| `clinics.ts` | `CLINICS` | Klinik satelit Cilegon & Serang (alamat, telepon, jam, flag korporat) |
| `faq.ts` | `FAQ_ITEMS` | 6 Q&A yang juga menggerakkan JSON-LD FAQPage |
| `about.ts` | `ABOUT_DATA` | Visi, misi, 4 nilai korporat (id & en) |
| `testimonials.ts` | `TESTIMONIALS` | 3 testimoni placeholder |

> **Perhatian:** sebagian data masih placeholder (`services.ts`, `clinics.ts`, `testimonials.ts`, galeri, artikel blog) dan berkomentar "ganti dengan data asli". Ini tercatat di Roadmap §9.

---

## 3. Bahasa & Lokalisasi (i18n)

- **Dua locale:** `id` (default, tanpa prefix URL) dan `en` (prefix `/en/`). Konfigurasi di `astro.config.mjs` i18n + sitemap hreflang.
- **Struktur 3 file per halaman:** `pages/x.astro` (wrapper id), `pages/[lang]/x.astro` (wrapper en), `components/pages/XContent.astro` (isi, menerima prop `lang`).
- **Teks UI** → kamus `src/i18n/ui.ts` (key ter-typed oleh `UiKeys`; semua link internal lewat `localePath()`).
- **Blog bilingual:** konvensi file `artikel.md` (id) vs `artikel.en.md` (en), slug disamakan; pairing terjemahan di `src/lib/blog.ts`. Pola fallback: listing EN menampilkan konten id (dengan bendera "fallback") selama terjemahan belum ada; halaman *detail* EN tidak di-generate untuk artikel yang belum diterjemahkan (cegah duplikat konten).
- **SEO i18n:** `<link rel="alternate" hreflang>` untuk id, en, dan x-default; `LangSwitcher` di header menuju padanan halaman aktif.

---

## 4. Peta Halaman

### Publik

| Halaman | URL | Inti konten |
|---|---|---|
| Beranda | `/`, `/en/` | Hero + ikon kepercayaan, 6 layanan, AboutUs, testimoni, CTA |
| Tentang Kami (ringkas) | `/about` | Visi, misi, nilai korporat (ringkasan) |
| Profil | `/profil` | Profil rumah sakit |
| Visi & Misi | `/visi-misi` | Visi, misi, nilai lengkap |
| Semua Layanan | `/services` | Grid 6 layanan unggulan |
| Layanan Bisnis | `/layanan-bisnis` | Layanan MCU/korporat + klinik korporat |
| Klinik | `/klinik` | Klinik satelit Cilegon & Serang (dengan anchor per klinik) |
| Blog (listing) | `/blog`, `/en/blog` | Daftar artikel urutan terbaru (id & en) |
| Detail Artikel | `/blog/<slug>`, `/en/blog/<slug>` | Isi artikel + TOC sidebar, meta, share, artikel terkait |
| FAQ | `/faq`, `/en/faq` | Accordion Q&A + JSON-LD FAQPage |
| KM News | `/km-news` | Berita internal (placeholder) |
| Galeri | `/galeri`, `/en/galeri` | Grid foto + video, lightbox PhotoSwipe |
| Umpan Balik | `/reviews` | Daftar testimoni/review |
| Kontak | `/contact`, `/en/contact` | Info kontak + formulir (FormSubmit + honeypot) |
| Karir | `/karir` | Info lowongan |
| Lelang Pengadaan | `/lelang-pengadaan` | Info tender/pengadaan |
| Laporan Keuangan | `/laporan-keuangan` | Laporan keuangan |
| WBS | `/wbs` | Whistleblowing: alur pengaduan + kontak |

### Dukungan

| Halaman | URL | Keterangan |
|---|---|---|
| 404 | `/404` | Halaman tidak ditemukan |
| 500 | `/500` | Kesalahan internal |
| Kebijakan Privasi | `/privacy` | Legal |
| Syarat & Ketentuan | `/terms` | Legal |
| Demo skeleton | `/skeleton-demo` | **Internal** — di-exclude dari sitemap (`noindex` oleh filter sitemap) |

> Semua halaman publik tersedia dalam id & en. SEO meta (title, description, OG) diatur lewat `BaseLayout`.

---

## 5. Fitur Fungsional

### 5.1 Navigasi & Layout
- **Header** (3 grup: brand / nav / klaster aksi [LangSwitcher, ThemeToggle, hamburger]).
- **Dropdown nav** desktop (`is-open`, hover/focus-within) + **menu off-canvas mobile**.
- **Footer** lengkap: brand, bantuan, layanan, kontak, sosmed, link resmi.

### 5.2 Tema Gelap/Terang
- Toggle tema via token override (`--color-*`), pilihan tersimpan di `localStorage` (`themechoice`), script `is:inline` di `<head>` mencegah FOUC.
- Transisi tema pakai **View Transition API** (`clip-path: circle()`), fallback instan tanpa dukungan.

### 5.3 Blog
- **Content Collections** (Content Layer API Astro 5+) dengan schema zod ter-validasi: title, description, pubDate, updatedDate, author, image, tags.
- Listing per-locale dengan **fallback konten id** bila terjemahan belum ada.
- **Related posts**: dihitung dari overlap tag (ternormalisasi), fallback artikel terbaru.
- Sidebar TOC dari headings artikel; komponen artikel: AuthorCard, PostMeta, ShareButtons (mis. URL copy dengan umpan balik), Banner darurat.
- Hreflang per-artikel hanya untuk terjemahan yang benar-benar ada.

### 5.4 Galeri
- Grid foto (1 utama 2×2 + 5 thumbnail bentuk-L) + list video.
- **Lightbox PhotoSwipe 5** untuk foto & video (dimensi asli dibawa via `data-` attrs).

### 5.5 Formulir Kontak
- Validasi sisi klien (nama, email, pesan, consent).
- Kirim via **FormSubmit AJAX** (inbox: `mail.idpcks@gmail.com`), termasuk **honeypot anti-bot** (`_honey`).
- **Abstraksi `submitContact()`** di `src/lib/form.ts` — parameter & kontrak tidak berubah, implementasi siap diganti ke Astro Actions/API sendiri (lihat roadmap).

### 5.6 FAQ
- Accordion `<details>` (chevron animasi, marker browser disembunyikan).
- **JSON-LD FAQPage** di-render konsisten dengan konten terlihat (kebijakan Google rich results).

### 5.7 SEO & Analitik
- **Sitemap.xml** dengan i18n hreflang; filter membuang 404/500/skeleton-demo.
- **JSON-LD LocalBusiness** (koordinat, kontak, jam) + **JSON-LD FAQPage**.
- Canonical & OG meta per halaman; `robots.txt`.
- **Web Vitals** (LCP/INP/CLS) ter-instrumentasi di mode dev.

### 5.8 Aksesibilitas
- Label `aria-label` & `sr-only` pada ikon/nav, `alt` deskriptif gambar (disengaja untuk a11y), interaksi keyboard (focus-within dropdown, `:focus-visible`).
- Tema gelap menghormati preferensi sistem (fallback tanpa pilihan tersimpan → light).

### 5.9 Kinerja (Non-fungsional kunci)
- Optimasi gambar via `SiteImage`/Astro Image; **Critical CSS inline** (`inlineStylesheets: 'always'`) — satu request render-blocking.
- **Prefetch selektif** (hanya link bertanda `data-astro-prefetch`).
- **Kompresi CI** (`@playform/compress`: HTML/CSS/JS/SVG/JSON/Image).
- View Transition (ClientRouter) untuk navigasi antar halaman.

---

## 6. Arsitektur Perangkat Lunak

| Layer | Teknologi |
|---|---|
| Framework | Astro 7 |
| Bahasa | TypeScript |
| Package manager | Bun |
| Ikon | `astro-icon` + `@iconify-json/lucide` |
| Styling | CSS vanilla + design tokens (`src/styles/tokens.css`, `global.css`) |
| Konten | Content Collections (`src/content.config.ts`) |
| Routing | File-based + dynamic `[lang]`, `[slug]` |
| Integrasi | `@astrojs/sitemap`, `@playform/compress`, PhotoSwipe, web-vitals |

### Elemen arsitektur penting
- **Komposisi halaman:** `pages/` hanya wrapper tipis; isi di `components/pages/*Content.astro`.
- **DRY/SOT:** UI generik di `components/ui/`, data bersama di `src/data/`, satu-satunya jalur query blog di `src/lib/blog.ts`, satu-satunya pengiriman form di `src/lib/form.ts`.
- **Kualitas:** `bun run lint` (ESLint), `bun run astro check` (type-check, 0/0/0), `bun run format:check` (Prettier).

---

## 7. Kriteria Penerimaan (Saat Ini)

Berlaku untuk kontribusi/perubahan kode:

1. `bun run lint` → 0 error, 0 warning.
2. `bun run astro check` → 0 error, 0 warning, 0 hint.
3. Tulisan baru di `src/content/blog/` tervalidasi schema; `artikel.en.md` bila ingin ditampilkan di EN.
4. Semua link internal memakai `localePath()`; semua teks UI lewat kamus `ui.ts`.
5. Tidak ada data yang di-hardcode bila sudah ada di `src/data/*`.
6. Build produksi (`bun run build`) sukses dan sitemap keluar tanpa halaman internal.

---

## 8. Pengukuran Keberhasilan

| Metrik | Alasan |
|---|---|
| Kecepatan muat (LCP ≤ 2.5s, CLS ≤ 0.1) | Situs informasional → bounce tinggi bila lambat |
| Panggilan telepon/WhatsApp dari halaman kontak | Konversi utama (tanpa portal online) |
| Artikel blog dibaca & ter-distribusi | Trust & SEO organik |
| Cakupan terjemahan EN | Semakin banyak halaman EN → makin luas audiens |

---

## 9. Roadmap & Utang yang Diketahui

Prioritas dikerjakan mendatang (bukan fitur hilang):

- [ ] Ganti data placeholder dengan materi resmi:
  - **Layanan** (`services.ts`) — deskripsi & daftar final rumah sakit.
  - **Klinik satelit** (`clinics.ts`) — tambah klinik tersembunyi setelah informasi pasti.
  - **Testimoni** (`testimonials.ts`) — testimoni asli (dengan izin nama).
  - **Galeri** (`GaleriContent.astro`) — foto/video asli menggantikan Picsum.
- [ ] Artikel blog nyata > 2 (id) & terjemahan EN lengkap.
- [ ] Konten placeholder **KM News, Karir, Lelang Pengadaan, Laporan Keuangan, WBS** diisi data institusi.
- [ ] **Formulir kontak**: pindah dari FormSubmit ke implementasi sendiri (Astro Actions / API + adapter) — kontrak `submitContact()` sudah siap tanpa mengubah komponen.
- [ ] Jadwal dokter spesialis live (integrasi eksisting linktree `rskm.ihc.id`).
- [ ] README.md masih template Astro default — perlu ditulis ulang untuk proyek ini.

---

## 10. Referensi

- Dokumentasi struktur & konvensi kode: `docs/STRUCTURE.md`
- Konfigurasi situs: `astro.config.mjs`
- Instruksi env: `.env.example`