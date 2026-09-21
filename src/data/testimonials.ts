import type { Testimonial } from '@/types';

/**
 * Testimoni pasien — placeholder, teks per locale ({ id, en }).
 * Ganti dengan testimoni asli (perhatikan izin penggunaan nama).
 * Dipakai section <Testimonials />.
 */
export const TESTIMONIALS: Testimonial[] = [
  {
    quote: {
      id: 'Pelayanan di IGD cepat dan tenang. Dokter dan perawatnya komunikatif dari awal sampai kami pulang.',
      en: 'The ER service was fast and calm. The doctors and nurses communicated clearly from admission until we went home.',
    },
    name: 'Sari Wulandari',
    context: { id: 'Pasien IGD', en: 'ER Patient' },
  },
  {
    quote: {
      id: 'Anak saya dirawat di kelas 2. Kamarnya bersih dan suster rutin mengecek kondisinya.',
      en: 'My child stayed in a class-2 room. It was clean and the nurse checked on her regularly.',
    },
    name: 'Budi Santoso',
    context: { id: 'Orang tua pasien', en: "Patient's parent" },
  },
  {
    quote: {
      id: 'Daftarnya gampang lewat telepon, hasil medical checkup keluar cepat dan dokter menjelaskannya dengan detail.',
      en: 'Booking by phone was easy, the checkup results came quickly and the doctor explained them in detail.',
    },
    name: 'Dewi Lestari',
    context: { id: 'Peserta Medical Checkup', en: 'Checkup Patient' },
  },
];
