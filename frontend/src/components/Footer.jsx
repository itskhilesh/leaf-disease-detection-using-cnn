import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="app-footer glass">
      <div>
        <strong>🌱 AgroVision AI</strong> · CNN Plant Disease Detection &amp; IoT Field Intelligence · v2.0
      </div>
      <div className="app-footer-links">
        <Link to="/detect">Detect Disease</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/soil">Soil Map</Link>
        <Link to="/iot">IoT Sensors</Link>
        <Link to="/profile">Reports</Link>
      </div>
    </footer>
  );
}
