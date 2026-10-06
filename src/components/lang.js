/**
 * Language switcher — Indonesian (default) & English
 * Persists choice in localStorage under key "steerin-lang"
 */

const STORAGE_KEY = 'steerin-lang';
const DEFAULT_LANG = 'id';

export const translations = {
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
    'nav.pricing': 'Harga',
    'nav.privacy': 'Privasi',
    'nav.faq': 'FAQ',
    'nav.download': 'Download',

    // Hero
    'hero.badge': 'Dibuat untuk pemilik mobil & motor Indonesia',
    'hero.h1.before': 'Ingat servis sebelum telat,',
    'hero.h1.gradient': 'rapikan semua riwayat kendaraan.',
    'hero.p': 'SteerIn membantu kamu mengelola servis, odometer, trip, bengkel, dan riwayat kendaraan dalam satu garasi digital yang rapi, privat, dan mudah dipakai.',
    'hero.cta.download': 'Download APK Android',
    'hero.download.note': 'Beta Android 8.0+ · login diperlukan · lihat detail keamanan di bagian Download.',
    'hero.cta.advantage': 'Lihat fitur',
    'hero.form.placeholder': 'Masukkan email kamu',
    'hero.form.btn': 'Ikut Early Access',
    'hero.form.note': 'Tanpa spam. Bisa berhenti kapan saja. 📬',
    'hero.trust.1': 'Local-first',
    'hero.trust.2': 'Mobil + motor',
    'hero.trust.3': 'GPS trips',
    'hero.trust.4': 'Tanpa iklan/tracker',

    // Trust bar
    'trust.1.title': 'Local-first by default',
    'trust.1.p': 'Login diperlukan untuk mulai memakai app, sementara data kendaraan tetap diprioritaskan tersimpan lokal di perangkat.',
    'trust.2.title': 'Cloud sync opsional',
    'trust.2.p': 'Backup ke cloud hanya saat kamu pilih. Tidak pernah otomatis atau wajib.',
    'trust.3.title': 'Backup terenkripsi AES',
    'trust.3.p': 'Backup dienkripsi dengan kriptografi kuat sebelum keluar dari perangkat kamu.',
    'trust.4.title': 'Tanpa iklan atau tracker',
    'trust.4.p': 'Tanpa iklan di aplikasi. Layanan pihak ketiga untuk fitur tertentu dijelaskan dalam Kebijakan Privasi.',

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
    'problem.stat.label': 'Catatan kendaraan lebih mudah dicari ketika tersimpan dalam satu tempat.',
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
    'features.8.p': 'Catatan utama tetap lokal; lihat kebijakan privasi untuk penggunaan layanan pihak ketiga.',
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
    'advantage.row.1.p': 'Berbeda dari app cloud-only, SteerIn tetap memprioritaskan penyimpanan lokal walau login diperlukan.',
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
    'how.p': 'Mulai dengan login, tambah kendaraan, lalu rapikan riwayat servis dalam beberapa langkah.',
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
    'privacy.1.p': 'Catatan utama disimpan lokal. Login dan fitur tertentu dapat memakai layanan pihak ketiga; lihat Kebijakan Privasi.',
    'privacy.2.title': 'Cloud sync opsional',
    'privacy.2.p': 'Sinkronisasi ke cloud hanya saat kamu putuskan. Tidak pernah otomatis atau dipaksa.',
    'privacy.3.title': 'Backup terenkripsi',
    'privacy.3.p': 'Backup dilindungi enkripsi kuat sebelum keluar dari perangkat kamu.',
    'privacy.4.title': 'GPS dikontrol pengguna',
    'privacy.4.p': 'Trip logging hanya berjalan saat kamu memulainya. Data lokasi tetap dalam kendalimu.',
    'privacy.5.title': 'Ekspor & hapus data',
    'privacy.5.p': 'Ekspor data kamu, hapus catatan lokal, atau bersihkan backup cloud kapan saja.',
    'privacy.6.title': 'Tanpa iklan/tracker',
    'privacy.6.p': 'Tidak menjual data pribadi; layanan pihak ketiga yang digunakan dijelaskan dalam Kebijakan Privasi.',

    // App preview
    'preview.badge': 'Preview',
    'preview.h2': 'Lihat SteerIn bekerja.',
    'preview.p': 'Ilustrasi fitur SteerIn. Tampilan dan data contoh dapat berbeda dari aplikasi.',
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
    'preview.5.label.1': 'Cari bengkel',
    'preview.5.label.2': 'Lihat lokasi',
    'preview.5.label.3': 'Pilih layanan',
    'preview.5.label.4': 'Rata-rata Rating',
    'preview.6.title': 'Cloud Backup',
    'preview.6.label.1': 'Backup Terakhir',
    'preview.6.label.2': 'Terenkripsi',
    'preview.6.value.2': 'Ya',
    'preview.6.label.3': 'Penyimpanan',
    'preview.6.label.4': 'Auto Backup',
    'preview.6.value.4': 'Mati',

    // Phone mockup
    'phone.badge': 'Garage',
    'phone.sub': '3 kendaraan · 2 pengingat',

    // Phone demo (interactive)
    'demo.hint': 'Ketuk tab di HP untuk jelajahi aplikasi 👆',
    'demo.tab.dash': 'Dasbor',
    'demo.tab.garage': 'Garasi',
    'demo.tab.maps': 'Lokasi',
    'demo.tab.settings': 'Pengaturan',
    'demo.float.1.title': 'Ganti oli jatuh tempo',
    'demo.float.1.sub': 'Honda Genio · sisa 3.000 km',
    'demo.float.2.title': 'Kesehatan kendaraan',
    'demo.float.2.sub': 'Honda Genio · Baik',
    'demo.dash.updated': '1 Kendaraan • Diperbarui 19:21',
    'demo.dash.total': 'TOTAL PENGELUARAN',
    'demo.dash.next': 'Aksi Berikutnya',
    'demo.dash.health': 'Kesehatan Kendaraan',
    'demo.garage.search': 'Cari',
    'demo.garage.detail': 'Lihat Detail',
    'demo.maps.search': 'Cari bengkel, ban, oli…',
    'demo.set.premium': 'SteerIn Premium & Promo',
    'demo.set.manage': 'Kelola',
    'demo.toast.odo': 'Odometer tersinkron • 0.0 km',
    'demo.toast.route': 'Membuka rute ke AutoPro Bengkel…',
    'demo.toast.manage': 'Demo: ini pratinjau paket Premium',
    'demo.toast.add': 'Demo: tambah kendaraan baru',
    'demo.toast.fuel': 'Demo: daftar harga BBM terkini',
    'demo.toast.csv': 'Demo: ekspor riwayat ke CSV',
    'demo.toast.history': 'Demo: riwayat servis oli',
    'demo.toast.custom': 'Demo: pilih rentang kustom',
    'demo.toast.health': 'Demo: detail kesehatan kendaraan',
    'demo.toast.search': 'Demo: pencarian bengkel',
    'demo.toast.filter': 'Demo: opsi filter',
    'demo.toast.compass': 'Demo: mode kompas',
    'demo.toast.recenter': 'Demo: kembali ke lokasimu',
    'demo.toast.vehicles': 'Demo: daftar kendaraan',
    'demo.toast.reports': 'Demo: laporan kendaraan',
    'demo.toast.export': 'Demo: ekspor data',
    'demo.toast.backup': 'Demo: backup cloud',

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
    'safe.step.2': 'Hitung SHA-256 APK dan cocokkan dengan checksum resmi yang ditampilkan di atas.',
    'safe.step.3': 'Izinkan install dari browser/file manager yang kamu pakai.',
    'safe.step.4': 'Buka SteerIn, cek izin lokasi/notifikasi hanya saat fitur terkait dipakai.',
    'safe.note': 'Jangan install APK dari link tidak resmi. SteerIn tidak memakai iklan, tracker, atau upload data wajib.',

    // Download
    'download.badge': 'Download',
    'download.h2': 'Dapatkan SteerIn untuk Android.',
    'download.p': 'Download APK versi beta dan mulai kelola kendaraanmu hari ini. Aplikasi masih dalam tahap pengembangan — jika menemukan bug atau masalah, mohon laporkan kepada kami agar bisa segera diperbaiki. Login diperlukan, privasi tetap jadi prioritas.',
    'download.version': 'Versi',
    'download.size': 'Ukuran',
    'download.req': 'Butuh',
    'download.badge.1': 'App native Android',
    'download.badge.2': 'Login aman',
    'download.badge.3': 'Versi Beta',
    'download.badge.4': 'Fokus privasi',
    'download.btn': 'Download APK',
    'download.verify': 'Lihat SHA-256',
    'download.checksum.help': 'Hitung SHA-256 file APK yang diunduh, lalu bandingkan dengan nilai di atas. Di Windows: Get-FileHash nama-file.apk -Algorithm SHA256.',
    'download.terms': 'Dengan download APK, kamu menyetujui',
    'download.and': 'dan',
    'download.troubleshoot': 'Ada kendala?',
    'download.support': 'Hubungi Support',
    'download.beta.alert': 'Aplikasi masih dalam tahap beta',
    'download.beta.note': 'SteerIn masih dalam pengembangan aktif. Kamu mungkin menemukan bug, crash, atau fitur yang belum sempurna. Jika mengalami masalah, mohon laporkan kepada kami agar bisa segera diperbaiki — masukanmu sangat berharga untuk penyempurnaan aplikasi ini.',
    'download.beta.report': 'Laporkan Bug / Masukan',
    'download.beta.wa': 'Laporkan via WhatsApp',

    // Early testers
    'early.badge': 'Early Access',
    'early.h2': 'Dicari early tester yang benar-benar peduli kendaraan.',
    'early.p': 'SteerIn tidak memakai review palsu. Feedback dari pengguna awal akan dipakai untuk menyempurnakan onboarding, reminder, maps, OCR, dan premium flow sebelum rilis publik penuh.',
    'early.btn': 'Coba Sekarang',

    // Pricing
    'pricing.badge': 'Harga & Paket',
    'pricing.h2': 'Pratinjau paket selama beta.',
    'pricing.p': 'Versi dasar gratis. Fitur dan harga paket lain perlu dicek di aplikasi sebelum berlangganan.',
    'pricing.1.name': 'Free',
    'pricing.1.price': 'Rp0',
    'pricing.1.period': '/ selamanya',
    'pricing.1.desc': 'Untuk pengguna baru, ojol & komuter.',
    'pricing.2.name': 'Driver Hemat',
    'pricing.2.price': 'Rp9.000/bulan',
    'pricing.2.yearly': '(Rp89.000/tahun)',
    'pricing.2.desc': 'Untuk kendaraan harian.',
    'pricing.3.flag': 'REKOMENDASI',
    'pricing.3.name': 'Plus',
    'pricing.3.price': 'Rp25.000/bulan',
    'pricing.3.yearly': '(Rp249.000/tahun)',
    'pricing.3.desc': 'Untuk keluarga & rumah tangga.',
    'pricing.4.name': 'Premium',
    'pricing.4.price': 'Rp49.000/bulan',
    'pricing.4.yearly': '(Rp499.000/tahun)',
    'pricing.4.desc': 'Untuk power user, banyak kendaraan.',
    'pricing.note': 'Harga dan ketersediaan paket dapat berubah selama beta. Periksa detail fitur dan metode pembayaran di aplikasi sebelum berlangganan.',

    // FAQ
    'faq.badge': 'FAQ',
    'faq.h2': 'Pertanyaan yang sering muncul.',
    'faq.p': 'Jawaban singkat tentang APK, privasi, GPS, akun, dan rencana rilis SteerIn.',
    'faq.1.q': 'Apakah SteerIn tersedia di Android?',
    'faq.1.a': 'Ya. SteerIn dibuat sebagai aplikasi native Android untuk perangkat modern.',
    'faq.2.q': 'Apakah SteerIn gratis?',
    'faq.2.a': 'Versi dasar tersedia gratis. Harga dan cakupan paket berbayar yang ditampilkan dapat berubah selama beta; cek detail di aplikasi.',
    'faq.3.q': 'Apakah lokasi dilacak terus-menerus?',
    'faq.3.a': 'Tidak. GPS dipakai saat kamu menjalankan fitur trip tracking. Data lokasi tetap berada dalam kontrol pengguna.',
    'faq.4.q': 'Apakah wajib login atau cloud sync?',
    'faq.4.a': 'Login wajib untuk memakai SteerIn. Cloud sync tetap opsional untuk backup dan restore.',
    'faq.5.q': 'Apakah data servis saya diupload?',
    'faq.5.a': 'Catatan kendaraan disimpan lokal secara default. Login dan beberapa fitur memakai layanan pihak ketiga; detailnya ada di Kebijakan Privasi.',
    'form.success': 'Terima kasih! Pendaftaranmu telah terkirim.',
    'form.error': 'Pendaftaran gagal dikirim. Coba lagi nanti atau hubungi support.',
    'legal.home': 'Beranda',
    'legal.back': '← Kembali ke Beranda',
    'policy.title': 'Kebijakan Privasi',
    'policy.meta.description': 'Bagaimana SteerIn menyimpan dan memproses data kendaraan, akun, lokasi, dan backup.',
    'policy.intro': 'SteerIn membantu mengelola kendaraan. Berikut cara data kamu digunakan dan disimpan.',
    'policy.updated': 'Terakhir diperbarui: 6 Oktober 2026',
    'policy.beta': 'Berlaku untuk versi beta',
    'policy.data.title': 'Data yang dikumpulkan',
    'policy.data.body': 'Kamu memasukkan profil kendaraan, catatan servis, biaya, dan perjalanan. Lokasi dipakai saat trip tracking aktif; kamera dipakai saat fitur scan atau foto kendaraan dipilih. Login memproses identitas akun melalui layanan yang digunakan aplikasi.',
    'policy.usage.title': 'Penggunaan data',
    'policy.usage.body': 'Data digunakan untuk menampilkan kesehatan kendaraan, pengingat, riwayat, dan laporan. Log kesalahan lokal dan diagnostik crash jarak jauh opsional dapat dipakai jika dikonfigurasi.',
    'policy.location.title': 'Lokasi dan kamera',
    'policy.location.body': 'Lokasi foreground digunakan untuk perjalanan aktif. Izin lokasi background dapat diminta setelah kamu memulai trip dan memilih pelacakan saat aplikasi tidak terlihat. Kamu bisa menghentikan trip kapan saja. Kamera hanya digunakan untuk scan odometer dan foto opsional.',
    'policy.notifications.title': 'Notifikasi dan laporan',
    'policy.notifications.body': 'Notifikasi dapat digunakan untuk pengingat servis, pembaruan sistem, dan trip aktif. Laporan mingguan bersifat opsional; pengiriman email dapat menggunakan penyedia email transaksional tanpa koordinat rute GPS mentah.',
    'policy.storage.title': 'Penyimpanan dan backup',
    'policy.storage.body': 'Data inti disimpan lokal melalui Room dan DataStore. Backup file dipilih pengguna. Jika backup cloud diaktifkan, pengenal akun dan data backup disimpan melalui Supabase; preferensi laporan dapat disinkronkan jika fitur pengiriman diaktifkan.',
    'policy.sharing.title': 'Layanan pihak ketiga',
    'policy.sharing.body': 'SteerIn tidak bermaksud menjual data pribadi. Fitur tertentu dapat memakai Supabase, layanan lokasi/peta Google, Logo.dev, dan penyedia diagnostik crash opsional. Ketersediaannya bergantung pada konfigurasi aplikasi.',
    'policy.control.title': 'Kontrol pengguna',
    'policy.control.body': 'Kamu dapat mengedit atau menghapus data kendaraan, mengekspor dan memulihkan backup lokal, menghapus backup cloud, keluar dari cloud sync, dan menonaktifkan laporan mingguan. Untuk penghapusan akun cloud, hubungi pengelola aplikasi sampai fitur mandiri tersedia.',
    'policy.contact.title': 'Kontak',
    'policy.contact.body': 'Pertanyaan tentang data pribadi:',
    'faq.6.q': 'Apakah aman install APK di luar Play Store?',
    'faq.6.a': 'Unduh hanya dari tautan rilis resmi dan cocokkan SHA-256. Kecocokan hash memastikan file sesuai rilis, bukan menjamin aplikasi bebas risiko.',
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
    'sidebar.language': 'Bahasa',
    'sidebar.home.desc': 'Akses cepat ke fitur, harga, privasi, FAQ, dan update terbaru SteerIn.',

    // Footer
    'footer.brand.p': 'Garasi digital untuk mobil dan motor, dengan catatan local-first dan backup cloud opsional.',
    'footer.product': 'Produk',
    'footer.legal': 'Legal',
    'footer.support': 'Support',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.contact': 'Hubungi Support',
    'footer.bug': 'Laporkan Bug',
    'footer.feature': 'Request Fitur',
    'footer.whatsapp': 'WhatsApp Support',
    'footer.copy': 'All rights reserved. Dibuat untuk Android.',

    // Lang toggle
    'lang.label': 'EN',

    // WhatsApp FAB
    'wa.fab.label': 'Laporkan Bug',
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
    'nav.pricing': 'Pricing',
    'nav.privacy': 'Privacy',
    'nav.faq': 'FAQ',
    'nav.download': 'Download',

    // Hero
    'hero.badge': 'Built for Indonesian car & motorcycle owners',
    'hero.h1.before': 'Never miss a service again,',
    'hero.h1.gradient': 'organize all your vehicle records.',
    'hero.p': 'SteerIn helps you manage service records, odometer, trips, workshops, and vehicle history in one tidy, private, easy-to-use digital garage.',
    'hero.cta.download': 'Download Android APK',
    'hero.download.note': 'Beta for Android 8.0+ · login required · see the Download section for safety details.',
    'hero.cta.advantage': 'See features',
    'hero.form.placeholder': 'Enter your email',
    'hero.form.btn': 'Join Early Access',
    'hero.form.note': 'No spam. Unsubscribe anytime. 📬',
    'hero.trust.1': 'Local-first',
    'hero.trust.2': 'Cars + bikes',
    'hero.trust.3': 'GPS trips',
    'hero.trust.4': 'No ads/trackers',

    // Trust bar
    'trust.1.title': 'Local-first by default',
    'trust.1.p': 'Login is required to start using the app, while vehicle data remains prioritized for local storage on your device.',
    'trust.2.title': 'Optional cloud sync',
    'trust.2.p': 'Backup to the cloud only when you choose. Never automatic or mandatory.',
    'trust.3.title': 'AES encrypted backups',
    'trust.3.p': 'Backups are encrypted with strong cryptography before leaving your device.',
    'trust.4.title': 'Zero ads or trackers',
    'trust.4.p': 'No in-app ads. Third-party services used by certain features are described in the Privacy Policy.',

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
    'problem.stat.label': 'Vehicle records are easier to find when kept in one place.',
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
    'features.8.p': 'Core records stay local; see the Privacy Policy for third-party services.',
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
    'advantage.row.1.p': 'Unlike cloud-only apps, SteerIn still prioritizes local storage even though login is required.',
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
    'how.p': 'Start by logging in, add your vehicle, then organize service history in a few simple steps.',
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
    'privacy.1.p': 'Core records are stored locally. Login and some features may use third-party services; see the Privacy Policy.',
    'privacy.2.title': 'Optional cloud sync',
    'privacy.2.p': 'Sync to the cloud only when you decide. Never automatic or forced.',
    'privacy.3.title': 'Encrypted backup',
    'privacy.3.p': 'Backups are protected with strong encryption before leaving your device.',
    'privacy.4.title': 'User-controlled GPS',
    'privacy.4.p': 'Trip logging only runs when you start it. Location data stays under your control.',
    'privacy.5.title': 'Export & delete control',
    'privacy.5.p': 'Export your data, delete local records, or clear cloud backups anytime.',
    'privacy.6.title': 'No ads/trackers',
    'privacy.6.p': 'We do not sell personal data; third-party services are disclosed in the Privacy Policy.',

    // App preview
    'preview.badge': 'Preview',
    'preview.h2': 'See SteerIn in action.',
    'preview.p': 'Illustrations of SteerIn features. Appearance and example data may differ from the app.',
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
    'preview.5.label.1': 'Find workshops',
    'preview.5.label.2': 'See locations',
    'preview.5.label.3': 'Choose a service',
    'preview.5.label.4': 'Avg. Rating',
    'preview.6.title': 'Cloud Backup',
    'preview.6.label.1': 'Last Backup',
    'preview.6.label.2': 'Encrypted',
    'preview.6.value.2': 'Yes',
    'preview.6.label.3': 'Storage Used',
    'preview.6.label.4': 'Auto Backup',
    'preview.6.value.4': 'Off',

    // Phone mockup
    'phone.badge': 'Garage',
    'phone.sub': '3 vehicles · 2 reminders',

    // Phone demo (interactive)
    'demo.hint': 'Tap the phone tabs to explore the app 👆',
    'demo.tab.dash': 'Dashboard',
    'demo.tab.garage': 'Garage',
    'demo.tab.maps': 'Maps',
    'demo.tab.settings': 'Settings',
    'demo.float.1.title': 'Oil change due',
    'demo.float.1.sub': 'Honda Genio · 3,000 km remaining',
    'demo.float.2.title': 'Vehicle health',
    'demo.float.2.sub': 'Honda Genio · Good',
    'demo.dash.updated': '1 Vehicle • Updated 19:21',
    'demo.dash.total': 'TOTAL EXPENSES',
    'demo.dash.next': 'Next Actions',
    'demo.dash.health': 'Vehicle Health',
    'demo.garage.search': 'Search',
    'demo.garage.detail': 'View Details',
    'demo.maps.search': 'Search workshops, tires, oil…',
    'demo.set.premium': 'SteerIn Premium & Promo',
    'demo.set.manage': 'Manage',
    'demo.toast.odo': 'Odometer synced • 0.0 km',
    'demo.toast.route': 'Opening route to AutoPro Workshop…',
    'demo.toast.manage': 'Demo: this is a Premium plan preview',
    'demo.toast.add': 'Demo: add a new vehicle',
    'demo.toast.fuel': 'Demo: latest fuel price list',
    'demo.toast.csv': 'Demo: export history to CSV',
    'demo.toast.history': 'Demo: oil service history',
    'demo.toast.custom': 'Demo: pick a custom range',
    'demo.toast.health': 'Demo: vehicle health details',
    'demo.toast.search': 'Demo: workshop search',
    'demo.toast.filter': 'Demo: filter options',
    'demo.toast.compass': 'Demo: compass mode',
    'demo.toast.recenter': 'Demo: back to your location',
    'demo.toast.vehicles': 'Demo: vehicle list',
    'demo.toast.reports': 'Demo: vehicle reports',
    'demo.toast.export': 'Demo: export data',
    'demo.toast.backup': 'Demo: cloud backup',

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
    'safe.step.2': 'Calculate the APK SHA-256 and compare it with the official checksum shown above.',
    'safe.step.3': 'Allow installation from the browser/file manager you\'re using.',
    'safe.step.4': 'Open SteerIn, check location/notification permissions only when related features are used.',
    'safe.note': 'Don\'t install APKs from unofficial links. SteerIn uses no ads, trackers, or mandatory data uploads.',

    // Download
    'download.badge': 'Download',
    'download.h2': 'Get SteerIn for Android.',
    'download.p': 'Download the beta APK and start managing your vehicle today. The app is still in active development — if you encounter any bugs or issues, please report them to us so they can be fixed promptly. Login is required, privacy remains the priority.',
    'download.version': 'Version',
    'download.size': 'Size',
    'download.req': 'Requires',
    'download.badge.1': 'Native Android app',
    'download.badge.2': 'Secure login',
    'download.badge.3': 'Beta Version',
    'download.badge.4': 'Privacy focused',
    'download.btn': 'Download APK',
    'download.verify': 'Show SHA-256',
    'download.checksum.help': 'Calculate the downloaded APK file’s SHA-256 and compare it with the value above. On Windows: Get-FileHash filename.apk -Algorithm SHA256.',
    'download.terms': 'By downloading the APK, you agree to the',
    'download.and': 'and',
    'download.troubleshoot': 'Having issues?',
    'download.support': 'Contact Support',
    'download.beta.alert': 'App is still in beta',
    'download.beta.note': 'SteerIn is still in active development. You may encounter bugs, crashes, or unfinished features. If you experience any issues, please report them to us so we can fix them promptly — your feedback is invaluable for improving the app.',
    'download.beta.report': 'Report Bug / Feedback',
    'download.beta.wa': 'Report via WhatsApp',

    // Early testers
    'early.badge': 'Early Access',
    'early.h2': 'Looking for early testers who truly care about their vehicles.',
    'early.p': 'SteerIn doesn\'t use fake reviews. Feedback from early users will be used to perfect onboarding, reminders, maps, OCR, and premium flow before full public release.',
    'early.btn': 'Try Now',

    // Pricing
    'pricing.badge': 'Pricing & Plans',
    'pricing.h2': 'Beta pricing preview.',
    'pricing.p': 'A basic version is free. Check other plan features and prices in the app before subscribing.',
    'pricing.1.name': 'Free',
    'pricing.1.price': 'Rp0',
    'pricing.1.period': '/ forever',
    'pricing.1.desc': 'For new users, ride-hailing drivers & commuters.',
    'pricing.2.name': 'Driver Hemat',
    'pricing.2.price': 'Rp9.000/bulan',
    'pricing.2.yearly': '(Rp89.000/tahun)',
    'pricing.2.desc': 'For daily vehicles.',
    'pricing.3.flag': 'RECOMMENDED',
    'pricing.3.name': 'Plus',
    'pricing.3.price': 'Rp25.000/bulan',
    'pricing.3.yearly': '(Rp249.000/tahun)',
    'pricing.3.desc': 'For families & households.',
    'pricing.4.name': 'Premium',
    'pricing.4.price': 'Rp49.000/bulan',
    'pricing.4.yearly': '(Rp499.000/tahun)',
    'pricing.4.desc': 'For power users with multiple vehicles.',
    'pricing.note': 'Prices and plan availability may change during beta. Check features and payment methods in the app before subscribing.',

    // FAQ
    'faq.badge': 'FAQ',
    'faq.h2': 'Frequently asked questions.',
    'faq.p': 'Quick answers about APK, privacy, GPS, accounts, and SteerIn release plans.',
    'faq.1.q': 'Is SteerIn available on Android?',
    'faq.1.a': 'Yes. SteerIn is built as a native Android application for modern devices.',
    'faq.2.q': 'Is SteerIn free?',
    'faq.2.a': 'A basic version is available for free. Paid plan prices and features shown here may change during beta; check details in the app.',
    'faq.3.q': 'Is my location tracked continuously?',
    'faq.3.a': 'No. GPS is used when you run the trip tracking feature. Location data remains under user control.',
    'faq.4.q': 'Is login or cloud sync required?',
    'faq.4.a': 'Login is required to use SteerIn. Cloud sync remains optional for backup and restore.',
    'faq.5.q': 'Is my service data uploaded?',
    'faq.5.a': 'Vehicle records are stored locally by default. Login and some features use third-party services; see the Privacy Policy.',
    'form.success': 'Thank you! Your signup has been submitted.',
    'form.error': 'Signup could not be submitted. Try again later or contact support.',
    'legal.home': 'Home',
    'legal.back': '← Back to Home',
    'policy.title': 'Privacy Policy',
    'policy.meta.description': 'How SteerIn stores and processes vehicle, account, location, and backup data.',
    'policy.intro': 'SteerIn helps you manage vehicles. This explains how your data is used and stored.',
    'policy.updated': 'Last updated: October 6, 2026',
    'policy.beta': 'Applies to the beta version',
    'policy.data.title': 'Data collected',
    'policy.data.body': 'You enter vehicle profiles, service records, expenses, and trips. Location is used during active trip tracking; camera access is used when you choose scanning or vehicle photos. Login processes account identity through the services used by the app.',
    'policy.usage.title': 'How data is used',
    'policy.usage.body': 'Data is used to show vehicle health, reminders, history, and reports. Local error logs and optional remote crash diagnostics may be used when configured.',
    'policy.location.title': 'Location and camera',
    'policy.location.body': 'Foreground location is used for active trips. Background location permission may be requested after you start a trip and choose tracking while the app is not visible. You can stop a trip at any time. Camera access is limited to odometer scans and optional photos.',
    'policy.notifications.title': 'Notifications and reports',
    'policy.notifications.body': 'Notifications may be used for service reminders, system updates, and active trips. Weekly reports are optional; email delivery may use a transactional email provider without raw GPS route coordinates.',
    'policy.storage.title': 'Storage and backup',
    'policy.storage.body': 'Core data is stored locally using Room and DataStore. Backup files are chosen by the user. If cloud backup is enabled, account identifiers and backup data are stored through Supabase; report preferences may sync if delivery features are enabled.',
    'policy.sharing.title': 'Third-party services',
    'policy.sharing.body': 'SteerIn does not intentionally sell personal data. Certain features may use Supabase, Google location/maps services, Logo.dev, and an optional crash diagnostics provider. Availability depends on app configuration.',
    'policy.control.title': 'Your control',
    'policy.control.body': 'You can edit or delete vehicle data, export and restore local backups, delete cloud backups, sign out of cloud sync, and disable weekly reports. Contact the app operator for cloud account deletion until self-service deletion is available.',
    'policy.contact.title': 'Contact',
    'policy.contact.body': 'Questions about personal data:',
    'faq.6.q': 'Is it safe to install APK outside the Play Store?',
    'faq.6.a': 'Download only from the official release link and compare SHA-256. Matching the hash confirms the release file, not that the app is risk-free.',
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
    'sidebar.language': 'Language',
    'sidebar.home.desc': 'Quick access to features, pricing, privacy, FAQ, and the latest SteerIn updates.',

    // Footer
    'footer.brand.p': 'A digital garage for cars and motorcycles with local-first records and optional cloud backup.',
    'footer.product': 'Product',
    'footer.legal': 'Legal',
    'footer.support': 'Support',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.contact': 'Contact Support',
    'footer.bug': 'Report Bug',
    'footer.feature': 'Request Feature',
    'footer.whatsapp': 'WhatsApp Support',
    'footer.copy': 'All rights reserved. Built for Android.',

    // Lang toggle
    'lang.label': 'ID',

    // WhatsApp FAB
    'wa.fab.label': 'Report Bug',
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

  // Homepage metadata only; legal and changelog pages own their page-specific titles.
  const home = location.pathname === '/';
  const policy = location.pathname.startsWith('/privacy-policy');
  if (home && t['meta.title']) document.title = t['meta.title'];
  if (policy) document.title = `${t['policy.title']} — SteerIn`;

  // Update meta description
  const metaDesc = document.querySelector('meta[name="description"]');
  if (home && metaDesc) metaDesc.content = t['meta.description'];
  if (policy && metaDesc) metaDesc.content = t['policy.meta.description'];

  // Update OG tags
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (home && ogTitle) ogTitle.content = t['meta.og.title'];
  if (policy && ogTitle) ogTitle.content = document.title;
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (home && ogDesc) ogDesc.content = t['meta.og.description'];
  if (policy && ogDesc) ogDesc.content = t['policy.meta.description'];

  // Update lang attribute on <html>
  document.documentElement.lang = lang;
  document.querySelectorAll('a[href="/terms/"], a[href="/terms/en/"]').forEach(link => {
    link.href = lang === 'en' ? '/terms/en/' : '/terms/';
  });

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
  try {
    const lang = localStorage.getItem(STORAGE_KEY);
    return translations[lang] ? lang : DEFAULT_LANG;
  } catch {
    return DEFAULT_LANG;
  }
}

/**
 * Get a single translation for the current language.
 * Used by dynamic UI (e.g. phone demo toasts) that can't use data-i18n.
 */
export function t(key) {
  const lang = getCurrentLang();
  return (translations[lang] && translations[lang][key])
    || translations[DEFAULT_LANG][key]
    || key;
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
      try { localStorage.setItem(STORAGE_KEY, lang); } catch { /* storage unavailable */ }
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
