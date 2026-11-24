import { Link } from 'react-router-dom';
import { t } from '../utils/translations';
import LeafScanner from './LeafScanner';
import '../styles/hero.css';

export default function HeroSection({ lang }) {
  return (
    <section className="hero-section rise">
      <div>
        <span className="hero-pill">
          <span>🧠</span>
          <span>MobileNetV2 · 38 PlantVillage Classes · IoT Ready</span>
        </span>

        <h1 className="hero-title gt">AgroVision AI</h1>

        <p className="hero-tagline">{t('tag', lang)}</p>
        <p className="hero-subtitle">{t('sub', lang)}</p>

        <div className="hero-actions">
          <Link to="/detect" className="btn btn-lime">
            <span>🍃</span>
            <span>{t('cta1', lang)}</span>
          </Link>
          <Link to="/dashboard" className="btn hero-cta-secondary">
            <span>📊</span>
            <span>{t('cta2', lang)}</span>
          </Link>
        </div>

        <div className="hero-stats">
          <div>
            <span className="hero-stat-val">38</span>
            <span className="hero-stat-lbl">Disease &amp; Healthy Classes</span>
          </div>
          <div>
            <span className="hero-stat-val">14</span>
            <span className="hero-stat-lbl">Crop Species Supported</span>
          </div>
          <div>
            <span className="hero-stat-val">10</span>
            <span className="hero-stat-lbl">Regional Soil Zones</span>
          </div>
        </div>
      </div>

      <div>
        <LeafScanner />
      </div>
    </section>
  );
}
