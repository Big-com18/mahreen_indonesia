import type { Metadata } from "next";
import Stars from "@/components/decor/Stars";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StudioHero from "@/components/ekosistem/mahreen-studio/StudioHero";
import StudioCollection from "@/components/ekosistem/mahreen-studio/StudioCollection";
import StudioShop from "@/components/ekosistem/mahreen-studio/StudioShop";
import StudioFocus from "@/components/ekosistem/mahreen-studio/StudioFocus";
import SiteCta from "@/components/shared/SiteCta";

export const metadata: Metadata = {
  title: "Mahreen Studio | Mahreen Indonesia",
  description: "Modern lifestyle brand by Mahreen Indonesia — apparel, merchandise, dan lifestyle essentials.",
};

export default function MahreenStudioPage() {
  return (
    <main className="relative">
      <div className="fixed inset-0 -z-10 bg-ink">
        <Stars />
      </div>

      <ScrollProgress />
      <Navbar />

      <StudioHero />
      <StudioCollection />
      <StudioShop />
      <StudioFocus />
      <SiteCta />

      <Footer />
    </main>
  );
}
