import Reveal from "@/components/ui/Reveal";
import GlowBlobs from "@/components/decor/GlowBlobs";
import { portfolio } from "@/data/portofolio";

export default function PortfolioHero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-16">
      <GlowBlobs intensity="soft" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <p className="text-sm tracking-[0.3em] text-gold/80 uppercase mb-4">
            {portfolio.eyebrow}
          </p>
          <h1 className="font-display text-4xl sm:text-5xl text-cream leading-tight">
            {portfolio.titleLine1}
            <br />
            <span className="italic text-gold">{portfolio.titleLine2}</span>
          </h1>
          <p className="mt-6 text-haze/90 leading-relaxed">{portfolio.intro}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-8 border-t border-white/8 pt-10">
            {portfolio.stats.map((s) => (
              <div key={s.label}>
                <p className="text-[11px] tracking-[0.2em] text-haze/60 uppercase mb-2">
                  {s.label}
                </p>
                <p className="font-display text-3xl sm:text-4xl text-gold">{s.value}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
