import type { Metadata } from "next";
import Stars from "@/components/decor/Stars";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TanyaHero from "@/components/ekosistem/tanya-mahreen/TanyaHero";
import TanyaSolutions from "@/components/ekosistem/tanya-mahreen/TanyaSolutions";
import TanyaWorkflow from "@/components/ekosistem/tanya-mahreen/TanyaWorkflow";
import TanyaExcellence from "@/components/ekosistem/tanya-mahreen/TanyaExcellence";
import TanyaProcess from "@/components/ekosistem/tanya-mahreen/TanyaProcess";
import TanyaWork from "@/components/ekosistem/tanya-mahreen/TanyaWork";
import TanyaFaq from "@/components/ekosistem/tanya-mahreen/TanyaFaq";
import SiteCta from "@/components/shared/SiteCta";

export const metadata: Metadata = {
  title: "Tanya Mahreen | Mahreen Indonesia",
  description:
    "Professional digital solutions for modern business — website, branding, social media, digital marketing, hingga konsultasi bisnis.",
};

export default function TanyaMahreenPage() {
  return (
    <main className="relative">
      <div className="fixed inset-0 -z-10 bg-ink">
        <Stars />
      </div>

      <ScrollProgress />
      <Navbar />

      <TanyaHero />
      <TanyaSolutions />
      <TanyaWorkflow />
      <TanyaExcellence />
      <TanyaProcess />
      <TanyaWork />
      <TanyaFaq />
      <SiteCta />

      <Footer />
    </main>
  );
}
