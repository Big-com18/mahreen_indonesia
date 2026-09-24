import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { peduliMahreen } from "@/data/ekosistem/peduli-mahreen";

export default function PeduliStory() {
  const { story } = peduliMahreen;

  return (
    <section className="bg-[#1d1f1f] py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <div className="relative aspect-[4/4.3] w-full overflow-hidden grayscale">
            <Image
              src={story.image}
              alt={story.imageAlt}
              fill
              sizes="(min-width:1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="text-xs font-bold tracking-[0.3em] text-gold uppercase">{story.eyebrow}</p>
          <h2 className="mt-5 font-display font-semibold text-4xl sm:text-5xl leading-[1.05] tracking-tight text-cream">
            {story.title}
          </h2>
          <blockquote className="mt-8 max-w-2xl text-base italic leading-8 text-cream/80">
            {story.quote}
          </blockquote>
          <p className="mt-6 text-sm text-haze">{story.byline}</p>
        </Reveal>
      </div>
    </section>
  );
}
