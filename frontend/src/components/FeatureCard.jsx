export default function FeatureCard({ emoji, title, description }) {
  return (
    <article className="glass glass-hover card-surface">
      <div className="feature-card-icon" aria-hidden="true">
        {emoji}
      </div>
      <h3 className="feature-card-title">{title}</h3>
      <p className="feature-card-desc">{description}</p>
    </article>
  );
}
