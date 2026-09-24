import Reveal from "@/components/ui/Reveal";
import Counter from "@/components/ui/Counter";
import Marquee from "@/components/ui/Marquee";
import { stats, hashtags } from "@/data/site";

export default function Stats() {
  return (
    <>
      <section className="bg-plum/50 border-y border-batik/20">
        <div className="mx-auto max-w-5xl px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="font-display text-4xl sm:text-5xl bg-gradient-to-r from-magenta to-ember bg-clip-text text-transparent">
                <Counter to={s.to} suffix={s.suffix} />
              </div>
              <p className="mt-2 text-sm text-haze">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <Marquee items={[...hashtags]} />
    </>
  );
}
