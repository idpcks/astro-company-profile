/**
 * Kontrak tipe bersama (shared contracts).
 *
 * Prinsip: bentuk data didefinisikan SEKALI di sini, lalu dipakai
 * oleh file di src/data/ dan props komponen. Kalau bentuk data
 * berubah, TypeScript langsung menunjukkan semua file yang terdampak.
 */

/** Satu tautan dalam dropdown menu (anak dari NavItem). */
export interface NavLink {
  /** Teks yang tampil, per locale (id/en) */
  label: { id: string; en: string };
  /** Path TANPA prefix locale, dimulai "/" — di-locale-kan oleh localePath() */
  href: string;
}

/** Item menu navigasi — dipakai Header & Footer.
 *  Item BER-children = dropdown (tanpa href); item tanpa children wajib punya href. */
export interface NavItem {
  /** Teks yang tampil, per locale (id/en) */
  label: { id: string; en: string };
  /** Halaman tujuan — wajib untuk item tanpa children */
  href?: string;
  /** Anak menu (dropdown) — opsional */
  children?: NavLink[];
}

/** Satu layanan rumah sakit — dipakai section Services & halaman /services. */
export interface Service {
  /** Nama layanan, per locale */
  title: { id: string; en: string };
  /** Deskripsi singkat 1–2 kalimat untuk kartu, per locale */
  description: { id: string; en: string };
  /**
   * Key ikon (bukan path file), nanti dipetakan ke SVG di komponen.
   * Kenapa string, bukan path? Supaya data tetap bersih — komponen
   * yang menentukan tampilan ikonnya, bukan data.
   */
  icon: string;
}

/** Satu klinik RS di luar lokasi utama (kota berbeda) — dipakai halaman /klinik.
 *  Nama & kota diterjemahkan; telepon tetap (tidak diterjemahkan). */
export interface Clinic {
  /** Identifier slug untuk anchor di halaman /klinik, mis. "klinik-medika-cilegon" */
  slug: string;
  /** Nama klinik, per locale */
  name: { id: string; en: string };
  /** Kota lokasi klinik — dipakai untuk pengelompokan, per locale */
  city: { id: string; en: string };
  /** Alamat lengkap, per locale */
  address: { id: string; en: string };
  /** Nomor telepon klinik */
  phone: string;
  /** Jam operasional klinik, per locale */
  hours: { id: string; en: string };
  /** true = klinik juga melayani layanan korporat (ditandai di UI) */
  corporate: boolean;
}

/** Tautan sosial media — dipakai Footer. Label tidak diterjemahkan. */
export interface SocialLink {
  label: string;
  href: string;
}

/** Satu testimoni pasien — dipakai section Testimonials. */
export interface Testimonial {
  /** Isi kutipan (tanpa tanda kutip), per locale */
  quote: { id: string; en: string };
  /** Nama pasien (nama tidak diterjemahkan) */
  name: string;
  /** Konteks singkat, mis. "Pasien IGD", per locale */
  context: { id: string; en: string };
}
