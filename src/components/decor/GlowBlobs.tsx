export default function GlowBlobs({
  className = "",
  intensity = "normal",
}: {
  className?: string;
  intensity?: "normal" | "soft";
}) {
  const base = intensity === "soft" ? 0.6 : 1;
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
      style={{ opacity: base }}
    >
      <div className="absolute -top-10 -left-10 w-64 h-64 rounded-full bg-magenta/10 blur-[90px] animate-blob" />
      <div
        className="absolute top-1/3 -right-16 w-72 h-72 rounded-full bg-gold/10 blur-[90px] animate-blob"
        style={{ animationDelay: "3s" }}
      />
      <div
        className="absolute -bottom-16 left-1/3 w-64 h-64 rounded-full bg-ember/10 blur-[90px] animate-blob"
        style={{ animationDelay: "6s" }}
      />
    </div>
  );
}
