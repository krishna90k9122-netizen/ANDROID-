import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function HeroSection({ onDiscoverMore }) {
  return (
    <section className="hero-section animate-fade-in-up">
      {/* Content Container (sitting in front of the background image) */}
      <div className="hero-content">
        <div className="badge-ai-hero">
          <Sparkles size={10} color="white" />
          <span>AI-Powered</span>
        </div>

        <h1 className="hero-title-main">
          AI-Powered Vernacular Education for <span className="text-highlight-red">Every Child.</span>
        </h1>

        <p className="hero-desc-main">
          Bridging the language gap by enabling teachers to teach, communicate and assess in tribal languages.
        </p>

        <button className="btn-hero-cta press-effect" onClick={onDiscoverMore}>
          <span>Discover More</span>
          <div className="cta-arrow-circle">
            <ArrowRight size={12} color="#FF334B" strokeWidth={3.5} />
          </div>
        </button>
      </div>

      {/* Bottom Features Benefits Bar */}
      <div className="hero-benefits-bar">
        <div className="benefit-item">
          <span className="benefit-icon">⚡</span>
          <span>AI-Driven</span>
        </div>
        <div className="benefit-divider">|</div>
        <div className="benefit-item">
          <span className="benefit-icon">☁️</span>
          <span>Offline-First</span>
        </div>
        <div className="benefit-divider">|</div>
        <div className="benefit-item">
          <span className="benefit-icon">👥</span>
          <span>Teacher Friendly</span>
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          background-image: url('/assets/hero_bg.png');
          background-size: cover;
          background-position: 72% center; /* Centers the schoolgirl holding the tablet beautifully */
          background-repeat: no-repeat;
          padding: 24px 20px 64px 20px; /* Large bottom padding to accommodate benefits bar */
          overflow: hidden;
          display: flex;
          min-height: 290px;
          border-bottom: 1px solid var(--color-border-light);
        }

        .hero-content {
          width: 58%; /* Sized to allow layout visibility on the right */
          display: flex;
          flex-direction: column;
          gap: 10px;
          z-index: 2;
          position: relative;
          text-shadow: 0 1px 4px rgba(0,0,0,0.35); /* Soft shadow for maximum text readability */
        }

        .badge-ai-hero {
          background: linear-gradient(135deg, #FF334B 0%, #7B1FA2 100%);
          border: 0.5px solid rgba(255, 255, 255, 0.35);
          color: var(--color-white);
          padding: 4px 10px;
          border-radius: 50px;
          font-family: 'Outfit', sans-serif;
          font-size: 8.5px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          align-self: flex-start;
          box-shadow: 0 4px 8px rgba(0,0,0,0.15);
        }

        .hero-title-main {
          font-family: 'Outfit', sans-serif;
          font-size: 23px;
          font-weight: 900;
          color: var(--color-white);
          line-height: 1.2;
          letter-spacing: -0.5px;
        }

        .text-highlight-red {
          color: #FF334B; /* Exact matching hot pinkish-red from the mockup */
          font-weight: 900;
        }

        .hero-desc-main {
          font-family: 'Outfit', sans-serif;
          font-size: 11px;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.45;
          font-weight: 500;
          letter-spacing: 0.1px;
        }

        .btn-hero-cta {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #FF334B; /* Matching vibrant red button from mockup */
          color: var(--color-white);
          border: none;
          padding: 8px 16px;
          border-radius: 50px;
          font-family: 'Outfit', sans-serif;
          font-weight: 800;
          font-size: 11px;
          cursor: pointer;
          align-self: flex-start;
          box-shadow: 0 4px 12px rgba(255, 51, 75, 0.35);
          transition: all var(--transition-fast);
          margin-top: 4px;
        }

        .btn-hero-cta:hover {
          background-color: #E6223A;
          transform: translateY(-1px);
          box-shadow: 0 6px 16px rgba(255, 51, 75, 0.45);
        }

        .cta-arrow-circle {
          width: 20px;
          height: 20px;
          background-color: var(--color-white);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Bottom Benefits Bar */
        .hero-benefits-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 40px;
          background-color: rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-top: 0.5px solid rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          z-index: 3;
        }

        .benefit-item {
          display: flex;
          align-items: center;
          gap: 4px;
          color: var(--color-white);
          font-size: 10px;
          font-weight: 600;
        }

        .benefit-icon {
          font-size: 11px;
        }

        .benefit-divider {
          color: rgba(255, 255, 255, 0.25);
          font-size: 10px;
        }
      `}</style>
    </section>
  );
}
