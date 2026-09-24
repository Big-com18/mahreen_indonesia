import Reveal from "@/components/ui/Reveal";
import { tanyaMahreen } from "@/data/ekosistem/tanya-mahreen";

export default function TanyaHero() {
  const { hero } = tanyaMahreen;

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center pt-16 bg-[radial-gradient(ellipse_at_top_right,_theme(colors.plum)_0%,_theme(colors.ink)_60%)]">
      <div className="relative mx-auto max-w-6xl px-6 py-24 w-full">
        <Reveal className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-[11px] tracking-widest uppercase px-4 py-1.5 rounded-full border border-gold/30 text-gold mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            {hero.badge}
          </span>
          <h1 className="font-display text-4xl sm:text-6xl leading-tight text-cream">
            {hero.titleWhite}{" "}
            <span className="text-gold">{hero.titleGold}</span>
          </h1>
          <p className="mt-6 text-haze/90 leading-relaxed max-w-lg">{hero.desc}</p>
          <div className="mt-9 flex flex-col sm:flex-row gap-4">
            <button className="px-7 py-3 rounded-full bg-gold text-ink font-medium hover:scale-105 transition-transform">
              {hero.primaryCta}
            </button>
            <button className="px-7 py-3 rounded-full border border-cream/30 text-cream font-medium hover:bg-white/10 transition-colors">
              {hero.secondaryCta}
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
