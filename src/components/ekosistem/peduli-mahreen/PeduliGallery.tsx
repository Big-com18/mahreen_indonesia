import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { peduliMahreen } from "@/data/ekosistem/peduli-mahreen";

export default function PeduliGallery() {
  const { gallery } = peduliMahreen;
  const [main, topRight, bottomRight, tall] = gallery.images;

  const tile = "relative overflow-hidden bg-[#0b0b0b] grayscale transition duration-500 hover:grayscale-0";

  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="text-center font-display font-semibold text-4xl sm:text-5xl tracking-tight text-cream">
            {gallery.title}
          </h2>
        </Reveal>

        <Reveal delay={0.08} className="mt-14">
          <div className="grid gap-5 md:h-[675px] md:grid-cols-[2.08fr_1fr_1fr] md:grid-rows-2">
            <div className={`${tile} aspect-[4/3] md:row-span-2 md:aspect-auto`}>
              <Image src={main.src} alt={main.alt} fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover" />
            </div>
            <div className={`${tile} aspect-[4/3] md:aspect-auto`}>
              <Image src={topRight.src} alt={topRight.alt} fill sizes="(min-width:768px) 25vw, 100vw" className="object-cover" />
            </div>
            <div className={`${tile} aspect-[4/3] md:col-start-2 md:row-start-2 md:aspect-auto`}>
              <Image src={bottomRight.src} alt={bottomRight.alt} fill sizes="(min-width:768px) 25vw, 100vw" className="object-cover" />
            </div>
            <div className={`${tile} aspect-[4/3] md:col-start-3 md:row-span-2 md:row-start-1 md:aspect-auto`}>
              <Image src={tall.src} alt={tall.alt} fill sizes="(min-width:768px) 25vw, 100vw" className="object-cover" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
