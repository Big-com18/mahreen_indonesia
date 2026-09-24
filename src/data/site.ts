export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Tentang Kami", href: "/tentang" },
  { label: "Portofolio", href: "/portofolio" },
  { label: "Layanan Kami", href: "/layanan" },
] as const;

export const contact = {
  address: "Jl. Kebon Kopi No. 153, Kota Cimahi, Jawa Barat 40535",
  website: "mahreenindonesia.com",
  email: "info@mahreenindonesia.com",
  phone: "+62 896-5264-7385",
  formUrl: "https://bit.ly/FormTaskMII2",
};

export const siteCta = {
  title: "Let's Build Something Meaningful Together",
  body: "Bersama Mahreen Indonesia, wujudkan ide, karya, dan bisnis menjadi lebih kreatif, profesional, dan berdampak. Kami siap menjadi partner kolaborasi untuk pengembangan digital, branding, serta kontribusi sosial di era modern.",
  highlight: "Mari bertumbuh dan memberikan manfaat bersama Mahreen Indonesia.",
} as const;

export const footerLinks = {
  tentangKami: [
    { label: "Profil & Sejarah", href: "/tentang#sejarah" },
    { label: "Visi & Misi", href: "/tentang#visi-misi" },
    { label: "Legalitas Resmi", href: "/tentang#legalitas" },
    { label: "Portofolio", href: "/portofolio" },
    { label: "Contact", href: "/#kontak" },
  ],
  pilarMahreen: [
    { label: "Mahreen Studio", href: "/mahreen-studio" },
    { label: "Tanya Mahreen", href: "/tanya-mahreen" },
    { label: "Peduli Mahreen", href: "/peduli-mahreen" },
    { label: "Mahreen CSR", href: "/mahreen-csr" },
    { label: "Mahreen Indonesia Internship", href: "/internship" },
  ],
  social: [
    { label: "Instagram", icon: "Instagram", href: "https://instagram.com" },
    { label: "X", icon: "Twitter", href: "https://x.com" },
    { label: "TikTok", icon: "Music2", href: "https://tiktok.com" },
    { label: "Email", icon: "Mail", href: "mailto:info@mahreenindonesia.com" },
    { label: "YouTube", icon: "Youtube", href: "https://youtube.com" },
  ],
} as const;

// "Our Ecosystem" dropdown shown in the navbar on every page
export const ecosystemLinks = [
  { label: "Mahreen Studio", href: "/mahreen-studio" },
  { label: "Tanya Mahreen", href: "/tanya-mahreen" },
  { label: "Peduli Mahreen", href: "/peduli-mahreen" },
  { label: "Mahreen CSR", href: "/mahreen-csr" },
  { label: "Internship", href: "/internship" },
] as const;

export const ecosystemCards = [
  {
    href: "/internship",
    icon: "Users",
    eyebrow: "Pengembangan Talenta",
    monogram: "MI",
    title: "Mahreen Indonesia Internship",
    desc: "Program pengembangan talenta kreatif dan digital berbasis proyek nyata yang membekali peserta dengan pengalaman profesional dan portofolio.",
  },
  {
    href: "/tanya-mahreen",
    icon: "Briefcase",
    eyebrow: "Solusi Bisnis",
    monogram: "TM",
    title: "Tanya Mahreen",
    desc: "Solusi digital dan kreatif untuk membantu UMKM, brand, dan perusahaan bertumbuh melalui teknologi dan inovasi.",
  },
  {
    href: "/mahreen-studio",
    icon: "Palette",
    eyebrow: "Studio Kreatif",
    monogram: "MS",
    title: "Mahreen Studio",
    desc: "Creative lifestyle yang berfokus pada pengembangan apparel, visual branding, dan identitas kreatif modern.",
  },
  {
    href: "/peduli-mahreen",
    icon: "Sparkles",
    eyebrow: "Creative Agency",
    monogram: "PM",
    title: "Peduli Mahreen",
    desc: "Mendorong perubahan melalui pendidikan, pemberdayaan, dan aksi sosial yang berdampak bagi masyarakat.",
  },
] as const;

export const pillars = [
  { label: "Website Development", icon: "Globe" },
  { label: "Graphic Design", icon: "PenTool" },
  { label: "Branding & Identity", icon: "Fingerprint" },
  { label: "UI/UX Design", icon: "MonitorSmartphone" },
  { label: "Digital Marketing", icon: "Megaphone" },
  { label: "Photography", icon: "Camera" },
  { label: "Videography", icon: "Clapperboard" },
  { label: "Business Strategy", icon: "TrendingUp" },
] as const;

export const learning = [
  {
    title: "Bootcamp",
    icon: "GraduationCap",
    desc: "Program intensif 12 minggu yang dirancang untuk mengubah pemula menjadi profesional yang siap kerja.",
    features: ["Kurikulum Berbasis Industri", "Proyek Dunia Nyata"],
    cta: "Daftar Sekarang",
  },
  {
    title: "Workshop",
    icon: "Briefcase",
    desc: "Sesi berbasis keterampilan praktis yang fokus pada penguasaan alat dan metodologi spesifik.",
    features: ["Sesi Intensif 1-2 Hari", "Latihan Langsung (Hands-on)"],
    cta: "Lihat Jadwal",
  },
  {
    title: "Certification",
    icon: "BadgeCheck",
    desc: "Validasi keahlian Anda dengan sertifikasi yang diakui dari jaringan mitra strategis kami.",
    features: ["Standar Global", "Kredensial Terverifikasi"],
    cta: "Pelajari Lebih Lanjut",
  },
] as const;

export const hashtags = [
  "#BerkaryaUntukIndonesia",
  "#SatuIdeSatuKaryaSatuDampak",
  "#MahreenIndonesia",
  "#FromLearningToRealImpact",
  "#MahreenIndonesiaInternship",
] as const;
