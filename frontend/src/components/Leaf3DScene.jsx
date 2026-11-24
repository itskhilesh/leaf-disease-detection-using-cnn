import { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import '../styles/three-scene.css';

const LEAF_MODES = {
  healthy: {
    label: '🌿 Healthy Leaf',
    badge: 'Healthy Chlorophyll · Normal Venation',
    tint: '#ffffff',
    spotColor: '#78350f',
    spotCount: 0,
  },
  earlyBlight: {
    label: '🍂 Early Blight',
    badge: 'Alternaria Concentric Ring Lesions',
    tint: '#fde68a',
    spotColor: '#78350f',
    spotCount: 7,
  },
  lateBlight: {
    label: '⚠️ Late Blight',
    badge: 'Phytophthora Water-Soaked Patches',
    tint: '#d9f99d',
    spotColor: '#451a03',
    spotCount: 11,
  },
};

function SculptedLeafImage({ mode, autoRotate }) {
  const groupRef = useRef(null);
  const texture = useTexture('/media/leaf-3d.png');
  const cfg = LEAF_MODES[mode];

  useMemo(() => {
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.anisotropy = 4;
  }, [texture]);

  // Curved 3D geometry so the leaf image bends naturally in 3D space
  const { curvedGeo, spots } = useMemo(() => {
    const geo = new THREE.PlaneGeometry(3.2, 3.2, 20, 20);
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      // Organic botanical arch along length & midrib cup across width
      const cup = -0.14 * x * x;
      const arch = 0.16 * Math.cos(y * 0.85) - 0.08 * y;
      pos.setZ(i, cup + arch);
    }
    geo.computeVertexNormals();

    const lesionSpots = Array.from({ length: 11 }, (_, i) => {
      const angle = i * 2.39996;
      const rad = 0.18 + (i % 4) * 0.15;
      const x = Math.cos(angle) * rad * 0.72;
      const y = Math.sin(angle) * rad * 0.92;
      const z = -0.14 * x * x + 0.16 * Math.cos(y * 0.85) - 0.08 * y + 0.04;
      return {
        pos: [x, y, z],
        scale: 0.065 + (i % 3) * 0.04,
      };
    });

    return { curvedGeo: geo, spots: lesionSpots };
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    if (autoRotate) {
      groupRef.current.rotation.y += delta * 0.42;
    }
    groupRef.current.position.y = Math.sin(t * 1.4) * 0.07;
    groupRef.current.rotation.x = Math.sin(t * 0.8) * 0.08;
  });

  return (
    <group ref={groupRef}>
      {/* Front sculpted textured leaf */}
      <mesh geometry={curvedGeo}>
        <meshStandardMaterial
          map={texture}
          color={cfg.tint}
          transparent
          alphaTest={0.08}
          side={THREE.DoubleSide}
          roughness={0.42}
          metalness={0.06}
        />
      </mesh>

      {/* Subtle depth backing layer for 3D edge thickness */}
      <mesh geometry={curvedGeo} position={[0, 0, -0.035]}>
        <meshStandardMaterial
          map={texture}
          color="#14532d"
          transparent
          alphaTest={0.12}
          side={THREE.DoubleSide}
          roughness={0.75}
        />
      </mesh>

      {/* 3D Blight Lesion Markers */}
      {spots.slice(0, cfg.spotCount).map((s, idx) => (
        <mesh
          key={idx}
          position={s.pos}
          scale={[s.scale, s.scale * 1.15, 0.35]}
        >
          <sphereGeometry args={[1, 10, 10]} />
          <meshStandardMaterial color={cfg.spotColor} roughness={0.85} />
        </mesh>
      ))}
    </group>
  );
}

export default function Leaf3DScene() {
  const [mode, setMode] = useState('healthy');
  const [autoRotate, setAutoRotate] = useState(true);
  const [inView, setInView] = useState(true);
  const wrapRef = useRef(null);
  const cfg = LEAF_MODES[mode];

  useEffect(() => {
    const el = wrapRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const obs = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="glass three-section rise" aria-label="Interactive 3D leaf model">
      <div className="three-info">
        <span className="badge badge-live" style={{ alignSelf: 'flex-start' }}>
          ✨ Interactive 3D Specimen
        </span>
        <h2 className="section-heading" style={{ marginBottom: 0 }}>
          Inspect Leaf Pathology in 3D
        </h2>
        <p className="muted-text" style={{ margin: 0, fontSize: '0.94rem' }}>
          Drag to orbit 360°, scroll to zoom, and toggle between the healthy leaf
          specimen and simulated blight symptoms across the curved 3D blade.
        </p>

        <div className="three-controls-list">
          {Object.entries(LEAF_MODES).map(([key, item]) => (
            <button
              key={key}
              type="button"
              onClick={() => setMode(key)}
              className={`three-mode-btn${mode === key ? ' is-active' : ''}`}
            >
              {item.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setAutoRotate((v) => !v)}
            className="three-mode-btn"
          >
            {autoRotate ? '⏸ Pause Spin' : '▶ Auto Spin'}
          </button>
        </div>
      </div>

      <div ref={wrapRef} className="three-canvas-wrap">
        <span className="three-overlay-badge">{cfg.badge}</span>
        <span className="three-overlay-hint">🖱️ Drag to rotate · Scroll to zoom</span>

        <Suspense fallback={<div className="three-loading">Loading 3D Leaf…</div>}>
          <Canvas
            frameloop={inView ? 'always' : 'demand'}
            camera={{ position: [0, 0.1, 4.1], fov: 42 }}
            dpr={[1, 1.5]}
            gl={{ antialias: true, powerPreference: 'high-performance' }}
          >
            <ambientLight intensity={1.1} />
            <directionalLight position={[4, 5, 5]} intensity={1.55} color="#fffbeb" />
            <directionalLight position={[-4, -2, -3]} intensity={0.7} color="#6ee7b7" />

            <SculptedLeafImage mode={mode} autoRotate={autoRotate} />

            <OrbitControls
              enablePan={false}
              enableDamping
              dampingFactor={0.08}
              minDistance={2.4}
              maxDistance={6.5}
            />
          </Canvas>
        </Suspense>
      </div>
    </section>
  );
}
