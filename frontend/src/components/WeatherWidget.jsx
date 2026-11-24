import { Link } from 'react-router-dom';
import AlertBanner from './AlertBanner';

export default function WeatherWidget({ weather }) {
  if (weather.status === 'idle') {
    return (
      <p className="soft-text" style={{ fontSize: '0.9rem', margin: 0 }}>
        Set your farm on the map or with GPS in{' '}
        <Link to="/soil" style={{ color: 'var(--emerald-700)', textDecoration: 'underline', fontWeight: 600 }}>
          Soil Intelligence
        </Link>{' '}
        to load a 5-day forecast. Manual village entry alone has no coordinates.
      </p>
    );
  }

  if (weather.status === 'loading') {
    return (
      <p className="soft-text" style={{ fontSize: '0.9rem', margin: 0 }}>
        Loading 5-day forecast…
      </p>
    );
  }

  if (weather.status === 'error' || !weather.data) {
    return (
      <AlertBanner kind="warn">
        Forecast unavailable. Open-Meteo could not be reached right now. Check your connection and try again.
      </AlertBanner>
    );
  }

  const { current, daily } = weather.data;

  return (
    <div>
      <p className="weather-temp">
        {Math.round(current.temperature_2m)}°C{' '}
        <span className="weather-hum">humidity {current.relative_humidity_2m}%</span>
      </p>
      <div className="weather-days">
        {daily.time.map((dateStr, idx) => (
          <div key={dateStr} className="weather-day-row">
            <span>
              {new Date(dateStr).toLocaleDateString([], { weekday: 'short' })}
            </span>
            <span>
              {Math.round(daily.temperature_2m_min[idx])}–
              {Math.round(daily.temperature_2m_max[idx])}°C
            </span>
            <span className="weather-rain">{daily.precipitation_sum[idx]} mm</span>
          </div>
        ))}
      </div>
    </div>
  );
}
