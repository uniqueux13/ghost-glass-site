import { useState } from 'react'
import { Download, Play, Shield, Globe, Zap } from 'lucide-react'

function App() {
  const [lensActive, setLensActive] = useState(false)

  if (lensActive) {
    document.body.classList.add('lens-active')
  } else {
    document.body.classList.remove('lens-active')
  }

  return (
    <div className="app-container">

      {/* --- THE LENS OVERLAY --- */}
      {lensActive && <div className="lens-overlay"></div>}

      {/* --- NAVBAR --- */}
      <nav className="navbar">
        <div className="nav-brand">
          {/* 💎 CUSTOM LOGO HERE */}
          <img src="/icon128.png" alt="Ghost Glass" className="nav-logo" />
          <span>Ghost Glass</span>
        </div>
        <div className="nav-version">v1.0.0</div>
      </nav>

      {/* --- HERO SECTION --- */}
      <div className="hero-container">

        {/* HERO TITLE + GHOST MARKER */}
        <div className={`hero-content ${lensActive ? 'ghost-spotlight' : ''}`}>
          <h1>The Internet's <span className="neon-text">Z-Axis</span>.</h1>

          {lensActive && (
            <div className="ghost-marker title-marker">
              {/* 💎 CUSTOM GHOST ICON */}
              <img src="/icon128.png" className="ghost-icon-img" />
              <div className="ghost-tooltip">
                <div style={{ marginBottom: '8px' }}>This is the hidden layer.</div>
                <div className="tooltip-meta">
                  <span>User_882a</span>
                  <span>👍 42</span>
                </div>
              </div>
            </div>
          )}
        </div>

        <p className="hero-subtext">
          Turn the read-only web into a multiplayer canvas. Leave persistent AR notes on any website for others to find.
        </p>

        {/* CTA BUTTONS */}
        <div className="cta-group">

          {/* DOWNLOAD BUTTON + GHOST MARKER */}
          <div style={{ position: 'relative' }} className={lensActive ? 'ghost-spotlight' : ''}>
            <button className="btn-primary">
              <Download size={20} /> Add to Chrome
            </button>

            {lensActive && (
              <div className="ghost-marker btn-marker">
                <img src="/icon128.png" className="ghost-icon-img" />
                <div className="ghost-tooltip">
                  <div style={{ marginBottom: '8px' }}>Join the protocol. It's safe.</div>
                  <div className="tooltip-meta">
                    <span>User_Dev</span>
                    <span>👍 99</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <button
            className={`btn-glass ${lensActive ? 'active' : ''}`}
            onClick={() => setLensActive(!lensActive)}
          >
            {lensActive ? 'Deactivate Lens' : 'Simulate Lens'} <Play size={20} />
          </button>
        </div>
      </div>

      {/* --- FEATURE GRID --- */}
      <div className="feature-grid">
        <FeatureCard
          icon={<Globe color="#00ff00" />}
          title="Universal Layer"
          desc="Works on any URL. Leave tips on products, warnings on news articles, or easter eggs."
        />
        <FeatureCard
          icon={<Zap color="#00ff00" />}
          title="Anonymous ID"
          desc="No sign-up required. You are assigned a cryptographic ID. Your data is yours."
        />
        <FeatureCard
          icon={<Shield color="#00ff00" />}
          title="Community Moderated"
          desc="The signal is curated by the community. Mute users locally or flag harmful content."
        />
      </div>

    </div>
  )
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="feature-card">
      <div style={{ marginBottom: '15px' }}>{icon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  )
}

export default App