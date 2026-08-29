import React, { useState } from 'react';
import { Mic, BookOpen, FileSpreadsheet, CloudOff, ChevronDown, ChevronUp } from 'lucide-react';

export default function WhyVaaniSetu() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const features = [
    {
      icon: Mic,
      title: 'Real-Time Voice Bridge',
      shortDesc: 'Teachers speak in Hindi, students learn in their mother tongue.',
      longDesc: 'Our edge-AI translates speech on-the-fly, helping children understand instruction in their indigenous languages while easing the teaching load.',
      color: '#7B1FA2',
      bgColor: 'rgba(123, 31, 162, 0.08)'
    },
    {
      icon: BookOpen,
      title: 'FLN Content Translation',
      shortDesc: 'Curriculum-aligned content in tribal languages.',
      longDesc: 'Translates foundational literacy & numeracy material into regional and tribal dialects ensuring no child falls behind due to language barriers.',
      color: '#FF0D1A',
      bgColor: 'rgba(255, 13, 26, 0.08)'
    },
    {
      icon: FileSpreadsheet,
      title: 'Worksheet Generator',
      shortDesc: 'Generate leveled worksheets in seconds.',
      longDesc: 'Creates bilingual worksheets tailored to individual students\' learning levels and cultural contexts with a click of a button.',
      color: '#3F51B5',
      bgColor: 'rgba(63, 81, 181, 0.08)'
    },
    {
      icon: CloudOff,
      title: 'Offline Edge AI',
      shortDesc: 'Works completely offline on low-cost devices.',
      longDesc: 'Requires zero internet. Runs lightweight AI models locally on basic smartphones or tablets in remote rural areas with no network connectivity.',
      color: '#00C853',
      bgColor: 'rgba(0, 200, 83, 0.08)'
    }
  ];

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="why-section">
      <h2 className="why-title">Why VaaniSetu?</h2>
      <p className="why-subtitle">Empowering classrooms with smart linguistic bridges</p>

      <div className="features-list">
        {features.map((feature, index) => {
          const IconComp = feature.icon;
          const isExpanded = expandedIndex === index;

          return (
            <div 
              key={index} 
              className={`feature-item ${isExpanded ? 'expanded' : ''}`}
              onClick={() => handleToggle(index)}
            >
              <div className="feature-header">
                <div 
                  className="feature-icon"
                  style={{ backgroundColor: feature.bgColor, color: feature.color }}
                >
                  <IconComp size={20} strokeWidth={2.5} />
                </div>
                
                <div className="feature-title-box">
                  <h3>{feature.title}</h3>
                  <p className="feature-short-desc">{feature.shortDesc}</p>
                </div>

                <div className="expand-chevron" style={{ color: feature.color }}>
                  {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
              </div>

              {isExpanded && (
                <div className="feature-detail animate-fade-in-up">
                  <p>{feature.longDesc}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <style>{`
        .why-section {
          padding: 24px 20px;
          background-color: var(--color-white);
          border-bottom: 1px solid var(--color-border-light);
        }

        .why-title {
          font-size: 20px;
          font-weight: 700;
          text-align: center;
          color: var(--color-primary);
        }

        .why-subtitle {
          font-size: 12px;
          color: var(--color-text-muted);
          text-align: center;
          margin-bottom: 20px;
        }

        .features-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .feature-item {
          background-color: var(--color-bg-light);
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border-light);
          padding: 12px 14px;
          cursor: pointer;
          transition: all var(--transition-normal);
        }

        .feature-item:hover, .feature-item.expanded {
          border-color: var(--color-secondary);
          background-color: var(--color-white);
          box-shadow: var(--shadow-sm);
        }

        .feature-header {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .feature-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .feature-title-box {
          flex: 1;
        }

        .feature-title-box h3 {
          font-size: 13px;
          font-weight: 700;
          color: var(--color-primary);
        }

        .feature-short-desc {
          font-size: 10.5px;
          color: var(--color-text-muted);
          margin-top: 2px;
          line-height: 1.3;
        }

        .expand-chevron {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .feature-detail {
          margin-top: 10px;
          padding-top: 10px;
          border-top: 1px solid var(--color-border-light);
          font-size: 11px;
          color: var(--color-text-dark);
          line-height: 1.5;
        }
      `}</style>
    </section>
  );
}
