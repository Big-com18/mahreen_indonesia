export const peduliMahreen = {
  hero: {
    eyebrow: "Program Pendidikan",
    title: "Kelas Inspirasi: Menyemai Mimpi",
    desc: "Inisiatif pemberdayaan generasi muda melalui akses literasi berkualitas dan bimbingan mentor profesional di lingkungan belajar yang hangat, inklusif, dan menguatkan masa depan.",
    cta: "Ikut Berkontribusi",
    image: "/images/peduli-mahreen/hero.jpg",
  },
  overview: {
    konteks: {
      label: "01 / Konteks",
      title: "Latar Belakang",
      desc: "Kami percaya bahwa kesenjangan akses pendidikan bukan sekadar masalah sarana, melainkan inspirasi. Peduli Mahreen hadir untuk menghadirkan ruang belajar yang nyaman, buku yang layak dibaca, dan sosok profesional yang menunjukkan pada anak-anak bahwa cita-cita mereka bisa dicapai.",
    },
    misi: {
      label: "02 / Misi",
      title: "Tujuan Program",
      goals: [
        "Meningkatkan minat baca dan literasi digital siswa sekolah dasar.",
        "Mempertemukan siswa dengan mentor dari berbagai profesi.",
        "Menyediakan Library Hub yang nyaman sebagai ruang belajar bersama.",
      ],
    },
  },
  impact: {
    eyebrow: "Impak Sosial",
    title: "Target Penerima Manfaat",
    items: [
      {
        icon: "Smile",
        to: 500,
        suffix: "+",
        unit: "Siswa",
        desc: "Anak-anak usia sekolah dasar dari keluarga dengan latar belakang ekonomi rendah.",
      },
      {
        icon: "GraduationCap",
        to: 15,
        suffix: "",
        unit: "Sekolah",
        desc: "Sekolah dasar negeri dan madrasah di wilayah penyangga operasional Mahreen.",
      },
      {
        icon: "Users",
        to: 50,
        suffix: "",
        unit: "Mentor",
        desc: "Tenaga profesional yang berkomitmen meluangkan waktu untuk berbagi pengalaman.",
      },
    ],
  },
  timeline: {
    title: "Timeline Pelaksanaan Program 2024",
    steps: [
      {
        stage: "Tahap 01",
        title: "Pemetaan & Kurikulum",
        desc: "Survei kebutuhan sekolah target dan penyusunan modul pembelajaran yang adaptif namun tetap memiliki standar kualitas tinggi.",
      },
      {
        stage: "Tahap 02",
        title: "Rekrutmen Mentor",
        desc: "Seleksi terbuka bagi karyawan Mahreen Studio dan mitra profesional untuk menjadi pengajar tamu di Kelas Inspirasi.",
      },
      {
        stage: "Tahap 03",
        title: "Renovasi Library Hub",
        desc: "Penataan ulang ruang baca menjadi Library Hub yang nyaman, lengkap dengan koleksi buku dan perangkat tablet untuk belajar.",
      },
      {
        stage: "Tahap 04",
        title: "Pelaksanaan Kelas",
        desc: "Sesi pembelajaran interaktif dilakukan setiap akhir pekan selama 3 bulan intensif.",
      },
      {
        stage: "Tahap 05",
        title: "Evaluasi & Showcase",
        desc: "Pameran karya siswa dan pengukuran indeks dampak literasi pasca-program.",
      },
    ],
  },
  gallery: {
    title: "Jejak Langkah",
    images: [
      { src: "/images/peduli-mahreen/galeri-1.jpg", alt: "Mentor membacakan buku cerita untuk anak-anak di Library Hub" },
      { src: "/images/peduli-mahreen/galeri-2.jpg", alt: "Siswa menggambar sketsa di tablet" },
      { src: "/images/peduli-mahreen/galeri-3.jpg", alt: "Tim relawan di depan Pusat Komunitas Peduli Mahreen Pendidikan" },
      { src: "/images/peduli-mahreen/galeri-4.jpg", alt: "Resepsionis Liberty Hub dengan rak buku" },
    ],
  },
  story: {
    eyebrow: "Cerita Dampak",
    title: "\"Kini Saya Tahu, Menjadi Arsitek Bukan Hanya Mimpi.\"",
    quote:
      "\"Dulu saya pikir perpustakaan hanyalah tempat yang membosankan dengan buku-buku tua. Tapi di Kelas Inspirasi Mahreen, saya melihat dunia lewat tablet dan bertemu Kak Aris yang mengajari saya cara mendesain rumah. Sekarang saya rajin menggambar setiap hari.\"",
    byline: "Siswa peserta Kelas Inspirasi",
    image: "/images/peduli-mahreen/cerita.jpg",
    imageAlt: "Potret siswa Kelas Inspirasi di perpustakaan",
  },
  cta: {
    id: "kontribusi",
    title: "Jadilah Bagian dari Perubahan",
    desc: "Kontribusi Anda, sekecil apa pun, akan menjadi lentera bagi masa depan mereka. Mari berkolaborasi menciptakan ekosistem pendidikan yang lebih bermartabat.",
    primary: "Ikut Berkontribusi",
    secondary: "Hubungi Kami",
  },
} as const;
