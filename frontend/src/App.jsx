import { Component, memo, useCallback, useEffect, useRef, useState } from 'react';
import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router-dom';
import useSensors from './hooks/useSensors';
import useWeather from './hooks/useWeather';
import Navbar, { TopHeader } from './components/Navbar';
import Footer from './components/Footer';
import AlertBanner from './components/AlertBanner';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import SoilIntelligence from './pages/SoilIntelligence';
import DetectDisease from './pages/DetectDisease';
import IoTMonitor from './pages/IoTMonitor';
import Reports from './pages/Reports';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '1.5rem' }}>
          <AlertBanner kind="bad">
            Something went wrong on this page.{' '}
            <Link
              to="/"
              onClick={() => this.setState({ hasError: false })}
              style={{ textDecoration: 'underline', fontWeight: 700 }}
            >
              Return home
            </Link>
            .
          </AlertBanner>
        </div>
      );
    }
    return this.props.children;
  }
}

function AmbientBackground() {
  return (
    <div className="bgfield" aria-hidden="true">
      <svg className="bgfield-hills" viewBox="0 0 1200 300" preserveAspectRatio="none">
        <path
          d="M0 120C200 40 400 160 600 100S1000 40 1200 110V300H0Z"
          fill="#34a56f"
          opacity="0.38"
        />
        <path
          d="M0 190C250 110 450 230 700 160S1050 120 1200 180V300H0Z"
          fill="#1f8a5b"
          opacity="0.52"
        />
        <path
          d="M0 250C300 190 500 280 800 230S1100 210 1200 250V300H0Z"
          fill="#0f5a3f"
          opacity="0.8"
        />
      </svg>
    </div>
  );
}

const HomeVideoBackground = memo(function HomeVideoBackground({ paused }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    if (paused) {
      vid.pause();
    } else {
      vid.play().catch(() => {});
    }
  }, [paused]);

  return (
    <div className="home-video-bg" aria-hidden="true">
      <video
        ref={videoRef}
        className="home-video-el"
        src="/media/crops-bg.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      <div className="home-video-scrim" />
    </div>
  );
});

function AppLayout() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const [lang, setLang] = useState('en');
  const [videoPaused, setVideoPaused] = useState(false);
  const [loc, setLoc] = useState({ ri: null, ll: null });
  const [history, setHistory] = useState([]);
  const [activity, setActivity] = useState([
    {
      t: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      m: 'Welcome to AgroVision AI. Sensor values are demo data until hardware connects.',
    },
  ]);

  const sensors = useSensors();
  const weather = useWeather(loc.ll);

  const addActivity = useCallback((msg) => {
    setActivity((prev) =>
      [
        {
          m: msg,
          t: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
        ...prev,
      ].slice(0, 6)
    );
  }, []);

  return (
    <div className="app-shell">
      {isHome ? <HomeVideoBackground paused={videoPaused} /> : <AmbientBackground />}

      <Navbar lang={lang} setLang={setLang} live={sensors.live} />

      <main className="app-main">
        <div className={isHome ? 'app-header--video' : undefined}>
          <TopHeader
            lang={lang}
            setLang={setLang}
            isHome={isHome}
            videoPaused={videoPaused}
            onToggleVideo={() => setVideoPaused((v) => !v)}
          />
        </div>

        <div className="app-content">
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<Home lang={lang} />} />
              <Route
                path="/dashboard"
                element={
                  <Dashboard
                    lang={lang}
                    history={history}
                    activity={activity}
                    sensors={sensors}
                    weather={weather}
                  />
                }
              />
              <Route
                path="/soil"
                element={
                  <SoilIntelligence
                    lang={lang}
                    loc={loc}
                    setLoc={setLoc}
                    sensors={sensors}
                    addActivity={addActivity}
                  />
                }
              />
              <Route
                path="/detect"
                element={
                  <DetectDisease
                    lang={lang}
                    setHistory={setHistory}
                    addActivity={addActivity}
                  />
                }
              />
              <Route
                path="/iot"
                element={<IoTMonitor lang={lang} sensors={sensors} />}
              />
              <Route
                path="/profile"
                element={
                  <Reports
                    lang={lang}
                    loc={loc}
                    history={history}
                    sensors={sensors}
                  />
                }
              />
            </Routes>
          </ErrorBoundary>

          <Footer />
        </div>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
