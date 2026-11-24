import { useState, useEffect, useRef } from 'react';
import { API, SENSOR_METRICS } from '../utils/constants';
import { generateReading } from '../utils/sensorHelpers';

/**
 * Normalise backend sensor payload into the frontend metric shape:
 * { m, t, h, ph, l, soilTemp? }
 */
function normalizeSensorPayload(json) {
  if (!json || typeof json !== 'object') return null;

  // FastAPI origin/main format: { status: "success", sensor_data: { temperature, humidity, soil_moisture, soil_temperature } }
  if (json.status === 'success' && json.sensor_data && typeof json.sensor_data === 'object') {
    const s = json.sensor_data;
    if (
      typeof s.soil_moisture === 'number' &&
      typeof s.temperature === 'number' &&
      typeof s.humidity === 'number'
    ) {
      return {
        m: s.soil_moisture,
        t: s.temperature,
        h: s.humidity,
        ph: typeof s.ph === 'number' ? s.ph : 6.8,
        l: typeof s.light === 'number' ? s.light : 72,
        soilTemp: typeof s.soil_temperature === 'number' ? s.soil_temperature : null,
      };
    }
  }

  // Legacy flat format: { m, t, h, ph, l }
  if (!SENSOR_METRICS.some((m) => typeof json[m[0]] !== 'number')) {
    return json;
  }

  return null;
}

/**
 * Custom hook that maintains the last 24 sensor readings.
 *
 * - Polls GET /api/sensors/latest every 5 seconds.
 * - Supports both FastAPI { status, sensor_data } and flat { m, t, h, ph, l } formats.
 * - Falls back to synthetic demo data while backend is offline or has status "no_data".
 */
export default function useSensors() {
  const [readings, setReadings] = useState(() =>
    Array.from({ length: 24 }, (_, i) => generateReading(i))
  );
  const [live, setLive] = useState(false);
  const liveReceived = useRef(false);

  useEffect(() => {
    let counter = 24;
    let active = true;

    const poll = async () => {
      try {
        const res = await fetch(`${API}/sensors/latest`);
        if (!res.ok) throw new Error('not ok');

        const json = await res.json();
        const normalized = normalizeSensorPayload(json);

        if (!normalized) {
          throw new Error(json?.status === 'no_data' ? 'no_data' : 'invalid shape');
        }

        if (!active) return;

        setLive(true);

        if (!liveReceived.current) {
          liveReceived.current = true;
          setReadings([normalized]);
        } else {
          setReadings((prev) => [...prev.slice(-23), normalized]);
        }
      } catch (_err) {
        if (active && !liveReceived.current) {
          setLive(false);
          setReadings((prev) => [...prev.slice(-23), generateReading(counter++)]);
        }
      }
    };

    const intervalId = setInterval(poll, 5000);
    return () => {
      active = false;
      clearInterval(intervalId);
    };
  }, []);

  return {
    readings,
    live,
    latest: readings[readings.length - 1],
  };
}
