export const mahreenStudio = {
  brand: { name: "Mahreen", sub: "Studio" },
  hero: {
    eyebrow: "Mahreen Studio",
    title: "Mahreen Studio",
    tagline: "Modern Lifestyle Brand by Mahreen Indonesia",
    primaryCta: "Shop Now",
    secondaryCta: "Explore Atelier",
  },
  collection: {
    eyebrow: "Curated Selects",
    title: "Our Collection",
    tabs: ["Apparel", "Merchandise", "Lifestyle Essentials"],
    featured: [
      {
        badge: "Featured Selection",
        title: "The Signature Noir Hoodie",
        desc: "Elevated comfort meets street sophistication.",
      },
      {
        badge: undefined,
        title: "Lifestyle Essentials",
        desc: "Curated for the modern creative.",
      },
    ],
  },
  shop: {
    eyebrow: "Local Catalog",
    title: "Shop the Collection",
    tabs: ["Semua Produk", "Apparel", "Accessories"],
    products: [
      {
        name: "Signature Minimalist Hoodie",
        price: "Rp 2.450.000",
        stock: "24 pcs tersedia",
      },
      {
        name: "Mahreen Signature Tee",
        price: "Rp 249.000",
        stock: "70 pcs tersedia",
      },
      {
        name: "Mahreen Elevated Essentials",
        price: "Rp 629.000",
        stock: "70 pcs tersedia",
      },
      {
        name: "Studio Lifestyle Set",
        price: "Rp 899.000",
        stock: "28 pcs tersedia",
      },
    ],
  },
  focus: {
    eyebrow: "Specializations",
    title: "Our Design Focus",
    intro:
      "We focus on six core pillars of creativity to deliver an unparalleled lifestyle experience, blending Indonesian craftsmanship with global modernism.",
    pillars: [
      {
        icon: "Shirt",
        title: "Apparel",
        desc: "Crafting high-quality garments that balance structural silhouette with unmatched comfort and durability.",
      },
      {
        icon: "Fingerprint",
        title: "Brand Identity",
        desc: "Establishing a cohesive visual language that speaks of luxury, restraint, and timeless artistic value.",
      },
      {
        icon: "Eye",
        title: "Visual Branding",
        desc: "Executing high-end graphic solutions that enhance the perception of exclusivity across all touchpoints.",
      },
      {
        icon: "Camera",
        title: "Photography",
        desc: "Directing editorial-grade visual storytelling that captures texture, mood, and craftsmanship in every frame.",
      },
      {
        icon: "Store",
        title: "Retail Experience",
        desc: "Designing immersive atelier spaces that translate the brand's identity into a tangible, sensory journey.",
      },
      {
        icon: "Leaf",
        title: "Sustainability",
        desc: "Integrating responsible sourcing and production practices into every piece we bring to life.",
      },
    ],
  },
} as const;
