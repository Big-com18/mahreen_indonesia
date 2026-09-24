import type { Metadata } from "next";
import Stars from "@/components/decor/Stars";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InternshipHero from "@/components/ekosistem/internship/InternshipHero";
import InternshipPrograms from "@/components/ekosistem/internship/InternshipPrograms";
import InternshipSpecializations from "@/components/ekosistem/internship/InternshipSpecializations";
import InternshipWhy from "@/components/ekosistem/internship/InternshipWhy";
import InternshipAdmission from "@/components/ekosistem/internship/InternshipAdmission";
import InternshipAlumni from "@/components/ekosistem/internship/InternshipAlumni";
import InternshipCta from "@/components/ekosistem/internship/InternshipCta";

export const metadata: Metadata = {
  title: "Internship | Mahreen Indonesia",
  description:
    "Mahreen Indonesia Internship — pengalaman belajar berbasis proyek nyata yang mempersiapkan talenta muda untuk dunia profesional dengan standar industri global.",
};

export default function InternshipPage() {
  return (
    <main className="relative">
      <div className="fixed inset-0 -z-10 bg-ink">
        <Stars />
      </div>

      <ScrollProgress />
      <Navbar />

      <InternshipHero />
      <InternshipPrograms />
      <InternshipSpecializations />
      <InternshipWhy />
      <InternshipAdmission />
      <InternshipAlumni />
      <InternshipCta />

      <Footer />
    </main>
  );
}
