// ─── 10 Indian soil zones (broad regional estimates) ────────────────
export const REGIONS = [
  {
    name: 'Central black-soil belt',
    states: 'Madhya Pradesh, Maharashtra, east Gujarat',
    center: [21.5, 77],
    soilType:
      'Black soil (regur/Vertisol), medium black on uplands and deep black in valleys',
    ph: '7.0–8.5',
    fertility:
      'High clay, holds moisture, rich in calcium and potash; usually low in nitrogen, phosphorus and organic matter. Cracks when dry, sticky when wet.',
    climate: 'Semi-arid to sub-humid; monsoon Jun–Sep, about 700–1200 mm',
    crops: 'Soybean, cotton, wheat, gram, sorghum, pigeon pea',
    kharif: ['Soybean', 'Cotton', 'Pigeon pea'],
    rabi: ['Wheat', 'Chickpea', 'Safflower'],
  },
  {
    name: 'Western Gangetic alluvium',
    states: 'Punjab, Haryana, Delhi, west Uttar Pradesh',
    center: [29.5, 76.5],
    soilType: 'Alluvial loam to sandy loam; saline-alkaline patches',
    ph: '7.0–8.5',
    fertility:
      'Fertile and well drained; responds strongly to nitrogen. Zinc deficiency and salinity occur in patches.',
    climate: 'Semi-arid; hot summers, cold winters; irrigation-dependent',
    crops: 'Wheat, rice, sugarcane, mustard, potato',
    kharif: ['Rice', 'Maize', 'Cotton'],
    rabi: ['Wheat', 'Mustard', 'Potato'],
  },
  {
    name: 'Eastern Gangetic alluvium',
    states: 'East Uttar Pradesh, Bihar, West Bengal',
    center: [24.5, 87.5],
    soilType: 'Alluvial (young Khadar and older Bhangar); clayey in the delta',
    ph: '6.0–8.0',
    fertility:
      'Highly fertile with a high water table; flood-prone. Check zinc and boron.',
    climate: 'Humid subtropical; heavy monsoon, 1000–1600 mm',
    crops: 'Rice, wheat, jute, maize, lentil, vegetables',
    kharif: ['Rice', 'Jute', 'Maize'],
    rabi: ['Wheat', 'Lentil', 'Potato'],
  },
  {
    name: 'Arid western zone',
    states: 'West Rajasthan, Kutch',
    center: [26.5, 72],
    soilType: 'Arid sandy soils, gravelly in patches',
    ph: '7.5–9.0',
    fertility:
      'Low organic matter and water holding capacity; low nitrogen and phosphorus; wind erosion risk.',
    climate: 'Arid; under 400 mm rain; extreme temperatures',
    crops: 'Pearl millet (bajra), cluster bean, moth bean, mustard',
    kharif: ['Bajra', 'Cluster bean', 'Moong'],
    rabi: ['Mustard', 'Barley', 'Cumin'],
  },
  {
    name: 'Eastern red and laterite plateau',
    states: 'Jharkhand, Odisha, Chhattisgarh',
    center: [22.3, 84.5],
    soilType:
      'Red and yellow soils; lateritic on uplands; alluvium in river basins',
    ph: '5.0–6.5',
    fertility:
      'Acidic, light-textured, low in nitrogen, phosphorus and organic matter; benefits from lime and compost.',
    climate: 'Sub-humid tropical; monsoon 1100–1500 mm',
    crops: 'Rice, maize, pulses, oilseeds, millets, vegetables',
    kharif: ['Rice', 'Maize', 'Pigeon pea', 'Millets'],
    rabi: ['Gram', 'Mustard', 'Vegetables'],
  },
  {
    name: 'Deccan red-black region',
    states: 'North Karnataka, Telangana, Andhra Pradesh',
    center: [16, 78],
    soilType: 'Red sandy loam mixed with black soils',
    ph: '6.0–8.0',
    fertility:
      'Red soils are low in fertility and hold little water; black soils are moisture-rich. Needs nitrogen, phosphorus and zinc.',
    climate: 'Semi-arid tropical; erratic rain, 600–900 mm',
    crops: 'Cotton, groundnut, sorghum, pulses, chilli, irrigated rice',
    kharif: ['Cotton', 'Groundnut', 'Red gram'],
    rabi: ['Sorghum', 'Chickpea', 'Sunflower'],
  },
  {
    name: 'Southern red and laterite',
    states: 'Tamil Nadu, Kerala, south Karnataka',
    center: [11, 78.5],
    soilType: 'Red loam, laterite and coastal alluvium',
    ph: '5.0–7.0',
    fertility:
      'Acidic and well drained; nutrients leach easily, so organic matter matters.',
    climate: 'Tropical; south-west and north-east monsoons',
    crops: 'Rice, coconut, banana, millets, plantation crops, vegetables',
    kharif: ['Rice', 'Millets', 'Groundnut'],
    rabi: ['Rice', 'Pulses', 'Vegetables'],
  },
  {
    name: 'Himalayan mountain zone',
    states: 'Himachal Pradesh, Uttarakhand, Jammu & Kashmir',
    center: [32, 77.5],
    soilType: 'Shallow stony mountain and forest soils; valley alluvium',
    ph: '5.0–7.0',
    fertility:
      'High organic matter under forest; erosion risk on slopes, so terracing is important.',
    climate: 'Temperate to alpine; snow at altitude',
    crops: 'Apple, potato, maize, wheat, rajma, vegetables',
    kharif: ['Maize', 'Potato', 'Rajma'],
    rabi: ['Wheat', 'Barley', 'Peas'],
  },
  {
    name: 'North-eastern hills and plains',
    states: 'Assam, Meghalaya and neighbours',
    center: [26, 92.5],
    soilType:
      'Alluvium in the Brahmaputra valley; acidic red-yellow and lateritic soils on hills',
    ph: '4.5–6.5',
    fertility:
      'Acidic with heavy leaching but high organic matter; lime usually helps.',
    climate: 'Humid; very heavy rain, 2000 mm and above',
    crops: 'Rice, tea, jute, citrus, vegetables',
    kharif: ['Rice', 'Jute', 'Maize'],
    rabi: ['Mustard', 'Potato', 'Pulses'],
  },
  {
    name: 'Konkan and west coast',
    states: 'Konkan, Goa, coastal Karnataka',
    center: [17, 73.5],
    soilType: 'Lateritic and coastal sandy soils',
    ph: '5.0–6.5',
    fertility:
      'Acidic, low fertility and strong leaching; responds well to organic inputs.',
    climate: 'Humid tropical; 2000–3500 mm rain',
    crops: 'Rice, coconut, cashew, mango, areca nut',
    kharif: ['Rice', 'Finger millet', 'Vegetables'],
    rabi: ['Pulses', 'Vegetables'],
  },
];

// ─── State → region-index mapping ───────────────────────────────────
export const STATE_MAP = {
  'Madhya Pradesh': 0,
  Maharashtra: 0,
  Gujarat: 0,
  Punjab: 1,
  Haryana: 1,
  Delhi: 1,
  'Uttar Pradesh': 2,
  Bihar: 2,
  'West Bengal': 2,
  Rajasthan: 3,
  Jharkhand: 4,
  Odisha: 4,
  Chhattisgarh: 4,
  Karnataka: 5,
  Telangana: 5,
  'Andhra Pradesh': 5,
  'Tamil Nadu': 6,
  Kerala: 6,
  'Himachal Pradesh': 7,
  Uttarakhand: 7,
  'Jammu & Kashmir': 7,
  Assam: 8,
  Meghalaya: 8,
  Goa: 9,
};

/**
 * Find the nearest soil region to a given lat/lon using
 * longitude-corrected squared Euclidean distance.
 *
 * @param {number} lat
 * @param {number} lon
 * @returns {number} index into REGIONS
 */
export function findNearestRegion(lat, lon) {
  let bestIdx = 0;
  let bestDist = Infinity;

  for (let i = 0; i < REGIONS.length; i++) {
    const r = REGIONS[i];
    const dLat = r.center[0] - lat;
    const dLon = (r.center[1] - lon) * Math.cos(lat * Math.PI / 180);
    const dist = dLat * dLat + dLon * dLon;
    if (dist < bestDist) {
      bestDist = dist;
      bestIdx = i;
    }
  }

  return bestIdx;
}
