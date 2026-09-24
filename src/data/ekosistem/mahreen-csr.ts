export const mahreenCsr = {
  hero: {
    eyebrow: "Elevating Social Impact",
    title: "Mahreen CSR",
    desc: "Mahreen CSR merupakan komitmen Mahreen Indonesia dalam menciptakan dampak sosial yang berkelanjutan melalui kolaborasi, pemberdayaan masyarakat, pendidikan, lingkungan, serta kemitraan strategis dengan berbagai pihak.",
    primaryCta: "Pelajari Program",
    secondaryCta: "Hubungi Kami",
    image: "/images/mahreen-csr/hero.jpg",
    stats: [
      { value: "15+", label: "Program CSR" },
      { value: "50+", label: "Mitra Kolaborasi" },
      { value: "1K+", label: "Penerima Manfaat" },
      { value: "20+", label: "Kota/Kabupaten Terjangkau" },
      { value: "3+", label: "Tahun Berkontribusi" },
      { value: "100%", label: "Komitmen Dampak" },
    ],
  },
  about: {
    title: "Tentang Mahreen CSR",
    desc: "Lebih dari sekadar program bantuan, Mahreen CSR adalah hub kolaboratif yang menjembatani visi korporasi dengan kebutuhan riil masyarakat. Kami mengintegrasikan profesionalisme bisnis dengan kepekaan sosial untuk menciptakan solusi jangka panjang.",
    image: "/images/mahreen-csr/tentang.jpg",
    imageAlt: "Pohon kristal berhias lampu emas sebagai simbol pertumbuhan",
    mission: {
      label: "Misi Kami",
      desc: "Mentransformasi filantropi menjadi investasi sosial yang terukur dan bermartabat.",
    },
    points: [
      {
        icon: "Users",
        title: "Pemberdayaan Komunal",
        desc: "Membangun kemandirian masyarakat melalui edukasi dan akses sumber daya.",
      },
      {
        icon: "Leaf",
        title: "Sustainability Framework",
        desc: "Menjamin setiap program memiliki jejak ekologis yang positif dan regeneratif.",
      },
    ],
  },
  pillars: {
    eyebrow: "Strategic Focus",
    title: "Pilar Program Mahreen",
    items: [
      {
        icon: "Handshake",
        title: "CSR Partnership",
        desc: "Kolaborasi strategis antar entitas untuk memperluas jangkauan dampak sosial.",
      },
      {
        icon: "Users",
        title: "Community Development",
        desc: "Program penguatan kapasitas komunitas lokal secara berkelanjutan.",
      },
      {
        icon: "Leaf",
        title: "Sustainability Program",
        desc: "Inisiatif ramah lingkungan yang berfokus pada konservasi masa depan.",
      },
      {
        icon: "Megaphone",
        title: "Social Campaign",
        desc: "Advokasi isu-isu sosial melalui kampanye kreatif yang menggugah.",
      },
      {
        icon: "Share2",
        title: "Collaborative Impact Project",
        desc: "Proyek lintas sektor untuk menyelesaikan masalah kompleks masyarakat.",
      },
    ],
  },
  featured: {
    eyebrow: "Featured Initiative",
    title: "Program Unggulan",
    programs: [
      {
        status: "On Progress",
        location: "Jawa Barat",
        title: "Reboisasi Mahreen 2024",
        desc: "Restorasi ekosistem hutan lindung melalui penanaman 10,000 pohon endemik bersama komunitas lokal.",
        progress: 75,
        avatars: ["AC", "MS"],
        more: 12,
        metric: "520 Kontributor",
        image: "/images/mahreen-csr/reboisasi.jpg",
        imageAlt: "Relawan menanam pohon di lereng perbukitan berkabut",
      },
      {
        status: "Active",
        location: "Jakarta",
        title: "Mahreen Learning Center",
        desc: "Pusat pelatihan literasi digital dan kreatif bagi anak-anak di wilayah rural untuk kesetaraan peluang.",
        progress: 90,
        avatars: ["LC", "KT"],
        more: 4,
        metric: "1,200 Siswa Terdaftar",
        image: "/images/mahreen-csr/learning-center.jpg",
        imageAlt: "Anak-anak belajar bersama di meja panjang dengan tablet",
      },
    ],
  },
} as const;
