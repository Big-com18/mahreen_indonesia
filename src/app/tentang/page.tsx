import type { Metadata } from "next";
import Stars from "@/components/decor/Stars";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutHero from "@/components/tentang/AboutHero";
import AboutHistory from "@/components/tentang/AboutHistory";
import AboutVisionMission from "@/components/tentang/AboutVisionMission";
import AboutLegal from "@/components/tentang/AboutLegal";
import SiteCta from "@/components/shared/SiteCta";

export const metadata: Metadata = {
  title: "Tentang Kami | Mahreen Indonesia",
  description:
    "Profil, sejarah, visi & misi, serta legalitas resmi Mahreen Indonesia — ekosistem kreatif, digital, dan sosial untuk generasi muda Indonesia.",
};

export default function TentangPage() {
  return (
    <main className="relative">
      <div className="fixed inset-0 -z-10 bg-ink">
        <Stars />
      </div>

      <ScrollProgress />
      <Navbar />

      <AboutHero />
      <AboutHistory />
      <AboutVisionMission />
      <AboutLegal />
      <SiteCta />

      <Footer />
    </main>
  );
}
