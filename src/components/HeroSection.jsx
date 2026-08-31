import React from 'react';
import { Sparkles } from 'lucide-react';

export default function HeroSection() {
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
          background-image: url('/assets/hero_bg.png');
          background-size: cover;
          background-position: right center; /* Focus on the schoolgirl on the right */
          background-repeat: no-repeat;
          background-color: #6a1b9a; /* Deep purple fallback matching the background to prevent any white edge leaks */
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
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.35);
        }

        .hindi-word-highlight {
          color: #FF8A00; /* Beautiful brand orange accent highlight */
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
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
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
