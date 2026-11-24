export default function LeafScanner() {
  return (
    <div className="scanner-wrap" role="img" aria-label="Illustration of a leaf being scanned">
      <div className="scanner-frame" style={{ padding: '1.25rem', display: 'grid', placeItems: 'center' }}>
        <img
          src="/media/leaf-3d.png"
          alt="Botanical leaf specimen"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            filter: 'drop-shadow(0 14px 22px rgba(2, 44, 34, 0.45))',
          }}
        />
        <svg
          viewBox="0 0 240 300"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
        >
          <path
            d="M24 54V30H48M216 54V30H192M24 246V270H48M216 246V270H192"
            stroke="#ffffff"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          <rect
            className="scanline"
            x="30"
            y="40"
            width="180"
            height="3"
            rx="2"
            fill="#ffffff"
          />
        </svg>
      </div>

      <span className="scanner-chip float-chip" style={{ top: '6%', left: '2%' }}>
        🍃 Leaf photo in
      </span>
      <span
        className="scanner-chip float-chip"
        style={{ top: '46%', right: '2%', animationDelay: '1.2s' }}
      >
        🗺️ Soil: regional estimate
      </span>
      <span
        className="scanner-chip float-chip"
        style={{ bottom: '8%', left: '4%', animationDelay: '2.4s' }}
      >
        📡 Sensors: live / demo feed
      </span>
    </div>
  );
}
