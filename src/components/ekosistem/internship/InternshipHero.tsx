import Reveal from "@/components/ui/Reveal";
import { internship } from "@/data/ekosistem/internship";

export default function InternshipHero() {
  const { hero, stats } = internship;

  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col justify-between pt-16 bg-[radial-gradient(ellipse_at_top,_theme(colors.plum)_0%,_theme(colors.ink)_65%)]">
      <div className="relative flex-1 flex items-center">
        <div className="mx-auto max-w-3xl px-6 text-center w-full">
          <Reveal>
            <h1 className="font-display text-4xl sm:text-6xl leading-tight text-cream">
              {hero.titleWhite}
              <br />
              <span className="text-gold">{hero.titleGold}</span>
            </h1>
            <p className="mt-6 text-haze/90 leading-relaxed max-w-xl mx-auto">{hero.desc}</p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 rounded-full bg-gold text-ink font-medium hover:scale-105 transition-transform">
                {hero.primaryCta}
              </button>
              <button className="px-8 py-3 rounded-full border border-gold/40 text-gold font-medium hover:bg-white/5 transition-colors">
                {hero.secondaryCta}
              </button>
            </div>
          </Reveal>
        </div>
      </div>

      <Reveal delay={0.15}>
        <div className="relative border-t border-white/10 bg-black/30">
          <div className="mx-auto max-w-6xl px-6 py-6 grid grid-cols-3 sm:grid-cols-6 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-2xl sm:text-3xl text-gold">{s.value}</p>
                <p className="text-[11px] tracking-wide text-haze/80 uppercase mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
