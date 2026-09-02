import React from 'react';
import { Sparkles } from 'lucide-react';
import heroBgExactHd from '../assets/hero_bg_exact_hd.jpg';

export default function HeroSection() {
  return (
    <section 
      className="hero-section animate-fade-in-up"
      style={{ backgroundImage: `url(${heroBgExactHd})` }}
    >
      {/* Content Container (sitting in front of the background image) */}
      <div className="hero-content">
        <div className="badge-ai-hero">
          <Sparkles size={10} color="white" />
          <span>AI-Powered</span>
        </div>

        <h1 className="hero-title-main">
          AI-Powered Vernacular Education for <span className="text-highlight-red">Every Child.</span>
        </h1>
        <div className="hindi-msg-container">
          <p className="hindi-line">भाषा अलग हो सकती है... <span className="hindi-word-highlight">सपने नहीं।</span></p>
          <p className="hindi-line">शब्द अलग हो सकते हैं... <span className="hindi-word-highlight">समझ नहीं।</span></p>
          <p className="hindi-line-hero">
            और इसी समझ की दूरी को मिटाने का नाम है... <span className="text-highlight-brand-vs">VaaniSetu!</span>
          </p>
        </div>
      </div>

      {/* Bottom Features Benefits Bar */}
      <div className="hero-benefits-bar">
        <div className="benefit-item">
          <span className="benefit-icon">☁️</span>
          <span>Offline-First</span>
        </div>
        <div className="benefit-divider">|</div>
        <div className="benefit-item">
          <span className="benefit-icon">🌐</span>
          <span>Multi-Language</span>
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
          background-size: cover;
          background-position: right center; /* Focus on the schoolgirl on the right */
          background-repeat: no-repeat;
          background-color: #6a1b9a;
          padding: 24px 20px 64px 20px; /* Large bottom padding to accommodate benefits bar */
          overflow: hidden;
          display: flex;
          min-height: 290px;
          border-bottom: 1px solid var(--color-border-light);
          image-rendering: -webkit-optimize-contrast;
        }

        .hero-content {
          width: 60%; /* Sized to allow layout visibility on the right */
          display: flex;
          flex-direction: column;
          gap: 8px;
          z-index: 2;
          position: relative;
        }

        .badge-ai-hero {
          background: linear-gradient(135deg, #FF334B 0%, #7B1FA2 100%);
          border: 0.5px solid rgba(255, 255, 255, 0.4);
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
          box-shadow: 0 4px 10px rgba(0,0,0,0.3);
        }

        .hero-title-main {
          font-family: 'Outfit', sans-serif;
          font-size: 21px;
          font-weight: 900;
          color: var(--color-white);
          line-height: 1.2;
          letter-spacing: -0.4px;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.8), 0 1px 4px rgba(0, 0, 0, 0.9);
        }

        .text-highlight-red {
          color: #FF2E4D; /* Vibrant contrasting red */
          font-weight: 900;
          text-shadow: 0 0 12px rgba(255, 46, 77, 0.5), 0 2px 6px rgba(0, 0, 0, 0.9);
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .hindi-msg-container {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-top: 8px;
          animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          font-family: 'Poppins', 'Outfit', sans-serif;
        }

        .hindi-line {
          font-family: 'Poppins', sans-serif;
          font-size: 11px;
          color: rgba(255, 255, 255, 0.95);
          line-height: 1.4;
          font-weight: 500;
          letter-spacing: 0.2px;
          margin: 0;
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
        }

        .hindi-word-highlight {
          color: #FF8A00; /* Original clean brand orange highlight */
          font-weight: 600;
        }

        .hindi-line-hero {
          font-family: 'Poppins', sans-serif;
          font-size: 12.5px;
          color: var(--color-white);
          line-height: 1.4;
          font-weight: 700;
          margin-top: 6px;
          margin-bottom: 0;
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
        }

        .text-highlight-brand-vs {
          background: linear-gradient(135deg, #FF334B 0%, #FF8A00 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 800;
          display: inline-block;
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
