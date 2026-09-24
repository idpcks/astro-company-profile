import type { FaqItem } from '@/types';
import { SITE } from '@/data/site';

/** Nama brand — interpolasi dari SITE supaya rename cukup di satu tempat. */
const brand = SITE.name;

/**
 * Item FAQ — Single Source of Truth.
 *
 * Dipakai untuk RENDER halaman /faq (id) & /en/faq (en) sekaligus
 * membangun JSON-LD FAQPage di src/pages/faq.astro dan
 * src/pages/[lang]/faq.astro. Schema WAJIB memakai teks yang sama
 * dengan konten terlihat (kebijakan Google) — itulah alasan SOT ini.
 * Ganti nilai placeholder dengan data RS yang sebenarnya.
 */
export const FAQ_ITEMS: FaqItem[] = [
  {
    question: {
      id: `Apa saja layanan yang tersedia di ${brand}?`,
      en: `What services are available at ${brand}?`,
    },
    answer: {
      id: `${brand} menyediakan layanan IGD 24 jam, poliklinik spesialis, rawat inap, bedah sentral, laboratorium & radiologi, dan medical checkup.`,
      en: `${brand} provides 24/7 emergency care, specialist clinics, inpatient care, central surgery, laboratory & radiology, and medical checkups.`,
    },
  },
  {
    question: {
      id: 'Bagaimana cara membuat janji temu?',
      en: 'How do I make an appointment?',
    },
    answer: {
      id: 'Anda dapat membuat janji temu melalui telepon di (0254) 396333, atau datang langsung ke loket pendaftaran rumah sakit.',
      en: 'You can make an appointment by calling (0254) 396333 or visiting the hospital registration desk directly.',
    },
  },
  {
    question: {
      id: 'Berapa jam operasional poliklinik?',
      en: 'What are the outpatient clinic hours?',
    },
    answer: {
      id: 'Poliklinik beroperasi Senin–Minggu pukul 08.00–23.00 WIB. IGD tersedia 24 jam setiap hari.',
      en: 'Outpatient clinics operate Monday–Sunday 08.00–23.00 WIB. ER is available 24/7.',
    },
  },
  {
    question: {
      id: `Apakah ${brand} menerima BPJS Kesehatan?`,
      en: `Does ${brand} accept BPJS Health Insurance?`,
    },
    answer: {
      id: `Ya, ${brand} merupakan mitra BPJS Kesehatan. Silakan bawa kartu BPJS Anda saat kunjungan.`,
      en: `Yes, ${brand} is a BPJS Health Insurance partner. Please bring your BPJS card during your visit.`,
    },
  },
  {
    question: {
      id: 'Di mana saya bisa menemukan informasi tentang klinik satellite?',
      en: 'Where can I find information about satellite clinics?',
    },
    answer: {
      id: 'Alamat dan jam operasional klinik di Cilegon dan Serang tersedia di halaman Klinik.',
      en: 'Addresses and operating hours for the clinics in Cilegon and Serang are on the Clinics page.',
    },
  },
  {
    question: {
      id: `Bagaimana cara menghubungi ${brand} untuk keadaan darurat?`,
      en: `How do I contact ${brand} for emergencies?`,
    },
    answer: {
      id: 'Untuk keadaan darurat, hubungi IGD di (0254) 396333 atau langsung datang ke rumah sakit.',
      en: 'For emergencies, call the ER at (0254) 396333 or come to the hospital directly.',
    },
  },
];
