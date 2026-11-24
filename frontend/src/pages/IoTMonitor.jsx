import { API, SENSOR_METRICS } from '../utils/constants';
import { getAlerts } from '../utils/sensorHelpers';
import { t } from '../utils/translations';
import SensorChart from '../components/SensorChart';
import AlertBanner from '../components/AlertBanner';
import '../styles/iot.css';

const DEVICES = [
  ['Soil moisture sensor', 'Capacitive probe'],
  ['DHT22 / DHT11', 'Ambient temperature and humidity'],
  ['Soil pH sensor', 'Analog probe'],
  ['Light sensor', 'LDR or BH1750'],
  ['ESP32-CAM', 'Leaf photos over Wi-Fi'],
];

export default function IoTMonitor({ lang, sensors }) {
  const latest = sensors.latest;
  const alerts = getAlerts(latest);

  return (
    <div className="iot-stack rise">
      <div className="iot-header-row">
        <h1 className="page-title">{t('iot', lang)}</h1>
        {sensors.live ? (
          <span className="badge badge-live">LIVE</span>
        ) : (
          <span className="badge badge-demo">{t('demo', lang)}</span>
        )}
      </div>

      {!sensors.live && (
        <AlertBanner kind="warn">
          No hardware is connected. Every reading and graph on this page is simulated DEMO DATA
          and switches automatically to live telemetry once your ESP32 endpoint responds.
        </AlertBanner>
      )}

      <div className="iot-sensors-grid">
        {SENSOR_METRICS.map(([key, emoji, tKey, unit, color]) => (
          <article key={key} className="glass card-surface">
            <p className="metric-label">
              {emoji} {t(tKey, lang)}{' '}
              <span className="soft-text" style={{ fontSize: '0.75rem' }}>
                last 24 readings
              </span>
            </p>
            <p className="iot-sensor-value">
              {latest[key]}
              <span className="metric-unit">{unit}</span>
            </p>
            <div className="chart-box">
              <SensorChart
                data={sensors.readings.map((r) => r[key])}
                color={color}
                unit={unit}
              />
            </div>
          </article>
        ))}
      </div>

      <div className="iot-bottom-grid">
        <article className="glass card-surface">
          <h2 className="card-subtitle" style={{ marginBottom: '0.75rem' }}>
            Connected Hardware Nodes
          </h2>
          <ul className="device-list">
            {DEVICES.map(([name, desc]) => (
              <li key={name} className="device-row">
                <span>
                  <strong>{name}</strong>
                  <span className="device-sub">{desc}</span>
                </span>
                <span className={sensors.live ? 'device-status-on' : 'device-status-off'}>
                  {sensors.live ? 'Online' : 'Not connected'}
                </span>
              </li>
            ))}
          </ul>
        </article>

        <article className="glass card-surface">
          <h2 className="card-subtitle" style={{ marginBottom: '0.75rem' }}>
            {t('alerts', lang)}
          </h2>
          <div className="alerts-list">
            {alerts.map(([kind, msg]) => (
              <AlertBanner key={msg} kind={kind}>
                {msg}
              </AlertBanner>
            ))}
            {alerts.length === 0 && (
              <p className="soft-text" style={{ fontSize: '0.9rem', margin: 0 }}>
                No active threshold alerts.
              </p>
            )}
          </div>

          <h3 className="card-subtitle" style={{ marginTop: '1.25rem', fontSize: '0.95rem' }}>
            Connect your ESP32 / Arduino
          </h3>
          <p className="soft-text" style={{ fontSize: '0.82rem', margin: '0.35rem 0 0' }}>
            This dashboard polls <code>GET {API}/sensors/latest</code> every 5 seconds.
            Post JSON readings matching:
          </p>
          <pre className="esp-code-block">{`{"m": 48, "t": 29.4, "h": 63, "ph": 6.8, "l": 72}`}</pre>
        </article>
      </div>
    </div>
  );
}
