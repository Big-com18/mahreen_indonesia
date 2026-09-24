import Reveal from "@/components/ui/Reveal";
import GlowBlobs from "@/components/decor/GlowBlobs";

export default function Cta() {
  return (
    <section className="relative overflow-hidden mx-auto max-w-4xl px-6 py-28 text-center">
      <GlowBlobs intensity="soft" />
      <Reveal className="relative">
        <h2 className="font-display text-3xl sm:text-4xl text-cream">
          Karyamu bisa jadi langkah kecil untuk perubahan
        </h2>
        <p className="mt-6 text-haze leading-relaxed max-w-xl mx-auto">
          Ikuti @mahreenindonesia untuk melihat karya dari peserta lain dan
          program-program terbaru dari ekosistem Mahreen Indonesia.
        </p>
      </Reveal>
    </section>
  );
}
