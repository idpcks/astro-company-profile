import type { NavItem, NavPlacement } from '@/types';
import { CLINICS } from '@/data/clinics';

/**
 * Menu navigasi utama — SOT untuk Header & Footer.
 * Label per locale ({ id, en }); href TANPA prefix locale —
 * komponen mem-locale-kan lewat localePath(path, lang).
 * Item dengan `children` = dropdown (mis. Klinik ▾, Berita & Informasi ▾).
 * `icon` = nama ikon Lucide untuk item level atas, dipakai lewat
 * <Icon name={`lucide:${item.icon}`} /> di Header/Footer.
 * `showIn` = batasi tampil di 'header' dan/atau 'footer' (default: keduanya).
 * Urutan array = urutan tampil di layar.
 * Gunakan getNavItems('header' | 'footer'), jangan membaca NAV_ITEMS langsung.
 */
export const NAV_ITEMS: NavItem[] = [
  { label: { id: 'Beranda', en: 'Home' }, href: '/', icon: 'home' },
  {
    label: { id: 'Tentang Kami', en: 'About Us' },
    href: '/about',
    icon: 'info',
    children: [
      { label: { id: 'Profil', en: 'Profile' }, href: '/profil' },
      { label: { id: 'Sejarah Perusahaan', en: 'Company History' }, href: '/sejarah' },
      { label: { id: 'Visi & Misi', en: 'Vision & Mission' }, href: '/visi-misi' },
      {
        label: { id: 'Struktur Organisasi', en: 'Organizational Structure' },
        href: '/struktur-organisasi',
      },
      { label: { id: 'Manajemen', en: 'Management' }, href: '/manajemen' },
      {
        label: { id: 'Tata Kelola Perusahaan', en: 'Corporate Governance' },
        href: '/tata-kelola-perusahaan',
      },
      // Di footer, WBS tampil lewat grup "Mitra & Transparansi".
      {
        label: { id: 'Whistleblowing System (WBS)', en: 'Whistleblowing System (WBS)' },
        href: '/wbs',
        showIn: ['header'],
      },
      { label: { id: 'Penghargaan', en: 'Awards' }, href: '/penghargaan' },
      { label: { id: 'Akreditasi', en: 'Accreditation' }, href: '/akreditasi' },
      // Halaman induk: Kerjasama, CSR, dan Lelang Pengadaan sebagai tab/seksi.
      // Di footer, masing-masing seksi ditautkan langsung lewat grup "Mitra & Transparansi".
      {
        label: { id: 'Kemitraan & Pengadaan', en: 'Partnership & Procurement' },
        href: '/kemitraan',
        showIn: ['header'],
      },
      { label: { id: 'Laporan Keuangan', en: 'Financial Reports' }, href: '/laporan-keuangan' },
    ],
  },
  {
    // Link langsung ke landing page; Layanan Bisnis menjadi tab/seksi di /services.
    label: { id: 'Layanan', en: 'Services' },
    href: '/services',
    icon: 'stethoscope',
  },
  {
    label: { id: 'Klinik', en: 'Clinics' },
    // href mewakili halaman induk /klinik (untuk penandaan link aktif);
    // tombol dropdown tetap dirender karena ada `children`.
    href: '/klinik',
    icon: 'building-2',
    children: CLINICS.map((clinic) => ({
      label: clinic.name,
      // Anchor ke kartu klinik di halaman /klinik.
      href: `/klinik#${clinic.slug}`,
    })),
  },
  {
    label: { id: 'Berita & Informasi', en: 'News & Information' },
    icon: 'newspaper',
    children: [
      // Grup media
      { label: { id: 'Blog / Artikel', en: 'Blog / Articles' }, href: '/blog' },
      { label: { id: 'KM News', en: 'KM News' }, href: '/km-news' },
      { label: { id: 'Galeri', en: 'Gallery' }, href: '/galeri' },
      // Grup bantuan
      { label: { id: 'FAQ', en: 'FAQ' }, href: '/faq' },
      { label: { id: 'Umpan Balik', en: 'Feedback' }, href: '/reviews' },
      // Karir
      { label: { id: 'Karir', en: 'Careers' }, href: '/karir' },
    ],
  },
  { label: { id: 'Kontak', en: 'Contact' }, href: '/contact', icon: 'phone' },

  // ── Khusus footer ─────────────────────────────────────────────
  {
    label: { id: 'Mitra & Transparansi', en: 'Partners & Transparency' },
    icon: 'handshake',
    showIn: ['footer'],
    children: [
      {
        label: { id: 'Lelang Pengadaan', en: 'Tender Procurement' },
        href: '/kemitraan#lelang-pengadaan',
      },
      { label: { id: 'Kerjasama', en: 'Partnership' }, href: '/kemitraan#kerjasama' },
      { label: { id: 'CSR', en: 'CSR' }, href: '/kemitraan#csr' },
      { label: { id: 'Layanan Bisnis', en: 'Business Services' }, href: '/layanan-bisnis' },
      {
        label: { id: 'Whistleblowing System (WBS)', en: 'Whistleblowing System (WBS)' },
        href: '/wbs',
      },
    ],
  },
];

/** Ambil item sesuai tempat tampil (rekursif ke children). */
export function getNavItems(placement: NavPlacement, items: NavItem[] = NAV_ITEMS): NavItem[] {
  return items
    .filter((item) => !item.showIn || item.showIn.includes(placement))
    .map((item) =>
      item.children ? { ...item, children: getNavItems(placement, item.children) } : item
    );
}
