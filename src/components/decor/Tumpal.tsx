export default function Tumpal({
  className = "",
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  const triangles = Array.from({ length: 24 });
  return (
    <div
      className={`w-full overflow-hidden leading-none select-none ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 480 20"
        preserveAspectRatio="none"
        className={`w-full h-4 ${flip ? "rotate-180" : ""}`}
      >
        {triangles.map((_, i) => (
          <polygon
            key={i}
            points={`${i * 20},20 ${i * 20 + 10},0 ${i * 20 + 20},20`}
            fill={i % 2 === 0 ? "currentColor" : "none"}
          />
        ))}
      </svg>
    </div>
  );
}
