import type { SocialLink } from '@/types';

/**
 * Identitas rumah sakit — Single Source of Truth.
 *
 * Field TANPA locale = tidak berubah antar bahasa (nama brand,
 * kontak, alamat, URL). Field per locale ditulis { id, en }.
 * Semua komponen WAJIB import dari sini — tidak boleh hardcode ulang.
 * Ganti nilai placeholder dengan data RS yang sebenarnya.
 */
export const SITE = {
	/** Nama brand — tampil di Header, Footer, <title>, meta Open Graph */
	name: 'RS Krakatau Medika',
	/** Kalimat singkat di bawah logo */
	tagline: 'Mitra kesehatan keluarga Anda',
	/** Deskripsi untuk meta description & Hero — per locale */
	description: {
		id: 'Rumah sakit swasta dengan layanan IGD 24 jam, dokter spesialis, dan fasilitas modern untuk melayani keluarga Anda.',
		en: 'A private hospital with 24/7 emergency care, specialist doctors, and modern facilities for your family.',
	},
	/** URL produksi — dipakai untuk canonical URL & Open Graph.
	 *  TODO: masih placeholder, ganti saat domain siap. */
	url: 'https://rsseatsentosa.example.com',
	email: 'info@krakataumedika.co.id',
	/** Telepon umum / front office */
	phone: '(0254) 396333',
	/** Hotline IGD — tampil di banner darurat & Header */
	emergencyPhone: '(0254) 396333',
	address: 'Jl. Semang Raya No. 1, Kotabumi, Kec. Purwakarta, Kota Cilegon, Banten 42435',
	/** Jam operasional ringkas — per locale */
	hours: {
		id: 'Poliklinik: Senin–Minggu 08.00–23.00 WIB · IGD: 24 jam',
		en: 'Outpatient clinics: Mon–Sun 08.00–23.00 WIB · ER: 24/7',
	},
};

/** Tautan sosial media resmi — dipakai Footer. Label tidak diterjemahkan. */
export const SOCIAL_LINKS: SocialLink[] = [
	{ label: 'Instagram', href: 'https://www.instagram.com/ihc.rskrakataumedika/' },
	{ label: 'TikTok', href: 'https://www.tiktok.com/@krakatau_medika' },
	{ label: 'Facebook', href: 'https://web.facebook.com/krakataumedikahospital' },
	{ label: 'X (Twitter)', href: 'https://twitter.com/krakatau_medika' },
	{ label: 'YouTube', href: 'https://www.youtube.com/channel/UCTXqW_gO2z6Cyf6212lTpOA' },
	{ label: 'WhatsApp', href: 'https://wa.me/6285219999152' },
];

/** Tautan resmi lain (bukan sosmed) — diambil dari Linktree resmi @KrakatauMedika. */
export const USEFUL_LINKS: SocialLink[] = [
	{
		label: 'Jadwal Praktek Dokter',
		href: 'http://rskm.ihc.id/cari-dokter.html',
	},
	{ label: 'Website', href: 'https://www.krakataumedika.co.id/' },
	{
		label: 'Maps RS Krakatau Medika',
		href: 'https://www.google.com/maps/place/RS.+Krakatau+Medika/@-5.9885656,106.0309412,17z/data=!3m1!4b1!4m5!3m4!1s0x2e4191dbc02a4d3f:0x70e9cbe63cf6acb9!8m2!3d-5.9885709!4d106.0331299',
	},
	{
		label: 'Maps Klinik Cilegon',
		href: 'https://www.google.com/maps/place/Klinik+krakatau+medika/@-5.9886913,106.0312639,17z/data=!3m1!4b1!4m5!3m4!1s0x2e41914bc82a6e27:0x16085f2183aefe34!8m2!3d-5.9886966!4d106.0334526',
	},
	{
		label: 'Maps Klinik Serang',
		href: 'https://www.google.com/maps/place/Klinik+Krakatau+Medika/@-6.1273249,106.1487292,17z/data=!3m1!4b1!4m5!3m4!1s0x2e418ace1482224f:0x3da45b3642525150!8m2!3d-6.1273302!4d106.1509179',
	},
];
