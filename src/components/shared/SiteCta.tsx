import Reveal from "@/components/ui/Reveal";
import GlowBlobs from "@/components/decor/GlowBlobs";
import { siteCta } from "@/data/site";

export default function SiteCta() {
  return (
    <section className="relative overflow-hidden mx-auto max-w-4xl px-6 py-24 text-center">
      <GlowBlobs intensity="soft" />
      <Reveal className="relative">
        <h2 className="font-display italic text-3xl sm:text-4xl text-cream">
          {siteCta.title}
        </h2>
        <p className="mt-6 text-haze/90 leading-relaxed max-w-xl mx-auto">{siteCta.body}</p>
        <p className="mt-8 text-xs sm:text-sm tracking-widest text-gold/80 uppercase">
          {siteCta.highlight}
        </p>
      </Reveal>
    </section>
  );
}
