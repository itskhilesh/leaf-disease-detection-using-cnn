import { useState, useEffect } from 'react';

/**
 * Custom hook that fetches a 5-day weather forecast from the Open-Meteo API.
 *
 * @param {[number, number]|null} latLon – [latitude, longitude] or null/undefined
 * @returns {{ status: 'idle'|'loading'|'ok'|'error', data: object|null }}
 */
export default function useWeather(latLon) {
  const [state, setState] = useState({ status: 'idle', data: null });

  useEffect(() => {
    if (!latLon) {
      setState({ status: 'idle', data: null });
      return;
    }

    setState({ status: 'loading', data: null });

    const controller = new AbortController();

    const url =
      'https://api.open-meteo.com/v1/forecast' +
      '?latitude=' + latLon[0] +
      '&longitude=' + latLon[1] +
      '&current=temperature_2m,relative_humidity_2m' +
      '&daily=temperature_2m_max,temperature_2m_min,precipitation_sum' +
      '&timezone=auto' +
      '&forecast_days=5';

    fetch(url, { signal: controller.signal })
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error('HTTP ' + res.status))))
      .then((json) => setState({ status: 'ok', data: json }))
      .catch((err) => {
        if (!err || err.name !== 'AbortError') {
          setState({ status: 'error', data: null });
        }
      });

    return () => controller.abort();
    // Re-fetch when coordinates change (join to get a stable dep string)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [latLon && latLon.join()]);

  return state;
}
