/**
 * Generate a synthetic sensor reading for a given index.
 * Produces realistic-looking oscillating values for demo/fallback use.
 *
 * @param {number} index – reading sequence number
 * @returns {{ m: number, t: number, h: number, ph: number, l: number }}
 */
export function generateReading(index) {
  return {
    m:  Math.round(46 + 16 * Math.sin(index / 4) + (index * 7) % 5),
    t:  +(27 + 6 * Math.sin(index / 5) + ((index * 3) % 4) / 4).toFixed(1),
    h:  Math.round(62 + 14 * Math.cos(index / 6) + (index * 5) % 4),
    ph: +(6.7 + 0.3 * Math.sin(index / 9)).toFixed(1),
    l:  Math.round(55 + 40 * Math.sin(index / 3.8)),
  };
}

/**
 * Evaluate sensor readings against threshold rules and return alerts.
 *
 * @param {{ m: number, t: number, h: number, ph: number, l: number }} reading
 * @returns {Array<[string, string]>}  Each entry is [level, message].
 *          level is 'warn' or 'bad'.
 */
export function getAlerts(reading) {
  return [
    reading.m < 32 && ['warn', 'Soil moisture is low. Irrigation may be needed.'],
    reading.m > 80 && ['warn', 'Soil is very wet. Check drainage.'],
    reading.t > 36 && ['bad', 'High temperature. Heat stress risk.'],
    reading.h > 78 && ['warn', 'High humidity. Watch for fungal disease.'],
    (reading.ph < 5.5 || reading.ph > 8) && ['warn', 'Soil pH is outside 5.5–8.0.'],
  ].filter(Boolean);
}
