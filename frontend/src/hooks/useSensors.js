import { useState, useEffect, useRef } from 'react';
import { API, SENSOR_METRICS } from '../utils/constants';
import { generateReading } from '../utils/sensorHelpers';

/**
 * Custom hook that maintains the last 24 sensor readings.
 *
 * - Polls GET /api/sensors/latest every 5 seconds.
 * - Falls back to synthetic demo data when the endpoint is unreachable.
 * - Once a valid live response arrives, all future readings are live.
 *
 * @returns {{ readings: Array, live: boolean, latest: object }}
 */
export default function useSensors() {
  const [readings, setReadings] = useState(() =>
    Array.from({ length: 24 }, (_, i) => generateReading(i)),
  );
  const [live, setLive] = useState(false);
  const liveReceived = useRef(false);

  useEffect(() => {
    let counter = 24;
    let active = true;

    const intervalId = setInterval(async () => {
      try {
        const res = await fetch(API + '/sensors/latest');
        if (!res.ok) throw new Error('not ok');

        const json = await res.json();

        // Validate that every expected metric key is a number
        if (SENSOR_METRICS.some((m) => typeof json[m[0]] !== 'number')) {
          throw new Error('invalid shape');
        }

        if (!active) return;

        setLive(true);

        if (!liveReceived.current) {
          // First live reading — start fresh
          liveReceived.current = true;
          setReadings([json]);
        } else {
          setReadings((prev) => [...prev.slice(-23), json]);
        }
      } catch (_err) {
        // Only generate demo data while we have never received live data
        if (active && !liveReceived.current) {
          setLive(false);
          setReadings((prev) => [...prev.slice(-23), generateReading(counter++)]);
        }
      }
    }, 5000);

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
