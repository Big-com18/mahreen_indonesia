import Reveal from "@/components/ui/Reveal";
import { mahreenStudio } from "@/data/ekosistem/mahreen-studio";

export default function StudioHero() {
  const { hero } = mahreenStudio;

  return (
    <section className="relative overflow-hidden min-h-screen flex items-end pb-24 pt-16 bg-[radial-gradient(ellipse_at_top,_theme(colors.plum)_0%,_theme(colors.ink)_65%)]">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 120px)",
        }}
      />
      <div className="relative mx-auto max-w-3xl px-6 text-center w-full">
        <Reveal>
          <p className="text-xs tracking-[0.35em] text-haze/80 uppercase mb-4">{hero.eyebrow}</p>
          <h1 className="font-display italic text-5xl sm:text-7xl text-cream leading-none">
            {hero.title}
          </h1>
          <p className="mt-6 text-sm sm:text-base tracking-[0.25em] text-haze/80 uppercase">
            {hero.tagline}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 rounded-full bg-gold text-ink font-medium hover:scale-105 transition-transform">
              {hero.primaryCta}
            </button>
            <button className="px-8 py-3 rounded-full border border-cream/30 text-cream font-medium hover:bg-white/10 transition-colors">
              {hero.secondaryCta}
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
