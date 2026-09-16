import type { Clinic } from '@/types';

/**
 * Daftar klinik RS Krakatau Medika di luar lokasi utama (berbagai kota).
 * Single Source of Truth untuk halaman /klinik & dropdown "Klinik ▾".
 *
 * TODO: ganti data placeholder ini dengan daftar klinik yang sebenarnya.
 * `corporate: true` menandai klinik yang juga melayani layanan korporat.
 */
export const CLINICS: Clinic[] = [
	{
		slug: 'klinik-medika-cilegon',
		name: { id: 'Klinik Krakatau Medika Cilegon', en: 'Krakatau Medika Clinic Cilegon' },
		city: { id: 'Cilegon', en: 'Cilegon' },
		address: {
			id: 'Jl. Contoh Utama No. 1, Cilegon, Banten',
			en: 'Jl. Contoh Utama No. 1, Cilegon, Banten',
		},
		phone: '+62 254 000 001',
		hours: {
			id: 'Senin–Sabtu 08.00–20.00 WIB',
			en: 'Mon–Sat 08.00–20.00 WIB',
		},
		corporate: true,
	},
	{
		slug: 'klinik-medika-serang',
		name: { id: 'Klinik Krakatau Medika Serang', en: 'Krakatau Medika Clinic Serang' },
		city: { id: 'Serang', en: 'Serang' },
		address: {
			id: 'Jl. Contoh Raya No. 2, Serang, Banten',
			en: 'Jl. Contoh Raya No. 2, Serang, Banten',
		},
		phone: '+62 254 000 002',
		hours: {
			id: 'Senin–Jumat 08.00–17.00 WIB',
			en: 'Mon–Fri 08.00–17.00 WIB',
		},
		corporate: false,
	},
	{
		slug: 'klinik-satelit',
		name: { id: 'Klinik Satelit', en: 'Satellite Clinic' },
		city: { id: 'Tangerang', en: 'Tangerang' },
		address: {
			id: 'Jl. Contoh Timur No. 3, Tangerang, Banten',
			en: 'Jl. Contoh Timur No. 3, Tangerang, Banten',
		},
		phone: '+62 21 000 003',
		hours: {
			id: 'Senin–Sabtu 07.00–21.00 WIB',
			en: 'Mon–Sat 07.00–21.00 WIB',
		},
		corporate: true,
	},
];