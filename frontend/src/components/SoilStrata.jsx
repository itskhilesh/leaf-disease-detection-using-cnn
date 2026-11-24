export default function SoilStrata() {
  return (
    <svg
      viewBox="0 0 360 300"
      className="soil-strata-svg"
      role="img"
      aria-label="Field cross-section: regional soil estimate beside a sensor probe"
    >
      <rect width="360" height="90" fill="#d6efe0" />
      <circle cx="310" cy="34" r="18" fill="#fde68a" />
      <rect y="90" width="360" height="52" fill="#5b3a24" />
      <rect y="142" width="360" height="58" fill="#7c4a2d" />
      <rect y="200" width="360" height="55" fill="#a35f3a" />
      <rect y="255" width="360" height="45" fill="#c9b08a" />

      <g stroke="#16a34a" strokeWidth="4" fill="none" strokeLinecap="round">
        <path d="M96 90V60M96 74q-13-3-15-15M96 70q13-3 15-15" />
        <path d="M162 90V56M162 72q-13-3-15-15M162 68q13-3 15-15" />
        <path d="M226 90V62M226 76q-13-3-15-15M226 72q13-3 15-15" />
      </g>

      <g stroke="#e9d8bd" strokeWidth="2" fill="none">
        <path d="M96 90v45M96 110q-12 8-14 24M96 118q12 6 14 20M162 90v50M162 112q-12 8-14 24M226 90v40M226 108q12 8 14 22" />
      </g>

      <rect x="288" y="70" width="12" height="150" rx="5" fill="#e5e7eb" />
      <circle cx="294" cy="120" r="5" fill="#10b981" />
      <circle cx="294" cy="170" r="5" fill="#10b981" />

      <g fill="#ffffff" fontSize="13" fontWeight="600">
        <text x="12" y="122">Topsoil</text>
        <text x="12" y="176">Subsoil</text>
        <text x="12" y="232">Murrum / laterite</text>
        <text x="12" y="282" fill="#3b2a14">Parent rock</text>
      </g>

      <text x="12" y="20" fontSize="12" fill="#14532d" fontWeight="600">
        Regional estimate: layers on the left
      </text>
      <text x="272" y="62" fontSize="12" fill="#14532d" fontWeight="600" textAnchor="end">
        Sensor probe
      </text>
    </svg>
  );
}
