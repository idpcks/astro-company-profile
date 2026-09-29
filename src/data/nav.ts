import type { NavItem, NavPlacement } from '@/types';
import { CLINICS } from '@/data/clinics';
import { ROUTES, ANCHORS, routeWithAnchor, clinicCardPath } from '@/lib/routes';

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
  { label: { id: 'Beranda', en: 'Home' }, href: ROUTES.home, icon: 'home' },
  {
    label: { id: 'Tentang Kami', en: 'About Us' },
    href: ROUTES.about,
    icon: 'info',
    children: [
      { label: { id: 'Profil', en: 'Profile' }, href: ROUTES.profil },
      { label: { id: 'Sejarah Perusahaan', en: 'Company History' }, href: ROUTES.sejarah },
      { label: { id: 'Visi & Misi', en: 'Vision & Mission' }, href: ROUTES.visiMisi },
      {
        label: { id: 'Struktur Organisasi', en: 'Organizational Structure' },
        href: ROUTES.strukturOrganisasi,
      },
      { label: { id: 'Manajemen', en: 'Management' }, href: ROUTES.manajemen },
      {
        label: { id: 'Tata Kelola Perusahaan', en: 'Corporate Governance' },
        href: ROUTES.tataKelolaPerusahaan,
      },
      // Di footer, WBS tampil lewat grup "Mitra & Transparansi".
      {
        label: { id: 'Whistleblowing System (WBS)', en: 'Whistleblowing System (WBS)' },
        href: ROUTES.wbs,
        showIn: ['header'],
      },
      { label: { id: 'Penghargaan', en: 'Awards' }, href: ROUTES.penghargaan },
      { label: { id: 'Akreditasi', en: 'Accreditation' }, href: ROUTES.akreditasi },
      // Halaman induk: Kerjasama, CSR, dan Lelang Pengadaan sebagai tab/seksi.
      // Di footer, masing-masing seksi ditautkan langsung lewat grup "Mitra & Transparansi".
      {
        label: { id: 'Kemitraan & Pengadaan', en: 'Partnership & Procurement' },
        href: ROUTES.kemitraan,
        showIn: ['header'],
      },
      { label: { id: 'Laporan Keuangan', en: 'Financial Reports' }, href: ROUTES.laporanKeuangan },
    ],
  },
  {
    // Link langsung ke landing page; Layanan Bisnis menjadi tab/seksi di /services.
    label: { id: 'Layanan', en: 'Services' },
    href: ROUTES.services,
    icon: 'stethoscope',
  },
  {
    label: { id: 'Klinik', en: 'Clinics' },
    // href mewakili halaman induk /klinik (untuk penandaan link aktif);
    // tombol dropdown tetap dirender karena ada `children`.
    href: ROUTES.klinik,
    icon: 'building-2',
    children: CLINICS.map((clinic) => ({
      label: clinic.name,
      // Anchor ke kartu klinik di halaman /klinik.
      href: clinicCardPath(clinic.slug),
    })),
  },
  {
    label: { id: 'Berita & Informasi', en: 'News & Information' },
    icon: 'newspaper',
    children: [
      // Grup media
      { label: { id: 'Blog / Artikel', en: 'Blog / Articles' }, href: ROUTES.blog },
      { label: { id: 'KM News', en: 'KM News' }, href: ROUTES.kmNews },
      { label: { id: 'Galeri', en: 'Gallery' }, href: ROUTES.galeri },
      // Grup bantuan
      { label: { id: 'FAQ', en: 'FAQ' }, href: ROUTES.faq },
      { label: { id: 'Umpan Balik', en: 'Feedback' }, href: ROUTES.reviews },
      // Karir
      { label: { id: 'Karir', en: 'Careers' }, href: ROUTES.karir },
    ],
  },
  { label: { id: 'Kontak', en: 'Contact' }, href: ROUTES.contact, icon: 'phone' },

  // ── Khusus footer ─────────────────────────────────────────────
  {
    label: { id: 'Mitra & Transparansi', en: 'Partners & Transparency' },
    icon: 'handshake',
    showIn: ['footer'],
    children: [
      {
        label: { id: 'Lelang Pengadaan', en: 'Tender Procurement' },
        href: routeWithAnchor(ROUTES.kemitraan, ANCHORS.kemitraanLelangPengadaan),
      },
      {
        label: { id: 'Kerjasama', en: 'Partnership' },
        href: routeWithAnchor(ROUTES.kemitraan, ANCHORS.kemitraanKerjasama),
      },
      {
        label: { id: 'CSR', en: 'CSR' },
        href: routeWithAnchor(ROUTES.kemitraan, ANCHORS.kemitraanCsr),
      },
      { label: { id: 'Layanan Bisnis', en: 'Business Services' }, href: ROUTES.layananBisnis },
      {
        label: { id: 'Whistleblowing System (WBS)', en: 'Whistleblowing System (WBS)' },
        href: ROUTES.wbs,
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
