import type { Lang } from './index';

/**
 * Kamus teks UI — key flat "domain.nama".
 *
 * ATURAN:
 *  - Key baru wajib diisi di SEMUA locale (`id` DAN `en`).
 *    `t()` mem-fallback ke `id` kalau lupa, tapi jangan andalkan itu.
 *  - Type `UiKeys` di-generate dari object `id` — kalau key `en`
 *    kurang/berlebih, TypeScript menunjukkan langsung.
 */
const id = {
	// Judul & meta deskripsi halaman (untuk BaseLayout)
	'page.title.home': 'Beranda',
	'page.title.about': 'Tentang Kami',
	'page.title.services': 'Layanan',
	'page.title.contact': 'Kontak',
	'page.title.blog': 'Blog Kesehatan',
	'page.title.demo': 'Demo Skeleton',
	'page.title.galeri': 'Galeri',
	'page.title.wbs': 'WBS',
	'page.title.klinik': 'Klinik',
	'page.title.layananBisnis': 'Layanan Bisnis',
	'page.title.profil': 'Profil',
	'page.title.visiMisi': 'Visi & Misi',
	'page.title.kmNews': 'KM News',
	'page.title.lelangPengadaan': 'Lelang Pengadaan',
	'page.title.laporanKeuangan': 'Laporan Keuangan',
	'page.title.karir': 'Karir',
	'page.description.home': 'Rumah sakit swasta dengan layanan IGD 24 jam, dokter spesialis, dan fasilitas modern untuk melayani keluarga Anda.',
	'page.description.about': 'Mengenal RS Krakatau Medika: visi, misi, dan nilai yang kami pegang dalam melayani pasien dan keluarga.',
	'page.description.services': 'Layanan unggulan RS Krakatau Medika: IGD 24 jam, poliklinik spesialis, rawat inap, bedah sentral, laboratorium, dan medical checkup.',
	'page.description.contact': 'Hubungi RS Krakatau Medika: alamat, telepon, email, dan jam layanan kami.',
	'page.description.blog': 'Artikel edukasi kesehatan dari dokter RS Krakatau Medika: pencegahan penyakit, gaya hidup sehat, dan informasi layanan.',
	'page.description.demo': 'Halaman demo pola loading skeleton.',
'page.description.galeri': 'Galeri foto fasilitas dan kegiatan RS Krakatau Medika — sedang dalam penyiapan.',
	'page.description.wbs': 'Sistem Pelaporan Pelanggaran (WBS) RS Krakatau Medika: kanal pengaduan resmi, rahasia, dan independen.',
	'page.description.klinik': 'Klinik RS Krakatau Medika di berbagai kota: alamat, telepon, jam layanan, dan layanan yang tersedia.',
	'page.description.layananBisnis': 'Layanan kesehatan untuk perusahaan dan industri: medical checkup karyawan, kontrak pelayanan, dan kerja sama klinik.',
	'page.description.profil': 'Profil RS Krakatau Medika: komitmen, fasilitas, dan layanan yang kami hadirkan untuk Anda.',
	'page.description.visiMisi': 'Visi, misi, dan nilai yang menjadi arah serta fondasi pelayanan RS Krakatau Medika.',
	'page.description.kmNews': 'Kabar dan berita terbaru RS Krakatau Medika.',
	'page.description.lelangPengadaan': 'Informasi lelang dan pengadaan barang/jasa di lingkungan RS Krakatau Medika.',
	'page.description.laporanKeuangan': 'Laporan keuangan dan dokumen publik RS Krakatau Medika yang transparan dan akuntabel.',
	'page.description.karir': 'Lowongan kerja dan peluang berkarir di RS Krakatau Medika.',
	'page.title.privacy': 'Kebijakan Privasi',
	'page.description.privacy': 'Kebijakan privasi RS Krakatau Medika: cara kami mengumpulkan, menggunakan, dan melindungi data pribadi Anda sesuai UU PDP.',
	'page.title.terms': 'Syarat & Ketentuan',
	'page.description.terms': 'Syarat dan ketentuan penggunaan website RS Krakatau Medika.',
	'page.title.faq': 'Pertanyaan Sering Diajukan (FAQ)',
	'page.description.faq': 'Daftar pertanyaan dan jawaban umum seputar layanan, fasilitas, dan kebijakan RS Krakatau Medika.',
	'page.title.reviews': 'Ulasan & Testimoni Pasien',
	'page.description.reviews': 'Ulasan dan testimoni pasien mengenai pengalaman berobat di RS Krakatau Medika.',
	// Header
	'nav.ariaLabel': 'Navigasi utama',
	'nav.menu.open': 'Buka menu navigasi',
	'header.topbar.igd': 'IGD 24 Jam',
	'header.topbar.skip': 'Langsung ke konten',

	// ThemeToggle
	'theme.toggle': 'Ganti tema gelap/terang',

	// LangSwitcher
	'lang.switch.aria': 'Ganti bahasa',

	// Hero
	'hero.eyebrow': 'Mitra kesehatan keluarga Anda',
	'hero.imageAlt': 'Foto gedung RS Krakatau Medika',
	'hero.title': 'Kesehatan keluarga, prioritas kami',
	'hero.cta.services': 'Lihat Layanan',
	'hero.cta.contact': 'Hubungi Kami',
	'hero.trust.doctors': 'Dokter spesialis berpengalaman',
	'hero.trust.facilities': 'Fasilitas modern',
	'hero.trust.service': 'Pelayanan ramah pasien',
	'hero.emergency.title': 'Kondisi gawat darurat?',
	'hero.emergency.body': 'Tim IGD kami siaga 24 jam, termasuk hari libur.',
	'hero.emergency.cta': 'Hubungi IGD',

	// Services
	'services.eyebrow': 'Layanan Unggulan',
	'services.title': 'Perawatan lengkap untuk seluruh keluarga',
	'services.lead': 'Dari gawat darurat sampai pemeriksaan rutin, semua layanan utama tersedia dalam satu rumah sakit.',

	// AboutUs (section beranda)
	'about.eyebrow': 'Tentang Kami',
	'about.title': 'Sepuluh tahun lebih merawat keluarga Indonesia',
	'about.cta': 'Kenali Kami Lebih Dekat',
	'about.stat.founded': 'Tahun berdiri',
	'about.stat.doctors': 'Dokter & spesialis',
	'about.stat.patients': 'Pasien per tahun',
	'about.highlight.accreditation': 'Standar akreditasi nasional',
	'about.highlight.records': 'Rekam medis elektronik terintegrasi',
	'about.highlight.insurance': 'Kerja sama dengan BPJS & asuransi utama',

	// Testimonials
	'testimonials.eyebrow': 'Testimoni',
	'testimonials.title': 'Apa kata pasien kami',
	'testimonials.lead': 'Cerita nyata dari pasien dan keluarga yang pernah kami layani.',

	// CTASection
	'cta.title': 'Siap menjaga kesehatan keluarga Anda?',
	'cta.lead': 'Hubungi kami untuk informasi layanan, jadwal poliklinik, atau kebutuhan kesehatan Anda.',
	'cta.contact': 'Hubungi Kami',
	'cta.phone': 'Telepon',

	// Footer
	'footer.menu': 'Menu',
	'footer.contact': 'Kontak',
	'footer.hours': 'Jam Layanan',
	'footer.social': 'Sosial media',
	'footer.links': 'Tautan',
	'footer.rights': 'Semua hak dilindungi.',
	'footer.emergencyLabel': 'IGD',

	// PageHero eyebrows (halaman dalam)
	'pagehero.eyebrow.about': 'Tentang Kami',
	'pagehero.eyebrow.services': 'Layanan',
	'pagehero.eyebrow.contact': 'Kontak',
	'pagehero.eyebrow.blog': 'Blog',
	'pagehero.eyebrow.galeri': 'Galeri',
	'pagehero.eyebrow.wbs': 'WBS',
	'pagehero.eyebrow.klinik': 'Klinik Kami',
	'pagehero.eyebrow.layananBisnis': 'Layanan Bisnis',
	'pagehero.eyebrow.profil': 'Profil',
	'pagehero.eyebrow.visiMisi': 'Visi & Misi',
	'pagehero.eyebrow.kmNews': 'Berita',
	'pagehero.eyebrow.lelangPengadaan': 'Pengadaan',
	'pagehero.eyebrow.laporanKeuangan': 'Keuangan',
	'pagehero.eyebrow.karir': 'Karir',

	// Halaman Galeri
	'galeriPage.hero.title': 'Galeri Foto & Kegiatan',
	'galeriPage.hero.lead': 'Dokumentasi fasilitas, layanan, dan kegiatan RS Krakatau Medika.',
	'galeriPage.note.title': 'Galeri sedang disiapkan',
	'galeriPage.note.body': 'Kami sedang mengumpulkan dan mengkurasi foto fasilitas serta kegiatan rumah sakit. Konten galeri akan tersedia di halaman ini segera.',

	// Halaman WBS
	'wbsPage.hero.title': 'Sistem Pelaporan Pelanggaran (WBS)',
	'wbsPage.hero.lead': 'Kanal resmi dan rahasia untuk melaporkan dugaan pelanggaran di lingkungan rumah sakit.',
	'wbsPage.body.heading': 'Melapor itu dilindungi',
	'wbsPage.body.para1': 'WBS adalah sarana bagi pegawai, pasien, dan mitra untuk melaporkan dugaan pelanggaran etik, gratifikasi, atau praktik tidak sehat lainnya. Identitas pelapor dijaga kerahasiaannya, dan pelaporan dengan itikad baik mendapat perlindungan.',
	'wbsPage.body.para2': 'Setiap laporan ditindaklanjuti secara independen oleh tim penanganan WBS sesuai ketentuan peraturan perundang-undangan.',
	'wbsPage.body.contactHeading': 'Kanal Pengaduan',
	'wbsPage.body.contactBody': 'Sampaikan pengaduan Anda melalui email khusus berikut:',

	// Halaman /klinik
	'klinikPage.hero.title': 'Klinik kami di berbagai kota',
	'klinikPage.hero.lead': 'Temukan klinik RS Krakatau Medika yang dekat dengan Anda, lengkap dengan alamat, telepon, dan jam layanan.',
	'klinikPage.address': 'Alamat',
	'klinikPage.phone': 'Telepon',
	'klinikPage.hours': 'Jam Layanan',
	'klinikPage.corporate': 'Juga melayani korporat',

	// Halaman /layanan-bisnis
	'bisnisPage.hero.title': 'Layanan kesehatan untuk perusahaan Anda',
	'bisnisPage.hero.lead': 'Kemitraan pelayanan kesehatan untuk karyawan: medical checkup, kontrak pelayanan, dan klinik kerja sama.',
	'bisnisPage.body.heading': 'Solusi untuk perusahaan & industri',
	'bisnisPage.body.para1': 'Kami melayani kebutuhan kesehatan karyawan Anda, dari medical checkup berkala hingga penanganan darurat melalui klinik terdekat.',
	'bisnisPage.body.para2': 'Tim bisnis kami akan menyusun paket kerja sama sesuai kebutuhan, skala, dan lokasi operasional perusahaan Anda.',
	'bisnisPage.body.para3': 'Hubungi kami untuk mendapatkan penawaran kerja sama layanan kesehatan.',
	'bisnisPage.body.clinicsHeading': 'Klinik mitra korporat',

	// Halaman /profil
	'profilPage.body.heading': 'Sekilas RS Krakatau Medika',
	'profilPage.body.para1': 'RS Krakatau Medika adalah rumah sakit swasta di Cilegon yang telah melayani masyarakat sejak 2005 dengan pelayanan yang utuh, modern, dan menyenangkan hati.',
	'profilPage.body.para2': 'Kami menghadirkan IGD 24 jam, dokter spesialis, dan fasilitas rawat inap yang didukung teknologi serta kerja sama dengan BPJS dan asuransi utama.',

	// Halaman /about
	'aboutPage.hero.title': 'Rumah sakit yang tumbuh bersama keluarga Anda',
	'aboutPage.hero.lead': 'Sejak 2005, kami berkomitmen menghadirkan pelayanan kesehatan yang utuh, modern, dan menyenangkan hati.',
	'aboutPage.visionMisi.eyebrow': 'Visi & Misi',
	'aboutPage.visionMisi.title': 'Arah dan tujuan kami',
	'aboutPage.vision': 'Visi',
	'aboutPage.mission': 'Misi',
	'aboutPage.values.eyebrow': 'Nilai Kami',
	'aboutPage.values.title': 'Nilai yang kami pegang',
	'aboutPage.values.lead': 'Empat nilai ini menjadi fondasi dalam setiap pelayanan kami.',

	// Halaman /contact
	'contactPage.info.heading': 'Informasi Kontak',
	'contactPage.info.address': 'Alamat',
	'contactPage.info.phone': 'Telepon',
	'contactPage.info.email': 'Email',
	'contactPage.info.hours': 'Jam Layanan',
	'contactPage.emergency.badge': 'IGD 24 Jam',
	'contactPage.emergency.body': 'Untuk kondisi gawat darurat, hubungi langsung:',
	'contactPage.form.heading': 'Kirim Pesan',
	'contactPage.form.name': 'Nama Lengkap',
	'contactPage.form.email': 'Email',
	'contactPage.form.phone': 'Nomor Telepon',
	'contactPage.form.message': 'Pesan',
	'contactPage.form.messagePlaceholder': 'Ceritakan kebutuhan Anda, misal: pertanyaan layanan atau jadwal poliklinik.',
	'contactPage.form.submit': 'Kirim Pesan',
	'contactPage.form.consent': 'Saya setuju data yang saya isi diproses untuk menjawab permintaan ini (sesuai UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi).',
	'contactPage.form.privacyNote': 'Data Anda hanya digunakan untuk merespons pesan ini dan tidak dibagikan kepada pihak lain.',
	'contactPage.form.sending': 'Mengirim…',
	'contactPage.form.success': 'Pesan Anda terkirim. Tim kami akan segera menghubungi Anda.',
	'contactPage.form.error': 'Pesan gagal terkirim. Silakan coba lagi, atau hubungi kami langsung lewat telepon.',
	'contactPage.form.invalid': 'Mohon lengkapi isian yang wajib dengan benar.',
	'contactPage.form.consentError': 'Mohon berikan izin pemrosesan data Anda terlebih dahulu.',
	'contactPage.form.confirmTitle': 'Konfirmasi pengiriman',
	'contactPage.form.confirmSend': 'Ya, Kirim',
	'contactPage.form.confirmCancel': 'Batal',

	// Halaman /blog
	'blogPage.hero.title': 'Wawasan kesehatan dari dokter kami',
	'blogPage.hero.lead': 'Artikel edukasi yang ditulis dan direview oleh tim medis kami.',

	// Halaman /km-news
	'kmNewsPage.note.title': 'Berita segera hadir',
	'kmNewsPage.note.body': 'Kumpulan kabar dan pengumuman terbaru RS Krakatau Medika akan tersedia di halaman ini segera.',

	// Halaman /lelang-pengadaan
	'lelangPengadaanPage.note.title': 'Pengumuman lelang segera hadir',
	'lelangPengadaanPage.note.body': 'Informasi lelang pengadaan barang dan jasa akan kami publikasikan di halaman ini secara transparan.',

	// Halaman /laporan-keuangan
	'laporanKeuanganPage.note.title': 'Laporan keuangan segera hadir',
	'laporanKeuanganPage.note.body': 'Dokumen laporan keuangan dan laporan publik akan tersedia di halaman ini sebagai wujud transparansi kami.',

	// Halaman /karir
	'karirPage.note.title': 'Lowongan pekerjaan segera hadir',
	'karirPage.note.body': 'Peluang karier di RS Krakatau Medika akan kami unggah di halaman ini. Pantau terus pembaruan kami.',

	// Blog komponen
	'post.updated': 'Diperbarui:',
	'post.back': '← Semua Artikel',
	'post.availableIn': 'Artikel ini juga tersedia dalam:',
	'post.fallbackNotice': 'Artikel ini belum tersedia dalam Bahasa Inggris.',
	'post.readIn': 'Baca dalam',

	// Skeleton demo
	'demo.hero.eyebrow': 'Demo UI',
	'demo.hero.title': 'Pola loading skeleton',
	'demo.hero.lead': 'Placeholder shimmer tampil saat konten "dimuat", lalu ditukar dengan konten asli — tanpa layout shift.',
	'demo.trigger': 'Simulasikan Loading',
	'demo.loading': 'Memuat konten…',
	'demo.done': 'Konten dimuat ✓',
} as const;

export type UiKeys = keyof typeof id;

/** Fallback `id` dijamin oleh tFactory; type memaksa `en` lengkap. */
const en: Record<UiKeys, string> = {
	// Judul & meta deskripsi halaman
	'page.title.home': 'Home',
	'page.title.about': 'About Us',
	'page.title.services': 'Services',
	'page.title.contact': 'Contact',
	'page.title.blog': 'Health Blog',
	'page.title.demo': 'Skeleton Demo',
	'page.title.galeri': 'Gallery',
	'page.title.wbs': 'WBS',
	'page.title.klinik': 'Clinics',
	'page.title.layananBisnis': 'Business Services',
	'page.title.profil': 'Profile',
	'page.title.visiMisi': 'Vision & Mission',
	'page.title.kmNews': 'KM News',
	'page.title.lelangPengadaan': 'Tender & Procurement',
	'page.title.laporanKeuangan': 'Financial Reports',
	'page.title.karir': 'Careers',
	'page.description.home': 'A private hospital with 24/7 emergency care, specialist doctors, and modern facilities for your family.',
	'page.description.about': 'Get to know RS Krakatau Medika: the vision, mission, and values behind our care for patients and families.',
	'page.description.services': 'Featured services at RS Krakatau Medika: 24/7 emergency, specialist clinics, inpatient care, surgery, laboratory, and checkups.',
	'page.description.contact': 'Contact RS Krakatau Medika: address, phone, email, and service hours.',
	'page.description.blog': 'Health education articles from RS Krakatau Medika doctors: prevention, healthy living, and service information.',
	'page.description.demo': 'Skeleton loading pattern demo page.',
	'page.description.galeri': 'Photo gallery of RS Krakatau Medika facilities and activities — currently in preparation.',
	'page.description.wbs': 'Whistleblowing System (WBS) of RS Krakatau Medika: an official, confidential, and independent reporting channel.',
	'page.description.klinik': 'RS Krakatau Medika clinics across multiple cities: address, phone, service hours, and available services.',
	'page.description.layananBisnis': 'Corporate healthcare services: employee checkups, service contracts, and clinic partnerships.',
	'page.description.profil': 'Profile of RS Krakatau Medika: the commitment, facilities, and services we bring to you.',
	'page.description.visiMisi': 'The vision, mission, and values that guide our care at RS Krakatau Medika.',
	'page.description.kmNews': 'Latest news and updates from RS Krakatau Medika.',
	'page.description.lelangPengadaan': 'Tender and procurement announcements at RS Krakatau Medika.',
	'page.description.laporanKeuangan': 'Financial and public reports of RS Krakatau Medika — transparent and accountable.',
	'page.description.karir': 'Job openings and career opportunities at RS Krakatau Medika.',
	'page.title.privacy': 'Privacy Policy',
	'page.description.privacy': 'RS Krakatau Medika privacy policy: how we collect, use, and protect your personal data in accordance with PDP Law.',
	'page.title.terms': 'Terms of Service',
	'page.description.terms': 'Terms and conditions for using the RS Krakatau Medika website.',
	'page.title.faq': 'Frequently Asked Questions (FAQ)',
	'page.description.faq': 'Frequently asked questions about RS Krakatau Medika services, facilities, and policies.',
	'page.title.reviews': 'Patient Reviews & Testimonials',
	'page.description.reviews': 'Patient reviews and testimonials about their experience at RS Krakatau Medika.',

	// Header
	'nav.ariaLabel': 'Main navigation',
	'nav.menu.open': 'Open navigation menu',
	'header.topbar.igd': '24h Emergency',
	'header.topbar.skip': 'Skip to content',

	// ThemeToggle
	'theme.toggle': 'Toggle dark/light theme',

	// LangSwitcher
	'lang.switch.aria': 'Switch language',

	// Hero
	'hero.eyebrow': 'Your family\u2019s healthcare partner',
	'hero.imageAlt': 'Krakatau Medika hospital building',
	'hero.title': 'Your family\u2019s health, our priority',
	'hero.cta.services': 'Our Services',
	'hero.cta.contact': 'Contact Us',
	'hero.trust.doctors': 'Experienced specialist doctors',
	'hero.trust.facilities': 'Modern facilities',
	'hero.trust.service': 'Patient-friendly service',
	'hero.emergency.title': 'Emergency situation?',
	'hero.emergency.body': 'Our ER team is on standby 24/7, including holidays.',
	'hero.emergency.cta': 'Contact ER',

	// Services
	'services.eyebrow': 'Featured Services',
	'services.title': 'Complete care for the whole family',
	'services.lead': 'From emergencies to routine checkups, all major services are available under one roof.',

	// AboutUs
	'about.eyebrow': 'About Us',
	'about.title': 'More than a decade caring for Indonesian families',
	'about.cta': 'Get to Know Us',
	'about.stat.founded': 'Established',
	'about.stat.doctors': 'Doctors & specialists',
	'about.stat.patients': 'Patients per year',
	'about.highlight.accreditation': 'National accreditation standards',
	'about.highlight.records': 'Integrated electronic medical records',
	'about.highlight.insurance': 'Partnered with BPJS & major insurers',

	// Testimonials
	'testimonials.eyebrow': 'Testimonials',
	'testimonials.title': 'What our patients say',
	'testimonials.lead': 'Real stories from the patients and families we have served.',

	// CTASection
	'cta.title': 'Ready to safeguard your family\u2019s health?',
	'cta.lead': 'Contact us for service information, clinic schedules, or your healthcare needs.',
	'cta.contact': 'Contact Us',
	'cta.phone': 'Call',

	// Footer
	'footer.menu': 'Menu',
	'footer.contact': 'Contact',
	'footer.hours': 'Service Hours',
	'footer.social': 'Social media',
	'footer.links': 'Links',
	'footer.rights': 'All rights reserved.',
	'footer.emergencyLabel': 'ER',

	// PageHero
	'pagehero.eyebrow.about': 'About Us',
	'pagehero.eyebrow.services': 'Services',
	'pagehero.eyebrow.contact': 'Contact',
	'pagehero.eyebrow.blog': 'Blog',
	'pagehero.eyebrow.galeri': 'Gallery',
	'pagehero.eyebrow.wbs': 'WBS',
	'pagehero.eyebrow.klinik': 'Our Clinics',
	'pagehero.eyebrow.layananBisnis': 'Business Services',
	'pagehero.eyebrow.profil': 'Profile',
	'pagehero.eyebrow.visiMisi': 'Vision & Mission',
	'pagehero.eyebrow.kmNews': 'News',
	'pagehero.eyebrow.lelangPengadaan': 'Procurement',
	'pagehero.eyebrow.laporanKeuangan': 'Finance',
	'pagehero.eyebrow.karir': 'Careers',

	// Gallery page
	'galeriPage.hero.title': 'Gallery & Activities',
	'galeriPage.hero.lead': 'Documentation of RS Krakatau Medika facilities, services, and activities.',
	'galeriPage.note.title': 'Gallery coming soon',
	'galeriPage.note.body': 'We are gathering and curating photos of our facilities and hospital activities. Gallery content will be available on this page soon.',

	// WBS page
	'wbsPage.hero.title': 'Whistleblowing System (WBS)',
	'wbsPage.hero.lead': 'An official and confidential channel to report suspected misconduct within the hospital.',
	'wbsPage.body.heading': 'Reporting is protected',
	'wbsPage.body.para1': 'The WBS is a channel for employees, patients, and partners to report suspected ethical violations, gratuities, or other unhealthy practices. Reporter identity is kept confidential, and reports made in good faith are protected.',
	'wbsPage.body.para2': 'Every report is reviewed independently by the WBS team in accordance with applicable laws and regulations.',
	'wbsPage.body.contactHeading': 'Reporting Channel',
	'wbsPage.body.contactBody': 'Send your report via the dedicated email below:',

	// /klinik
	'klinikPage.hero.title': 'Our clinics across multiple cities',
	'klinikPage.hero.lead': 'Find an RS Krakatau Medika clinic near you, with full address, phone, and service hours.',
	'klinikPage.address': 'Address',
	'klinikPage.phone': 'Phone',
	'klinikPage.hours': 'Service Hours',
	'klinikPage.corporate': 'Also serves corporate clients',

	// /layanan-bisnis
	'bisnisPage.hero.title': 'Healthcare services for your company',
	'bisnisPage.hero.lead': 'Healthcare partnerships for your employees: checkups, service contracts, and clinic cooperation.',
	'bisnisPage.body.heading': 'Solutions for companies & industries',
	'bisnisPage.body.para1': 'We take care of your employees\u2019 health needs, from periodic medical checkups to emergency care through the nearest clinic.',
	'bisnisPage.body.para2': 'Our business team will design a partnership package to fit your needs, scale, and operational locations.',
	'bisnisPage.body.para3': 'Contact us for a healthcare service partnership offer.',
	'bisnisPage.body.clinicsHeading': 'Corporate partner clinics',

	// /profil
	'profilPage.body.heading': 'About RS Krakatau Medika',
	'profilPage.body.para1': 'RS Krakatau Medika is a private hospital in Cilegon that has served the community since 2005 with holistic, modern, and heartfelt care.',
	'profilPage.body.para2': 'We provide 24/7 emergency care, specialist doctors, and inpatient facilities backed by technology and partnerships with BPJS and major insurers.',

	// /about
	'aboutPage.hero.title': 'A hospital that grows with your family',
	'aboutPage.hero.lead': 'Since 2005, we have been committed to delivering holistic, modern, and heartfelt healthcare.',
	'aboutPage.visionMisi.eyebrow': 'Vision & Mission',
	'aboutPage.visionMisi.title': 'Our direction and purpose',
	'aboutPage.vision': 'Vision',
	'aboutPage.mission': 'Mission',
	'aboutPage.values.eyebrow': 'Our Values',
	'aboutPage.values.title': 'The values we uphold',
	'aboutPage.values.lead': 'Four values that anchor everything we do.',

	// /contact
	'contactPage.info.heading': 'Contact Information',
	'contactPage.info.address': 'Address',
	'contactPage.info.phone': 'Phone',
	'contactPage.info.email': 'Email',
	'contactPage.info.hours': 'Service Hours',
	'contactPage.emergency.badge': '24h ER',
	'contactPage.emergency.body': 'For emergencies, call us directly:',
	'contactPage.form.heading': 'Send a Message',
	'contactPage.form.name': 'Full Name',
	'contactPage.form.email': 'Email',
	'contactPage.form.phone': 'Phone Number',
	'contactPage.form.message': 'Message',
	'contactPage.form.messagePlaceholder': 'Tell us what you need, e.g. a question about services or clinic schedules.',
	'contactPage.form.submit': 'Send Message',
	'contactPage.form.consent': 'I consent to my data being processed to answer this request (per Indonesia Law No. 27 of 2022 on Personal Data Protection).',
	'contactPage.form.privacyNote': 'Your data is used only to respond to this message and is never shared with third parties.',
	'contactPage.form.sending': 'Sending…',
	'contactPage.form.success': 'Your message has been sent. Our team will contact you shortly.',
	'contactPage.form.error': 'Failed to send your message. Please try again, or call us directly.',
	'contactPage.form.invalid': 'Please fill in the required fields correctly.',
	'contactPage.form.consentError': 'Please give your consent to data processing first.',
	'contactPage.form.confirmTitle': 'Confirm submission',
	'contactPage.form.confirmSend': 'Confirm & Send',
	'contactPage.form.confirmCancel': 'Cancel',

	// /blog
	'blogPage.hero.title': 'Health insights from our doctors',
	'blogPage.hero.lead': 'Educational articles written and reviewed by our medical team.',

	// /km-news
	'kmNewsPage.note.title': 'News coming soon',
	'kmNewsPage.note.body': 'The latest news and announcements from RS Krakatau Medika will be available on this page soon.',

	// /lelang-pengadaan
	'lelangPengadaanPage.note.title': 'Tender announcements coming soon',
	'lelangPengadaanPage.note.body': 'Tender and procurement announcements will be published on this page transparently.',

	// /laporan-keuangan
	'laporanKeuanganPage.note.title': 'Financial reports coming soon',
	'laporanKeuanganPage.note.body': 'Financial and public reporting documents will be available on this page as part of our transparency commitment.',

	// /karir
	'karirPage.note.title': 'Job openings coming soon',
	'karirPage.note.body': 'Career opportunities at RS Krakatau Medika will be posted on this page. Keep an eye on our updates.',

	// Blog
	'post.updated': 'Updated:',
	'post.back': '← All Articles',
	'post.availableIn': 'This article is also available in:',
	'post.fallbackNotice': 'This article is not yet available in English.',
	'post.readIn': 'Read in',

	// Skeleton demo
	'demo.hero.eyebrow': 'UI Demo',
	'demo.hero.title': 'Skeleton loading pattern',
	'demo.hero.lead': 'A shimmer placeholder shows while content is "loading", then swaps to the real content — no layout shift.',
	'demo.trigger': 'Simulate Loading',
	'demo.loading': 'Loading content…',
	'demo.done': 'Content loaded ✓',
};

export const ui: Record<Lang, Record<UiKeys, string>> = { id, en };
