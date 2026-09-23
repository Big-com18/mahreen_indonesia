# Mahreen Indonesia — Landing Page (Creative Challenge, Website Development)

Prototype website Next.js untuk memperkenalkan Mahreen Indonesia kepada generasi
muda, dibuat untuk tema **"Berkarya Untuk Indonesia"** (Mahreen Indonesia
Internship Batch 2).

## Menjalankan di lokal

```bash
npm install
npm run dev
```

Buka http://localhost:3000. Build ini butuh koneksi internet saat pertama kali
dijalankan karena font (Fraunces & Manrope) diambil dari Google Fonts oleh Next.js.

## Deploy

Paling cepat lewat Vercel (gratis, cocok untuk dilampirkan sebagai link karya):

```bash
npm i -g vercel
vercel
```

Atau upload folder ini ke akun Vercel/GitHub kamu (kamu sudah pernah pakai
Vercel untuk porto-billy, jadi flow-nya sama).

## Struktur

- `app/page.tsx` — seluruh section halaman (hero, ekosistem, creative challenge, footer)
- `components/Petals.tsx` — animasi kelopak bunga mengambang di hero (framer-motion)
- `components/Reveal.tsx` — animasi scroll-reveal untuk tiap section
- `tailwind.config.ts` — token warna & tipografi brand (gradient magenta → oranye,
  terinspirasi identitas visual Mahreen Indonesia di lampiran brief)

## Konten

Semua copy diambil/diringkas dari brief PDF Creative Challenge: enam pilar
ekosistem (kreativitas, teknologi digital, pengembangan talenta, bisnis,
komunitas, kontribusi sosial) dan lima posisi task batch 2. Ganti/perluas
sesuai kebutuhan sebelum submit.
