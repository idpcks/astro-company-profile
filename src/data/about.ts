/**
 * Identitas Visi, Misi, dan Nilai Perusahaan — Single Source of Truth (SOT).
 * Digunakan bersama oleh halaman /about dan /visi-misi (bilingual id & en).
 */

export interface CorporateValue {
  title: string;
  description: string;
}

export interface VisionMissionData {
  vision: string;
  misi: string[];
  values: CorporateValue[];
}

/** Tipe pendukung sesuai spesifikasi implementasi */
export type ValueItem = CorporateValue;
export type AboutData = VisionMissionData;

export const ABOUT_DATA: Record<'id' | 'en', VisionMissionData> = {
  id: {
    vision:
      'Menjadi rumah sakit pilihan masyarakat di Cilegon dan sekitarnya dengan pelayanan medis yang andal dan penuh empati.',
    misi: [
      'Memberikan pelayanan medis yang aman, berkualitas, dan berorientasi pada pasien.',
      'Mengembangkan tenaga kesehatan yang kompeten dan berbelas kasih.',
      'Memanfaatkan teknologi untuk pelayanan yang cepat dan transparan.',
    ],
    values: [
      {
        title: 'Fokus pada Pasien',
        description: 'Setiap keputusan klinis dan operasional berangkat dari kebutuhan pasien.',
      },
      {
        title: 'Integritas',
        description: 'Jujur dan transparan dalam tindakan medis maupun administrasi.',
      },
      {
        title: 'Unggul',
        description: 'Terus memperbarui standar mutu, fasilitas, dan kompetensi tim.',
      },
      {
        title: 'Empati',
        description: 'Merawat pasien dengan perhatian, tidak hanya menangani penyakitnya.',
      },
    ],
  },
  en: {
    vision:
      'To be the hospital of choice in Cilegon and its surroundings, known for reliable and empathetic medical care.',
    misi: [
      'Deliver safe, high-quality, patient-centered medical care.',
      'Develop competent and compassionate healthcare professionals.',
      'Leverage technology for fast and transparent services.',
    ],
    values: [
      {
        title: 'Patient Focus',
        description: 'Every clinical and operational decision starts with patient needs.',
      },
      {
        title: 'Integrity',
        description: 'Honest and transparent in medical care and administration.',
      },
      {
        title: 'Excellence',
        description:
          'Continuously raising our standards of quality, facilities, and team competence.',
      },
      {
        title: 'Empathy',
        description: 'We care for patients with attention, not only treat their illness.',
      },
    ],
  },
} as const;
