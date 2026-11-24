// ─── API ────────────────────────────────────────────────────────────
export const API = '/api';

// ─── Navigation items  [route, emoji, translation-key] ─────────────
export const NAV_ITEMS = [
  ['/',          '🏡', 'home'],
  ['/dashboard', '📊', 'dash'],
  ['/soil',      '🗺️', 'soil'],
  ['/detect',    '🍃', 'detect'],
  ['/iot',       '📡', 'iot'],
  ['/profile',   '👤', 'profile'],
];

// ─── Sensor metrics  [key, emoji, translationKey, unit, chartColor] ─
export const SENSOR_METRICS = [
  ['m',  '💧', 'moist', '%',  '#059669'],
  ['t',  '🌡️', 'temp',  '°C', '#c2570c'],
  ['h',  '☁️', 'hum',   '%',  '#0284c7'],
  ['ph', '🧪', 'ph',    '',   '#7c4a2d'],
  ['l',  '☀️', 'light', '%',  '#b7791f'],
];

// ─── Feature list for the Home page ─────────────────────────────────
export const FEATURES = [
  [
    '🍃',
    'Leaf disease detection',
    'A MobileNetV2 CNN classifies 38 crop & disease classes and returns severity, symptoms, and prevention steps.',
  ],
  [
    '🗺️',
    'Soil intelligence',
    'Pin your farm by GPS, PIN code, or interactive map to inspect regional soil type, fertility, climate, and crops.',
  ],
  [
    '📡',
    'Field sensors',
    'Arduino / ESP32 nodes stream soil moisture, temperature, humidity, pH, and light with live threshold alerts.',
  ],
  [
    '⛅',
    'Weather forecast',
    'Five-day Open-Meteo forecast tailored to your pinned coordinates to plan irrigation, spraying, and harvest.',
  ],
  [
    '🌾',
    'Crop suggestions',
    'Kharif and Rabi seasonal crop recommendations aligned with your regional soil profile and climate.',
  ],
  [
    '📄',
    'Reports & history',
    'Generate and download comprehensive farm health reports combining soil estimates, sensor averages, and scans.',
  ],
];
