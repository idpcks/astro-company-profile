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
		id: 'Poliklinik: Senin–Sabtu 08.00–20.00 WIB · IGD: 24 jam',
		en: 'Outpatient clinics: Mon–Sat 08.00–20.00 WIB · ER: 24/7',
	},
};

/** Tautan sosial media — dipakai Footer. Ganti href dengan URL asli. */
export const SOCIAL_LINKS: SocialLink[] = [
	{ label: 'Instagram', href: 'https://instagram.com/' },
	{ label: 'Facebook', href: 'https://facebook.com/' },
	{ label: 'YouTube', href: 'https://youtube.com/' },
];
