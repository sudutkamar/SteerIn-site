/**
 * Language switcher — Indonesian (default) & English
 * Persists choice in localStorage under key "steerin-lang"
 */

const STORAGE_KEY = 'steerin-lang';
const DEFAULT_LANG = 'id';

const translations = {
  id: {
    // Meta
    'meta.title': 'SteerIn — Garasi Digital Privat untuk Mobil & Motor',
    'meta.description': 'SteerIn adalah aplikasi Android privat untuk mengelola mobil dan motor, pengingat servis, riwayat perawatan, trip GPS, bengkel terdekat, dan kesehatan kendaraan dengan penyimpanan local-first.',
    'meta.og.title': 'SteerIn — Garasi Digital Privat Kamu',
    'meta.og.description': 'Kelola mobil dan motor, pantau servis, catat perjalanan, temukan bengkel, dan lindungi data kendaraan dengan SteerIn.',

    // Skip link
    'skip': 'Lewati ke konten utama',

    // Nav
    'nav.features': 'Fitur',
    'nav.advantage': 'Kenapa SteerIn',
    'nav.how': 'Cara Kerja',
    'nav.privacy': 'Privasi',
    'nav.faq': 'FAQ',
    'nav.download': 'Download',

    // Hero
    'hero.badge': 'Dibuat untuk pemilik mobil & motor Indonesia',
    'hero.h1.before': 'Ingat servis sebelum telat,',
    'hero.h1.gradient': 'rapikan semua riwayat kendaraan.',
    'hero.p': 'SteerIn mengubah struk servis tercecer, oli yang lupa diganti, pilihan bengkel yang serba tebak-tebakan, dan banyak kendaraan yang sulit dipantau menjadi satu garasi digital premium — privat dari awal, berguna tiap hari, siap untuk mobil, motor, dan EV.',
    'hero.cta.download': 'Download APK Android',
    'hero.cta.advantage': 'Lihat keunggulan',
    'hero.form.placeholder': 'Masukkan email kamu',
    'hero.form.btn': 'Ikut Early Access',
    'hero.form.note': 'Tanpa spam. Bisa berhenti kapan saja. 📬',
    'hero.trust.1': 'Local-first',
    'hero.trust.2': 'Mobil + motor + EV',
    'hero.trust.3': 'GPS trips',
    'hero.trust.4': 'Tanpa iklan/tracker',

    // Trust bar
    'trust.1.title': 'Local-first by default',
    'trust.1.p': 'Semua data tersimpan di perangkat kamu. Tidak butuh akun untuk menggunakan fitur utama.',
    'trust.2.title': 'Cloud sync opsional',
    'trust.2.p': 'Backup ke cloud hanya saat kamu pilih. Tidak pernah otomatis atau wajib.',
    'trust.3.title': 'Backup terenkripsi AES',
    'trust.3.p': 'Backup dienkripsi dengan kriptografi kuat sebelum keluar dari perangkat kamu.',
    'trust.4.title': 'Tanpa iklan atau tracker',
    'trust.4.p': 'Tanpa iklan, tanpa SDK analitik, tanpa pelacakan pihak ketiga. Selamanya.',

    // Problem
    'problem.badge': 'Masalah',
    'problem.h2': 'Kepemilikan kendaraan cepat berantakan.',
    'problem.p': 'Catatan servis tenggelam di chat. Oli mudah lupa diganti. Riwayat perjalanan hilang. Keputusan bengkel sering terburu-buru.',
    'problem.1.title': 'Catatan servis tercecer',
    'problem.1.p': 'Struk, catatan, dan pesan WhatsApp tersebar tanpa struktur.',
    'problem.2.title': 'Perawatan terlupa',
    'problem.2.p': 'Ganti oli, rotasi ban, dan cek rem mudah terlewat tanpa pengingat.',
    'problem.3.title': 'Riwayat trip hilang',
    'problem.3.p': 'Rute, jarak, dan catatan perjalanan lenyap begitu trip selesai.',
    'problem.4.title': 'Keputusan bengkel tidak pasti',
    'problem.4.p': 'Menemukan bengkel terpercaya seharusnya bukan tebak-tebakan.',
    'problem.5.title': 'Banyak kendaraan, satu sakit kepala',
    'problem.5.p': 'Mengelola dua kendaraan atau lebih berarti double catatan dan double stres.',
    'problem.stat.label': 'kendaraan per rumah tangga rata-rata di Indonesia',
    'problem.quote': 'SteerIn menggabungkan semuanya dalam satu <strong>hub kendaraan yang privat, terstruktur, dan terpercaya</strong>.',

    // Features
    'features.badge': 'Fitur',
    'features.h2': 'Semua kebutuhan kendaraan,<br>dalam satu aplikasi.',
    'features.p': 'Dibuat untuk komuter harian, pemilik mobil dan motor, keluarga dengan banyak kendaraan, dan siapa pun yang ingin riwayat kendaraan lengkap.',
    'features.1.title': 'Garasi Multi-Kendaraan',
    'features.1.p': 'Kelola mobil dan motor dalam satu tempat lengkap dengan profil, kilometer, nomor polisi, dan detail kepemilikan.',
    'features.2.title': 'Pantau Kesehatan Kendaraan',
    'features.2.p': 'Deteksi potensi masalah lebih awal lewat kondisi komponen, pemakaian, dan indikator berbasis kilometer.',
    'features.3.title': 'Pengingat Servis',
    'features.3.p': 'Dapatkan pengingat sebelum oli, ban, rem, atau servis berkala lain telat dikerjakan.',
    'features.4.title': 'Riwayat Servis',
    'features.4.p': 'Simpan setiap perbaikan, penggantian part, dan kunjungan bengkel untuk referensi dan nilai jual kembali.',
    'features.5.title': 'Catatan Trip GPS',
    'features.5.p': 'Catat perjalanan, jarak, rute, dan riwayat mobilitas dengan data lokasi tetap dalam kontrol kamu.',
    'features.6.title': 'Pencarian Bengkel',
    'features.6.p': 'Temukan bengkel terdekat dan ambil keputusan lebih baik saat kendaraan butuh penanganan profesional.',
    'features.7.title': 'Cloud Sync & Backup',
    'features.7.p': 'Backup catatan kendaraan kamu dengan aman dan restore saat ganti perangkat — opsional, tidak pernah dipaksa.',
    'features.8.title': 'Kontrol Privasi',
    'features.8.p': 'Tanpa iklan, tanpa tracker, tanpa pengumpulan data tersembunyi. Data kendaraan tetap milik kamu.',
    'features.9.title': 'Diagnostik Pintar',
    'features.9.p': 'Gunakan cek gejala terpandu, level risiko, aksi aman, dan catatan siap bengkel sebelum masalah membesar.',
    'features.10.title': 'OCR Struk & Odometer',
    'features.10.p': 'Scan struk servis atau odometer agar input lebih cepat dan catatan lebih rapi.',
    'features.11.title': 'Laporan Mingguan & Widget',
    'features.11.p': 'Lihat tren kesehatan kendaraan, reminder, aktivitas trip, dan ringkasan widget home screen.',
    'features.12.title': 'Bandingkan Kendaraan',
    'features.12.p': 'Bandingkan kendaraan di garasi memakai konteks health, odometer, trip, BBM, dan biaya servis.',

    // Advantage
    'advantage.badge': 'Kenapa SteerIn',
    'advantage.h2': 'Bukan sekadar app reminder biasa.',
    'advantage.p': 'Banyak app kendaraan berhenti di catatan biaya atau reminder sederhana. SteerIn menyatukan maintenance intelligence, konteks trip, privasi, dan workflow kepemilikan dalam satu pengalaman Android.',
    'advantage.kicker': 'Keunggulan SteerIn',
    'advantage.hero.h3': 'Satu garasi privat untuk seluruh siklus kendaraan.',
    'advantage.hero.p': 'Dari onboarding kendaraan bekas, pantau kesehatan komponen, scan catatan, booking servis, logging trip, bandingkan kendaraan, sampai backup data — SteerIn menjaga seluruh cerita kepemilikan tetap terhubung.',
    'advantage.pill.1': 'Maintenance health',
    'advantage.pill.2': 'GPS trips',
    'advantage.pill.3': 'Workshop maps',
    'advantage.pill.4': 'Cloud backup',
    'advantage.row.1.title': 'Privasi local-first',
    'advantage.row.1.p': 'Berbeda dari app cloud-only, penggunaan inti bisa tanpa akun dan data tetap di perangkat secara default.',
    'advantage.row.2.title': 'Mobil, motor, EV',
    'advantage.row.2.p': 'Satu dashboard untuk garasi campuran, bukan alur kerja terpisah untuk setiap tipe kendaraan.',
    'advantage.row.3.title': 'Kesehatan komponen, bukan cuma tanggal',
    'advantage.row.3.p': 'Pengingat memakai kilometer dan kondisi part sehingga perawatan terasa proaktif, bukan generik.',
    'advantage.row.4.title': 'Konteks trip + bengkel',
    'advantage.row.4.p': 'GPS trip logging dan penemuan bengkel terdekat ada di samping riwayat perawatan.',
    'advantage.row.5.title': 'UX native premium',
    'advantage.row.5.p': 'Android native, UI glassmorphism, onboarding kustom, widget, laporan mingguan, dan kontrol privasi.',
    'competitor.1.label': 'App biasa',
    'competitor.1.strong': 'Catatan saja',
    'competitor.2.label': 'App biasa',
    'competitor.2.strong': 'Cloud wajib',
    'competitor.3.label': 'App biasa',
    'competitor.3.strong': 'Fokus mobil saja',
    'competitor.4.label': 'SteerIn',
    'competitor.4.strong': 'Garasi digital privat lengkap',

    // How it works
    'how.badge': 'Cara Kerja',
    'how.h2': 'Mulai rapikan kendaraan<br>dalam hitungan menit.',
    'how.p': 'Mulai dengan beberapa langkah sederhana tanpa wajib akun.',
    'how.1.title': 'Tambah kendaraanmu',
    'how.1.p': 'Buat profil untuk mobil atau motormu dengan merek, model, tahun, dan plat nomor.',
    'how.2.title': 'Pantau kondisi',
    'how.2.p': 'Cek kilometer, kesehatan komponen, dan status perawatan dalam sekali lihat.',
    'how.3.title': 'Catat riwayat servis',
    'how.3.p': 'Simpan setiap perbaikan, servis, penggantian part, dan kunjungan bengkel beserta biaya dan tanggal.',
    'how.4.title': 'Rekam trip',
    'how.4.p': 'Lacak jarak, rute, dan aktivitas perjalanan dengan kontrol penuh atas data lokasi.',
    'how.5.title': 'Temukan bengkel',
    'how.5.p': 'Jelajahi bengkel terdekat dan pilih penyedia servis yang tepat untuk kendaraanmu.',
    'how.6.title': 'Backup dengan aman',
    'how.6.p': 'Jaga catatan tetap aman dengan backup terenkripsi dan cloud sync opsional untuk ketenangan pikiran.',

    // Privacy
    'privacy.badge': 'Privasi & Keamanan',
    'privacy.h2': 'Dibangun untuk privasi sejak awal.',
    'privacy.intro': 'Catatan kendaraan, riwayat servis, dan data trip kamu bersifat pribadi. <strong>SteerIn didesain dengan kontrol pengguna</strong>, penyimpanan local-first, backup terenkripsi opsional, dan tanpa tracker iklan.',
    'privacy.1.title': 'Data lokal terlebih dahulu',
    'privacy.1.p': 'Semua data tersimpan di perangkat kamu secara default. Tidak ada server remote yang terlibat.',
    'privacy.2.title': 'Cloud sync opsional',
    'privacy.2.p': 'Sinkronisasi ke cloud hanya saat kamu putuskan. Tidak pernah otomatis atau dipaksa.',
    'privacy.3.title': 'Backup terenkripsi',
    'privacy.3.p': 'Backup dilindungi enkripsi kuat sebelum keluar dari perangkat kamu.',
    'privacy.4.title': 'GPS dikontrol pengguna',
    'privacy.4.p': 'Trip logging hanya berjalan saat kamu memulainya. Data lokasi tetap dalam kendalimu.',
    'privacy.5.title': 'Ekspor & hapus data',
    'privacy.5.p': 'Ekspor data kamu, hapus catatan lokal, atau bersihkan backup cloud kapan saja.',
    'privacy.6.title': 'Tanpa iklan/tracker',
    'privacy.6.p': 'Tanpa SDK iklan, tanpa analitik, tanpa pelacakan pihak ketiga. Bersih dan privat.',

    // App preview
    'preview.badge': 'Preview',
    'preview.h2': 'Lihat SteerIn bekerja.',
    'preview.p': 'Layar app nyata yang menunjukkan bagaimana SteerIn membantu kamu mengelola kendaraan.',
    'preview.1.title': 'Dashboard Garasi',
    'preview.1.label.1': 'Honda Civic',
    'preview.1.label.2': 'Yamaha NMAX',
    'preview.1.label.3': 'Toyota Avanza',
    'preview.2.title': 'Kesehatan Kendaraan',
    'preview.2.label.1': 'Mesin',
    'preview.2.value.1': 'Baik',
    'preview.2.label.2': 'Rem',
    'preview.2.value.2': 'Segera',
    'preview.2.label.3': 'Ban',
    'preview.2.value.3': 'OK',
    'preview.2.label.4': 'Aki',
    'preview.2.value.4': 'Baik',
    'preview.3.title': 'Log Perawatan',
    'preview.3.label.1': 'Ganti Oli',
    'preview.3.label.2': 'Rotasi Ban',
    'preview.3.label.3': 'Cek Rem',
    'preview.3.label.4': 'Servis Terakhir',
    'preview.4.title': 'Riwayat Trip',
    'preview.4.label.1': 'Hari Ini',
    'preview.4.label.2': 'Minggu Ini',
    'preview.4.label.3': 'Bulan Ini',
    'preview.4.label.4': 'Total Dilacak',
    'preview.5.title': 'Peta Bengkel',
    'preview.5.label.1': 'AutoPro Bengkel',
    'preview.5.label.2': 'Mandiri Motor',
    'preview.5.label.3': 'SpeedFix Garage',
    'preview.5.label.4': 'Rata-rata Rating',
    'preview.6.title': 'Cloud Backup',
    'preview.6.label.1': 'Backup Terakhir',
    'preview.6.label.2': 'Terenkripsi',
    'preview.6.value.2': 'Ya',
    'preview.6.label.3': 'Penyimpanan',
    'preview.6.label.4': 'Auto Backup',
    'preview.6.value.4': 'Mati',

    // Use cases
    'usecases.badge': 'Untuk Siapa',
    'usecases.h2': 'Dibuat untuk cara orang Indonesia merawat kendaraan.',
    'usecases.p': 'Bukan cuma untuk satu tipe pengguna. SteerIn membantu pemilik motor harian, keluarga multi-kendaraan, pembeli mobil bekas, sampai pekerja yang sering perjalanan.',
    'usecases.1.title': 'Motor harian',
    'usecases.1.p': 'Ingat oli, ban, rem, aki, dan servis berkala sebelum performa turun atau biaya membesar.',
    'usecases.2.title': 'Keluarga multi-kendaraan',
    'usecases.2.p': 'Satu dashboard untuk mobil keluarga, motor harian, dan kendaraan cadangan tanpa catatan tercecer.',
    'usecases.3.title': 'Mobil bekas',
    'usecases.3.p': 'Buat baseline komponen, simpan riwayat servis, dan pantau part yang perlu dicek ulang setelah pembelian.',
    'usecases.4.title': 'Driver & pekerja mobile',
    'usecases.4.p': 'Catat jarak trip, aktivitas kendaraan, biaya servis, dan kondisi kendaraan untuk keputusan lebih rapi.',

    // Comparison
    'comparison.badge': 'Perbandingan',
    'comparison.h2': 'Kenapa lebih menarik dari catatan manual atau app biasa?',
    'comparison.p': 'SteerIn menggabungkan hal yang biasanya terpisah: reminder, health, trip, bengkel, OCR, backup, dan privasi.',
    'comparison.head.1': 'Kemampuan',
    'comparison.head.2': 'SteerIn',
    'comparison.head.3': 'App reminder biasa',
    'comparison.head.4': 'Spreadsheet',
    'comparison.head.5': 'Catatan manual',
    'comparison.row.1': 'Multi kendaraan',
    'comparison.row.1.maybe': 'Sebagian',
    'comparison.row.1.no': 'Sulit',
    'comparison.row.2': 'Health komponen berbasis km',
    'comparison.row.2.maybe': 'Terbatas',
    'comparison.row.2.no.1': 'Tidak otomatis',
    'comparison.row.2.no.2': 'Tidak',
    'comparison.row.3': 'GPS trip logging',
    'comparison.row.3.no': 'Jarang',
    'comparison.row.3.no.2': 'Tidak',
    'comparison.row.4': 'Workshop maps',
    'comparison.row.4.no': 'Jarang',
    'comparison.row.5': 'OCR struk & odometer',
    'comparison.row.5.no': 'Jarang',
    'comparison.row.6': 'Local-first privacy',
    'comparison.row.6.maybe': 'Tergantung',
    'comparison.row.7': 'No ads / trackers',
    'comparison.row.7.maybe': 'Tergantung',

    // Safe install
    'safe.badge': 'Keamanan APK',
    'safe.h2': 'Install APK dengan aman.',
    'safe.p': 'SteerIn sedang disiapkan untuk launch. Kalau kamu memakai APK early access, selalu download dari halaman resmi ini dan cocokkan checksum SHA-256.',
    'safe.step.1': 'Download APK dari tombol resmi SteerIn.',
    'safe.step.2': 'Download file SHA-256 lalu cocokkan checksum bila perlu.',
    'safe.step.3': 'Izinkan install dari browser/file manager yang kamu pakai.',
    'safe.step.4': 'Buka SteerIn, cek izin lokasi/notifikasi hanya saat fitur terkait dipakai.',
    'safe.note': 'Jangan install APK dari link tidak resmi. SteerIn tidak memakai iklan, tracker, atau upload data wajib.',

    // Download
    'download.badge': 'Download',
    'download.h2': 'Dapatkan SteerIn untuk Android.',
    'download.p': 'Download versi terbaru SteerIn dan mulai kelola kendaraan hari ini. Gratis untuk early access, tanpa wajib akun, dan fokus privasi.',
    'download.version': 'Versi',
    'download.size': 'Ukuran',
    'download.req': 'Butuh',
    'download.badge.1': 'App native Android',
    'download.badge.2': 'Tanpa wajib akun',
    'download.badge.3': 'Release Candidate',
    'download.badge.4': 'Fokus privasi',
    'download.btn': 'Download APK',
    'download.verify': 'Verifikasi SHA-256',
    'download.terms': 'Dengan download APK, kamu menyetujui',
    'download.and': 'dan',
    'download.troubleshoot': 'Ada kendala?',
    'download.support': 'Hubungi Support',

    // Early testers
    'early.badge': 'Early Access',
    'early.h2': 'Dicari early tester yang benar-benar peduli kendaraan.',
    'early.p': 'SteerIn tidak memakai review palsu. Feedback dari pengguna awal akan dipakai untuk menyempurnakan onboarding, reminder, maps, OCR, dan premium flow sebelum rilis publik penuh.',
    'early.btn': 'Coba Sekarang',

    // FAQ
    'faq.badge': 'FAQ',
    'faq.h2': 'Pertanyaan yang sering muncul.',
    'faq.p': 'Jawaban singkat tentang APK, privasi, GPS, akun, dan rencana rilis SteerIn.',
    'faq.1.q': 'Apakah SteerIn tersedia di Android?',
    'faq.1.a': 'Ya. SteerIn dibuat sebagai aplikasi native Android untuk perangkat modern.',
    'faq.2.q': 'Apakah SteerIn gratis?',
    'faq.2.a': 'Versi early access bisa dicoba tanpa biaya. Detail paket premium akan diumumkan mendekati rilis publik.',
    'faq.3.q': 'Apakah lokasi dilacak terus-menerus?',
    'faq.3.a': 'Tidak. GPS dipakai saat kamu menjalankan fitur trip tracking. Data lokasi tetap berada dalam kontrol pengguna.',
    'faq.4.q': 'Apakah wajib login atau cloud sync?',
    'faq.4.a': 'Tidak. Core app bisa dipakai local-first. Cloud sync bersifat opsional untuk backup dan restore.',
    'faq.5.q': 'Apakah data servis saya diupload?',
    'faq.5.a': 'Tidak otomatis. Data tersimpan lokal secara default. Upload hanya terjadi saat kamu memilih fitur cloud backup/sync.',
    'faq.6.q': 'Apakah aman install APK di luar Play Store?',
    'faq.6.a': 'Aman jika diambil dari halaman resmi dan checksum SHA-256 cocok. Jangan install APK dari link tidak resmi.',
    'faq.7.q': 'Kapan rilis Play Store?',
    'faq.7.a': 'Targetnya setelah early access stabil, feedback utama masuk, dan proses Play Console siap.',

    // Final CTA
    'cta.h2': 'Ambil kendali atas riwayat kendaraan kamu.',
    'cta.p': 'Dari servis, trip, catatan bengkel, sampai backup — SteerIn membuat hidup kendaraan lebih rapi, berguna, dan privat.',
    'cta.placeholder': 'Masukkan email kamu',
    'cta.btn': 'Ikut Early Access',
    'cta.support': 'Hubungi Support',

    // Mobile sticky
    'sticky.text': 'Siap rapikan riwayat kendaraan?',
    'sticky.btn': 'Download APK',

    // Sidebar
    'sidebar.pill.privacy': 'Privat',
    'sidebar.pill.local': 'Local-first',
    'sidebar.pill.android': 'Android',
    'sidebar.nav': 'Navigasi',
    'sidebar.theme': 'Tema',
    'sidebar.home.desc': 'Akses cepat ke fitur, privasi, FAQ, dan update terbaru SteerIn.',

    // Footer
    'footer.brand.p': 'Garasi digital privat untuk mobil dan motor. Dibuat untuk Android dengan local-first storage, cloud sync opsional, dan tanpa tracker.',
    'footer.product': 'Produk',
    'footer.legal': 'Legal',
    'footer.support': 'Support',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.contact': 'Hubungi Support',
    'footer.bug': 'Laporkan Bug',
    'footer.feature': 'Request Fitur',
    'footer.copy': 'All rights reserved. Dibuat untuk Android.',

    // Lang toggle
    'lang.label': 'EN',
  },

  en: {
    // Meta
    'meta.title': 'SteerIn — Private Digital Garage for Cars & Motorcycles',
    'meta.description': 'SteerIn is a private Android app to manage cars and motorcycles, service reminders, maintenance history, GPS trips, nearby workshops, and vehicle health with local-first storage.',
    'meta.og.title': 'SteerIn — Your Private Digital Garage',
    'meta.og.description': 'Manage cars and motorcycles, track service, log trips, find workshops, and protect vehicle data with SteerIn.',

    // Skip link
    'skip': 'Skip to main content',

    // Nav
    'nav.features': 'Features',
    'nav.advantage': 'Why SteerIn',
    'nav.how': 'How It Works',
    'nav.privacy': 'Privacy',
    'nav.faq': 'FAQ',
    'nav.download': 'Download',

    // Hero
    'hero.badge': 'Built for Indonesian car & motorcycle owners',
    'hero.h1.before': 'Never miss a service again,',
    'hero.h1.gradient': 'organize all your vehicle records.',
    'hero.p': 'SteerIn turns scattered receipts, forgotten oil changes, guesswork workshop choices, and hard-to-track vehicles into one premium digital garage — private from day one, useful every day, ready for cars, motorcycles, and EVs.',
    'hero.cta.download': 'Download Android APK',
    'hero.cta.advantage': 'See advantages',
    'hero.form.placeholder': 'Enter your email',
    'hero.form.btn': 'Join Early Access',
    'hero.form.note': 'No spam. Unsubscribe anytime. 📬',
    'hero.trust.1': 'Local-first',
    'hero.trust.2': 'Cars + bikes + EVs',
    'hero.trust.3': 'GPS trips',
    'hero.trust.4': 'No ads/trackers',

    // Trust bar
    'trust.1.title': 'Local-first by default',
    'trust.1.p': 'All your data stays on your device. No accounts required to use the core app.',
    'trust.2.title': 'Optional cloud sync',
    'trust.2.p': 'Backup to the cloud only when you choose. Never automatic or mandatory.',
    'trust.3.title': 'AES encrypted backups',
    'trust.3.p': 'Backups are encrypted with strong cryptography before leaving your device.',
    'trust.4.title': 'Zero ads or trackers',
    'trust.4.p': 'No advertising, no analytics SDKs, no third-party tracking. Ever.',

    // Problem
    'problem.badge': 'The Problem',
    'problem.h2': 'Vehicle ownership gets messy fast.',
    'problem.p': 'Service notes get buried in chats. Oil changes are easy to forget. Trip history disappears. Workshop decisions are often rushed.',
    'problem.1.title': 'Scattered service records',
    'problem.1.p': 'Receipts, notes, and WhatsApp messages spread everywhere with no structure.',
    'problem.2.title': 'Forgotten maintenance',
    'problem.2.p': 'Oil changes, tire rotations, and brake checks are easy to miss without reminders.',
    'problem.3.title': 'Lost trip history',
    'problem.3.p': 'Routes, distances, and travel records disappear once the trip is done.',
    'problem.4.title': 'Uncertain workshop decisions',
    'problem.4.p': 'Finding a reliable workshop nearby should not be a guessing game.',
    'problem.5.title': 'Multiple vehicles, one headache',
    'problem.5.p': 'Managing two or more vehicles means double the records and double the stress.',
    'problem.stat.label': 'vehicles per average household in Indonesia',
    'problem.quote': 'SteerIn brings everything into one <strong>private, structured, and reliable</strong> vehicle hub.',

    // Features
    'features.badge': 'Features',
    'features.h2': 'Everything your vehicle needs,<br>in one app.',
    'features.p': 'Built for daily commuters, car and motorcycle owners, multi-vehicle families, and anyone who wants complete vehicle records.',
    'features.1.title': 'Multi-Vehicle Garage',
    'features.1.p': 'Manage cars and motorcycles in one place with profiles, mileage, license plates, and ownership details.',
    'features.2.title': 'Vehicle Health Monitor',
    'features.2.p': 'Detect potential issues early through component condition, usage, and mileage-based indicators.',
    'features.3.title': 'Service Reminders',
    'features.3.p': 'Get reminders before oil, tires, brakes, or other routine services are overdue.',
    'features.4.title': 'Service History',
    'features.4.p': 'Save every repair, part replacement, and workshop visit for reference and resale value.',
    'features.5.title': 'GPS Trip Logs',
    'features.5.p': 'Record trips, distances, routes, and mobility history with location data under your control.',
    'features.6.title': 'Workshop Finder',
    'features.6.p': 'Discover nearby workshops and make better decisions when your vehicle needs professional care.',
    'features.7.title': 'Cloud Sync & Backup',
    'features.7.p': 'Backup your vehicle records securely and restore them when switching devices — optional, never forced.',
    'features.8.title': 'Privacy Controls',
    'features.8.p': 'No ads, no trackers, no hidden data collection. Your vehicle data stays yours.',
    'features.9.title': 'Smart Diagnostics',
    'features.9.p': 'Use guided symptom checks, risk levels, safe actions, and workshop-ready notes before issues grow.',
    'features.10.title': 'Receipt & Odometer OCR',
    'features.10.p': 'Scan service receipts or odometer readings for faster input and cleaner records.',
    'features.11.title': 'Weekly Reports & Widgets',
    'features.11.p': 'View vehicle health trends, reminders, trip activity, and home screen widget summaries.',
    'features.12.title': 'Compare Vehicles',
    'features.12.p': 'Compare vehicles in your garage using health, odometer, trips, fuel, and service cost context.',

    // Advantage
    'advantage.badge': 'Why SteerIn',
    'advantage.h2': 'Not just another reminder app.',
    'advantage.p': 'Most vehicle apps stop at cost logs or simple reminders. SteerIn combines maintenance intelligence, trip context, privacy, and ownership workflow in one Android experience.',
    'advantage.kicker': 'SteerIn Advantage',
    'advantage.hero.h3': 'One private garage for the entire vehicle lifecycle.',
    'advantage.hero.p': 'From onboarding used vehicles, monitoring component health, scanning records, booking service, logging trips, comparing vehicles, to backing up data — SteerIn keeps the whole ownership story connected.',
    'advantage.pill.1': 'Maintenance health',
    'advantage.pill.2': 'GPS trips',
    'advantage.pill.3': 'Workshop maps',
    'advantage.pill.4': 'Cloud backup',
    'advantage.row.1.title': 'Local-first privacy',
    'advantage.row.1.p': 'Unlike cloud-only apps, core usage works without an account and data stays on-device by default.',
    'advantage.row.2.title': 'Cars, motorcycles, EVs',
    'advantage.row.2.p': 'One dashboard for mixed garages, not separate workflows for each vehicle type.',
    'advantage.row.3.title': 'Component health, not just dates',
    'advantage.row.3.p': 'Reminders use mileage and part condition so maintenance feels proactive, not generic.',
    'advantage.row.4.title': 'Trip + workshop context',
    'advantage.row.4.p': 'GPS trip logging and nearby workshop discovery sit beside maintenance history.',
    'advantage.row.5.title': 'Premium native UX',
    'advantage.row.5.p': 'Native Android, glassmorphism UI, custom onboarding, widgets, weekly reports, and privacy controls.',
    'competitor.1.label': 'Typical apps',
    'competitor.1.strong': 'Notes only',
    'competitor.2.label': 'Typical apps',
    'competitor.2.strong': 'Cloud required',
    'competitor.3.label': 'Typical apps',
    'competitor.3.strong': 'Cars only',
    'competitor.4.label': 'SteerIn',
    'competitor.4.strong': 'Complete private digital garage',

    // How it works
    'how.badge': 'How It Works',
    'how.h2': 'Start organizing your vehicle<br>in minutes.',
    'how.p': 'Get started with a few simple steps — no account required.',
    'how.1.title': 'Add your vehicle',
    'how.1.p': 'Create a profile for your car or motorcycle with brand, model, year, and plate.',
    'how.2.title': 'Track condition',
    'how.2.p': 'Monitor mileage, component health, and maintenance status at a glance.',
    'how.3.title': 'Log service history',
    'how.3.p': 'Save every repair, service, part replacement, and workshop visit with cost and date.',
    'how.4.title': 'Record trips',
    'how.4.p': 'Track distance, routes, and travel activity with full user control over location data.',
    'how.5.title': 'Find workshops',
    'how.5.p': 'Discover nearby workshops and choose the right service provider for your vehicle.',
    'how.6.title': 'Backup securely',
    'how.6.p': 'Keep your records safe with encrypted backup and optional cloud sync for peace of mind.',

    // Privacy
    'privacy.badge': 'Privacy & Security',
    'privacy.h2': 'Built for privacy from the start.',
    'privacy.intro': 'Your vehicle records, service history, and trip data are personal. <strong>SteerIn is designed around user control</strong>, local-first storage, optional encrypted backup, and zero advertising trackers.',
    'privacy.1.title': 'Local data first',
    'privacy.1.p': 'All data is stored on your device by default. No remote servers involved.',
    'privacy.2.title': 'Optional cloud sync',
    'privacy.2.p': 'Sync to the cloud only when you decide. Never automatic or forced.',
    'privacy.3.title': 'Encrypted backup',
    'privacy.3.p': 'Backups are protected with strong encryption before leaving your device.',
    'privacy.4.title': 'User-controlled GPS',
    'privacy.4.p': 'Trip logging only runs when you start it. Location data stays under your control.',
    'privacy.5.title': 'Export & delete control',
    'privacy.5.p': 'Export your data, delete local records, or clear cloud backups anytime.',
    'privacy.6.title': 'No ads/trackers',
    'privacy.6.p': 'No advertising SDKs, no analytics, no third-party tracking. Clean and private.',

    // App preview
    'preview.badge': 'Preview',
    'preview.h2': 'See SteerIn in action.',
    'preview.p': 'Real app screens showing how SteerIn helps you stay on top of your vehicle life.',
    'preview.1.title': 'Garage Dashboard',
    'preview.1.label.1': 'Honda Civic',
    'preview.1.label.2': 'Yamaha NMAX',
    'preview.1.label.3': 'Toyota Avanza',
    'preview.2.title': 'Vehicle Health',
    'preview.2.label.1': 'Engine',
    'preview.2.value.1': 'Good',
    'preview.2.label.2': 'Brakes',
    'preview.2.value.2': 'Due soon',
    'preview.2.label.3': 'Tires',
    'preview.2.value.3': 'OK',
    'preview.2.label.4': 'Battery',
    'preview.2.value.4': 'Good',
    'preview.3.title': 'Maintenance Log',
    'preview.3.label.1': 'Oil Change',
    'preview.3.label.2': 'Tire Rotation',
    'preview.3.label.3': 'Brake Check',
    'preview.3.label.4': 'Last Service',
    'preview.4.title': 'Trip History',
    'preview.4.label.1': 'Today',
    'preview.4.label.2': 'This Week',
    'preview.4.label.3': 'This Month',
    'preview.4.label.4': 'Total Tracked',
    'preview.5.title': 'Workshop Map',
    'preview.5.label.1': 'AutoPro Bengkel',
    'preview.5.label.2': 'Mandiri Motor',
    'preview.5.label.3': 'SpeedFix Garage',
    'preview.5.label.4': 'Avg. Rating',
    'preview.6.title': 'Cloud Backup',
    'preview.6.label.1': 'Last Backup',
    'preview.6.label.2': 'Encrypted',
    'preview.6.value.2': 'Yes',
    'preview.6.label.3': 'Storage Used',
    'preview.6.label.4': 'Auto Backup',
    'preview.6.value.4': 'Off',

    // Use cases
    'usecases.badge': 'Who It\'s For',
    'usecases.h2': 'Built for how Indonesians care for vehicles.',
    'usecases.p': 'Not just for one type of user. SteerIn helps daily motorcycle owners, multi-vehicle families, used car buyers, and mobile professionals.',
    'usecases.1.title': 'Daily motorcycle',
    'usecases.1.p': 'Remember oil, tires, brakes, battery, and routine service before performance drops or costs rise.',
    'usecases.2.title': 'Multi-vehicle family',
    'usecases.2.p': 'One dashboard for the family car, daily motorcycle, and spare vehicle without scattered records.',
    'usecases.3.title': 'Used car',
    'usecases.3.p': 'Create component baselines, save service history, and monitor parts that need rechecking after purchase.',
    'usecases.4.title': 'Drivers & mobile workers',
    'usecases.4.p': 'Log trip distances, vehicle activity, service costs, and vehicle condition for better decisions.',

    // Comparison
    'comparison.badge': 'Comparison',
    'comparison.h2': 'Why it\'s better than manual notes or basic apps.',
    'comparison.p': 'SteerIn combines what\'s usually separate: reminders, health, trips, workshops, OCR, backup, and privacy.',
    'comparison.head.1': 'Capability',
    'comparison.head.2': 'SteerIn',
    'comparison.head.3': 'Basic reminder app',
    'comparison.head.4': 'Spreadsheet',
    'comparison.head.5': 'Manual notes',
    'comparison.row.1': 'Multi vehicle',
    'comparison.row.1.maybe': 'Partial',
    'comparison.row.1.no': 'Hard',
    'comparison.row.2': 'Km-based component health',
    'comparison.row.2.maybe': 'Limited',
    'comparison.row.2.no.1': 'Not automatic',
    'comparison.row.2.no.2': 'No',
    'comparison.row.3': 'GPS trip logging',
    'comparison.row.3.no': 'Rare',
    'comparison.row.3.no.2': 'No',
    'comparison.row.4': 'Workshop maps',
    'comparison.row.4.no': 'Rare',
    'comparison.row.5': 'Receipt & odometer OCR',
    'comparison.row.5.no': 'Rare',
    'comparison.row.6': 'Local-first privacy',
    'comparison.row.6.maybe': 'Depends',
    'comparison.row.7': 'No ads / trackers',
    'comparison.row.7.maybe': 'Depends',

    // Safe install
    'safe.badge': 'APK Safety',
    'safe.h2': 'Install APKs safely.',
    'safe.p': 'SteerIn is being prepared for launch. If you\'re using the early access APK, always download from this official page and verify the SHA-256 checksum.',
    'safe.step.1': 'Download APK from the official SteerIn button.',
    'safe.step.2': 'Download the SHA-256 file and verify the checksum if needed.',
    'safe.step.3': 'Allow installation from the browser/file manager you\'re using.',
    'safe.step.4': 'Open SteerIn, check location/notification permissions only when related features are used.',
    'safe.note': 'Don\'t install APKs from unofficial links. SteerIn uses no ads, trackers, or mandatory data uploads.',

    // Download
    'download.badge': 'Download',
    'download.h2': 'Get SteerIn for Android.',
    'download.p': 'Download the latest version of SteerIn and start managing your vehicles today. Free for early access, no account required, privacy-focused.',
    'download.version': 'Version',
    'download.size': 'Size',
    'download.req': 'Requires',
    'download.badge.1': 'Native Android app',
    'download.badge.2': 'No account required',
    'download.badge.3': 'Release Candidate',
    'download.badge.4': 'Privacy focused',
    'download.btn': 'Download APK',
    'download.verify': 'Verify SHA-256',
    'download.terms': 'By downloading the APK, you agree to the',
    'download.and': 'and',
    'download.troubleshoot': 'Having issues?',
    'download.support': 'Contact Support',

    // Early testers
    'early.badge': 'Early Access',
    'early.h2': 'Looking for early testers who truly care about their vehicles.',
    'early.p': 'SteerIn doesn\'t use fake reviews. Feedback from early users will be used to perfect onboarding, reminders, maps, OCR, and premium flow before full public release.',
    'early.btn': 'Try Now',

    // FAQ
    'faq.badge': 'FAQ',
    'faq.h2': 'Frequently asked questions.',
    'faq.p': 'Quick answers about APK, privacy, GPS, accounts, and SteerIn release plans.',
    'faq.1.q': 'Is SteerIn available on Android?',
    'faq.1.a': 'Yes. SteerIn is built as a native Android application for modern devices.',
    'faq.2.q': 'Is SteerIn free?',
    'faq.2.a': 'The early access version can be tried at no cost. Premium package details will be announced closer to public release.',
    'faq.3.q': 'Is my location tracked continuously?',
    'faq.3.a': 'No. GPS is used when you run the trip tracking feature. Location data remains under user control.',
    'faq.4.q': 'Is login or cloud sync required?',
    'faq.4.a': 'No. The core app works local-first. Cloud sync is optional for backup and restore.',
    'faq.5.q': 'Is my service data uploaded?',
    'faq.5.a': 'Not automatically. Data is stored locally by default. Upload only happens when you choose cloud backup/sync.',
    'faq.6.q': 'Is it safe to install APK outside the Play Store?',
    'faq.6.a': 'Safe if downloaded from the official page and the SHA-256 checksum matches. Don\'t install APKs from unofficial links.',
    'faq.7.q': 'When is the Play Store release?',
    'faq.7.a': 'Targeted after early access is stable, key feedback is in, and Play Console process is ready.',

    // Final CTA
    'cta.h2': 'Take control of your vehicle history.',
    'cta.p': 'From service, trips, workshop records, to backup — SteerIn makes vehicle life more organized, useful, and private.',
    'cta.placeholder': 'Enter your email',
    'cta.btn': 'Join Early Access',
    'cta.support': 'Contact Support',

    // Mobile sticky
    'sticky.text': 'Ready to organize your vehicle records?',
    'sticky.btn': 'Download APK',

    // Sidebar
    'sidebar.pill.privacy': 'Private',
    'sidebar.pill.local': 'Local-first',
    'sidebar.pill.android': 'Android',
    'sidebar.nav': 'Navigation',
    'sidebar.theme': 'Theme',
    'sidebar.home.desc': 'Quick access to features, privacy, FAQ, and the latest SteerIn updates.',

    // Footer
    'footer.brand.p': 'Private digital garage for cars and motorcycles. Built for Android with local-first storage, optional cloud sync, and no trackers.',
    'footer.product': 'Product',
    'footer.legal': 'Legal',
    'footer.support': 'Support',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.contact': 'Contact Support',
    'footer.bug': 'Report Bug',
    'footer.feature': 'Request Feature',
    'footer.copy': 'All rights reserved. Built for Android.',

    // Lang toggle
    'lang.label': 'ID',
  }
};

/**
 * Apply translations for the given language.
 * Elements with [data-i18n] get their textContent replaced.
 * Elements with [data-i18n-html] get their innerHTML replaced.
 * Elements with [data-i18n-placeholder] get their placeholder replaced.
 * <title> and <meta name="description"> are also updated.
 */
function applyTranslations(lang) {
  const t = translations[lang];
  if (!t) return;

  // Text content replacements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.textContent = t[key];
    }
  });

  // HTML content replacements (for elements with <br>, <strong>, etc.)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  // Placeholder replacements
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) {
      el.placeholder = t[key];
    }
  });

  // Update document title
  if (t['meta.title']) document.title = t['meta.title'];

  // Update meta description
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && t['meta.description']) metaDesc.content = t['meta.description'];

  // Update OG tags
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle && t['meta.og.title']) ogTitle.content = t['meta.og.title'];
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc && t['meta.og.description']) ogDesc.content = t['meta.og.description'];

  // Update lang attribute on <html>
  document.documentElement.lang = lang;

  // Update all language switch UIs (desktop + sidebar)
  document.querySelectorAll('.lang-switch').forEach(switcher => {
    const current = switcher.querySelector('.lang-current');
    if (current) {
      current.textContent = lang === 'id' ? '🇮🇩 ID' : '🇬🇧 EN';
    }
    switcher.querySelectorAll('.lang-option').forEach(opt => {
      opt.classList.toggle('active', opt.dataset.lang === lang);
    });
  });
}

/**
 * Get current language from localStorage or default.
 */
function getCurrentLang() {
  return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
}

/**
 * Initialize language system.
 */
export function initLang() {
  const currentLang = getCurrentLang();
  applyTranslations(currentLang);

  const switchers = document.querySelectorAll('.lang-switch');
  if (!switchers.length) return;

  switchers.forEach(switcher => {
    const btn = switcher.querySelector('.lang-btn');
    const dropdown = switcher.querySelector('.lang-dropdown');

    btn?.addEventListener('click', (e) => {
      e.stopPropagation();
      switchers.forEach(item => {
        if (item !== switcher) item.classList.remove('open');
      });
      const isOpen = switcher.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(isOpen));
    });

    dropdown?.addEventListener('click', (e) => {
      const option = e.target.closest('.lang-option');
      if (!option) return;
      const lang = option.dataset.lang;
      if (!lang) return;
      localStorage.setItem(STORAGE_KEY, lang);
      applyTranslations(lang);
      switchers.forEach(item => {
        item.classList.remove('open');
        item.querySelector('.lang-btn')?.setAttribute('aria-expanded', 'false');
      });
    });
  });

  document.addEventListener('click', () => {
    switchers.forEach(item => {
      item.classList.remove('open');
      item.querySelector('.lang-btn')?.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      switchers.forEach(item => {
        item.classList.remove('open');
        item.querySelector('.lang-btn')?.setAttribute('aria-expanded', 'false');
      });
    }
  });
}
