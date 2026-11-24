const T = {
  en: {
    home:     'Home',
    dash:     'Dashboard',
    soil:     'Soil Intelligence',
    detect:   'Detect Disease',
    iot:      'IoT Monitor',
    profile:  'Reports & Profile',
    tag:      'Smarter Farming. Healthier Crops. Better Tomorrow.',
    sub:      'Photograph a leaf, find out what is wrong, and see what your soil, weather and sensors say about your field.',
    cta1:     'Detect Disease',
    cta2:     'Explore Dashboard',
    demo:     'DEMO DATA',
    est:      'ESTIMATE · REGIONAL',
    health:   'Crop health',
    moist:    'Soil moisture',
    temp:     'Temperature',
    hum:      'Humidity',
    ph:       'Soil pH',
    light:    'Light',
    weather:  'Weather forecast',
    recent:   'Recent activity',
    alerts:   'Alerts',
    gps:      'Use my GPS location',
    apply:    'Save location',
    upload:   'Upload photo',
    camera:   'Take photo',
    analyse:  'Analyse leaf',
    crop:     'Crop',
    village:  'Village',
    district: 'District',
    state:    'State',
    pin:      'PIN code',
  },

  hi: {
    home:     'मुख्य पृष्ठ',
    dash:     'डैशबोर्ड',
    soil:     'मिट्टी की जानकारी',
    detect:   'रोग पहचानें',
    iot:      'IoT निगरानी',
    profile:  'रिपोर्ट व प्रोफ़ाइल',
    tag:      'स्मार्ट खेती. स्वस्थ फसल. बेहतर कल.',
    sub:      'पत्ती की फोटो लें, रोग जानें, और अपने खेत की मिट्टी, मौसम और सेंसर की जानकारी देखें।',
    cta1:     'रोग पहचानें',
    cta2:     'डैशबोर्ड देखें',
    demo:     'डेमो डेटा',
    est:      'अनुमान · क्षेत्रीय',
    health:   'फसल स्वास्थ्य',
    moist:    'मिट्टी की नमी',
    temp:     'तापमान',
    hum:      'आर्द्रता',
    ph:       'मिट्टी pH',
    light:    'प्रकाश',
    weather:  'मौसम पूर्वानुमान',
    recent:   'हाल की गतिविधि',
    alerts:   'चेतावनियाँ',
    gps:      'GPS से स्थान लें',
    apply:    'स्थान सहेजें',
    upload:   'फोटो अपलोड करें',
    camera:   'फोटो खींचें',
    analyse:  'पत्ती जाँचें',
    crop:     'फसल',
    village:  'गाँव',
    district: 'ज़िला',
    state:    'राज्य',
    pin:      'पिन कोड',
  },
};

/**
 * Look up a translation key for the given language.
 * Falls back to English, then returns the key itself.
 *
 * @param {string} key   – translation key
 * @param {string} lang  – 'en' | 'hi'
 * @returns {string}
 */
export function t(key, lang = 'en') {
  return (T[lang] && T[lang][key]) || T.en[key] || key;
}

export default T;
