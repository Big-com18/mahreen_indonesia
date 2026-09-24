import {
  Users,
  Wallet,
  BarChart3,
  RefreshCw,
  Headphones,
  Timer,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { tanyaMahreen } from "@/data/ekosistem/tanya-mahreen";

const icons: Record<string, LucideIcon> = {
  Users,
  Wallet,
  BarChart3,
  RefreshCw,
  Headphones,
  Timer,
  ShieldCheck,
};

export default function TanyaExcellence() {
  const { excellence } = tanyaMahreen;

  return (
    <section className="relative mx-auto max-w-6xl px-6 py-20 text-center">
      <Reveal>
        <h2 className="font-display text-3xl sm:text-4xl text-cream mb-12">{excellence.title}</h2>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {excellence.items.map((item, i) => {
          const Icon = icons[item.icon];
          return (
            <Reveal
              key={item.label}
              delay={(i % 4) * 0.06}
              className={"wide" in item && item.wide ? "lg:col-span-2" : ""}
            >
              <div className="h-full flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-5 py-6 text-left hover:border-gold/30 transition-colors">
                <Icon className="w-5 h-5 text-gold shrink-0" strokeWidth={1.5} />
                <span className="text-sm text-cream">{item.label}</span>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
