import { useState } from 'react';
import { REGIONS } from '../utils/soilData';
import { t } from '../utils/translations';
import '../styles/reports.css';

export default function Reports({ lang, loc, history, sensors }) {
  const [profile, setProfile] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('agro-profile')) || {};
    } catch (_e) {
      return {};
    }
  });
  const [report, setReport] = useState('');

  const updateProfile = (key, val) => {
    const next = { ...profile, [key]: val };
    setProfile(next);
    try {
      localStorage.setItem('agro-profile', JSON.stringify(next));
    } catch (_e) {
      // ignore storage quota errors
    }
  };

  const generateReport = () => {
    const region = loc.ri != null ? REGIONS[loc.ri] : null;
    const avg = (k) =>
      (
        sensors.readings.reduce((sum, item) => sum + item[k], 0) /
        sensors.readings.length
      ).toFixed(1);

    const lines = [
      'AGROVISION AI FARM REPORT',
      `Generated: ${new Date().toLocaleString()}`,
      '',
      'FARMER',
      `Name: ${profile.name || '-'} | Farm size: ${profile.acres || '-'} acres | Crops: ${profile.crops || '-'}`,
      '',
      'LOCATION',
      `Source: ${loc.src || 'not set'}${
        loc.ll ? ` | ${loc.ll.map((n) => n.toFixed(4)).join(', ')}` : ''
      }${
        loc.state
          ? ` | ${[loc.village, loc.district, loc.state, loc.pin]
              .filter(Boolean)
              .join(', ')}`
          : ''
      }`,
      '',
      'SOIL (ESTIMATED REGIONAL DATA, NOT A FIELD MEASUREMENT)',
      region ? `${region.name}: ${region.soilType}; typical pH ${region.ph}` : 'Not set',
      '',
      `SENSORS (${sensors.live ? 'LIVE' : 'DEMO DATA, NOT REAL'})`,
      `Moisture avg ${avg('m')}% | Temp avg ${avg('t')} C | Humidity avg ${avg('h')}% | pH avg ${avg('ph')}`,
      '',
      'DISEASE SCANS',
      ...(history.length
        ? history.map(
            (h) => `${h.when} | ${h.crop} | ${h.name} | ${Math.round(h.conf * 100)}%`
          )
        : ['No scans yet']),
    ];

    setReport(lines.join('\n'));
  };

  const downloadReport = () => {
    if (!report) return;
    const blob = new Blob([report], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'agrovision-report.txt';
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  return (
    <div className="reports-stack rise">
      <h1 className="page-title">{t('profile', lang)}</h1>

      <div className="reports-grid">
        <article className="glass card-surface">
          <h2 className="card-subtitle">Farmer &amp; farm details</h2>
          <div className="reports-form-fields">
            {[
              ['name', 'Name'],
              ['acres', 'Farm size (acres)'],
              ['crops', 'Main crops'],
            ].map(([key, label]) => (
              <label key={key} className="field-label">
                {label}
                <input
                  className="field-input"
                  value={profile[key] || ''}
                  onChange={(e) => updateProfile(key, e.target.value)}
                />
              </label>
            ))}
          </div>
          <p className="soft-text" style={{ fontSize: '0.78rem', margin: '0.75rem 0 0' }}>
            Saved locally in this browser.
          </p>
        </article>

        <article className="glass card-surface">
          <h2 className="card-subtitle">Detection history</h2>
          {history.length > 0 ? (
            <ul className="history-list">
              {history.map((item, idx) => (
                <li key={idx} className="history-row">
                  <span>
                    {item.crop}: <strong>{item.name}</strong> ({Math.round(item.conf * 100)}%)
                  </span>
                  <span className="history-date">{item.when}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="soft-text" style={{ fontSize: '0.9rem', margin: '0.5rem 0 0' }}>
              No scans yet. Real CNN model results are recorded here.
            </p>
          )}

          <div className="reports-actions">
            <button type="button" onClick={generateReport} className="btn btn-primary">
              Create report
            </button>
            {report && (
              <button type="button" onClick={downloadReport} className="btn btn-outline">
                Download .txt
              </button>
            )}
          </div>
        </article>
      </div>

      {report && (
        <article className="glass card-surface">
          <pre className="report-preview-pre">{report}</pre>
        </article>
      )}
    </div>
  );
}
