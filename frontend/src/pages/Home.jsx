import { lazy, memo, Suspense } from 'react';
import { FEATURES } from '../utils/constants';
import HeroSection from '../components/HeroSection';
import CropFieldCanvas from '../components/CropFieldCanvas';
import FeatureCard from '../components/FeatureCard';
import '../styles/hero.css';

const Leaf3DScene = lazy(() => import('../components/Leaf3DScene'));

const TECH_STACK = [
  'React 19',
  'Three.js / R3F',
  'HTML5 Pixel Canvas',
  'Leaflet + OpenStreetMap',
  'FastAPI',
  'TensorFlow / Keras',
  'MobileNetV2 (38 Classes)',
  'Open-Meteo API',
  'Arduino / ESP32',
];

function Home({ lang }) {
  return (
    <div className="home-stack">
      <HeroSection lang={lang} />

      <CropFieldCanvas />

      <Suspense
        fallback={
          <div className="glass card-surface" style={{ textAlign: 'center', padding: '2rem' }}>
            Loading 3D Interactive Specimen…
          </div>
        }
      >
        <Leaf3DScene />
      </Suspense>

      <section>
        <h2 className="section-heading section-heading-on-video">What it does</h2>
        <div className="feature-grid">
          {FEATURES.map(([emoji, title, desc]) => (
            <FeatureCard
              key={title}
              emoji={emoji}
              title={title}
              description={desc}
            />
          ))}
        </div>
      </section>

      <section className="overview-grid">
        <article className="glass card-surface">
          <h2 className="section-heading">Project overview</h2>
          <p className="muted-text" style={{ margin: 0 }}>
            Many small farms lose crops because a disease is spotted late and
            soil advice is too generic. AgroVision AI combines a MobileNetV2
            leaf-image classifier trained on ~54,000 PlantVillage images,
            regional Indian soil intelligence, and low-cost Arduino / ESP32
            environmental sensors so growers can act early in Hindi or English.
          </p>
        </article>

        <article className="glass card-surface">
          <h2 className="section-heading">Built with</h2>
          <div className="tech-pills">
            {TECH_STACK.map((item) => (
              <span key={item} className="tech-pill">
                {item}
              </span>
            ))}
          </div>
        </article>
      </section>
    </div>
  );
}

export default memo(Home);
