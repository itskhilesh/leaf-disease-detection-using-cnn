import { useId, useState } from 'react';

export default function SensorChart({ data, color, unit = '' }) {
  const [hoverIdx, setHoverIdx] = useState(null);
  const gradId = useId();

  if (!data || data.length === 0) return null;

  const w = 300;
  const h = 104;
  const pad = 8;
  const max = Math.max(...data);
  const min = Math.min(...data);

  const getX = (k) => pad + (k * (w - 2 * pad)) / Math.max(data.length - 1, 1);
  const getY = (v) =>
    h - pad - ((v - min) / (max - min || 1)) * (h - 2 * pad - 18);

  const points = data.map((v, k) => `${getX(k)},${getY(v)}`).join(' ');
  const areaPoints = `${pad},${h - pad} ${points} ${w - pad},${h - pad}`;
  const selected = hoverIdx === null ? data.length - 1 : hoverIdx;

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    const idx = Math.max(0, Math.min(data.length - 1, Math.round(ratio * (data.length - 1))));
    setHoverIdx(idx);
  };

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className="chart-svg"
      role="img"
      aria-label="Trend chart"
      onMouseMove={handleMove}
      onMouseLeave={() => setHoverIdx(null)}
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.28" />
          <stop offset="100%" stopColor={color} stopOpacity="0.02" />
        </linearGradient>
      </defs>
      <polygon points={areaPoints} fill={`url(#${gradId})`} />
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <line
        x1={getX(selected)}
        y1={16}
        x2={getX(selected)}
        y2={h - pad}
        stroke={color}
        strokeOpacity="0.25"
        strokeDasharray="3 3"
      />
      <circle
        cx={getX(selected)}
        cy={getY(data[selected])}
        r="4.5"
        fill="#ffffff"
        stroke={color}
        strokeWidth="2.5"
      />
      <text x="6" y="13" fontSize="11.5" fontWeight="700" fill="#1e3a2f">
        {data[selected]}
        {unit}
      </text>
    </svg>
  );
}
