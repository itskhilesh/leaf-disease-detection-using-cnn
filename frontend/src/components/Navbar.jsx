import { NavLink } from 'react-router-dom';
import { NAV_ITEMS } from '../utils/constants';
import { t } from '../utils/translations';
import '../styles/navbar.css';

export default function Navbar({ lang, setLang, live }) {
  return (
    <>
      {/* Desktop Glassmorphic Sidebar */}
      <aside className="sidebar-nav glass" aria-label="Primary navigation">
        <NavLink to="/" className="brand-link">
          <span>🌱</span>
          <span>AgroVision</span>
          <span className="brand-badge">AI</span>
        </NavLink>

        <nav className="sidebar-links">
          {NAV_ITEMS.map(([path, emoji, key]) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              className={({ isActive }) =>
                `sidebar-link${isActive ? ' is-active' : ''}`
              }
            >
              <span>{emoji}</span>
              <span>{t(key, lang)}</span>
            </NavLink>
          ))}
        </nav>

        <div className="sidebar-status">
          <span
            className="live-dot"
            style={{
              background: live ? 'var(--emerald-500)' : 'var(--amber-500)',
            }}
          />
          <span>
            {live
              ? 'Hardware connected'
              : 'Hardware offline · Demo sensor feed'}
          </span>
        </div>
      </aside>

      {/* Mobile Bottom Navigation */}
      <nav className="mobile-nav glass" aria-label="Mobile navigation">
        {NAV_ITEMS.map(([path, emoji, key]) => (
          <NavLink
            key={path}
            to={path}
            end={path === '/'}
            className={({ isActive }) =>
              `mobile-nav-link${isActive ? ' is-active' : ''}`
            }
          >
            <span className="mobile-nav-emoji">{emoji}</span>
            <span className="mobile-nav-label">{t(key, lang)}</span>
          </NavLink>
        ))}
      </nav>
    </>
  );
}

export function TopHeader({ lang, setLang, isHome, videoPaused, onToggleVideo }) {
  return (
    <header className="app-header">
      <NavLink to="/" className="mobile-brand">
        <span>🌱</span>
        <span>AgroVision AI</span>
      </NavLink>

      <p className="header-tagline">{t('tag', lang)}</p>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
        {isHome && (
          <button
            type="button"
            className="home-video-pill"
            onClick={onToggleVideo}
            aria-label="Toggle background crop video"
          >
            <span>{videoPaused ? '▶' : '⏸'}</span>
            <span>{videoPaused ? 'Play Field Video' : 'Live Field Video'}</span>
          </button>
        )}

        <div className="lang-toggle glass" role="group" aria-label="Language">
          {[
            ['en', 'EN'],
            ['hi', 'हिं'],
          ].map(([code, label]) => (
            <button
              key={code}
              type="button"
              onClick={() => setLang(code)}
              aria-pressed={lang === code}
              className={`lang-btn${lang === code ? ' is-active' : ''}`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
