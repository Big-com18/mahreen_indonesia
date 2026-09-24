import Reveal from "@/components/ui/Reveal";
import GlowBlobs from "@/components/decor/GlowBlobs";
import { services } from "@/data/layanan";

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-16">
      <GlowBlobs intensity="soft" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <p className="text-sm tracking-[0.3em] text-gold/80 uppercase mb-4">
            {services.eyebrow}
          </p>
          <h1 className="font-display italic text-4xl sm:text-5xl text-cream leading-tight">
            {services.title}
          </h1>
          <p className="mt-6 text-haze/90 leading-relaxed">{services.intro}</p>
        </Reveal>
      </div>
    </section>
  );
}
