export default function Marquee({ items }: { items: string[] }) {
  const content = [...items, ...items];
  return (
    <div className="relative overflow-hidden bg-brand-gradient bg-[length:200%_200%] animate-gradient-pan py-4">
      <div className="flex w-max gap-12 whitespace-nowrap animate-marquee">
        {content.map((t, i) => (
          <span key={i} className="text-ink font-semibold text-sm tracking-wide">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
