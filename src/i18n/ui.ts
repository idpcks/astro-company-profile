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
  'page.eyebrow.services': 'Semua Layanan',
  'page.title.contact': 'Kontak',
  'page.title.blog': 'Blog Kesehatan',
  'page.title.demo': 'Demo Skeleton',
  'page.title.galeri': 'Galeri',
  'page.title.wbs': 'WBS',
  'page.title.klinik': 'Klinik',
  'page.title.layananBisnis': 'Layanan Bisnis',
  'page.title.profil': 'Profil',
  'page.title.sejarah': 'Sejarah',
  'page.title.visiMisi': 'Visi & Misi',
  'page.title.kmNews': 'KM News',
  'page.title.lelangPengadaan': 'Lelang Pengadaan',
  'page.title.laporanKeuangan': 'Laporan Keuangan',
  'page.title.karir': 'Karir',
  'page.title.strukturOrganisasi': 'Struktur Organisasi',
  'page.title.manajemen': 'Manajemen',
  'page.title.tataKelolaPerusahaan': 'Tata Kelola Perusahaan',
  'page.title.penghargaan': 'Penghargaan',
  'page.title.akreditasi': 'Akreditasi',
  'page.title.kemitraan': 'Kemitraan & Pengadaan',
  'page.description.home':
    'Rumah sakit swasta di Cilegon dengan IGD 24 jam, dokter spesialis, dan fasilitas modern.',
  'page.description.about':
    'Mengenal RS Krakatau Medika: visi, misi, dan nilai yang kami pegang dalam melayani pasien dan keluarga.',
  'page.description.services':
    'Layanan RS Krakatau Medika: IGD 24 jam, poliklinik spesialis, rawat inap, bedah, laboratorium, dan medical checkup.',
  'page.description.contact':
    'Hubungi RS Krakatau Medika: alamat, telepon, email, dan jam layanan kami.',
  'page.description.blog':
    'Artikel edukasi kesehatan dari dokter RS Krakatau Medika: pencegahan penyakit, gaya hidup sehat, dan informasi layanan.',
  'page.description.demo': 'Halaman demo pola loading skeleton.',
  'page.description.galeri':
    'Galeri foto fasilitas dan kegiatan RS Krakatau Medika (sedang dalam penyiapan).',
  'page.description.wbs':
    'Sistem Pelaporan Pelanggaran (WBS) RS Krakatau Medika: kanal pengaduan resmi, rahasia, dan independen.',
  'page.description.klinik':
    'Klinik RS Krakatau Medika di berbagai kota: alamat, telepon, jam layanan, dan layanan yang tersedia.',
  'page.description.layananBisnis':
    'Layanan kesehatan untuk perusahaan dan industri: medical checkup karyawan, kontrak pelayanan, dan kerja sama klinik.',
  'page.description.profil': 'Profil RS Krakatau Medika: komitmen, fasilitas, dan layanan kami.',
  'page.description.sejarah': 'Sejarah Perusahaan.',
  'page.description.visiMisi':
    'Visi, misi, dan nilai yang menjadi arah serta fondasi pelayanan RS Krakatau Medika.',
  'page.description.kmNews': 'Kabar dan berita terbaru RS Krakatau Medika.',
  'page.description.lelangPengadaan':
    'Informasi lelang dan pengadaan barang/jasa di lingkungan RS Krakatau Medika.',
  'page.description.laporanKeuangan':
    'Laporan keuangan dan dokumen publik RS Krakatau Medika yang transparan dan akuntabel.',
  'page.description.karir': 'Lowongan kerja dan peluang berkarir di RS Krakatau Medika.',
  'page.description.strukturOrganisasi':
    'Struktur organisasi RS Krakatau Medika: hierarki, fungsi, dan tanggung jawab tiap unit.',
  'page.description.manajemen':
    'Jajaran manajemen dan direksi RS Krakatau Medika yang memimpin pelayanan dan operasional.',
  'page.description.tataKelolaPerusahaan':
    'Tata kelola perusahaan RS Krakatau Medika: GCG, etika, kebijakan, dan akuntabilitas.',
  'page.description.penghargaan': 'Penghargaan dan sertifikasi yang diraih RS Krakatau Medika.',
  'page.description.akreditasi': 'Status akreditasi dan mutu layanan RS Krakatau Medika.',
  'page.description.kemitraan':
    'Kemitraan RS Krakatau Medika: kerjasama, CSR, dan lelang pengadaan barang/jasa.',
  'page.title.privacy': 'Kebijakan Privasi',
  'page.description.privacy':
    'Kebijakan privasi RS Krakatau Medika: cara kami mengumpulkan, menggunakan, dan melindungi data pribadi Anda sesuai UU PDP.',
  'page.title.terms': 'Syarat & Ketentuan',
  'page.description.terms': 'Syarat dan ketentuan penggunaan website RS Krakatau Medika.',
  'page.title.faq': 'Pertanyaan Sering Diajukan (FAQ)',
  'page.description.faq':
    'Daftar pertanyaan dan jawaban umum seputar layanan, fasilitas, dan kebijakan RS Krakatau Medika.',
  'page.title.reviews': 'Ulasan & Testimoni Pasien',
  'page.description.reviews':
    'Ulasan dan testimoni pasien mengenai pengalaman berobat di RS Krakatau Medika.',
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
  'hero.title': 'IGD 24 jam, dokter spesialis, dan rawat inap dalam satu gedung',
  'hero.cta.services': 'Lihat Layanan',
  'hero.cta.contact': 'Hubungi Kami',
  'hero.trust.doctors': 'Dokter spesialis berbagai bidang',
  'hero.trust.facilities': 'Fasilitas modern',
  'hero.trust.service': 'Pelayanan ramah pasien',
  'hero.emergency.title': 'Kondisi gawat darurat?',
  'hero.emergency.body': 'Tim IGD kami siaga 24 jam, termasuk hari libur.',
  'hero.emergency.cta': 'Hubungi IGD',

  // Services
  'services.eyebrow': 'Layanan Kami',
  'services.title': 'Satu rumah sakit untuk seluruh keluarga',
  'services.lead':
    'IGD 24 jam, poliklinik spesialis, rawat inap, bedah, dan laboratorium dalam satu gedung.',

  // AboutUs (section beranda)
  'about.eyebrow': 'Tentang Kami',
  'about.title': 'Melayani masyarakat Cilegon sejak 2005',
  'about.cta': 'Lihat Profil Kami',
  'about.stat.founded': 'Tahun berdiri',
  'about.stat.doctors': 'Dokter & spesialis',
  'about.stat.patients': 'Pasien per tahun',
  'about.highlight.accreditation': 'Standar akreditasi nasional',
  'about.highlight.records': 'Rekam medis elektronik terintegrasi',
  'about.highlight.insurance': 'Kerja sama dengan BPJS & asuransi utama',

  // Testimonials
  'testimonials.eyebrow': 'Testimoni',
  'testimonials.title': 'Apa kata pasien kami',
  'testimonials.lead': 'Pengalaman pasien yang berobat di RS Krakatau Medika.',

  // CTASection
  'cta.title': 'Butuh info layanan atau jadwal poliklinik?',
  'cta.lead': 'Hubungi kami untuk jadwal poliklinik, layanan, atau pertanyaan seputar kesehatan.',
  'cta.contact': 'Hubungi Kami',
  'cta.phone': 'Telepon',

  // Footer
  'footer.menu': 'Menu',
  'footer.contact': 'Kontak',
  'footer.hours': 'Jam Layanan',
  'footer.social': 'Sosial media',
  'footer.links': 'Tautan',
  'footer.legal': 'Legal & Bantuan',
  'footer.link.faq': 'FAQ',
  'footer.link.privacy': 'Kebijakan Privasi',
  'footer.link.terms': 'Syarat & Ketentuan',
  'footer.link.reviews': 'Ulasan Pasien',
  'footer.rights': 'Semua hak dilindungi.',
  'footer.emergencyLabel': 'IGD',

  // Share widget (social share buttons)
  'share.title': 'Bagikan halaman ini',
  'share.whatsapp': 'Bagikan ke WhatsApp',
  'share.facebook': 'Bagikan ke Facebook',
  'share.x': 'Bagikan ke X (Twitter)',
  'share.telegram': 'Bagikan ke Telegram',
  'share.linkedin': 'Bagikan ke LinkedIn',
  'share.email': 'Bagikan lewat email',
  'share.copy': 'Salin tautan',
  'share.copied': 'Tautan disalin!',
  'sidebar.cta.title': 'Mau konsultasi?',
  'sidebar.cta.lead': 'Tanya jadwal poliklinik atau layanan lain via WhatsApp.',
  'sidebar.cta.whatsapp': 'Chat WhatsApp',
  'sidebar.cta.call': 'Telepon RSKM',
  'sidebar.cta.contact': 'Hubungi Kami',

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
  'pagehero.eyebrow.faq': 'Bantuan & FAQ',

  // Halaman Galeri
  'galeriPage.hero.title': 'Galeri Foto & Kegiatan',
  'galeriPage.hero.lead': 'Dokumentasi fasilitas, layanan, dan kegiatan RS Krakatau Medika.',
  'galeriPage.note.title': 'Galeri sedang disiapkan',
  'galeriPage.note.body':
    'Kami sedang mengumpulkan dan mengkurasi foto fasilitas serta kegiatan rumah sakit. Konten galeri akan tersedia di halaman ini segera.',
  'galeriPage.video.title': 'Video',

  // Halaman WBS
  'wbsPage.hero.title': 'Sistem Pelaporan Pelanggaran (WBS)',
  'wbsPage.hero.lead':
    'Kanal resmi dan rahasia untuk melaporkan dugaan pelanggaran di lingkungan rumah sakit.',
  'wbsPage.body.heading': 'Melapor itu dilindungi',
  'wbsPage.body.para1':
    'WBS adalah sarana bagi pegawai, pasien, dan mitra untuk melaporkan dugaan pelanggaran etik, gratifikasi, atau praktik tidak sehat lainnya. Identitas pelapor dijaga kerahasiaannya, dan pelaporan dengan itikad baik mendapat perlindungan.',
  'wbsPage.body.para2':
    'Setiap laporan ditindaklanjuti secara independen oleh tim penanganan WBS sesuai ketentuan peraturan perundang-undangan.',
  'wbsPage.body.contactHeading': 'Kanal Pengaduan',
  'wbsPage.body.contactBody': 'Sampaikan pengaduan Anda melalui email khusus berikut:',

  // Halaman /klinik
  'klinikPage.hero.title': 'Klinik kami di berbagai kota',
  'klinikPage.hero.lead':
    'Alamat, telepon, dan jam layanan klinik RS Krakatau Medika di berbagai kota.',
  'klinikPage.address': 'Alamat',
  'klinikPage.phone': 'Telepon',
  'klinikPage.hours': 'Jam Layanan',
  'klinikPage.corporate': 'Juga melayani korporat',

  // Halaman /layanan-bisnis
  'bisnisPage.hero.title': 'Layanan kesehatan untuk perusahaan Anda',
  'bisnisPage.hero.lead':
    'Kemitraan pelayanan kesehatan untuk karyawan: medical checkup, kontrak pelayanan, dan klinik kerja sama.',
  'bisnisPage.body.heading': 'Kerja sama kesehatan untuk perusahaan & industri',
  'bisnisPage.body.para1':
    'Kami melayani kebutuhan kesehatan karyawan Anda, dari medical checkup berkala hingga penanganan darurat melalui klinik terdekat.',
  'bisnisPage.body.para2':
    'Tim bisnis kami akan menyusun paket kerja sama sesuai kebutuhan, skala, dan lokasi operasional perusahaan Anda.',
  'bisnisPage.body.para3': 'Hubungi kami untuk mendapatkan penawaran kerja sama layanan kesehatan.',
  'bisnisPage.body.clinicsHeading': 'Klinik mitra korporat',

  // Halaman /profil
  'profilPage.body.heading': 'Sekilas RS Krakatau Medika',
  'profilPage.body.para1':
    'RS Krakatau Medika adalah rumah sakit swasta di Cilegon yang telah melayani masyarakat sejak 2005.',
  'profilPage.body.para2':
    'Kami menyediakan IGD 24 jam, dokter spesialis, dan fasilitas rawat inap, serta kerja sama dengan BPJS dan asuransi utama.',

  // Halaman /about
  'aboutPage.hero.title': 'Rumah sakit swasta di Cilegon',
  'aboutPage.hero.lead':
    'Sejak 2005, kami melayani pasien dengan IGD 24 jam, dokter spesialis, dan rawat inap.',
  'profilPage.hero.title': 'Profil Perusahaan',
  'profilPage.hero.lead': 'Identitas, komitmen, dan perjalanan RS Krakatau Medika sejak berdiri.',
  'aboutPage.visionMisi.eyebrow': 'Visi & Misi',
  'aboutPage.visionMisi.title': 'Arah dan tujuan kami',
  'aboutPage.vision': 'Visi',
  'aboutPage.mission': 'Misi',
  'aboutPage.values.eyebrow': 'Nilai Kami',
  'aboutPage.values.title': 'Nilai yang kami pegang',
  'aboutPage.values.lead': 'Empat nilai ini menuntun cara kami merawat pasien.',

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
  'contactPage.form.messagePlaceholder':
    'Ceritakan kebutuhan Anda, misal: pertanyaan layanan atau jadwal poliklinik.',
  'contactPage.form.submit': 'Kirim Pesan',
  'contactPage.form.consent':
    'Saya setuju data yang saya isi diproses untuk menjawab permintaan ini (sesuai UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi).',
  'contactPage.form.privacyNote':
    'Data Anda hanya digunakan untuk merespons pesan ini dan tidak dibagikan kepada pihak lain.',
  'contactPage.form.sending': 'Mengirim…',
  'contactPage.form.success': 'Pesan Anda terkirim. Tim kami akan segera menghubungi Anda.',
  'contactPage.form.error':
    'Pesan gagal terkirim. Silakan coba lagi, atau hubungi kami langsung lewat telepon.',
  'contactPage.form.invalid': 'Mohon lengkapi isian yang wajib dengan benar.',
  'contactPage.form.emailInvalid':
    'Format email tidak valid. Contoh: nama@domain.com (pastikan ada titik di domain).',
  'contactPage.form.phoneInvalid':
    'Format nomor HP tidak valid. Gunakan format Indonesia, mis. 081234567890 atau +6281234567890.',
  'contactPage.form.consentError': 'Mohon berikan izin pemrosesan data Anda terlebih dahulu.',
  'contactPage.form.confirmTitle': 'Konfirmasi pengiriman',
  'contactPage.form.confirmSend': 'Ya, Kirim',
  'contactPage.form.confirmCancel': 'Batal',

  // Halaman /blog
  'blogPage.hero.title': 'Wawasan kesehatan dari dokter kami',
  'blogPage.hero.lead': 'Artikel edukasi yang ditulis dan direview oleh tim medis kami.',

  // Halaman /km-news
  'kmNewsPage.note.title': 'Berita & Pengumuman',
  'kmNewsPage.note.body':
    'Kabar dan pengumuman terbaru RS Krakatau Medika akan tayang di halaman ini.',

  // Halaman /lelang-pengadaan
  'lelangPengadaanPage.note.title': 'Pengumuman Lelang',
  'lelangPengadaanPage.note.body':
    'Informasi lelang pengadaan barang dan jasa akan kami tampilkan di halaman ini.',

  // Halaman /laporan-keuangan
  'laporanKeuanganPage.note.title': 'Laporan Keuangan',
  'laporanKeuanganPage.note.body':
    'Dokumen laporan keuangan dan publik akan tersedia di halaman ini.',

  // Halaman /karir
  'karirPage.note.title': 'Lowongan Pekerjaan',
  'karirPage.note.body': 'Lowongan kerja di RS Krakatau Medika akan kami unggah di halaman ini.',

  // Blog komponen
  'post.updated': 'Diperbarui:',
  'post.back': '← Semua Artikel',
  'post.relatedTitle': 'Artikel Terkait',
  'toc.title': 'Daftar Isi',
  'post.writtenBy': 'Ditulis oleh',
  'post.publishedLabel': 'Tanggal terbit',
  'post.availableIn': 'Artikel ini juga tersedia dalam:',
  'post.fallbackNotice': 'Artikel ini belum tersedia dalam Bahasa Inggris.',
  'post.readIn': 'Baca dalam',

  // Skeleton demo
  'demo.hero.eyebrow': 'Demo UI',
  'demo.hero.title': 'Pola loading skeleton',
  'demo.hero.lead':
    'Placeholder shimmer tampil saat konten "dimuat", lalu ditukar dengan konten asli tanpa layout shift.',
  'demo.trigger': 'Simulasikan Loading',
  'demo.loading': 'Memuat konten…',
  'demo.done': 'Konten dimuat ✓',

  // Empty state — reusable komponen EmptyState.astro (SOT)
  'emptyState.title': 'Tidak ada data',
  'emptyState.description': 'Belum ada konten yang tersedia di sini.',
  'emptyState.action': 'Muat ulang',
  'gallery.empty.title': 'Tidak ada gambar',
  'gallery.empty.description': 'Belum ada gambar untuk ditampilkan.',
  'gallery.empty.action': 'Lihat semua',
  'gallery.filterEmpty.title': 'Tidak ada gambar cocok',
  'gallery.filterEmpty.description': 'Coba pilih kategori lain.',
  'blog.empty.title': 'Tidak ada artikel',
  'blog.empty.description': 'Belum ada artikel yang dipublikasikan.',
  'blog.empty.action': 'Lihat semua artikel',
  'search.empty.title': 'Tidak ada hasil',
  'search.empty.description': 'Tidak ada hasil yang cocok dengan pencarian Anda.',
  'search.empty.action': 'Hapus filter',
  'services.empty.title': 'Layanan tidak ditemukan',
  'services.empty.description': 'Belum ada layanan yang tersedia.',
  'services.empty.action': 'Lihat semua layanan',
  'testimonials.empty.title': 'Belum ada testimonial',
  'testimonials.empty.description': 'Belum ada testimonial dari pasien yang kami miliki.',
  'testimonials.empty.action': 'Lihat semua testimonial',
  'clinics.empty.title': 'Klinik tidak ditemukan',
  'clinics.empty.description': 'Belum ada klinik yang terdaftar di lokasi ini.',
  'clinics.empty.action': 'Lihat semua klinik',
  'faq.empty.title': 'Tidak ada pertanyaan',
  'faq.empty.description': 'Belum ada pertanyaan yang diajukan.',
  'faq.empty.action': 'Ajukan pertanyaan',
  'faq.search.placeholder': 'Cari pertanyaan atau kata kunci (mis. BPJS, IGD, jadwal)...',
  'faq.search.clear': 'Reset pencarian',
  'faq.support.title': 'Masih Punya Pertanyaan?',
  'faq.support.body':
    'Tim layanan pelanggan dan staf medis RS Krakatau Medika siap membantu menjawab kebutuhan Anda 24/7.',
  'faq.support.contactBtn': 'Formulir Kontak',
  'faq.support.waBtn': 'WhatsApp RSKM',
  'karir.empty.title': 'Belum ada lowongan',
  'karir.empty.description': 'Belum ada lowongan kerja yang saat ini dibuka.',
  'karir.empty.action': 'Lihat semua lowongan',
  'kmNews.empty.title': 'Belum ada berita',
  'kmNews.empty.description': 'Belum ada berita dan pengumuman yang dipublikasikan.',
  'kmNews.empty.action': 'Lihat semua berita',
  'lelangPengadaan.empty.title': 'Belum ada lelang',
  'lelangPengadaan.empty.description': 'Belum ada pengumuman lelang yang tersedia.',
  'lelangPengadaan.empty.action': 'Lihat semua lelang',
  'laporanKeuangan.empty.title': 'Belum ada laporan',
  'laporanKeuangan.empty.description': 'Belum ada laporan keuangan yang tersedia.',
  'laporanKeuangan.empty.action': 'Lihat semua laporan',

  // PageHero eyebrows — halaman baru (submenu "Tentang Kami" & "Mitra & Transparansi")
  'pagehero.eyebrow.sejarah': 'Sejarah',
  'pagehero.eyebrow.strukturOrganisasi': 'Organisasi',
  'pagehero.eyebrow.manajemen': 'Manajemen',
  'pagehero.eyebrow.tataKelolaPerusahaan': 'Tata Kelola',
  'pagehero.eyebrow.penghargaan': 'Penghargaan',
  'pagehero.eyebrow.akreditasi': 'Akreditasi',
  'pagehero.eyebrow.kemitraan': 'Kemitraan',

  // Halaman /sejarah
  'sejarahPage.hero.title': 'Sejarah Perusahaan',
  'sejarahPage.hero.lead':
    'Perjalanan RS Krakatau Medika: dari yang kecil menjadi mitra kesehatan keluarga Cilegon.',
  'sejarahPage.body.heading': 'Dari awal berdiri hingga kini',
  'sejarahPage.body.para1':
    'RS Krakatau Medika berdiri pada tahun 2005 sebagai rumah sakit swasta di Cilegon, Banten. Berawal dari kebutuhan pelayanan kesehatan yang dekat dengan kawasan industri, rumah sakit hadir untuk melayani karyawan industri serta masyarakat luas.',
  'sejarahPage.body.para2':
    'Selama bertahun-tahun, kami terus menambah fasilitas dan layanan: poliklinik spesialis, rawat inap, bedah, laboratorium, hingga IGD yang beroperasi 24 jam.',
  'sejarahPage.body.para3':
    'Kami berkomitmen tumbuh bersama masyarakat, memperluas jangkauan layanan, dan menjaga mutu melalui akreditasi serta pengembangan sumber daya manusia secara berkelanjutan.',

  // Halaman /struktur-organisasi
  'strukturOrganisasiPage.hero.title': 'Struktur Organisasi',
  'strukturOrganisasiPage.hero.lead':
    'Susunan organisasi yang jelas memastikan setiap unit menjalankan peran dan tanggung jawabnya.',
  'strukturOrganisasiPage.body.heading': 'Tata kelola unit kerja',
  'strukturOrganisasiPage.body.para1':
    'Struktur organisasi RS Krakatau Medika disusun agar keputusan dapat diambil cepat dan setiap unit memiliki fungsi yang jelas, mulai dari direksi, komite medis, hingga unit pelayanan.',
  'strukturOrganisasiPage.body.para2':
    'Bagan struktur organisasi yang resmi akan kami tampilkan di halaman ini.',

  // Halaman /manajemen
  'manajemenPage.hero.title': 'Manajemen',
  'manajemenPage.hero.lead':
    'Jajaran manajemen dan direksi yang memimpin pelayanan serta operasional rumah sakit.',
  'manajemenPage.body.heading': 'Kepemimpinan kami',
  'manajemenPage.body.para1':
    'Manajemen RS Krakatau Medika dipimpin oleh direksi yang berfokus pada mutu pelayanan, keselamatan pasien, dan pengembangan berkelanjutan.',
  'manajemenPage.body.para2':
    'Daftar nama dan peran jajaran manajemen akan kami muat di halaman ini.',

  // Halaman /tata-kelola-perusahaan
  'tataKelolaPage.hero.title': 'Tata Kelola Perusahaan',
  'tataKelolaPage.hero.lead':
    'Kami menjalankan praktik tata kelola yang baik (Good Corporate Governance) di seluruh lini.',
  'tataKelolaPage.body.heading': 'Komitmen pada GCG',
  'tataKelolaPage.body.para1':
    'RS Krakatau Medika menerapkan prinsip transparansi, akuntabilitas, tanggung jawab, independensi, dan kewajaran dalam seluruh pengambilan keputusan.',
  'tataKelolaPage.body.para2':
    'Kebijakan tata kelola, etika bisnis, dan pengendalian internal menjadi dasar hubungan kami dengan pasien, mitra, dan pemangku kepentingan.',

  // Halaman /penghargaan
  'penghargaanPage.hero.title': 'Penghargaan & Sertifikasi',
  'penghargaanPage.hero.lead':
    'Pengakuan atas komitmen mutu dan pelayanan yang kami raih dari berbagai lembaga.',
  'penghargaanPage.body.heading': 'Pengakuan atas mutu',
  'penghargaanPage.body.para1':
    'Daftar penghargaan dan sertifikasi yang diraih RS Krakatau Medika akan kami tampilkan di halaman ini.',

  // Halaman /akreditasi
  'akreditasiPage.hero.title': 'Akreditasi & Mutu',
  'akreditasiPage.hero.lead':
    'Standar mutu nasional menjadi acuan utama pelayanan di RS Krakatau Medika.',
  'akreditasiPage.body.heading': 'Standar mutu pelayanan',
  'akreditasiPage.body.para1':
    'RS Krakatau Medika berkomitmen memenuhi standar akreditasi rumah sakit nasional melalui audit internal berkala, pelaporan mutu, dan keselamatan pasien.',
  'akreditasiPage.body.para2':
    'Status dan sertifikat akreditasi terkini akan kami publikasikan di halaman ini.',

  // Halaman /kemitraan
  'kemitraanPage.hero.title': 'Kemitraan & Pengadaan',
  'kemitraanPage.hero.lead':
    'Wujud kolaborasi kami dengan mitra kerja, CSR, dan proses pengadaan barang/jasa yang transparan.',
  'kemitraanPage.section.kerjasama.title': 'Kerja Sama',
  'kemitraanPage.section.kerjasama.body':
    'Kami terbuka untuk menjalin kerja sama pelayanan kesehatan dengan perusahaan, fasilitas layanan kesehatan lain, dan pihak terkait demi perluasan akses layanan.',
  'kemitraanPage.section.csr.title': 'CSR & Tanggung Jawab Sosial',
  'kemitraanPage.section.csr.body':
    'Program tanggung jawab sosial RS Krakatau Medika diarahkan pada kesehatan masyarakat, pendidikan, dan pemberdayaan komunitas di sekitar Cilegon.',
  'kemitraanPage.section.lelang.label': 'Lelang & Pengadaan',
  'kemitraanPage.section.lelang.title': 'Lelang Pengadaan Barang/Jasa',
  'kemitraanPage.section.lelang.body':
    'Informasi pengadaan dan lelang barang/jasa di lingkungan RS Krakatau Medika disampaikan secara terbuka agar proses berjalan transparan dan akuntabel.',
} as const;

export type UiKeys = keyof typeof id;

/** Fallback `id` dijamin oleh tFactory; type memaksa `en` lengkap. */
const en: Record<UiKeys, string> = {
  // Judul & meta deskripsi halaman
  'page.title.home': 'Home',
  'page.title.about': 'About Us',
  'page.title.services': 'Services',
  'page.eyebrow.services': 'All Services',
  'page.title.contact': 'Contact',
  'page.title.blog': 'Health Blog',
  'page.title.demo': 'Skeleton Demo',
  'page.title.galeri': 'Gallery',
  'page.title.wbs': 'WBS',
  'page.title.klinik': 'Clinics',
  'page.title.layananBisnis': 'Business Services',
  'page.title.profil': 'Profile',
  'page.title.sejarah': 'History',
  'page.title.visiMisi': 'Vision & Mission',
  'page.title.kmNews': 'KM News',
  'page.title.lelangPengadaan': 'Tender & Procurement',
  'page.title.laporanKeuangan': 'Financial Reports',
  'page.title.karir': 'Careers',
  'page.title.strukturOrganisasi': 'Organizational Structure',
  'page.title.manajemen': 'Management',
  'page.title.tataKelolaPerusahaan': 'Corporate Governance',
  'page.title.penghargaan': 'Awards',
  'page.title.akreditasi': 'Accreditation',
  'page.title.kemitraan': 'Partnership & Procurement',
  'page.description.home':
    'A private hospital in Cilegon with 24/7 emergency care, specialist doctors, and modern facilities.',
  'page.description.about':
    'Get to know RS Krakatau Medika: the vision, mission, and values behind our care for patients and families.',
  'page.description.services':
    'Services at RS Krakatau Medika: 24/7 emergency, specialist clinics, inpatient care, surgery, laboratory, and checkups.',
  'page.description.contact':
    'Contact RS Krakatau Medika: address, phone, email, and service hours.',
  'page.description.blog':
    'Health education articles from RS Krakatau Medika doctors: prevention, healthy living, and service information.',
  'page.description.demo': 'Skeleton loading pattern demo page.',
  'page.description.galeri':
    'Photo gallery of RS Krakatau Medika facilities and activities (in preparation).',
  'page.description.wbs':
    'Whistleblowing System (WBS) of RS Krakatau Medika: an official, confidential, and independent reporting channel.',
  'page.description.klinik':
    'RS Krakatau Medika clinics across multiple cities: address, phone, service hours, and available services.',
  'page.description.layananBisnis':
    'Corporate healthcare services: employee checkups, service contracts, and clinic partnerships.',
  'page.description.profil':
    'Profile of RS Krakatau Medika: our commitment, facilities, and services.',
  'page.description.sejarah': 'The history of PT Krakatau Medika.',
  'page.description.visiMisi':
    'The vision, mission, and values that guide our care at RS Krakatau Medika.',
  'page.description.kmNews': 'Latest news and updates from RS Krakatau Medika.',
  'page.description.lelangPengadaan': 'Tender and procurement announcements at RS Krakatau Medika.',
  'page.description.laporanKeuangan':
    'Financial and public reports of RS Krakatau Medika, open to the public.',
  'page.description.karir': 'Job openings and career opportunities at RS Krakatau Medika.',
  'page.description.strukturOrganisasi':
    'Organizational structure of RS Krakatau Medika: hierarchy, functions, and responsibilities of each unit.',
  'page.description.manajemen':
    'Management and board of RS Krakatau Medika leading services and operations.',
  'page.description.tataKelolaPerusahaan':
    'Corporate governance at RS Krakatau Medika: GCG, ethics, policies, and accountability.',
  'page.description.penghargaan': 'Awards and certifications achieved by RS Krakatau Medika.',
  'page.description.akreditasi': 'Accreditation status and service quality at RS Krakatau Medika.',
  'page.description.kemitraan':
    'RS Krakatau Medika partnerships: collaboration, CSR, and goods/services procurement.',
  'page.title.privacy': 'Privacy Policy',
  'page.description.privacy':
    'RS Krakatau Medika privacy policy: how we collect, use, and protect your personal data in accordance with PDP Law.',
  'page.title.terms': 'Terms of Service',
  'page.description.terms': 'Terms and conditions for using the RS Krakatau Medika website.',
  'page.title.faq': 'Frequently Asked Questions (FAQ)',
  'page.description.faq':
    'Frequently asked questions about RS Krakatau Medika services, facilities, and policies.',
  'page.title.reviews': 'Patient Reviews & Testimonials',
  'page.description.reviews':
    'Patient reviews and testimonials about their experience at RS Krakatau Medika.',

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
  'hero.title': '24/7 emergency care, specialist doctors, and inpatient wards under one roof',
  'hero.cta.services': 'Our Services',
  'hero.cta.contact': 'Contact Us',
  'hero.trust.doctors': 'Specialist doctors across fields',
  'hero.trust.facilities': 'Modern facilities',
  'hero.trust.service': 'Patient-friendly service',
  'hero.emergency.title': 'Emergency situation?',
  'hero.emergency.body': 'Our ER team is on standby 24/7, including holidays.',
  'hero.emergency.cta': 'Contact ER',

  // Services
  'services.eyebrow': 'Our Services',
  'services.title': 'One hospital for the whole family',
  'services.lead':
    'Our ER, specialist clinics, inpatient wards, surgery, and laboratory are all in one building.',

  // AboutUs
  'about.eyebrow': 'About Us',
  'about.title': 'Serving Cilegon since 2005',
  'about.cta': 'See Our Profile',
  'about.stat.founded': 'Established',
  'about.stat.doctors': 'Doctors & specialists',
  'about.stat.patients': 'Patients per year',
  'about.highlight.accreditation': 'National accreditation standards',
  'about.highlight.records': 'Integrated electronic medical records',
  'about.highlight.insurance': 'Partnered with BPJS & major insurers',

  // Testimonials
  'testimonials.eyebrow': 'Testimonials',
  'testimonials.title': 'What our patients say',
  'testimonials.lead': 'What patients say about their care at RS Krakatau Medika.',

  // CTASection
  'cta.title': 'Need service info or clinic hours?',
  'cta.lead': 'Contact us about clinic schedules, services, or health questions.',
  'cta.contact': 'Contact Us',
  'cta.phone': 'Call',

  // Footer
  'footer.menu': 'Menu',
  'footer.contact': 'Contact',
  'footer.hours': 'Service Hours',
  'footer.social': 'Social media',
  'footer.links': 'Links',
  'footer.legal': 'Legal & Help',
  'footer.link.faq': 'FAQ',
  'footer.link.privacy': 'Privacy Policy',
  'footer.link.terms': 'Terms of Service',
  'footer.link.reviews': 'Patient Reviews',
  'footer.rights': 'All rights reserved.',
  'footer.emergencyLabel': 'ER',

  // Share widget (social share buttons)
  'share.title': 'Share this page',
  'share.whatsapp': 'Share on WhatsApp',
  'share.facebook': 'Share on Facebook',
  'share.x': 'Share on X (Twitter)',
  'share.telegram': 'Share on Telegram',
  'share.linkedin': 'Share on LinkedIn',
  'share.email': 'Share via email',
  'share.copy': 'Copy link',
  'share.copied': 'Link copied!',
  'sidebar.cta.title': 'Need to talk?',
  'sidebar.cta.lead': 'Ask about clinic schedules or services on WhatsApp.',
  'sidebar.cta.whatsapp': 'Chat on WhatsApp',
  'sidebar.cta.call': 'Call RSKM',
  'sidebar.cta.contact': 'Contact Us',

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
  'pagehero.eyebrow.faq': 'Help & FAQ',

  // Gallery page
  'galeriPage.hero.title': 'Gallery & Activities',
  'galeriPage.hero.lead':
    'Documentation of RS Krakatau Medika facilities, services, and activities.',
  'galeriPage.note.title': 'Gallery coming soon',
  'galeriPage.note.body':
    'We are gathering and curating photos of our facilities and hospital activities. Gallery content will be available on this page soon.',
  'galeriPage.video.title': 'Videos',

  // WBS page
  'wbsPage.hero.title': 'Whistleblowing System (WBS)',
  'wbsPage.hero.lead':
    'An official and confidential channel to report suspected misconduct within the hospital.',
  'wbsPage.body.heading': 'Reporting is protected',
  'wbsPage.body.para1':
    'The WBS is a channel for employees, patients, and partners to report suspected ethical violations, gratuities, or other unhealthy practices. Reporter identity is kept confidential, and reports made in good faith are protected.',
  'wbsPage.body.para2':
    'Every report is reviewed independently by the WBS team in accordance with applicable laws and regulations.',
  'wbsPage.body.contactHeading': 'Reporting Channel',
  'wbsPage.body.contactBody': 'Send your report via the dedicated email below:',

  // /klinik
  'klinikPage.hero.title': 'Our clinics across multiple cities',
  'klinikPage.hero.lead':
    'Address, phone, and service hours for RS Krakatau Medika clinics in each city.',
  'klinikPage.address': 'Address',
  'klinikPage.phone': 'Phone',
  'klinikPage.hours': 'Service Hours',
  'klinikPage.corporate': 'Also serves corporate clients',

  // /layanan-bisnis
  'bisnisPage.hero.title': 'Healthcare services for your company',
  'bisnisPage.hero.lead':
    'Healthcare partnerships for your employees: checkups, service contracts, and clinic cooperation.',
  'bisnisPage.body.heading': 'Health partnerships for companies & industries',
  'bisnisPage.body.para1':
    'We take care of your employees\u2019 health needs, from periodic medical checkups to emergency care through the nearest clinic.',
  'bisnisPage.body.para2':
    'Our business team will design a partnership package to fit your needs, scale, and operational locations.',
  'bisnisPage.body.para3': 'Contact us for a healthcare service partnership offer.',
  'bisnisPage.body.clinicsHeading': 'Corporate partner clinics',

  // /profil
  'profilPage.body.heading': 'About RS Krakatau Medika',
  'profilPage.body.para1':
    'RS Krakatau Medika is a private hospital in Cilegon that has served the community since 2005.',
  'profilPage.body.para2':
    'We provide 24/7 emergency care, specialist doctors, and inpatient facilities, with partnerships covering BPJS and major insurers.',

  // /about
  'aboutPage.hero.title': 'A private hospital in Cilegon',
  'aboutPage.hero.lead':
    'Since 2005, we have served patients with 24/7 emergency care, specialist doctors, and inpatient wards.',
  'profilPage.hero.title': 'Company Profile',
  'profilPage.hero.lead': 'Our identity, commitment, and journey since day one.',
  'aboutPage.visionMisi.eyebrow': 'Vision & Mission',
  'aboutPage.visionMisi.title': 'Our direction and purpose',
  'aboutPage.vision': 'Vision',
  'aboutPage.mission': 'Mission',
  'aboutPage.values.eyebrow': 'Our Values',
  'aboutPage.values.title': 'The values we uphold',
  'aboutPage.values.lead': 'These four values guide how we treat patients.',

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
  'contactPage.form.messagePlaceholder':
    'Tell us what you need, e.g. a question about services or clinic schedules.',
  'contactPage.form.submit': 'Send Message',
  'contactPage.form.consent':
    'I consent to my data being processed to answer this request (per Indonesia Law No. 27 of 2022 on Personal Data Protection).',
  'contactPage.form.privacyNote':
    'Your data is used only to respond to this message and is never shared with third parties.',
  'contactPage.form.sending': 'Sending…',
  'contactPage.form.success': 'Your message has been sent. Our team will contact you shortly.',
  'contactPage.form.error': 'Failed to send your message. Please try again, or call us directly.',
  'contactPage.form.invalid': 'Please fill in the required fields correctly.',
  'contactPage.form.emailInvalid':
    'Invalid email format. Example: name@domain.com (a dot in the domain is required).',
  'contactPage.form.phoneInvalid':
    'Invalid phone number. Use an Indonesian format, e.g. 081234567890 or +6281234567890.',
  'contactPage.form.consentError': 'Please give your consent to data processing first.',
  'contactPage.form.confirmTitle': 'Confirm submission',
  'contactPage.form.confirmSend': 'Confirm & Send',
  'contactPage.form.confirmCancel': 'Cancel',

  // /blog
  'blogPage.hero.title': 'Health insights from our doctors',
  'blogPage.hero.lead': 'Educational articles written and reviewed by our medical team.',

  // /km-news
  'kmNewsPage.note.title': 'News & Announcements',
  'kmNewsPage.note.body':
    'The latest news and announcements from RS Krakatau Medika will be posted on this page.',

  // /lelang-pengadaan
  'lelangPengadaanPage.note.title': 'Tender Notices',
  'lelangPengadaanPage.note.body': 'Tender and procurement announcements will appear on this page.',

  // /laporan-keuangan
  'laporanKeuanganPage.note.title': 'Financial Reports',
  'laporanKeuanganPage.note.body':
    'Financial and public reporting documents will be posted on this page.',

  // /karir
  'karirPage.note.title': 'Job Openings',
  'karirPage.note.body': 'Job openings at RS Krakatau Medika will be posted on this page.',

  // Blog
  'post.updated': 'Updated:',
  'post.back': '← All Articles',
  'post.relatedTitle': 'Related Articles',
  'toc.title': 'Table of Contents',
  'post.writtenBy': 'Written by',
  'post.publishedLabel': 'Published on',
  'post.availableIn': 'This article is also available in:',
  'post.fallbackNotice': 'This article is not yet available in English.',
  'post.readIn': 'Read in',

  // Skeleton demo
  'demo.hero.eyebrow': 'UI Demo',
  'demo.hero.title': 'Skeleton loading pattern',
  'demo.hero.lead':
    'A shimmer placeholder shows while content is "loading", then swaps to the real content without layout shift.',
  'demo.trigger': 'Simulate Loading',
  'demo.loading': 'Loading content…',
  'demo.done': 'Content loaded ✓',

  // Empty state — reusable EmptyState.astro component (SOT)
  'emptyState.title': 'No data available',
  'emptyState.description': 'There is no content available here yet.',
  'emptyState.action': 'Reload',
  'gallery.empty.title': 'No images',
  'gallery.empty.description': 'There are no images to display yet.',
  'gallery.empty.action': 'View all images',
  'gallery.filterEmpty.title': 'No matching images',
  'gallery.filterEmpty.description': 'Try selecting a different category.',
  'blog.empty.title': 'No articles',
  'blog.empty.description': 'No articles have been published yet.',
  'blog.empty.action': 'View all articles',
  'search.empty.title': 'No results found',
  'search.empty.description': 'No results match your search.',
  'search.empty.action': 'Clear filters',
  'services.empty.title': 'Services not found',
  'services.empty.description': 'No services are available yet.',
  'services.empty.action': 'View all services',
  'testimonials.empty.title': 'No testimonials yet',
  'testimonials.empty.description': 'We don’t have any patient testimonials yet.',
  'testimonials.empty.action': 'View all testimonials',
  'clinics.empty.title': 'Clinics not found',
  'clinics.empty.description': 'No clinics are registered at this location yet.',
  'clinics.empty.action': 'View all clinics',
  'faq.empty.title': 'No questions',
  'faq.empty.description': 'No questions have been added yet.',
  'faq.empty.action': 'Ask a question',
  'faq.search.placeholder': 'Search questions or keywords (e.g. BPJS, ER, schedule)...',
  'faq.search.clear': 'Reset search',
  'faq.support.title': 'Still Have Questions?',
  'faq.support.body':
    'RS Krakatau Medika customer support team and medical staff are ready to assist you 24/7.',
  'faq.support.contactBtn': 'Contact Form',
  'faq.support.waBtn': 'WhatsApp RSKM',
  'karir.empty.title': 'No job openings',
  'karir.empty.description': 'We don’t have any job openings at the moment.',
  'karir.empty.action': 'View all openings',
  'kmNews.empty.title': 'No news',
  'kmNews.empty.description': 'No news or announcements have been published yet.',
  'kmNews.empty.action': 'View all news',
  'lelangPengadaan.empty.title': 'No tenders',
  'lelangPengadaan.empty.description': 'No tender announcements are available yet.',
  'lelangPengadaan.empty.action': 'View all tenders',
  'laporanKeuangan.empty.title': 'No reports',
  'laporanKeuangan.empty.description': 'No financial reports are available yet.',
  'laporanKeuangan.empty.action': 'View all reports',

  // PageHero eyebrows — new pages (submenu "Tentang Kami" & "Mitra & Transparansi")
  'pagehero.eyebrow.sejarah': 'History',
  'pagehero.eyebrow.strukturOrganisasi': 'Organization',
  'pagehero.eyebrow.manajemen': 'Management',
  'pagehero.eyebrow.tataKelolaPerusahaan': 'Governance',
  'pagehero.eyebrow.penghargaan': 'Awards',
  'pagehero.eyebrow.akreditasi': 'Accreditation',
  'pagehero.eyebrow.kemitraan': 'Partnership',

  // /sejarah
  'sejarahPage.hero.title': 'Company History',
  'sejarahPage.hero.lead':
    'The journey of RS Krakatau Medika: from a modest start to Cilegon\u2019s family healthcare partner.',
  'sejarahPage.body.heading': 'From our founding to today',
  'sejarahPage.body.para1':
    'RS Krakatau Medika was established in 2005 as a private hospital in Cilegon, Banten. Born from the need for healthcare close to the industrial area, the hospital was built to serve industrial workers as well as the broader community.',
  'sejarahPage.body.para2':
    'Over the years, we have kept expanding our facilities and services: specialist clinics, inpatient care, surgery, laboratory, and a 24/7 emergency unit.',
  'sejarahPage.body.para3':
    'We are committed to growing with the community, widening our reach, and maintaining quality through accreditation and ongoing human resource development.',

  // /struktur-organisasi
  'strukturOrganisasiPage.hero.title': 'Organizational Structure',
  'strukturOrganisasiPage.hero.lead':
    'A clear organizational structure ensures every unit carries out its role and responsibility.',
  'strukturOrganisasiPage.body.heading': 'Work unit governance',
  'strukturOrganisasiPage.body.para1':
    'The organizational structure of RS Krakatau Medika is designed for fast decision-making, giving each unit a clear function from the board of directors and medical committees to service units.',
  'strukturOrganisasiPage.body.para2':
    'The official organizational chart will be displayed on this page.',

  // /manajemen
  'manajemenPage.hero.title': 'Management',
  'manajemenPage.hero.lead':
    'Our management and board of directors leading healthcare services and hospital operations.',
  'manajemenPage.body.heading': 'Our leadership',
  'manajemenPage.body.para1':
    'The management of RS Krakatau Medika is led by a board focused on service quality, patient safety, and continuous development.',
  'manajemenPage.body.para2':
    'The names and roles of our management team will be published on this page.',

  // /tata-kelola-perusahaan
  'tataKelolaPage.hero.title': 'Corporate Governance',
  'tataKelolaPage.hero.lead':
    'We practice good corporate governance across every line of our operations.',
  'tataKelolaPage.body.heading': 'GCG commitment',
  'tataKelolaPage.body.para1':
    'RS Krakatau Medika applies the principles of transparency, accountability, responsibility, independence, and fairness in all decision-making.',
  'tataKelolaPage.body.para2':
    'Governance policies, business ethics, and internal control underpin our relationship with patients, partners, and stakeholders.',

  // /penghargaan
  'penghargaanPage.hero.title': 'Awards & Certifications',
  'penghargaanPage.hero.lead':
    'Recognition of our commitment to quality and service, achieved from various institutions.',
  'penghargaanPage.body.heading': 'Recognition of quality',
  'penghargaanPage.body.para1':
    'The list of awards and certifications achieved by RS Krakatau Medika will be displayed on this page.',

  // /akreditasi
  'akreditasiPage.hero.title': 'Accreditation & Quality',
  'akreditasiPage.hero.lead':
    'National quality standards are the main reference for services at RS Krakatau Medika.',
  'akreditasiPage.body.heading': 'Service quality standards',
  'akreditasiPage.body.para1':
    'RS Krakatau Medika is committed to meeting national hospital accreditation standards through regular internal audits, quality reporting, and patient safety.',
  'akreditasiPage.body.para2':
    'Our current accreditation status and certificates will be published on this page.',

  // /kemitraan
  'kemitraanPage.hero.title': 'Partnership & Procurement',
  'kemitraanPage.hero.lead':
    'Our collaboration with partners, CSR programs, and a transparent goods/services procurement process.',
  'kemitraanPage.section.kerjasama.title': 'Partnership',
  'kemitraanPage.section.kerjasama.body':
    'We welcome healthcare partnerships with companies, other healthcare facilities, and related parties to broaden access to care.',
  'kemitraanPage.section.csr.title': 'CSR & Social Responsibility',
  'kemitraanPage.section.csr.body':
    'RS Krakatau Medika\u2019s social responsibility programs focus on community health, education, and empowerment around Cilegon.',
  'kemitraanPage.section.lelang.label': 'Tender & Procurement',
  'kemitraanPage.section.lelang.title': 'Goods/Services Tender',
  'kemitraanPage.section.lelang.body':
    'Procurement and tender announcements within RS Krakatau Medika are shared openly to ensure a transparent and accountable process.',
};

export const ui: Record<Lang, Record<UiKeys, string>> = { id, en };
