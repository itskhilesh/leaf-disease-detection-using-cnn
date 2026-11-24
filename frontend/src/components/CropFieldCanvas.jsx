import { memo, useEffect, useRef, useState } from 'react';
import '../styles/crop-field.css';

const SEASONS = [
  {
    key: 'spring',
    label: '☀️ Spring',
    caption: 'Spring Field · Bright sunlit canopy & active drone scan',
    src: '/media/season-spring.mp4',
  },
  {
    key: 'monsoon',
    label: '🌧️ Monsoon',
    caption: 'Monsoon Rain · Storm clouds, puddles & moisture monitoring',
    src: '/media/season-monsoon.mp4',
  },
  {
    key: 'autumn',
    label: '🍂 Autumn',
    caption: 'Golden Harvest · Mature wheat & corn crop inspection',
    src: '/media/season-autumn.mp4',
  },
  {
    key: 'winter',
    label: '❄️ Winter',
    caption: 'Winter Frost · Snow-dusted rows & cold stress patrol',
    src: '/media/season-winter.mp4',
  },
];

function CropFieldCanvas() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const [seasonIdx, setSeasonIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const [autoCycle, setAutoCycle] = useState(false);
  const [inView, setInView] = useState(true);

  const current = SEASONS[seasonIdx];

  // Pause automatically when scrolled off-screen to save GPU decoding
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return undefined;
    const obs = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Control play/pause & reload smoothly when season changes
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    if (paused || !inView) {
      vid.pause();
    } else {
      vid.play().catch(() => {});
    }
  }, [paused, inView, seasonIdx]);

  // Optional auto-cycle across all 4 seasons every 6 seconds
  useEffect(() => {
    if (!autoCycle || paused || !inView) return undefined;
    const id = setInterval(() => {
      setSeasonIdx((i) => (i + 1) % SEASONS.length);
    }, 6000);
    return () => clearInterval(id);
  }, [autoCycle, paused, inView]);

  return (
    <section
      ref={sectionRef}
      className="crop-field-section rise"
      aria-label="Seasonal pixelated drone crop field viewer"
    >
      <video
        ref={videoRef}
        className="crop-field-video"
        src={current.src}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
      <div className="crop-field-gradient" aria-hidden="true" />

      <div className="crop-field-overlay">
        <div className="crop-field-hud">
          <span className="crop-field-pill">
            <span className="live-dot" />
            <span>SEASONAL PIXEL FIELD · DRONE CANOPY SWEEP</span>
          </span>

          <div className="crop-field-controls">
            {SEASONS.map((item, idx) => (
              <button
                key={item.key}
                type="button"
                className={`crop-field-btn${seasonIdx === idx ? ' is-active' : ''}`}
                onClick={() => {
                  setSeasonIdx(idx);
                  setAutoCycle(false);
                }}
              >
                {item.label}
              </button>
            ))}

            <button
              type="button"
              className={`crop-field-btn${autoCycle ? ' is-active' : ''}`}
              onClick={() => setAutoCycle((v) => !v)}
              title="Automatically cycle through all 4 seasons"
            >
              {autoCycle ? '🔁 Auto On' : '🔁 Auto'}
            </button>

            <button
              type="button"
              className="crop-field-btn"
              onClick={() => setPaused((v) => !v)}
            >
              {paused ? '▶ Play' : '⏸ Pause'}
            </button>
          </div>
        </div>

        <div className="crop-field-bottom">
          <span className="crop-field-caption">{current.caption}</span>
        </div>
      </div>
    </section>
  );
}

export default memo(CropFieldCanvas);
