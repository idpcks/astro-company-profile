/**
 * content.ts — LAPISAN AKSES DATA KONTEN (SATU-SATUNYA pintu masuk).
 *
 * Kontrak penting: semua getter di sini BERBENTUK async (Promise<T>),
 * persis seperti akan terlihat ketika data datang dari backend/API.
 * Karena itu komponen TIDAK BOLEH import langsung dari '@/data/*' —
 * selalu lewat modul ini:
 *
 *   // contoh komponen
 *   const services = await getServices();
 *
 * Saat ini implementasi membaca data statis dari '@/data/*' (belum ada
 * backend). Nanti tinggal ganti INTERNAL fungsi (mis. fetch('/api/...')),
 * signature-nya TIDAK berubah → seluruh komponen tidak tersentuh.
 *
 * Lapisan tempat data masuk: config → tetap '@/data/site' & '@/data/nav';
 * konten dinamis (layanan, klinik, FAQ, testimoni, tentang) → sini.
 */
import type { Clinic, FaqItem, Service, Testimonial } from '@/types';
import { ABOUT_DATA, type AboutData } from '@/data/about';
import { CLINICS } from '@/data/clinics';
import { FAQ_ITEMS } from '@/data/faq';
import { SERVICES } from '@/data/services';
import { TESTIMONIALS } from '@/data/testimonials';

/** Daftar layanan unggulan (beranda & halaman /services). */
export async function getServices(): Promise<Service[]> {
  return SERVICES;
}

/** Daftar klinik di luar lokasi utama (halaman /klinik & /layanan-bisnis). */
export async function getClinics(): Promise<Clinic[]> {
  return CLINICS;
}

/** Item FAQ (halaman /faq, render + JSON-LD FAQPage). */
export async function getFaqItems(): Promise<FaqItem[]> {
  return FAQ_ITEMS;
}

/** Testimoni pasien (section Testimonials & halaman /reviews). */
export async function getTestimonials(): Promise<Testimonial[]> {
  return TESTIMONIALS;
}

/** Visi, misi, dan nilai perusahaan — per locale (halaman /about & /visi-misi). */
export async function getAboutData(): Promise<Record<'id' | 'en', AboutData>> {
  return ABOUT_DATA;
}
