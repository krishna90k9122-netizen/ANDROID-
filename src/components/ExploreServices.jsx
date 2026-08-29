import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ExploreServices({ onSelectInitiative }) {
  const cards = [
    {
      id: 'platform',
      title: 'Our Platform',
      desc: 'Explore VaaniSetu tools and solutions.',
      color: '#7B1FA2',
      accentColor: 'rgba(123, 31, 162, 0.1)',
      btnBg: '#6200EE',
      bgPosition: '0% -24px' // Shifter up by 24px to crop out the printed header text
    },
    {
      id: 'resources',
      title: 'Teacher Resources',
      desc: 'Guides, training & support for teachers.',
      color: '#FF8A00',
      accentColor: 'rgba(255, 138, 0, 0.1)',
      btnBg: '#FF8A00',
      bgPosition: '50% -24px' // Shifter up by 24px to crop out the printed header text
    },
    {
      id: 'reports',
      title: 'Impact & Reports',
      desc: 'See how VaaniSetu is creating change.',
      color: '#0084FF',
      accentColor: 'rgba(0, 132, 255, 0.1)',
      btnBg: '#0084FF',
      bgPosition: '100% -24px' // Shifter up by 24px to crop out the printed header text
    }
  ];

  return (
    <section className="explore-section">
      <div className="section-header-explore">
        <h2>Explore Services & Initiatives</h2>
        <button className="view-all-btn press-effect" onClick={() => onSelectInitiative('all')}>
          <span>View All</span>
          <ArrowRight size={11} />
        </button>
      </div>

      <div className="scroll-x-container snap-scroll">
        {cards.map((card) => (
          <div 
            key={card.id} 
            className="scroll-x-card initiative-card press-effect"
            onClick={() => onSelectInitiative(card.id)}
          >
            {/* Cropped Illustration Header via Background Slicing */}
            <div 
              className="initiative-card-image-box"
              style={{
                backgroundImage: 'url(/assets/explore_services.png)',
                backgroundSize: '300% auto',
                backgroundPosition: card.bgPosition,
                backgroundRepeat: 'no-repeat'
              }}
            />
            
            {/* Content Bottom */}
            <div className="initiative-card-body">
              <h3 className="initiative-card-title">{card.title}</h3>
              <p className="initiative-card-desc">{card.desc}</p>
              
              <button 
                className="initiative-circle-btn" 
                style={{ backgroundColor: card.btnBg }}
                aria-label={`Go to ${card.title}`}
              >
                <ArrowRight size={14} color="white" strokeWidth={2.5} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .explore-section {
          padding: 20px 0;
          background-color: var(--color-bg-light);
          border-bottom: 1px solid var(--color-border-light);
        }

        .section-header-explore {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 16px 12px 16px;
        }

        .section-header-explore h2 {
          font-family: 'Outfit', sans-serif;
          font-size: 15px;
          font-weight: 800;
          color: var(--color-primary);
          letter-spacing: -0.3px;
        }

        .view-all-btn {
          background: none;
          border: none;
          display: flex;
          align-items: center;
          gap: 4px;
          color: var(--color-cta);
          font-family: 'Outfit', sans-serif;
          font-size: 10px;
          font-weight: 800;
          cursor: pointer;
          transition: transform var(--transition-fast);
        }

        .view-all-btn:hover {
          transform: translateX(2px);
        }

        .initiative-card {
          width: 215px;
          background-color: var(--color-white);
          border-radius: var(--radius-lg);
          overflow: hidden;
          border: 1px solid rgba(224, 230, 240, 0.8);
          box-shadow: 0 4px 14px rgba(10, 25, 49, 0.03);
          display: flex;
          flex-direction: column;
          cursor: pointer;
          position: relative;
        }

        .initiative-card:hover {
          box-shadow: 0 8px 20px rgba(10, 25, 49, 0.08);
          border-color: var(--color-secondary);
        }

        .initiative-card-image-box {
          height: 106px;
          width: 100%;
          overflow: hidden;
          background-color: #F8F9FA;
          border-bottom: 1px solid rgba(224, 230, 240, 0.6);
        }

        .initiative-card-body {
          padding: 12px 14px 16px 14px;
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .initiative-card-title {
          font-family: 'Outfit', sans-serif;
          font-size: 13.5px;
          font-weight: 800;
          color: var(--color-primary);
          letter-spacing: -0.2px;
        }

        .initiative-card-desc {
          font-family: 'Outfit', sans-serif;
          font-size: 10.5px;
          color: var(--color-text-muted);
          line-height: 1.4;
          padding-right: 36px; /* Prevent text overlap with bottom right button */
          height: 30px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          font-weight: 500;
        }

        .initiative-circle-btn {
          position: absolute;
          right: 14px;
          bottom: 14px;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
          transition: transform var(--transition-fast), box-shadow var(--transition-fast);
        }

        .initiative-card:hover .initiative-circle-btn {
          transform: scale(1.08);
          box-shadow: 0 6px 14px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </section>
  );
}
