import type { FaqItem } from '@/types';

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
			id: 'Apa saja layanan yang tersedia di RS Krakatau Medika?',
			en: 'What services are available at RS Krakatau Medika?',
		},
		answer: {
			id: 'RS Krakatau Medika menyediakan layanan IGD 24 jam, poliklinik spesialis, rawat inap, bedah sentral, laboratorium & radiologi, dan medical checkup.',
			en: 'RS Krakatau Medika provides 24/7 emergency care, specialist clinics, inpatient care, central surgery, laboratory & radiology, and medical checkups.',
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
			id: 'Apakah RS Krakatau Medika menerima BPJS Kesehatan?',
			en: 'Does RS Krakatau Medika accept BPJS Health Insurance?',
		},
		answer: {
			id: 'Ya, RS Krakatau Medika merupakan mitra BPJS Kesehatan. Silakan bawa kartu BPJS Anda saat kunjungan.',
			en: 'Yes, RS Krakatau Medika is a BPJS Health Insurance partner. Please bring your BPJS card during your visit.',
		},
	},
	{
		question: {
			id: 'Di mana saya bisa menemukan informasi tentang klinik satellite?',
			en: 'Where can I find information about satellite clinics?',
		},
		answer: {
			id: 'Informasi tentang klinik di Cilegon dan Serang tersedia di halaman Klinik. Kunjungi halaman Klinik untuk detail alamat dan jam operasional.',
			en: 'Information about clinics in Cilegon and Serang is available on the Clinics page. Visit the Clinics page for detailed addresses and operating hours.',
		},
	},
	{
		question: {
			id: 'Bagaimana cara menghubungi RS Krakatau Medika untuk keadaan darurat?',
			en: 'How do I contact RS Krakatau Medika for emergencies?',
		},
		answer: {
			id: 'Untuk keadaan darurat, silakan hubungi IGD darurat di (0254) 396333 atau kunjungi rumah sakit langsung.',
			en: 'For emergencies, contact the ER at (0254) 396333 or visit the hospital directly.',
		},
	},
];
