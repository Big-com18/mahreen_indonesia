import Reveal from "@/components/ui/Reveal";
import GlowBlobs from "@/components/decor/GlowBlobs";
import { internship } from "@/data/ekosistem/internship";

export default function InternshipCta() {
  const { cta } = internship;

  return (
    <section className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-plum/40 px-6 py-20 text-center">
        <GlowBlobs intensity="soft" />
        <Reveal className="relative">
          <h2 className="font-display text-3xl sm:text-4xl text-cream max-w-2xl mx-auto leading-tight">
            {cta.title}
          </h2>
          <p className="mt-6 text-haze/90 leading-relaxed max-w-lg mx-auto">{cta.desc}</p>
          <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 rounded bg-gold text-ink text-sm font-semibold tracking-widest uppercase hover:scale-105 transition-transform">
              {cta.primaryCta}
            </button>
            <button className="px-8 py-3 rounded border border-gold/40 text-gold text-sm font-semibold tracking-widest uppercase hover:bg-white/5 transition-colors">
              {cta.secondaryCta}
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
