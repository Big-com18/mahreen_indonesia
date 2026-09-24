export default function MegaMendung({
  className = "",
  opacity = 0.16,
}: {
  className?: string;
  opacity?: number;
}) {
  // Stylised Mega Mendung (Cirebon cloud batik) linework — concentric
  // cloud arcs, rendered as pure stroke so it reads as texture, not noise.
  const cloud = (cx: number, cy: number, s: number) => (
    <g transform={`translate(${cx} ${cy}) scale(${s})`}>
      {[0, 1, 2, 3, 4].map((i) => (
        <path
          key={i}
          d={`M ${-60 + i * 6} ${10 - i * 6}
              C ${-40 + i * 6} ${-30 + i * 4}, ${-10 + i * 6} ${-30 + i * 4}, ${0 + i * 6} ${-4 - i * 2}
              C ${10 + i * 6} ${-30 + i * 4}, ${40 + i * 6} ${-30 + i * 4}, ${60 + i * 6} ${10 - i * 6}`}
          fill="none"
        />
      ))}
    </g>
  );

  return (
    <svg
      className={className}
      viewBox="0 0 800 500"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      style={{ opacity }}
    >
      <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
        {cloud(140, 90, 1.1)}
        {cloud(560, 60, 0.9)}
        {cloud(360, 220, 1.4)}
        {cloud(680, 320, 1)}
        {cloud(90, 360, 0.85)}
        {cloud(500, 430, 1.15)}
      </g>
    </svg>
  );
}
