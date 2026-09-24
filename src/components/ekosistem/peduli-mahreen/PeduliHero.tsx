import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { peduliMahreen } from "@/data/ekosistem/peduli-mahreen";

export default function PeduliHero() {
  const { hero, overview } = peduliMahreen;

  return (
    <section className="relative overflow-hidden bg-black pt-16">
      <Image
        src={hero.image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-bottom opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black" />

      <div className="relative mx-auto max-w-6xl px-6 pt-28 pb-24">
        <Reveal>
          <p className="flex items-center gap-4 text-xs font-bold tracking-[0.3em] text-gold uppercase">
            <span className="h-px w-11 bg-gold/70" />
            {hero.eyebrow}
          </p>
          <h1 className="mt-6 max-w-2xl font-display font-semibold text-5xl sm:text-7xl leading-[0.95] tracking-tight text-cream">
            {hero.title}
          </h1>
          <p className="mt-8 max-w-xl text-cream/85 leading-8">{hero.desc}</p>
          <a
            href={`#${peduliMahreen.cta.id}`}
            className="mt-10 inline-flex items-center gap-3 bg-gold px-8 py-4 text-xs font-bold tracking-[0.2em] text-ink uppercase transition-colors hover:bg-cream"
          >
            {hero.cta}
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </Reveal>

        <div className="mt-20 grid gap-7 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <article className="h-full border border-white/10 bg-[#1c1e1e]/95 p-10">
              <p className="text-xs font-bold tracking-[0.25em] text-gold uppercase">
                {overview.konteks.label}
              </p>
              <h2 className="mt-3 font-display font-semibold text-4xl text-cream">
                {overview.konteks.title}
              </h2>
              <p className="mt-6 max-w-prose text-sm leading-7 text-cream/80">
                {overview.konteks.desc}
              </p>
            </article>
          </Reveal>

          <Reveal delay={0.08}>
            <article className="h-full border border-white/10 bg-[#1c1e1e]/95 p-10">
              <p className="text-xs font-bold tracking-[0.25em] text-gold uppercase">
                {overview.misi.label}
              </p>
              <h2 className="mt-3 font-display font-semibold text-4xl leading-tight text-cream">
                {overview.misi.title}
              </h2>
              <ul className="mt-6 space-y-3 text-sm leading-7 text-cream/80">
                {overview.misi.goals.map((goal) => (
                  <li key={goal} className="flex gap-3">
                    <span className="mt-3 h-px w-4 shrink-0 bg-gold" />
                    {goal}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
