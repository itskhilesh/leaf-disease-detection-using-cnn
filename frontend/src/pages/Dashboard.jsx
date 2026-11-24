import { Link } from 'react-router-dom';
import { SENSOR_METRICS } from '../utils/constants';
import { getAlerts } from '../utils/sensorHelpers';
import { t } from '../utils/translations';
import SensorChart from '../components/SensorChart';
import WeatherWidget from '../components/WeatherWidget';
import AlertBanner from '../components/AlertBanner';
import '../styles/dashboard.css';

export default function Dashboard({ lang, history, activity, sensors, weather }) {
  const latest = sensors.latest;
  const lastScan = history[0];
  const alerts = getAlerts(latest);
  const diseasedScans = history.filter((item) => !item.healthy).slice(0, 2);

  return (
    <div className="dash-stack rise">
      <h1 className="page-title">{t('dash', lang)}</h1>

      {/* Top Metrics Row */}
      <div className="dash-metrics-grid">
        <article className="glass card-surface metric-health-card">
          <p className="metric-label">🌱 {t('health', lang)}</p>
          {lastScan ? (
            <>
              <p
                className={`metric-value ${
                  lastScan.healthy ? 'health-val-ok' : 'health-val-bad'
                }`}
                style={{ fontSize: '1.35rem' }}
              >
                {lastScan.healthy ? 'Healthy' : lastScan.name}
              </p>
              <p className="soft-text" style={{ fontSize: '0.78rem', margin: '0.25rem 0 0' }}>
                {lastScan.crop}, last scan
              </p>
            </>
          ) : (
            <>
              <p className="metric-value health-val-empty" style={{ fontSize: '1.35rem' }}>
                No scan yet
              </p>
              <Link
                to="/detect"
                style={{
                  fontSize: '0.84rem',
                  color: 'var(--emerald-700)',
                  textDecoration: 'underline',
                  fontWeight: 600,
                }}
              >
                Scan a leaf
              </Link>
            </>
          )}
        </article>

        {SENSOR_METRICS.slice(0, 4).map(([key, emoji, tKey, unit]) => (
          <article key={key} className="glass card-surface">
            <div className="metric-top">
              <p className="metric-label">
                {emoji} {t(tKey, lang)}
              </p>
              {!sensors.live && <span className="badge badge-demo">{t('demo', lang)}</span>}
            </div>
            <p className="metric-value">
              {latest[key]}
              <span className="metric-unit">{unit}</span>
            </p>
          </article>
        ))}
      </div>

      {/* Charts + Weather */}
      <div className="dash-main-grid">
        <article className="glass card-surface">
          <div className="card-header-row">
            <h2 className="card-subtitle">
              {t('moist', lang)} &amp; {t('temp', lang).toLowerCase()}, last 24 readings
            </h2>
            {!sensors.live ? (
              <span className="badge badge-demo">{t('demo', lang)}</span>
            ) : (
              <span className="badge badge-live">LIVE</span>
            )}
          </div>
          <div className="charts-dual">
            <div className="chart-box">
              <SensorChart
                data={sensors.readings.map((r) => r.m)}
                color="#059669"
                unit="%"
              />
            </div>
            <div className="chart-box">
              <SensorChart
                data={sensors.readings.map((r) => r.t)}
                color="#c2570c"
                unit="°C"
              />
            </div>
          </div>
        </article>

        <article className="glass card-surface">
          <div className="card-header-row">
            <h2 className="card-subtitle">{t('weather', lang)}</h2>
          </div>
          <WeatherWidget weather={weather} />
        </article>
      </div>

      {/* Alerts + Activity */}
      <div className="dash-bottom-grid">
        <article className="glass card-surface">
          <div className="card-header-row">
            <h2 className="card-subtitle">{t('alerts', lang)}</h2>
          </div>
          <div className="alerts-list">
            {diseasedScans.map((d) => (
              <AlertBanner key={d.when} kind="bad">
                Disease found on {d.crop}: <strong>{d.name}</strong>
              </AlertBanner>
            ))}
            {alerts.map(([kind, msg]) => (
              <AlertBanner key={msg} kind={kind}>
                {msg}
                {!sensors.live && ' (demo data)'}
              </AlertBanner>
            ))}
            {alerts.length === 0 && diseasedScans.length === 0 && (
              <p className="soft-text" style={{ fontSize: '0.9rem', margin: 0 }}>
                No active alerts.
              </p>
            )}
          </div>
        </article>

        <article className="glass card-surface">
          <div className="card-header-row">
            <h2 className="card-subtitle">{t('recent', lang)}</h2>
          </div>
          <ul className="activity-list">
            {activity.map((item, idx) => (
              <li key={idx} className="activity-item">
                <span className="activity-time">{item.t}</span>
                <span>{item.m}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </div>
  );
}
