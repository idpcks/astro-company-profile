import type { NavItem } from '@/types';
import { CLINICS } from '@/data/clinics';

/**
 * Menu navigasi utama — SOT untuk Header & Footer.
 * Label per locale ({ id, en }); href TANPA prefix locale —
 * komponen mem-locale-kan lewat localePath(path, lang).
 * Item dengan `children` = dropdown (mis. Layanan ▾, Informasi ▾).
 * `icon` = nama ikon Lucide untuk item level atas, dipakai lewat
 * <Icon name={`lucide:${item.icon}`} /> di Header/Footer.
 * Urutan array = urutan tampil di layar.
 */
export const NAV_ITEMS: NavItem[] = [
  { label: { id: 'Beranda', en: 'Home' }, href: '/', icon: 'home' },
  {
    label: { id: 'Tentang Kami', en: 'About Us' },
    // href mewakili halaman induk /about (untuk penandaan link aktif);
    // tombol dropdown tetap dirender karena ada `children`.
    href: '/about',
    icon: 'info',
    children: [
      { label: { id: 'Profil', en: 'Profile' }, href: '/profil' },
      { label: { id: 'Visi & Misi', en: 'Vision & Mission' }, href: '/visi-misi' },
    ],
  },
  {
    label: { id: 'Layanan', en: 'Services' },
    icon: 'stethoscope',
    children: [
      { label: { id: 'Semua Layanan', en: 'All Services' }, href: '/services' },
      {
        label: { id: 'Layanan Bisnis', en: 'Business Services' },
        href: '/layanan-bisnis',
      },
      {
        label: { id: 'Umpan Balik', en: 'Feedback' },
        href: '/reviews',
      },
    ],
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
    label: { id: 'Informasi', en: 'Information' },
    icon: 'newspaper',
    children: [
      { label: { id: 'Blog / Artikel', en: 'Blog / Articles' }, href: '/blog' },
      { label: { id: 'FAQ', en: 'FAQ' }, href: '/faq' },
      { label: { id: 'KM News', en: 'KM News' }, href: '/km-news' },
      { label: { id: 'Lelang Pengadaan', en: 'Tender Procurement' }, href: '/lelang-pengadaan' },
      { label: { id: 'Laporan Keuangan', en: 'Financial Reports' }, href: '/laporan-keuangan' },
      { label: { id: 'Karir', en: 'Careers' }, href: '/karir' },
    ],
  },
  { label: { id: 'Galeri', en: 'Gallery' }, href: '/galeri', icon: 'image' },
  { label: { id: 'Kontak', en: 'Contact' }, href: '/contact', icon: 'phone' },
  { label: { id: 'WBS', en: 'WBS' }, href: '/wbs', icon: 'shield-alert' },
];
