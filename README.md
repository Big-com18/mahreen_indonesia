# Mahreen Indonesia — Landing Page (Creative Challenge, Website Development)

Prototype website Next.js (App Router + `src/` layout) untuk memperkenalkan
Mahreen Indonesia kepada generasi muda, dibuat untuk tema
**"Berkarya Untuk Indonesia"** (Mahreen Indonesia Internship Batch 2).

## Menjalankan di lokal

```bash
npm install
npm run dev
```

Buka http://localhost:3000. Build ini butuh koneksi internet saat pertama kali
dijalankan karena font (Fraunces & Manrope) diambil dari Google Fonts oleh Next.js.

## Deploy

```bash
npm i -g vercel
vercel
```

## Struktur folder

```
src/
  app/                    # App Router — routing & layout root Next.js
    layout.tsx
    page.tsx              # hanya menyusun section, tidak ada markup section di sini
    globals.css
  components/
    layout/               # bagian tetap di setiap halaman
      Navbar.tsx
      Footer.tsx
    sections/             # satu section landing page = satu file
      Hero.tsx
      About.tsx
      Ecosystem.tsx
      Stats.tsx
      Internship.tsx
      Scoring.tsx
      Cta.tsx
    ui/                   # elemen interaktif/reusable (bukan section)
      Reveal.tsx          # scroll-reveal wrapper
      TiltCard.tsx        # kartu tilt 3D + glow saat hover
      Counter.tsx         # angka animasi (count-up)
      BarRow.tsx          # bar chart animasi (Sistem Penilaian)
      ClockRing.tsx       # cincin animasi "24 Jam"
      ScrollProgress.tsx  # progress bar scroll di atas
      Marquee.tsx         # ticker hashtag berjalan
      HeroTitle.tsx       # headline hero dengan stagger animation
    decor/                # elemen dekoratif murni (tidak ada logika data)
      Petals.tsx          # kelopak bunga mengambang (motif brand)
      MegaMendung.tsx     # tekstur batik awan Cirebon
      Tumpal.tsx          # motif border segitiga Nusantara
      Landscape.tsx       # gunung, laut, matahari, burung — hero
      Stars.tsx           # bintang berkelip di seluruh halaman
      GlowBlobs.tsx       # gumpalan cahaya warna-warni untuk ambient light
  data/
    content.ts            # semua isi teks/angka (pilar, posisi, skor, kontak)
public/
```

**Alasan struktur ini:** `page.tsx` sengaja dibuat "kosong" — cuma menyusun
komponen section, tidak ada JSX section langsung di situ. Ini pola umum di
proyek Next.js perusahaan supaya satu file tidak membengkak dan tiap section
bisa dikerjakan/diubah orang lain tanpa menyentuh file lain. Konten (teks,
angka, link) dipisah ke `data/content.ts` supaya kalau ada perubahan copy,
tidak perlu bongkar komponen.

## Konten

Struktur & isi ekosistem (Website Development, Graphic Design, Branding &
Identity, UI/UX Design, Digital Marketing, Photography, Videography, Business
Strategy) serta section **Mahreen Learning** (Bootcamp, Workshop,
Certification) disamakan dengan tampilan resmi mahreenindonesia.com per
screenshot yang diberikan. Detail Creative Challenge Batch 2 (5 posisi task,
bobot penilaian, alamat & kontak) tetap dari brief PDF karena itu sumber
paling pasti untuk keperluan submission tugas.

## Palet warna

Diselaraskan ke tema hitam-emas premium situs asli (bukan magenta-oranye
ngejreng versi sebelumnya) — token warna di `tailwind.config.ts` (`ink`,
`plum`, `gold`, `magenta`, `ember`, `haze`) sudah diredupkan jadi versi yang
lebih soft, tapi tetap ada sentuhan warna di animasi/aksen supaya tidak flat.

## Catatan perbaikan

Versi sebelumnya sempat ada kotak gelap yang muncul aneh sebelum section CTA —
itu efek numpuknya tiga blob cahaya (`GlowBlobs`) yang terlalu pekat di
container sempit. Sudah diperbaiki dengan menurunkan opacity & memperbesar
blur supaya menyatu sebagai cahaya ambient, bukan kotak solid. Section
"Sistem Penilaian" juga dirombak dari daftar bar polos menjadi kartu premium
selaras dengan gaya kartu Ekosistem & Learning.
