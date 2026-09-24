import Reveal from "@/components/ui/Reveal";
import GlowBlobs from "@/components/decor/GlowBlobs";

export default function About() {
  return (
    <section className="relative overflow-hidden">
      <GlowBlobs />
      <div className="relative mx-auto max-w-4xl px-6 py-28 text-center">
        <Reveal>
          <span className="inline-block w-10 h-[2px] bg-brand-gradient mb-6" />
          <h2 className="font-display text-3xl sm:text-4xl text-cream">
            Mengenal Mahreen Indonesia
          </h2>
          <p className="mt-6 text-haze leading-relaxed">
            Mahreen Indonesia adalah platform ekosistem kreatif, digital,
            sosial, pembelajaran, portofolio, dan kemitraan untuk individu,
            bisnis, serta komunitas. Berbasis di Kota Cimahi, Jawa Barat,
            Mahreen hadir untuk membantu ide, karya, dan bisnis tumbuh lebih
            profesional dan berdampak.
          </p>
          <p className="mt-4 text-haze leading-relaxed">
            Ekosistemnya berdiri di atas lima pilar: Mahreen Studio sebagai
            lifestyle brand, Tanya Mahreen untuk solusi digital seperti
            website, branding, dan pemasaran, Peduli Mahreen untuk program
            pendidikan, Mahreen CSR untuk dampak sosial yang berkelanjutan,
            serta Internship bagi generasi muda yang ingin belajar sambil
            berkarya.
          </p>
        </Reveal>
      </div>
    </section>
  );
}