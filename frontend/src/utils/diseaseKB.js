import { API } from './constants';

// ─── Disease knowledge base ─────────────────────────────────────────
// Each entry: [severity, symptoms, prevention, pathogenType]
// Keyed by normalised label (lowercase, no parenthetical info).
export const DISEASE_KB = {
  'apple apple scab': [
    'Moderate',
    'Olive-green to dark velvety spots on leaves and fruit that turn brown and scabby over time.',
    'Rake and destroy fallen leaves; prune trees for airflow; apply preventative fungicide at bud break',
    'Fungal',
  ],
  'apple black rot': [
    'High',
    'Purple flecks enlarging into frog-eye leaf spots with tan centers; fruit develops firm dark rot.',
    'Remove mummified fruit and dead wood; prune cankers; keep canopy dry and open',
    'Fungal',
  ],
  'apple cedar apple rust': [
    'Moderate',
    'Bright orange-yellow spots on upper leaf surfaces with tiny black dots and tube-like structures underneath.',
    'Plant rust-resistant apple cultivars; remove nearby eastern red cedar galls; apply protective sprays in spring',
    'Fungal',
  ],
  'cherry powdery mildew': [
    'Moderate',
    'White powdery fungal patches curling young leaves and stunting new shoot growth.',
    'Avoid excessive nitrogen; prune dense canopy; water at the base; apply sulfur or recommended fungicide early',
    'Fungal',
  ],
  'corn cercospora leaf spot gray leaf spot': [
    'Moderate to high',
    'Rectangular tan to gray lesions bounded by leaf veins that merge and blight entire leaves.',
    'Rotate with non-host crops; till under infected residue; choose tolerant corn hybrids',
    'Fungal',
  ],
  'corn common rust': [
    'Moderate',
    'Small cinnamon-brown pustules scattered on both upper and lower leaf surfaces.',
    'Choose resistant hybrids; sow early; scout fields weekly during humid weather',
    'Fungal',
  ],
  'corn northern leaf blight': [
    'Moderate to high',
    'Long grey-green or tan cigar-shaped lesions (2–15 cm) running parallel to leaf margins.',
    'Rotate with non-cereal crops; bury crop residue; plant resistant varieties',
    'Fungal',
  ],
  'grape black rot': [
    'High',
    'Reddish-brown circular leaf spots with dark borders; berries shrivel into hard black mummies.',
    'Remove mummified berries; prune for good air circulation; start protective sprays before bloom',
    'Fungal',
  ],
  'grape esca': [
    'High',
    'Tiger-stripe yellowing and scorching between leaf veins; dark streaking inside woody stems.',
    'Prune during dry weather; seal large pruning wounds; remove severely affected vines',
    'Fungal complex',
  ],
  'grape leaf blight': [
    'Moderate',
    'Irregular dark brown to purplish spots with yellow halos that cause premature leaf drop.',
    'Improve canopy ventilation; collect fallen leaves; apply copper or recommended foliar fungicide',
    'Fungal',
  ],
  'orange haunglongbing': [
    'Critical',
    'Asymmetric blotchy yellow mottling on leaves, stunted shoots, and bitter lopsided green fruit.',
    'Control Asian citrus psyllid vectors; use certified disease-free nursery stock; remove infected trees promptly',
    'Bacterial',
  ],
  'peach bacterial spot': [
    'Moderate',
    'Small water-soaked angular spots turning purple-brown and dropping out to leave shot-holes.',
    'Plant resistant varieties; avoid sandy wind-exposed sites; apply copper sprays at dormancy',
    'Bacterial',
  ],
  'pepper, bell bacterial spot': [
    'High',
    'Water-soaked circular spots turning dark brown with yellow halos, causing severe defoliation.',
    'Use certified pathogen-free seed; avoid overhead irrigation; rotate away from solanaceous crops for 2+ years',
    'Bacterial',
  ],
  'potato early blight': [
    'Moderate',
    'Dark brown target-ring spots on older lower leaves accompanied by yellowing.',
    'Maintain balanced nitrogen and potassium; water at soil level; rotate crops and remove volunteer potatoes',
    'Fungal',
  ],
  'potato late blight': [
    'High',
    'Dark water-soaked blotches turning brown and papery; white fuzzy growth underneath in damp weather.',
    'Plant certified seed tubers; avoid waterlogging; destroy infected haulms; follow local spray advisories',
    'Oomycete',
  ],
  'squash powdery mildew': [
    'Moderate',
    'Talcum-like white powdery spots covering upper and lower leaf surfaces and petioles.',
    'Space plants for airflow; choose resistant cultivars; apply neem oil, sulfur, or potassium bicarbonate early',
    'Fungal',
  ],
  'strawberry leaf scorch': [
    'Moderate',
    'Irregular dark purple to reddish blotches that coalesce until leaves look scorched and dry.',
    'Use clean transplants; remove old infected foliage after harvest; use drip irrigation',
    'Fungal',
  ],
  'tomato bacterial spot': [
    'High',
    'Small dark greasy spots on leaves and raised scabby lesions on green fruit.',
    'Use hot-water-treated or certified seed; avoid working in wet fields; apply copper-based bactericide early',
    'Bacterial',
  ],
  'tomato early blight': [
    'Moderate',
    'Brown spots with concentric ring patterns on older leaves and yellowing around the lesions.',
    'Rotate crops every season; mulch the soil; remove lower infected leaves; keep foliage dry',
    'Fungal',
  ],
  'tomato late blight': [
    'High',
    'Dark, water-soaked patches on leaves and stems; white mould underneath in humid weather; spreads fast.',
    'Remove and destroy infected plants; water at the base, not overhead; use certified seed; consult your local agriculture officer',
    'Oomycete',
  ],
  'tomato leaf mold': [
    'Moderate',
    'Pale greenish-yellow spots on upper leaf surfaces with olive-green velvety mold underneath.',
    'Ventilate greenhouses well; reduce relative humidity below 85%; space plants properly',
    'Fungal',
  ],
  'tomato septoria leaf spot': [
    'Moderate',
    'Numerous small circular spots with dark margins and tan/gray centers containing tiny black specks.',
    'Mulch around base to block soil splash; remove lower affected leaves; sanitize stakes and cages',
    'Fungal',
  ],
  'tomato spider mites two-spotted spider mite': [
    'Moderate',
    'Fine yellow stippling on upper leaves, bronze discoloration, and delicate webbing underneath.',
    'Mist undersides of leaves; encourage predatory mites; apply insecticidal soap or horticultural oil',
    'Pest',
  ],
  'tomato target spot': [
    'Moderate',
    'Brown circular lesions with faint concentric rings and yellow halos on older foliage.',
    'Improve airflow via pruning; avoid overhead watering; rotate away from tomatoes and potatoes',
    'Fungal',
  ],
  'tomato tomato yellow leaf curl virus': [
    'High',
    'Upward curling of leaf margins, severe yellowing, stunted bushy growth, and reduced fruit set.',
    'Control whiteflies with sticky traps and netting; remove infected plants immediately; grow resistant hybrids',
    'Viral',
  ],
  'tomato tomato mosaic virus': [
    'High',
    'Light and dark green mottled mosaic pattern on leaves with curling and fern-like distortion.',
    'Wash hands and tools with soap or milk solution; avoid tobacco near plants; remove infected plants',
    'Viral',
  ],
  healthy: [
    'None',
    'The CNN model detects healthy leaf coloration, intact venation, and no visible lesions or spots.',
    'Keep checking weekly; irrigate at the base; maintain balanced soil nutrition and airflow',
    'Healthy',
  ],
};

export function normalizeLabel(label) {
  return String(label || '')
    .replace(/\(.*?\)/g, '')
    .replace(/_+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
}

export function prettyLabel(label) {
  const p = String(label || '')
    .replace(/\(.*?\)/g, '')
    .split(/_{2,}/)
    .pop()
    .replace(/_+/g, ' ')
    .trim();
  return p.charAt(0).toUpperCase() + p.slice(1);
}

/**
 * Look up KB entry from crop + disease or raw label.
 */
export function lookupDiseaseKB(labelOrCrop, diseaseName) {
  if (/healthy/i.test(labelOrCrop) || /healthy/i.test(diseaseName || '')) {
    return DISEASE_KB.healthy;
  }
  const direct = normalizeLabel(labelOrCrop);
  if (DISEASE_KB[direct]) return DISEASE_KB[direct];

  if (diseaseName) {
    const combined = normalizeLabel(`${labelOrCrop} ${diseaseName}`);
    if (DISEASE_KB[combined]) return DISEASE_KB[combined];
    const cleanCrop = normalizeLabel(labelOrCrop).split(',')[0].trim();
    const combinedShort = normalizeLabel(`${cleanCrop} ${diseaseName}`);
    if (DISEASE_KB[combinedShort]) return DISEASE_KB[combinedShort];
  }
  return null;
}

/**
 * Send an image file to the FastAPI CNN backend (/api/predict -> backend /predict).
 * Supports both FastAPI backend format ({ filename, prediction: { crop, disease, is_healthy, confidence (0-100), top_predictions } })
 * and flat format ({ label, confidence (0-1) }).
 */
export async function predict(file, crop) {
  const formData = new FormData();
  formData.append('file', file);
  if (crop) formData.append('crop', crop);

  const res = await fetch(`${API}/predict`, { method: 'POST', body: formData });
  if (!res.ok) {
    throw new Error(`HTTP ${res.status}`);
  }

  const json = await res.json();

  if (json && json.prediction && typeof json.prediction === 'object') {
    const p = json.prediction;
    const rawConf = typeof p.confidence === 'number' ? p.confidence : 0;
    const conf = rawConf > 1 ? rawConf / 100 : rawConf;
    const rawLabel =
      (p.top_predictions && p.top_predictions[0] && p.top_predictions[0].raw_label) ||
      `${p.crop || crop}___${p.disease || ''}`;
    return {
      crop: p.crop || crop,
      disease: p.disease || 'Unknown',
      healthy: Boolean(p.is_healthy),
      confidence: Math.max(0, Math.min(1, conf)),
      rawLabel,
      diseaseProfile: json.disease_profile || null,
      topPredictions: (p.top_predictions || []).map((tp) => ({
        crop: tp.crop,
        disease: tp.disease,
        confidence: tp.confidence > 1 ? tp.confidence / 100 : tp.confidence,
        rawLabel: tp.raw_label,
      })),
    };
  }

  if (typeof json.label === 'string' && typeof json.confidence === 'number') {
    const healthy = /healthy/i.test(json.label);
    return {
      crop: crop || 'Plant',
      disease: healthy ? 'Healthy' : prettyLabel(json.label),
      healthy,
      confidence: json.confidence > 1 ? json.confidence / 100 : json.confidence,
      rawLabel: json.label,
      topPredictions: [],
    };
  }

  throw new Error('Unexpected response from CNN endpoint');
}
