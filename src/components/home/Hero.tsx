import Stars from "@/components/decor/Stars";
import MegaMendung from "@/components/decor/MegaMendung";
import Landscape from "@/components/decor/Landscape";
import Petals from "@/components/decor/Petals";
import Tumpal from "@/components/decor/Tumpal";
import HeroTitle from "@/components/ui/HeroTitle";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-mesh bg-[length:200%_200%] animate-gradient-pan min-h-screen flex items-center pt-16">
      <Stars count={40} />
      <MegaMendung className="absolute inset-0 w-full h-full text-gold" opacity={0.1} />
      <Landscape />
      <Petals />

      <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 text-center">
        <HeroTitle />
        <p className="mt-8 text-lg text-haze max-w-xl mx-auto leading-relaxed">
          Platform ekosistem kreatif, digital, sosial, pembelajaran, portofolio,
          dan kemitraan untuk individu, bisnis, serta komunitas — mengajak
          generasi muda berkarya untuk Indonesia.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/layanan"
            className="px-7 py-3 rounded-full bg-cream text-ink font-medium hover:bg-white hover:scale-105 transition-all"
          >
            Jelajahi Ekosistem
          </a>
          <a
            href="#internship"
            className="px-7 py-3 rounded-full border border-cream/30 text-cream font-medium hover:bg-white/10 hover:scale-105 transition-all animate-pulse-glow"
          >
            Lihat Creative Challenge
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-cream/50 text-xs">
        ↓ gulir
      </div>
      <Tumpal className="absolute bottom-0 left-0 text-ember/70" />
    </section>
  );
}
