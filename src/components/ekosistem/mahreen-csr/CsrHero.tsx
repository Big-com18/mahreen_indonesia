import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { mahreenCsr } from "@/data/ekosistem/mahreen-csr";

export default function CsrHero() {
  const { hero } = mahreenCsr;

  return (
    <section className="relative overflow-hidden bg-black pt-16">
      <Image
        src={hero.image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-bottom opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black" />

      <div className="relative mx-auto max-w-6xl px-6 pt-32 pb-20">
        <Reveal>
          <p className="text-xs tracking-[0.3em] text-gold uppercase">{hero.eyebrow}</p>
          <h1 className="mt-4 font-display font-semibold text-5xl sm:text-6xl text-cream">
            {hero.title}
          </h1>
          <p className="mt-7 max-w-2xl leading-8 text-cream/85">{hero.desc}</p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#program-unggulan"
              className="rounded-sm bg-gold px-8 py-4 text-center text-sm font-medium text-ink transition-colors hover:bg-cream"
            >
              {hero.primaryCta}
            </a>
            <Link
              href="/#kontak"
              className="rounded-sm border border-cream/40 px-8 py-4 text-center text-sm font-medium text-cream transition-colors hover:border-gold hover:text-gold"
            >
              {hero.secondaryCta}
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mt-24">
          <dl className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {hero.stats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center justify-center border border-white/5 bg-[#101010]/90 px-4 py-8 text-center"
              >
                <dd className="font-display font-semibold text-4xl text-gold">{s.value}</dd>
                <dt className="mt-3 text-sm leading-snug text-cream/90">{s.label}</dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
