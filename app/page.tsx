import Petals from "@/components/Petals";
import Reveal from "@/components/Reveal";

const pillars = [
  { label: "Kreativitas", desc: "Ruang bereksperimen dengan ide dan bentuk baru." },
  { label: "Teknologi Digital", desc: "Membangun produk dan karya lewat kanal digital." },
  { label: "Pengembangan Talenta", desc: "Belajar sambil membuat karya yang nyata." },
  { label: "Bisnis", desc: "Ide diuji lewat kolaborasi dan peluang usaha." },
  { label: "Komunitas", desc: "Tumbuh bersama sesama anak muda yang berkarya." },
  { label: "Kontribusi Sosial", desc: "Karya yang memberi manfaat, bukan sekadar tampil." },
];

const positions = [
  {
    role: "Website Development",
    brief: "Merancang website sederhana yang memperkenalkan Mahreen Indonesia dengan cara yang mudah dipahami.",
    output: "1 website / prototype",
  },
  {
    role: "Social Media Management",
    brief: "Menyusun content plan Instagram 7 hari untuk menaikkan awareness generasi muda.",
    output: "1 content plan 7 hari",
  },
  {
    role: "Graphic Design",
    brief: "Menghadirkan satu karya visual yang menangkap perhatian dan nilai Mahreen Indonesia.",
    output: "1 karya visual utama",
  },
  {
    role: "Video Editor",
    brief: "Menceritakan pesan positif tentang karya dan dampak lewat satu video pendek.",
    output: "1 video pendek",
  },
  {
    role: "Business Development & Partnership",
    brief: "Menemukan satu peluang kolaborasi yang bisa membantu Mahreen Indonesia berkembang.",
    output: "1 partnership concept",
  },
];

export default function Home() {
  return (
    <main>
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-ink/70 border-b border-white/5">
        <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <span className="font-display italic text-xl text-cream">Mahreen</span>
          <div className="hidden sm:flex items-center gap-8 text-sm text-haze">
            <a href="#ekosistem" className="hover:text-cream transition-colors">Ekosistem</a>
            <a href="#internship" className="hover:text-cream transition-colors">Internship</a>
            <a href="#kontak" className="hover:text-cream transition-colors">Kontak</a>
          </div>
          <a
            href="https://bit.ly/FormTaskMII2"
            className="text-sm font-medium px-4 py-2 rounded-full bg-brand-gradient text-ink shadow-lg shadow-magenta/20 hover:scale-105 transition-transform"
          >
            Ikut Batch 2
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-brand-gradient-soft min-h-screen flex items-center pt-16">
        <Petals />
        <div className="relative mx-auto max-w-4xl px-6 py-24 text-center">
          <p className="text-sm tracking-wide text-gold/90 mb-6">
            Mahreen Indonesia Internship Batch 2
          </p>
          <h1 className="font-display text-5xl sm:text-7xl leading-[1.05] text-cream">
            Satu Ide.
            <br />
            <span className="italic bg-gradient-to-r from-magenta to-ember bg-clip-text text-transparent">
              Satu Karya.
            </span>
            <br />
            Satu Dampak.
          </h1>
          <p className="mt-8 text-lg text-haze max-w-xl mx-auto leading-relaxed">
            Mahreen Indonesia adalah ekosistem kreativitas, teknologi, dan komunitas
            yang mengajak generasi muda berkarya untuk Indonesia — lewat komunikasi,
            teknologi, dan kolaborasi yang relevan dengan kehidupan mereka.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#ekosistem"
              className="px-7 py-3 rounded-full bg-cream text-ink font-medium hover:bg-white transition-colors"
            >
              Jelajahi Ekosistem
            </a>
            <a
              href="#internship"
              className="px-7 py-3 rounded-full border border-cream/30 text-cream font-medium hover:bg-white/10 transition-colors"
            >
              Lihat Creative Challenge
            </a>
          </div>
        </div>
      </section>

      {/* TENTANG */}
      <section className="mx-auto max-w-4xl px-6 py-28 text-center">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl text-cream">
            Karya yang mudah dikenal, mudah dipahami, dan relevan
          </h2>
          <p className="mt-6 text-haze leading-relaxed">
            Mahreen Indonesia punya banyak program dan peluang untuk generasi muda —
            tapi informasinya sering tenggelam di tengah keramaian. Halaman ini
            dibuat untuk jadi pintu masuk yang sederhana: mengenal ekosistemnya,
            lalu memilih cara sendiri untuk ikut berkarya.
          </p>
        </Reveal>
      </section>

      {/* EKOSISTEM */}
      <section id="ekosistem" className="mx-auto max-w-6xl px-6 py-16">
        <Reveal>
          <h2 className="font-display text-3xl text-cream text-center mb-14">
            Enam ruang dalam ekosistem Mahreen
          </h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {pillars.map((p, i) => (
            <Reveal key={p.label} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-white/8 bg-plum/60 p-7 hover:border-ember/40 transition-colors">
                <h3 className="font-display text-xl text-cream mb-2">{p.label}</h3>
                <p className="text-sm text-haze leading-relaxed">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* INTERNSHIP / CREATIVE CHALLENGE */}
      <section id="internship" className="bg-plum/40 border-y border-white/5">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Reveal className="max-w-2xl mb-14">
            <p className="text-sm text-gold mb-3">Creative Challenge</p>
            <h2 className="font-display text-3xl sm:text-4xl text-cream">
              Berkarya Untuk Indonesia
            </h2>
            <p className="mt-4 text-haze leading-relaxed">
              Pilih satu posisi, buat satu karya sesuai brief, dan tunjukkan cara
              berpikirmu. Tidak ada satu jawaban yang benar — yang penting relevan,
              orisinal, dan berdampak.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-5">
            {positions.map((pos, i) => (
              <Reveal key={pos.role} delay={i * 0.05}>
                <div className="h-full rounded-2xl bg-ink/60 border border-white/8 p-7 flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-xl text-cream">{pos.role}</h3>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-brand-gradient text-ink font-medium">
                      {pos.output}
                    </span>
                  </div>
                  <p className="text-sm text-haze leading-relaxed">{pos.brief}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-14 text-center">
            <a
              href="https://bit.ly/FormTaskMII2"
              className="inline-block px-8 py-3.5 rounded-full bg-brand-gradient text-ink font-medium hover:scale-105 transition-transform"
            >
              Kumpulkan Karyamu
            </a>
            <p className="mt-4 text-xs text-haze">
              Waktu pengerjaan 1×24 jam sejak task diterima · #BerkaryaUntukIndonesia
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA KOMUNITAS */}
      <section className="mx-auto max-w-4xl px-6 py-28 text-center">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl text-cream">
            Karyamu bisa jadi langkah kecil untuk perubahan
          </h2>
          <p className="mt-6 text-haze leading-relaxed max-w-xl mx-auto">
            Ikuti @mahreenindonesia untuk melihat karya dari peserta lain dan
            program-program terbaru dari ekosistem Mahreen Indonesia.
          </p>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer id="kontak" className="border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6 py-14 flex flex-col sm:flex-row justify-between gap-8">
          <div>
            <span className="font-display italic text-xl text-cream">Mahreen Indonesia</span>
            <p className="text-sm text-haze mt-2 max-w-xs">
              Creative · Digital · Social Company
            </p>
          </div>
          <div className="text-sm text-haze space-y-1">
            <p>Jl. Kebon Kopi No. 153, Kota Cimahi, Jawa Barat 40535</p>
            <p>mahreenindonesia.com · info@mahreenindonesia.com</p>
            <p>+62 896-5264-7385</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
