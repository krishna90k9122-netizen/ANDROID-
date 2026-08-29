import React, { useState } from 'react';
import { Quote, ArrowRight, X } from 'lucide-react';

export default function AdvisoryCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="advisory-section">
      <div className="advisory-card">
        {/* Top Header Row with Portrait and Section title */}
        <div className="advisory-card-header">
          <div className="advisor-portrait-wrapper">
            <img 
              src="/assets/advisor_portrait.png" 
              alt="Advisor Portrait" 
              className="advisor-portrait-img"
            />
          </div>
          <div className="advisor-section-title">
            <div className="quote-icon-badge">
              <Quote size={12} fill="var(--color-secondary)" color="var(--color-secondary)" />
            </div>
            <span>From Our Advisory</span>
          </div>
        </div>

        {/* Quote Content */}
        <blockquote className="advisory-quote">
          "Mother-tongue education is not just a right, it is the foundation of every child's future."
        </blockquote>

        {/* Attribution */}
        <div className="advisory-attribution">
          — Advisory Council, VaaniSetu
        </div>

        {/* Action Button */}
        <button 
          className="btn-text-action press-effect" 
          onClick={() => setIsModalOpen(true)}
        >
          <span>Meet Our Advisors</span>
          <ArrowRight size={14} />
        </button>
      </div>

      {/* Advisory Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content animate-fade-in-up" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Advisory Council</h2>
              <button className="modal-close press-effect" onClick={() => setIsModalOpen(false)}>
                <X size={20} />
              </button>
            </div>
            <div className="advisory-full-text">
              <p><strong>VaaniSetu</strong> is guided by an advisory panel of expert educators, linguists, and child psychologists.</p>
              <p>Our council believes that starting education in a child's native language leads to 80% higher comprehension and retention rate during early childhood development.</p>
              <p>Our mission is to translate complex school curricula into local dialects so tribal and remote children have equal educational opportunities.</p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .advisory-section {
          padding: 20px;
          background-color: var(--color-bg-light);
          border-bottom: 1px solid var(--color-border-light);
        }

        .advisory-card {
          background-color: var(--color-white);
          border-radius: var(--radius-lg);
          padding: 20px;
          border: 1px solid var(--color-border-light);
          box-shadow: var(--shadow-sm);
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .advisory-card-header {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .advisor-portrait-wrapper {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid var(--color-secondary);
          position: relative;
        }

        /* Crop her portrait from the image sheet */
        .advisor-portrait-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transform: scale(1.12);
        }

        .advisor-section-title {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-weight: 700;
          color: var(--color-secondary);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .quote-icon-badge {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background-color: rgba(63, 81, 181, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .advisory-quote {
          font-family: 'Outfit', sans-serif;
          font-size: 14px;
          font-weight: 600;
          line-height: 1.45;
          color: var(--color-primary);
          font-style: italic;
          border-left: 3px solid var(--color-secondary);
          padding-left: 10px;
          margin: 4px 0;
        }

        .advisory-attribution {
          font-size: 11px;
          color: var(--color-text-muted);
          font-weight: 500;
        }

        .btn-text-action {
          align-self: flex-end;
          background: linear-gradient(135deg, #0C1E5A 0%, #1A237E 100%);
          color: var(--color-white);
          border: none;
          padding: 8px 16px;
          border-radius: 50px;
          font-size: 10px;
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          transition: all var(--transition-fast);
          margin-top: 4px;
          box-shadow: 0 4px 10px rgba(26, 35, 126, 0.2);
        }

        .btn-text-action:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 14px rgba(26, 35, 126, 0.3);
        }

        .advisory-full-text {
          font-size: 12px;
          color: var(--color-text-dark);
          line-height: 1.6;
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 10px;
        }
      `}</style>
    </section>
  );
}
