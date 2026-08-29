  import React from 'react';
import { School, Clock, Users, MapPin } from 'lucide-react';

export default function StatsSection() {
  const stats = [
    {
      icon: School,
      number: '5,000+',
      label: 'Schools Supported',
      sub: 'Across rural India'
    },
    {
      icon: Clock,
      number: '< 3s',
      label: 'Latency Target',
      sub: 'Edge-AI translation'
    },
    {
      icon: Users,
      number: '17,826+',
      label: 'Training Pairs',
      sub: 'Tribal language corpus'
    },
    {
      icon: MapPin,
      number: '2025-26',
      label: 'Pilot Roadmap',
      sub: 'Impact validation'
    }
  ];

  return (
    <section className="stats-section">
      <div className="stats-gradient-box">
        <h2 className="stats-title">Empowering Communities</h2>
        <p className="stats-subtitle">Our impact at a glance</p>

        <div className="stats-grid">
          {stats.map((stat, index) => {
            const IconComp = stat.icon;
            return (
              <div key={index} className="stat-grid-item">
                <div className="stat-icon-badge">
                  <IconComp size={18} color="white" />
                </div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-sub">{stat.sub}</div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .stats-section {
          padding: 20px;
          background-color: var(--color-white);
          border-bottom: 1px solid var(--color-border-light);
        }

        .stats-gradient-box {
          background: var(--gradient-stats);
          border-radius: var(--radius-lg);
          padding: 24px 18px;
          color: var(--color-white);
          box-shadow: var(--shadow-lg);
          position: relative;
          overflow: hidden;
        }

        /* Subtle background glow graphics */
        .stats-gradient-box::after {
          content: '';
          position: absolute;
          width: 150px;
          height: 150px;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 70%);
          top: -50px;
          right: -50px;
          pointer-events: none;
        }

        .stats-title {
          font-size: 18px;
          font-weight: 700;
          color: var(--color-white);
          text-align: center;
        }

        .stats-subtitle {
          font-size: 11px;
          color: rgba(255, 255, 255, 0.7);
          text-align: center;
          margin-bottom: 20px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .stat-grid-item {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: var(--radius-md);
          padding: 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          transition: transform var(--transition-fast);
        }

        .stat-grid-item:active {
          transform: scale(0.96);
        }

        .stat-icon-badge {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 6px;
        }

        .stat-number {
          font-family: 'Outfit', sans-serif;
          font-size: 18px;
          font-weight: 800;
          color: var(--color-white);
        }

        .stat-label {
          font-size: 10px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.95);
          margin-top: 2px;
        }

        .stat-sub {
          font-size: 8px;
          color: rgba(255, 255, 255, 0.7);
          margin-top: 1px;
        }
      `}</style>
    </section>
  );
}
