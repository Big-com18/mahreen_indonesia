import {
  Shirt,
  Fingerprint,
  Eye,
  Camera,
  Store,
  Leaf,
  type LucideIcon,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import TiltCard from "@/components/ui/TiltCard";
import { mahreenStudio } from "@/data/ekosistem/mahreen-studio";

const icons: Record<string, LucideIcon> = { Shirt, Fingerprint, Eye, Camera, Store, Leaf };

export default function StudioFocus() {
  const { focus } = mahreenStudio;

  return (
    <section className="relative mx-auto max-w-6xl px-6 py-20 border-t border-white/5 text-center">
      <Reveal>
        <p className="text-xs tracking-[0.3em] text-gold/80 uppercase mb-4">{focus.eyebrow}</p>
        <h2 className="font-display text-3xl sm:text-4xl text-cream mb-5">{focus.title}</h2>
        <p className="text-haze/90 leading-relaxed max-w-2xl mx-auto mb-14">{focus.intro}</p>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
        {focus.pillars.map((p, i) => {
          const Icon = icons[p.icon];
          return (
            <Reveal key={p.title} delay={(i % 3) * 0.08}>
              <TiltCard dark>
                <Icon className="w-6 h-6 text-gold mb-5" strokeWidth={1.5} />
                <h3 className="font-display text-xl text-cream mb-3">{p.title}</h3>
                <p className="text-sm text-haze leading-relaxed">{p.desc}</p>
              </TiltCard>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
