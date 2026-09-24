import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { mahreenCsr } from "@/data/ekosistem/mahreen-csr";

export default function CsrFeatured() {
  const { featured } = mahreenCsr;

  return (
    <section id="program-unggulan" className="border-t border-white/10 bg-black py-24 scroll-mt-16">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-xs tracking-[0.3em] text-gold uppercase">{featured.eyebrow}</p>
          <h2 className="mt-3 font-display font-semibold text-4xl sm:text-5xl text-cream">
            {featured.title}
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-7 md:grid-cols-2">
          {featured.programs.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <article className="h-full overflow-hidden rounded-md border border-white/10 bg-[#0f0f0f]">
                <div className="relative aspect-[16/9]">
                  <Image
                    src={p.image}
                    alt={p.imageAlt}
                    fill
                    sizes="(min-width:768px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute left-4 top-4 flex gap-2 text-xs uppercase tracking-wide text-cream">
                    <span className="rounded-full bg-black/55 px-3.5 py-1 backdrop-blur">{p.status}</span>
                    <span className="rounded-full bg-black/55 px-3.5 py-1 backdrop-blur">{p.location}</span>
                  </div>
                </div>

                <div className="p-9">
                  <h3 className="font-display text-xl text-gold">{p.title}</h3>
                  <p className="mt-5 leading-8 text-cream/90">{p.desc}</p>

                  <div className="mt-6 flex items-center justify-between text-xs uppercase tracking-wide text-haze">
                    <span>Target Capaian</span>
                    <span>{p.progress}%</span>
                  </div>
                  <div
                    className="mt-3 h-[3px] w-full bg-white/10"
                    role="progressbar"
                    aria-label={`Capaian ${p.title}`}
                    aria-valuenow={p.progress}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div className="h-full bg-gold" style={{ width: `${p.progress}%` }} />
                  </div>

                  <div className="mt-6 flex items-center gap-4">
                    <div className="flex -space-x-2">
                      {p.avatars.map((a) => (
                        <span
                          key={a}
                          className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#0f0f0f] bg-white/10 text-[10px] font-medium text-cream"
                        >
                          {a}
                        </span>
                      ))}
                      <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#0f0f0f] bg-white/10 text-[10px] font-medium text-cream">
                        +{p.more}
                      </span>
                    </div>
                    <span className="text-sm text-cream/85">{p.metric}</span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
