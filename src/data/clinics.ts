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
      id: 'Jl. Semang Raya Komp. KS No. 1, Kotabumi, Kec. Purwakarta, Kota Cilegon, Banten 42435',
      en: 'Jl. Semang Raya Komp. KS No. 1, Kotabumi, Kec. Purwakarta, Kota Cilegon, Banten 42435',
    },
    phone: '(0254) 7734514 / 087741199253',
    hours: {
      id: 'Senin–Jumat 08.00–15.30 WIB · Sabtu 08.00–12.00 WIB · Minggu / Hari Libur Nasional: Tutup',
      en: 'Mon–Fri 08.00–15.30 WIB · Sat 08.00–12.00 WIB · Sun / Holiday: Close',
    },
    corporate: true,
  },
  {
    slug: 'klinik-medika-serang',
    name: { id: 'Klinik Krakatau Medika Serang', en: 'Krakatau Medika Clinic Serang' },
    city: { id: 'Serang', en: 'Serang' },
    address: {
      id: 'Jl. Orari, Kel. Ciracas, Kec. Serang, Kota Serang, Banten 42116 (Area Lingkar Selatan / Jl. TB Suwandi, Kav. Kemuning No. 1)',
      en: 'Jl. Orari, Kel. Ciracas, Kec. Serang, Kota Serang, Banten 42116 (Area Lingkar Selatan / Jl. TB Suwandi, Kav. Kemuning No. 1)',
    },
    phone: '(0254) 204407 / 0877-4119-9256',
    hours: {
      id: 'Senin–Sabtu 08.00–20.00 WIB · Minggu / Hari Libur Nasional: Tutup',
      en: 'Mon–Sat 08.00–20.00 WIB · Sun / Holiday: Close',
    },
    corporate: true,
  },

  // Sementara di sembunyikan dulu, karena belum mendapatkan informasi lebih lanjut tentang klinik satelit ini.
  // {
  // 	slug: 'klinik-satelit',
  // 	name: { id: 'Klinik Satelit', en: 'Satellite Clinic' },
  // 	city: { id: 'Cilegon', en: 'Cilegon' },
  // 	address: {
  // 		id: 'Jl. Raya Cilegon No. 123, Kel. Sukmajaya, Kec. Cilegon, Kota Cilegon, Banten 42435',
  // 		en: 'Jl. Raya Cilegon No. 123, Kel. Sukmajaya, Kec. Cilegon, Kota Cilegon, Banten 42435',
  // 	},
  // 	phone: '(0254) 123456 / 0812-3456-7890',
  // 	hours: {
  // 		id: 'Senin–Jumat 08.00–17.00 WIB · Sabtu 08.00–12.00 WIB · Minggu / Hari Libur Nasional: Tutup',
  // 		en: 'Mon–Fri 08.00–17.00 WIB · Sat 08.00–12.00 WIB · Sun / Holiday: Close',
  // 	},
  // 	corporate: false,
  // },
];
