import type { Metadata } from "next";
import Stars from "@/components/decor/Stars";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CsrHero from "@/components/ekosistem/mahreen-csr/CsrHero";
import CsrAbout from "@/components/ekosistem/mahreen-csr/CsrAbout";
import CsrPillars from "@/components/ekosistem/mahreen-csr/CsrPillars";
import CsrFeatured from "@/components/ekosistem/mahreen-csr/CsrFeatured";
import SiteCta from "@/components/shared/SiteCta";

export const metadata: Metadata = {
  title: "Mahreen CSR | Mahreen Indonesia",
  description:
    "Komitmen Mahreen Indonesia menciptakan dampak sosial berkelanjutan melalui kolaborasi, pemberdayaan masyarakat, pendidikan, dan lingkungan.",
};

export default function MahreenCsrPage() {
  return (
    <main className="relative">
      <div className="fixed inset-0 -z-10 bg-ink">
        <Stars />
      </div>

      <ScrollProgress />
      <Navbar />

      <CsrHero />
      <CsrAbout />
      <CsrPillars />
      <CsrFeatured />
      <SiteCta />

      <Footer />
    </main>
  );
}
