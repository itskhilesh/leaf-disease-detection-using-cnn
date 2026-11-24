import { useEffect, useState } from 'react';
import { DISEASE_KB, lookupDiseaseKB, predict } from '../utils/diseaseKB';
import { t } from '../utils/translations';
import AlertBanner from '../components/AlertBanner';
import '../styles/detect.css';

const CROPS = [
  'Tomato',
  'Potato',
  'Corn (Maize)',
  'Apple',
  'Grape',
  'Bell Pepper',
  'Peach',
  'Cherry',
  'Strawberry',
  'Squash',
  'Orange',
  'Soybean',
  'Blueberry',
  'Raspberry',
];

export default function DetectDisease({ lang, setHistory, addActivity }) {
  const [crop, setCrop] = useState('Tomato');
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [status, setStatus] = useState('idle');
  const [result, setResult] = useState(null);
  const [err, setErr] = useState('');
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  const handleFile = (chosen) => {
    if (!chosen) return;
    if (!chosen.type.startsWith('image/')) {
      setErr('Please choose an image file (JPG or PNG).');
      return;
    }
    if (chosen.size > 10 * 1024 * 1024) {
      setErr('That image is over 10 MB. Choose a smaller photo.');
      return;
    }
    setErr('');
    setResult(null);
    setStatus('idle');
    setFile(chosen);
    setPreviewUrl((prev) => {
      if (prev) URL.revokeObjectURL(prev);
      return URL.createObjectURL(chosen);
    });
  };

  const onFileInput = (e) => {
    const f = e.target.files?.[0];
    e.target.value = '';
    handleFile(f);
  };

  const runAnalysis = async () => {
    if (!file) return;
    setStatus('loading');
    setErr('');
    setResult(null);
    try {
      const pred = await predict(file, crop);
      const kb = lookupDiseaseKB(pred.rawLabel || pred.crop, pred.disease);
      const entry = {
        crop: pred.crop || crop,
        name: pred.healthy ? 'Healthy' : pred.disease,
        healthy: pred.healthy,
        conf: pred.confidence,
        kb,
        topPredictions: pred.topPredictions || [],
      };
      setResult(entry);
      setStatus('ok');
      setHistory((prev) => [
        {
          when: new Date().toLocaleString(),
          crop: entry.crop,
          name: entry.name,
          conf: entry.conf,
          healthy: entry.healthy,
        },
        ...prev,
      ]);
      addActivity(`Scan: ${entry.crop}, ${entry.name}`);
    } catch (_e) {
      setStatus('err');
      setErr(
        'The FastAPI CNN model service is not reachable at /api/predict, so no prediction was made. Start the backend server (uvicorn main:app --port 8000) to run real MobileNetV2 inference.'
      );
    }
  };

  const previewSample = () => {
    setResult({
      crop: 'Tomato',
      name: 'Late blight',
      healthy: false,
      conf: 0.87,
      kb: DISEASE_KB['tomato late blight'],
      topPredictions: [
        { crop: 'Tomato', disease: 'Late blight', confidence: 0.87 },
        { crop: 'Tomato', disease: 'Early blight', confidence: 0.09 },
        { crop: 'Tomato', disease: 'Target Spot', confidence: 0.04 },
      ],
      demo: true,
    });
    setStatus('ok');
  };

  return (
    <div className="detect-stack rise">
      <h1 className="page-title">{t('detect', lang)}</h1>

      <div className="detect-grid">
        <article className="glass card-surface detect-upload-card">
          <label className="field-label">
            {t('crop', lang)}
            <select
              className="field-input"
              value={crop}
              onChange={(e) => setCrop(e.target.value)}
            >
              {CROPS.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </label>

          <div className="detect-actions-row">
            <label className="btn btn-primary">
              <input
                type="file"
                accept="image/*"
                className="sr-only-input"
                onChange={onFileInput}
              />
              <span>🖼️ {t('upload', lang)}</span>
            </label>

            <label className="btn btn-outline">
              <input
                type="file"
                accept="image/*"
                capture="environment"
                className="sr-only-input"
                onChange={onFileInput}
              />
              <span>📷 {t('camera', lang)}</span>
            </label>
          </div>

          {previewUrl ? (
            <div className="detect-preview-box">
              <img src={previewUrl} alt="Selected leaf" className="detect-preview-img" />
            </div>
          ) : (
            <div
              className={`detect-dropzone${dragging ? ' is-dragging' : ''}`}
              onDragOver={(e) => {
                e.preventDefault();
                setDragging(true);
              }}
              onDragLeave={() => setDragging(false)}
              onDrop={(e) => {
                e.preventDefault();
                setDragging(false);
                handleFile(e.dataTransfer.files?.[0]);
              }}
            >
              Drag &amp; drop a leaf photo here, or use the buttons above.
              <br />
              <span className="soft-text" style={{ fontSize: '0.82rem' }}>
                Best results: one well-lit leaf against a plain background.
              </span>
            </div>
          )}

          <button
            type="button"
            onClick={runAnalysis}
            disabled={!file || status === 'loading'}
            className="btn btn-lime"
            style={{ width: '100%' }}
          >
            {status === 'loading' ? 'Analysing with MobileNetV2…' : t('analyse', lang)}
          </button>
        </article>

        <div className="detect-result-col">
          {err && <AlertBanner kind="warn">{err}</AlertBanner>}

          {status === 'err' && (
            <button type="button" onClick={previewSample} className="demo-preview-link">
              Preview the result layout with sample data
            </button>
          )}

          {result ? (
            <article className="glass card-surface" style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
              {result.demo && (
                <AlertBanner kind="warn">
                  <strong>{t('demo', lang)}:</strong> sample layout only, not a live CNN prediction.
                </AlertBanner>
              )}

              <div className="detect-result-header">
                <div>
                  <p className="detect-result-crop">{result.crop}</p>
                  <h2
                    className={`detect-result-title ${
                      result.healthy ? 'health-val-ok' : 'health-val-bad'
                    }`}
                  >
                    {result.name}
                  </h2>
                </div>
                <span className={`badge ${result.healthy ? 'badge-live' : 'badge-danger'}`}>
                  {result.healthy ? 'Healthy' : 'Infected'}
                </span>
              </div>

              <div className="confidence-bar-wrap">
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem' }}>
                  <span>Model confidence</span>
                  <strong>{Math.round(result.conf * 100)}%</strong>
                </div>
                <div className="confidence-track">
                  <div
                    className={`confidence-fill${result.healthy ? '' : ' confidence-fill--bad'}`}
                    style={{ width: `${Math.round(result.conf * 100)}%` }}
                  />
                </div>
              </div>

              {result.conf < 0.6 && (
                <AlertBanner kind="warn">
                  Low confidence. Retake the photo in brighter light or consult an agriculture officer.
                </AlertBanner>
              )}

              {result.kb ? (
                <div className="detect-kb-section">
                  <p>
                    <strong>Severity:</strong> {result.kb[0]}
                    {result.kb[3] ? ` · ${result.kb[3]}` : ''}
                  </p>
                  <p>
                    <strong>Symptoms:</strong> {result.kb[1]}
                  </p>
                  <div>
                    <strong>Prevention &amp; treatment</strong>
                    <ul className="detect-kb-list">
                      {result.kb[2].split('; ').map((step) => (
                        <li key={step}>{step}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <AlertBanner kind="info">
                  No local treatment note is stored for this class yet. Ask your local agriculture officer.
                </AlertBanner>
              )}

              {result.topPredictions && result.topPredictions.length > 1 && (
                <div className="detect-top-preds">
                  <strong style={{ fontSize: '0.82rem', color: 'var(--text-soft)' }}>
                    Top 3 CNN predictions
                  </strong>
                  {result.topPredictions.map((tp, i) => (
                    <div key={i} className="detect-top-pred-row">
                      <span>
                        {tp.crop} — {tp.disease}
                      </span>
                      <strong>{Math.round(tp.confidence * 100)}%</strong>
                    </div>
                  ))}
                </div>
              )}
            </article>
          ) : (
            status !== 'err' && (
              <article className="glass card-surface">
                <p className="muted-text" style={{ margin: 0, fontSize: '0.92rem' }}>
                  Detection results appear here with disease name, confidence score, severity,
                  symptoms, and prevention guidance from the MobileNetV2 model.
                </p>
              </article>
            )
          )}
        </div>
      </div>
    </div>
  );
}
