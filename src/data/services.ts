import type { Service } from '@/types';

/**
 * Daftar layanan unggulan RS — teks per locale ({ id, en }).
 * Dipakai section <Services /> di beranda dan halaman /services.
 * 6 item = grid 3x2 yang rapi di beranda.
 */
export const SERVICES: Service[] = [
	{
		title: { id: 'IGD 24 Jam', en: '24/7 Emergency' },
		icon: 'emergency',
		description: {
			id: 'Siaga penuh 24 jam dengan dokter jaga dan ambulans untuk kondisi gawat darurat.',
			en: 'On standby around the clock with resident doctors and ambulances for emergencies.',
		},
	},
	{
		title: { id: 'Poliklinik Spesialis', en: 'Specialist Clinics' },
		icon: 'clinic',
		description: {
			id: 'Konsultasi dengan dokter spesialis penyakit dalam, anak, kebidanan, dan lainnya.',
			en: 'Consultations with internists, pediatricians, obstetricians, and more.',
		},
	},
	{
		title: { id: 'Rawat Inap', en: 'Inpatient Care' },
		icon: 'inpatient',
		description: {
			id: 'Kamar nyaman dari kelas 3 hingga Suite dengan perawatan berkualitas.',
			en: 'Comfortable rooms from class 3 to Suite with quality care.',
		},
	},
	{
		title: { id: 'Bedah Sentral', en: 'Central Surgery' },
		icon: 'surgery',
		description: {
			id: 'Kamar operasi modern dengan prosedur steril dan tim bedah berpengalaman.',
			en: 'Modern operating theatres with sterile procedures and an experienced surgical team.',
		},
	},
	{
		title: { id: 'Laboratorium & Radiologi', en: 'Laboratory & Radiology' },
		icon: 'diagnostic',
		description: {
			id: 'Pemeriksaan penunjang diagnostik yang cepat, akurat, dan terintegrasi.',
			en: 'Fast, accurate, and integrated diagnostic support services.',
		},
	},
	{
		title: { id: 'Medical Checkup', en: 'Medical Checkup' },
		icon: 'checkup',
		description: {
			id: 'Paket pemeriksaan kesehatan rutin untuk individu, keluarga, dan korporat.',
			en: 'Routine health screening packages for individuals, families, and companies.',
		},
	},
];
