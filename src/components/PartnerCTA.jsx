import React, { useState } from 'react';
import { Landmark, Heart, BookOpen, X, Send } from 'lucide-react';

export default function PartnerCTA() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const partners = [
    {
      icon: BookOpen,
      title: 'For Schools',
      desc: 'Bring VaaniSetu to your classrooms'
    },
    {
      icon: Heart,
      title: 'For Partners & NGOs',
      desc: 'Collaborate to scale local learning'
    },
    {
      icon: Landmark,
      title: 'For Government',
      desc: 'Co-create inclusive classroom policy'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setIsFormOpen(false);
      setFormSubmitted(false);
    }, 2000);
  };

  return (
    <section className="partner-section">
      <div className="partner-gradient-card">
        <h2 className="partner-title">
          Let’s build classrooms where every child understands.
        </h2>
        
        <p className="partner-desc">
          Partner with us to empower teachers and transform vernacular education across the nation.
        </p>

        <button 
          className="btn-secondary press-effect"
          onClick={() => setIsFormOpen(true)}
        >
          <span>Partner With Us</span>
        </button>

        <div className="partners-row">
          {partners.map((partner, index) => {
            const IconComp = partner.icon;
            return (
              <div key={index} className="partner-highlight-item">
                <div className="partner-highlight-icon">
                  <IconComp size={14} color="white" />
                </div>
                <div className="partner-highlight-info">
                  <h4>{partner.title}</h4>
                  <p>{partner.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Partner with Us Dialog Sheet */}
      {isFormOpen && (
        <div className="modal-overlay" onClick={() => setIsFormOpen(false)}>
          <div className="modal-content animate-fade-in-up bottom-sheet" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Partner Registration</h2>
              <button className="modal-close press-effect" onClick={() => setIsFormOpen(false)}>
                <X size={20} />
              </button>
            </div>
            
            {formSubmitted ? (
              <div className="submission-success">
                <div className="success-checkmark">✓</div>
                <h3>Request Submitted!</h3>
                <p>Thank you. Our partnership team will contact you shortly.</p>
              </div>
            ) : (
              <form className="partnership-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="pname">Your Name</label>
                  <input type="text" id="pname" required placeholder="e.g. Dr. Rajesh Kumar" />
                </div>

                <div className="form-group">
                  <label htmlFor="pemail">Email Address</label>
                  <input type="email" id="pemail" required placeholder="e.g. rajesh@school.org" />
                </div>

                <div className="form-group">
                  <label htmlFor="ptype">Organization Type</label>
                  <select id="ptype" required>
                    <option value="school">School / Institution</option>
                    <option value="ngo">NGO / Social Venture</option>
                    <option value="gov">Government Body</option>
                  </select>
                </div>

                <button type="submit" className="form-submit-btn press-effect">
                  <Send size={16} />
                  <span>Submit Partnership Proposal</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      <style>{`
        .partner-section {
          padding: 20px;
          background-color: var(--color-white);
          border-bottom: 1px solid var(--color-border-light);
        }

        .partner-gradient-card {
          background: linear-gradient(135deg, var(--color-purple) 0%, var(--color-secondary) 50%, var(--color-cta) 100%);
          border-radius: var(--radius-lg);
          padding: 24px 18px;
          color: var(--color-white);
          box-shadow: var(--shadow-lg);
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .partner-title {
          font-size: 20px;
          font-weight: 800;
          color: var(--color-white);
          line-height: 1.25;
        }

        .partner-desc {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.5;
        }

        .btn-secondary {
          align-self: flex-start;
          background-color: var(--color-white);
          color: var(--color-secondary);
          border: none;
          padding: 12px 20px;
          border-radius: var(--radius-md);
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          font-size: 13px;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          transition: all var(--transition-fast);
        }

        .btn-secondary:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 16px rgba(0,0,0,0.15);
        }

        .partners-row {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 10px;
          border-top: 1.5px solid rgba(255, 255, 255, 0.15);
          padding-top: 14px;
        }

        .partner-highlight-item {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .partner-highlight-icon {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .partner-highlight-info h4 {
          font-size: 11.5px;
          font-weight: 700;
          color: var(--color-white);
        }

        .partner-highlight-info p {
          font-size: 9.5px;
          color: rgba(255, 255, 255, 0.75);
          margin-top: 1px;
        }

        /* Forms in Modal Sheets */
        .partnership-form {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-top: 10px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-group label {
          font-size: 11px;
          font-weight: 600;
          color: var(--color-primary);
        }

        .form-group input, .form-group select {
          padding: 12px;
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border-light);
          background-color: var(--color-bg-light);
          font-family: inherit;
          font-size: 13px;
          color: var(--color-text-dark);
          outline: none;
          transition: border var(--transition-fast);
        }

        .form-group input:focus, .form-group select:focus {
          border-color: var(--color-secondary);
        }

        .form-submit-btn {
          margin-top: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: var(--gradient-accent);
          color: white;
          border: none;
          padding: 14px;
          border-radius: var(--radius-md);
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          font-size: 13px;
          cursor: pointer;
          box-shadow: var(--shadow-blue-glow);
        }

        .submission-success {
          text-align: center;
          padding: 30px 20px;
        }

        .success-checkmark {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: var(--color-success-green);
          color: white;
          font-size: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px auto;
          box-shadow: 0 4px 12px rgba(0, 200, 83, 0.2);
        }

        .submission-success h3 {
          font-size: 18px;
          color: var(--color-primary);
        }

        .submission-success p {
          font-size: 12px;
          color: var(--color-text-muted);
          margin-top: 6px;
        }
      `}</style>
    </section>
  );
}
