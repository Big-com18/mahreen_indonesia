import { Linkedin, User } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { internship } from "@/data/ekosistem/internship";

export default function InternshipAlumni() {
  const { alumni } = internship;

  return (
    <section className="relative mx-auto max-w-6xl px-6 py-20 border-t border-white/5">
      <Reveal className="text-center mb-14">
        <p className="text-xs tracking-[0.3em] text-gold/80 uppercase mb-4">{alumni.eyebrow}</p>
        <h2 className="font-display text-3xl sm:text-4xl text-cream">{alumni.title}</h2>
      </Reveal>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {alumni.people.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.08}>
            <div>
              <div className="aspect-[3/4] rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center mb-4">
                <User className="w-10 h-10 text-cream/30" strokeWidth={1.25} />
              </div>
              <h3 className="text-cream font-medium">{p.name}</h3>
              <p className="text-sm text-haze mb-2">{p.role}</p>
              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-xs tracking-wide text-gold uppercase hover:text-cream transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" strokeWidth={2} />
                LinkedIn
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
