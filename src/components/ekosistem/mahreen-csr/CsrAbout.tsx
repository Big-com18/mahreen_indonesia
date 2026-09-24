import Image from "next/image";
import { Users, Leaf, type LucideIcon } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { mahreenCsr } from "@/data/ekosistem/mahreen-csr";

const icons: Record<string, LucideIcon> = { Users, Leaf };

export default function CsrAbout() {
  const { about } = mahreenCsr;

  return (
    <section className="border-t border-white/10 bg-[#050505] py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-[1fr_1.15fr]">
        <Reveal>
          <div className="relative mx-auto w-full max-w-md pb-16 pr-0 sm:pr-10">
            <div className="rounded-2xl bg-gradient-to-b from-gold/10 to-transparent p-[44px] shadow-[0_0_80px_rgba(217,173,99,0.08)]">
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={about.image}
                  alt={about.imageAlt}
                  fill
                  sizes="(min-width:1024px) 30vw, 90vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-[78%] rounded-lg border border-white/10 bg-[#121212]/95 p-6 backdrop-blur">
              <p className="text-sm text-gold">{about.mission.label}</p>
              <p className="mt-3 text-sm leading-6 text-cream">{about.mission.desc}</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="font-display font-semibold text-4xl text-gold">{about.title}</h2>
          <p className="mt-6 max-w-xl leading-8 text-cream/75">{about.desc}</p>
          <ul className="mt-9 space-y-6">
            {about.points.map((p) => {
              const Icon = icons[p.icon];
              return (
                <li key={p.title} className="flex gap-4">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-gold" strokeWidth={1.75} />
                  <div>
                    <h3 className="text-sm font-semibold text-cream">{p.title}</h3>
                    <p className="mt-1 max-w-md text-sm leading-6 text-cream/70">{p.desc}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
