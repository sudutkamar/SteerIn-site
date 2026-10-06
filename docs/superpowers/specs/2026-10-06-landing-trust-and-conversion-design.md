# SteerIn landing: kepercayaan rilis dan jalur konversi

Tanggal: 2026-10-06

## Tujuan dan keputusan

Perbaiki temuan review situs dengan urutan kepercayaan rilis APK, pendaftaran early access, ketepatan konten, pengalaman instalasi, aksesibilitas, dan lokalisasi. Pertahankan Astro statis dan komponen yang ada. Sumber APK resmi adalah GitHub Release; email early access masuk ke Netlify Forms. Klaim tentang aplikasi yang tidak dapat dibuktikan dari repo situs ditulis konservatif. Jangan menjanjikan peningkatan konversi kuantitatif tanpa data awal.

## 1. Rilis APK

Tautan instalasi menuju satu artefak GitHub Release resmi. Metadata rilis yang tampil (versi, ukuran, URL, SHA-256) disimpan dalam satu sumber data situs. File checksum yang dipublikasikan dan UI dibangkitkan dari sumber yang sama atau diperiksa terhadap sumber tersebut saat build. Pemeriksaan rilis membandingkan SHA-256 dari artefak GitHub yang benar-benar diunduh dengan metadata sebelum deploy; bila unduhan tidak tersedia, pemeriksaan melaporkan kegagalan yang jelas dan tidak mengklaim verifikasi berhasil. APK lokal yang diabaikan Git bukan sumber resmi. UI membedakan tindakan melihat checksum dari verifikasi file di perangkat pengguna dan menjelaskan langkah pencocokannya. Jangan mengganti hash dengan hash APK lokal kecuali terbukti identik dengan artefak rilis.

## 2. Form early access

Gunakan markup form yang terdeteksi Netlify saat deploy statis, dengan field email, honeypot, dan nama form konsisten. Kirim dengan encoding yang didukung Netlify Forms; jangan gunakan `/api/subscribe` tanpa fungsi backend. Validasi format email di browser; tangani status menunggu, sukses, dan kegagalan jaringan/server tanpa menghapus masukan pengguna saat gagal. Status terhubung ke live region yang dapat dibaca screen reader. Jika situs berjalan di luar Netlify, tampilkan kegagalan yang jujur alih-alih sukses palsu. Verifikasi submit end-to-end di deployment Netlify tetap diperlukan untuk menyatakan email benar-benar tersimpan.

## 3. Pesan, konten, dan konversi

Pertahankan hero dengan CTA download utama dan jelaskan beta, syarat login, kompatibilitas, dan cara verifikasi APK di sekitar keputusan instalasi. Pangkas pengulangan konten agar nilai inti dan bukti produk terbaca sebelum detail panjang. Labeli demo/kartu preview sebagai ilustrasi bila tidak ada screenshot asli; jangan sajikan nama atau rating bengkel contoh sebagai data nyata. Hapus statistik rata-rata kendaraan yang tidak bersumber. Paket harga tidak boleh mengarang fitur atau status pembayaran; jika perbedaan fitur belum dapat dipastikan, jelaskan bahwa rincian paket perlu dicek di aplikasi dan hindari janji harga yang belum diverifikasi. Selaraskan klaim privasi homepage, FAQ, dan dokumen legal: data kendaraan local-first, tetapi login/layanan tertentu dapat melibatkan pihak ketiga sebagaimana tertulis pada kebijakan. Hindari kata absolut seperti 'tidak ada server remote' dan 'tanpa analitik selamanya' sampai implementasi aplikasi dapat diverifikasi.

## 4. Pengalaman dan aksesibilitas

Konten utama harus tampak tanpa menunggu JavaScript; hilangkan lapisan loading yang memblokir homepage. Scroll reveal tidak menyembunyikan konten jika JS tidak berjalan dan menghormati preferensi reduced motion. Untuk FAQ, terjemahan tidak boleh menghapus ikon atau elemen interaktif turunan. Untuk demo ponsel, hubungkan tab dan panel melalui ID/ARIA yang konsisten; pastikan tab tersembunyi tidak dapat difokuskan dan navigasi keyboard masuk akal. Uji desktop 1440px dan mobile 375px, mode gelap/terang, keyboard, serta screen reader bila alat tersedia.

## 5. i18n dan SEO

Semua teks UI baru menggunakan kunci ID dan EN. Halaman privacy dan terms tersedia dalam dua bahasa secara konsisten dengan pemilihan bahasa situs, tanpa mengubah makna legal tanpa tinjauan pemilik. Metadata awal per URL sesuai bahasa yang disajikan server. Karena pilihan bahasa saat ini hanya client-side pada URL yang sama, jangan deklarasikan dua URL hreflang identik sebagai halaman bahasa terpisah; bila membuat rute bahasa khusus, sediakan konten server-rendered dan pasangan hreflang sebenarnya. Komponen language switch tidak menimpa metadata spesifik halaman dengan metadata homepage. Kunci terjemahan diperiksa otomatis untuk kedua bahasa.

## 6. Verifikasi dan batas kepastian

Tambahkan pemeriksaan otomatis yang bermakna untuk build, kunci terjemahan, form statis dan metadata rilis; jalankan pemeriksaan yang relevan setelah perubahan. Verifikasi unduhan GitHub Release dan submit Netlify adalah pemeriksaan terpisah dari build lokal. Tinjau tautan penting dan layout pada 375px/1440px bila tersedia alat browser. Catat hasil yang benar-benar diamati dan hal yang masih memerlukan verifikasi layanan eksternal. Tidak ada perubahan pada kode aplikasi Android dalam repo ini.

## Kriteria selesai

- Metadata unduhan dan checksum cocok dengan artefak GitHub Release yang berhasil diverifikasi, atau klaim verifikasi/unduhan yang tidak dapat dibuktikan tidak dipublikasikan sebagai fakta.
- Form terdaftar sebagai Netlify Form dalam hasil build; alur gagal tidak memberikan sukses palsu, dan verifikasi penyimpanan di deployment dilaporkan secara terpisah.
- Klaim homepage, preview, harga, dan kebijakan tidak saling bertentangan atau menyajikan ilustrasi sebagai bukti produk nyata.
- Halaman dapat dipakai tanpa loading blocker, FAQ tetap utuh saat penerjemahan, dan demo bertab dapat dioperasikan dengan keyboard.
- ID/EN konsisten pada UI dan halaman legal; markup SEO tidak mengklaim URL bahasa berbeda saat URL-nya sama.
- Build dan pemeriksaan otomatis lulus; keterbatasan pengujian browser atau layanan eksternal dilaporkan dengan jelas.
