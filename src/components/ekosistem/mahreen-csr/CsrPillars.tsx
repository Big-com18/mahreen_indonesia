import { Handshake, Users, Leaf, Megaphone, Share2, type LucideIcon } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { mahreenCsr } from "@/data/ekosistem/mahreen-csr";

const icons: Record<string, LucideIcon> = { Handshake, Users, Leaf, Megaphone, Share2 };

export default function CsrPillars() {
  const { pillars } = mahreenCsr;

  return (
    <section className="border-t border-white/10 bg-[#0a0a0a] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <p className="text-xs tracking-[0.3em] text-gold/90 uppercase">{pillars.eyebrow}</p>
          <h2 className="mt-3 font-display font-semibold text-4xl sm:text-5xl text-cream">
            {pillars.title}
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {pillars.items.map((p, i) => {
            const Icon = icons[p.icon];
            return (
              <Reveal key={p.title} delay={i * 0.05}>
                <article className="h-full border border-white/5 bg-[#101010] p-9 transition-colors hover:border-gold/30">
                  <Icon className="h-6 w-6 text-gold" strokeWidth={1.5} />
                  <h3 className="mt-7 font-display text-xl leading-snug text-cream">{p.title}</h3>
                  <p className="mt-5 text-sm leading-6 text-cream/70">{p.desc}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
