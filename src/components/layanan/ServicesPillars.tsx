import Link from "next/link";
import {
  Globe,
  PenTool,
  Fingerprint,
  MonitorSmartphone,
  Megaphone,
  Camera,
  Clapperboard,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import TiltCard from "@/components/ui/TiltCard";
import GlowBlobs from "@/components/decor/GlowBlobs";
import { pillars } from "@/data/site";

const icons: Record<string, LucideIcon> = {
  Globe,
  PenTool,
  Fingerprint,
  MonitorSmartphone,
  Megaphone,
  Camera,
  Clapperboard,
  TrendingUp,
};

export default function ServicesPillars() {
  return (
    <section id="ekosistem" className="relative mx-auto max-w-6xl px-6 py-24 overflow-hidden">
      <GlowBlobs intensity="soft" />
      <Reveal className="relative text-center mb-14">
        <h2 className="font-display text-3xl sm:text-4xl text-gold mb-4">Layanan Profesional</h2>
        <p className="text-haze/90 max-w-xl mx-auto leading-relaxed">
          Solusi digital dan kreatif elit yang dibuat dengan presisi dan tujuan strategis.
        </p>
      </Reveal>
      <div className="relative grid grid-cols-2 md:grid-cols-4 gap-5">
        {pillars.map((p, i) => {
          const Icon = icons[p.icon];
          return (
            <Reveal key={p.label} delay={i * 0.05}>
              <Link href="/tanya-mahreen" className="block">
                <TiltCard className="text-center flex flex-col items-center py-10 cursor-pointer hover:border-gold/40 transition-colors">
                  <span className="flex items-center justify-center w-14 h-14 rounded-full bg-gold/10 border border-gold/30 mb-5">
                    <Icon className="w-6 h-6 text-gold" strokeWidth={1.75} />
                  </span>
                  <h3 className="font-display text-base sm:text-lg text-cream leading-snug">
                    {p.label}
                  </h3>
                </TiltCard>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}