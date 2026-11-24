import { useEffect, useState } from 'react';
import { CircleMarker, MapContainer, TileLayer, useMap, useMapEvents } from 'react-leaflet';
import { REGIONS, STATE_MAP, findNearestRegion } from '../utils/soilData';
import { t } from '../utils/translations';
import AlertBanner from '../components/AlertBanner';
import SoilStrata from '../components/SoilStrata';
import '../styles/soil.css';

function MapEvents({ onPick }) {
  useMapEvents({
    click(e) {
      onPick([e.latlng.lat, e.latlng.lng], 'map');
    },
  });
  return null;
}

function MapRecenter({ pos }) {
  const map = useMap();
  useEffect(() => {
    if (pos) {
      map.setView(pos, Math.max(map.getZoom(), 9));
    }
  }, [pos, map]);
  return null;
}

export default function SoilIntelligence({ lang, loc, setLoc, sensors, addActivity }) {
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState('');
  const [form, setForm] = useState({
    village: loc.village || '',
    district: loc.district || '',
    state: loc.state || '',
    pin: loc.pin || '',
  });

  const region = loc.ri != null ? REGIONS[loc.ri] : null;
  const phRange = region ? region.ph.split('–').map(Number) : null;
  const sensorPh = sensors.latest.ph;

  const pickCoords = (ll, src) => {
    if (ll[0] < 6 || ll[0] > 37.5 || ll[1] < 68 || ll[1] > 98) {
      setErr('That point is outside India. The built-in regional soil data covers India only.');
      return;
    }
    setErr('');
    setLoc({ ll, ri: findNearestRegion(ll[0], ll[1]), src });
    addActivity(`Farm location set by ${src}`);
  };

  const handleGps = () => {
    if (!navigator.geolocation) {
      setErr('GPS is not available on this device. Use the map or enter details manually.');
      return;
    }
    setBusy(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setBusy(false);
        pickCoords([pos.coords.latitude, pos.coords.longitude], 'GPS');
      },
      (geoErr) => {
        setBusy(false);
        setErr(
          geoErr.code === 1
            ? 'Location permission was denied. Allow it in your browser, or use the map or manual entry.'
            : 'Could not get your location. Try the map or manual entry.'
        );
      },
      { timeout: 10000, enableHighAccuracy: true }
    );
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (!form.state) {
      setErr('Please choose a state.');
      return;
    }
    if (form.pin && !/^[1-9][0-9]{5}$/.test(form.pin)) {
      setErr('PIN code must be 6 digits.');
      return;
    }
    setErr('');
    setLoc({
      ri: STATE_MAP[form.state],
      ll: null,
      src: 'manual entry',
      ...form,
    });
    addActivity(`Farm details saved: ${form.village || form.district || form.state}`);
  };

  return (
    <div className="soil-stack rise">
      <h1 className="page-title">{t('soil', lang)}</h1>

      <div className="soil-grid">
        {/* Left column: GPS, manual form, interactive Leaflet map */}
        <div className="soil-left-col">
          <article className="glass card-surface">
            <button
              type="button"
              onClick={handleGps}
              disabled={busy}
              className="btn btn-primary"
            >
              <span>📍</span>
              <span>{busy ? 'Finding you…' : t('gps', lang)}</span>
            </button>

            <form onSubmit={handleSave} className="soil-form">
              <label className="field-label">
                {t('village', lang)}
                <input
                  className="field-input"
                  value={form.village}
                  onChange={(e) => setForm({ ...form, village: e.target.value })}
                />
              </label>

              <label className="field-label">
                {t('district', lang)}
                <input
                  className="field-input"
                  value={form.district}
                  onChange={(e) => setForm({ ...form, district: e.target.value })}
                />
              </label>

              <label className="field-label">
                {t('state', lang)}
                <select
                  className="field-input"
                  value={form.state}
                  onChange={(e) => setForm({ ...form, state: e.target.value })}
                >
                  <option value="">Select state</option>
                  {Object.keys(STATE_MAP)
                    .sort()
                    .map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                </select>
              </label>

              <label className="field-label">
                {t('pin', lang)}
                <input
                  className="field-input"
                  inputMode="numeric"
                  maxLength={6}
                  value={form.pin}
                  onChange={(e) => setForm({ ...form, pin: e.target.value })}
                />
              </label>

              <button type="submit" className="btn btn-outline soil-submit-btn">
                {t('apply', lang)}
              </button>
            </form>
          </article>

          {err && <AlertBanner kind="bad">{err}</AlertBanner>}

          <div className="soil-map-frame">
            <MapContainer
              center={loc.ll || [22.5, 79]}
              zoom={loc.ll ? 10 : 5}
              scrollWheelZoom
            >
              <TileLayer
                url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <MapEvents onPick={pickCoords} />
              <MapRecenter pos={loc.ll} />
              {loc.ll && (
                <CircleMarker
                  center={loc.ll}
                  radius={9}
                  pathOptions={{
                    color: '#ffffff',
                    weight: 3,
                    fillColor: '#047857',
                    fillOpacity: 1,
                  }}
                />
              )}
            </MapContainer>
          </div>
          <p className="soft-text" style={{ fontSize: '0.78rem', margin: 0 }}>
            Tap the map to place your farm. Soil lookup works even if map tiles are offline.
          </p>
        </div>

        {/* Right column: Regional soil profile + Soil Strata */}
        <div className="soil-right-col">
          {region ? (
            <>
              <article className="glass card-surface">
                <div className="soil-region-header">
                  <div>
                    <h2 className="soil-region-title">{region.name}</h2>
                    <p className="soil-region-states">{region.states}</p>
                  </div>
                  <span className="badge badge-demo">{t('est', lang)}</span>
                </div>

                <div className="soil-details-list">
                  <p>
                    <strong>Soil types:</strong> {region.soilType}
                  </p>
                  <p>
                    <strong>Typical pH:</strong> {region.ph}
                  </p>
                  <p>
                    <strong>Fertility:</strong> {region.fertility}
                  </p>
                  <p>
                    <strong>Climate:</strong> {region.climate}
                  </p>
                  <p>
                    <strong>Common crops:</strong> {region.crops}
                  </p>
                </div>

                <div>
                  <strong style={{ fontSize: '0.9rem' }}>
                    Suggested for this soil &amp; climate
                  </strong>
                  <div className="soil-crop-tags">
                    {region.kharif.map((c) => (
                      <span key={`k-${c}`} className="soil-crop-tag">
                        ☀️ Kharif: {c}
                      </span>
                    ))}
                    {region.rabi.map((c) => (
                      <span key={`r-${c}`} className="soil-crop-tag">
                        ❄️ Rabi: {c}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="soil-ph-compare">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem' }}>
                    <strong>Your sensor vs regional range</strong>
                    {!sensors.live && <span className="badge badge-demo">{t('demo', lang)}</span>}
                  </div>
                  <p style={{ margin: '0.35rem 0 0' }}>
                    pH measured <strong>{sensorPh}</strong> · regional {region.ph}:{' '}
                    {sensorPh < phRange[0]
                      ? 'below the usual range, so liming may help'
                      : sensorPh > phRange[1]
                        ? 'above the usual range'
                        : 'within the usual range'}
                    .
                  </p>
                </div>
              </article>

              <AlertBanner kind="warn">
                This is a regional estimate, not a test of your specific field. For exact
                nutrient advice, get a Soil Health Card test from your local agriculture office.
              </AlertBanner>
            </>
          ) : (
            <article className="glass card-surface">
              <p className="muted-text" style={{ margin: 0 }}>
                Choose your farm location via GPS, map tap, or manual entry to view regional
                soil, fertility, climate, and seasonal crop suggestions.
              </p>
            </article>
          )}

          <article className="glass card-surface soil-strata-card">
            <SoilStrata />
          </article>
        </div>
      </div>
    </div>
  );
}
