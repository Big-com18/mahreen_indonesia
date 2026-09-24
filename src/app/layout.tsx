import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mahreen Indonesia — Satu Ide. Satu Karya. Satu Dampak.",
  description:
    "Mahreen Indonesia adalah ekosistem kreativitas, teknologi digital, dan kolaborasi untuk generasi muda Indonesia yang ingin berkarya dan berdampak.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="font-body bg-ink text-cream antialiased">
        {children}
      </body>
    </html>
  );
}
