import Link from "next/link";
import {
  Instagram,
  Twitter,
  Music2,
  Mail,
  Youtube,
  type LucideIcon,
} from "lucide-react";
import Tumpal from "@/components/decor/Tumpal";
import MegaMendung from "@/components/decor/MegaMendung";
import { contact, footerLinks } from "@/data/site";

const socialIcons: Record<string, LucideIcon> = {
  Instagram,
  Twitter,
  Music2,
  Mail,
  Youtube,
};

export default function Footer() {
  return (
    <footer id="kontak" className="relative overflow-hidden bg-plum/30 border-t border-batik/20">
      <Tumpal flip className="text-batik/50" />
      <MegaMendung
        className="absolute inset-0 w-full h-full text-gold pointer-events-none"
        opacity={0.08}
      />

      <div className="relative mx-auto max-w-6xl px-6 py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="leading-none inline-block">
            <span className="block font-display italic text-xl text-cream">Mahreen</span>
            <span className="block text-[10px] tracking-[0.3em] text-gold mt-1">INDONESIA</span>
          </Link>
          <p className="text-sm text-haze/90 mt-4 max-w-xs leading-relaxed">
            Creative · Digital · Social Development.
            <br />
            Next Generation Brand Ecosystem.
          </p>
        </div>

        <div>
          <h4 className="font-display text-base text-cream mb-4">Tentang Kami</h4>
          <ul className="space-y-2.5 text-sm text-haze/90">
            {footerLinks.tentangKami.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="hover:text-gold transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base text-cream mb-4">Pilar Mahreen</h4>
          <ul className="space-y-2.5 text-sm text-haze/90">
            {footerLinks.pilarMahreen.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="hover:text-gold transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base text-cream mb-4">Follow Us &amp; Contact</h4>
          <ul className="space-y-2.5 text-sm text-haze/90">
            {footerLinks.social.map((item) => {
              const Icon = socialIcons[item.icon];
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-gold transition-colors"
                  >
                    <Icon className="w-4 h-4" strokeWidth={1.75} />
                    {item.label.toLowerCase()}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-haze/70">
          <p>© 2026 Mahreen Indonesia. Seluruh hak cipta dilindungi.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-cream transition-colors">
              Kebijakan Privasi
            </a>
            <a href="#" className="hover:text-cream transition-colors">
              Help Center
            </a>
            <a href="#" className="hover:text-cream transition-colors">
              Syarat &amp; Ketentuan
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
