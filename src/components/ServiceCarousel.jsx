import React from 'react';
import { Languages, Mic, FileText, Layers, CloudLightning, TrendingUp } from 'lucide-react';

export default function ServiceCarousel({ onSelectService }) {
  const services = [
    {
      id: 'translator',
      title: 'Content Translator',
      icon: Languages,
      color: '#7B1FA2',
      bgColor: 'rgba(123, 31, 162, 0.08)'
    },
    {
      id: 'voice',
      title: 'Real-Time Voice Bridge',
      icon: Mic,
      color: '#FF0D1A',
      bgColor: 'rgba(255, 13, 26, 0.08)'
    },
    {
      id: 'worksheet',
      title: 'Worksheet Generator',
      icon: FileText,
      color: '#3F51B5',
      bgColor: 'rgba(63, 81, 181, 0.08)'
    },
    {
      id: 'flashcard',
      title: 'Flashcard Creator',
      icon: Layers,
      color: '#FF8A00',
      bgColor: 'rgba(255, 138, 0, 0.08)'
    },
    {
      id: 'offline',
      title: 'Offline-First Engine',
      icon: CloudLightning,
      color: '#00C853',
      bgColor: 'rgba(0, 200, 83, 0.08)'
    },
    {
      id: 'outcomes',
      title: 'Learning Outcomes',
      icon: TrendingUp,
      color: '#E91E63',
      bgColor: 'rgba(233, 30, 99, 0.08)'
    }
  ];

  return (
    <section className="services-grid-section">
      <div className="services-grid-container">
        {services.map((service) => {
          const IconComponent = service.icon;
          return (
            <div 
              key={service.id} 
              className="service-grid-card press-effect"
              onClick={() => onSelectService(service.id)}
            >
              <div 
                className="service-grid-icon-circle" 
                style={{ backgroundColor: service.bgColor, color: service.color }}
              >
                <IconComponent size={20} strokeWidth={2.5} />
              </div>
              <span className="service-grid-label">{service.title}</span>
            </div>
          );
        })}
      </div>

      <style>{`
        .services-grid-section {
          padding: 18px 0;
          background-color: var(--color-white);
          border-bottom: 1px solid var(--color-border-light);
        }

        .services-grid-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          padding: 0 16px;
        }

        .service-grid-card {
          background-color: var(--color-white);
          border-radius: var(--radius-md);
          border: 1px solid rgba(224, 230, 240, 0.8);
          padding: 14px 6px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 8px;
          box-shadow: 0 4px 12px rgba(10, 25, 49, 0.02);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .service-grid-card:hover {
          border-color: var(--color-secondary);
          transform: translateY(-1px);
          box-shadow: 0 6px 16px rgba(10, 25, 49, 0.06);
        }

        .service-grid-card:active {
          transform: scale(0.96);
        }

        .service-grid-icon-circle {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform var(--transition-fast);
        }

        .service-grid-card:hover .service-grid-icon-circle {
          transform: scale(1.05);
        }

        .service-grid-label {
          font-family: 'Outfit', sans-serif;
          font-size: 10px;
          font-weight: 700;
          color: var(--color-primary);
          line-height: 1.25;
          max-width: 90px;
          word-wrap: break-word;
        }
      `}</style>
    </section>
  );
}
