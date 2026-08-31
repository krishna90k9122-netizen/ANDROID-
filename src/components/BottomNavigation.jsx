import React from 'react';
import { Home, Grid, Sparkles, BookOpen, User } from 'lucide-react';

export default function BottomNavigation({ currentTab, setCurrentTab }) {
  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'services', label: 'Services', icon: Grid },
    { id: 'ai-tools', label: 'AI Tools', icon: Sparkles, isCenter: true },
    { id: 'resources', label: 'Resources', icon: BookOpen },
    { id: 'profile', label: 'Profile', icon: User }
  ];

  return (
    <nav className="bottom-nav">
      {tabs.map((tab) => {
        const IconComp = tab.icon;
        
        if (tab.isCenter) {
          return (
            <div key={tab.id} className="bottom-nav-center-wrapper">
              <button 
                className={`btn-floating-ai press-effect ${currentTab === tab.id ? 'active' : ''}`}
                onClick={() => setCurrentTab(tab.id)}
                aria-label="Launch AI Workspace Tools"
              >
                <IconComp size={24} color="white" />
              </button>
              <span className="bottom-nav-label center-label">AI Tools</span>
            </div>
          );
        }

        const isActive = currentTab === tab.id;
        return (
          <button 
            key={tab.id} 
            className={`bottom-nav-item press-effect ${isActive ? 'active' : ''}`}
            onClick={() => setCurrentTab(tab.id)}
          >
            <div className={`nav-icon-container ${isActive ? 'active-icon' : ''}`}>
              <IconComp size={20} color={isActive ? 'var(--color-secondary)' : 'var(--color-text-muted)'} />
            </div>
            <span className="bottom-nav-label">{tab.label}</span>
          </button>
        );
      })}

      <style>{`
        .bottom-nav {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: calc(68px + env(safe-area-inset-bottom, 0px));
          background-color: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-top: 1px solid var(--color-border-light);
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          align-items: center;
          justify-items: center;
          padding-bottom: calc(4px + env(safe-area-inset-bottom, 0px)); /* Room for gesture bar and safe areas */
          z-index: 1000;
        }

        .bottom-nav-item {
          background: none;
          border: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 3px;
          width: 100%;
          height: 100%;
          cursor: pointer;
        }

        .nav-icon-container {
          padding: 4px 12px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color var(--transition-fast);
        }

        .nav-icon-container.active-icon {
          background-color: rgba(63, 81, 181, 0.08);
        }

        .bottom-nav-label {
          font-size: 9px;
          font-weight: 600;
          color: var(--color-text-muted);
          transition: color var(--transition-fast);
        }

        .bottom-nav-item.active .bottom-nav-label {
          color: var(--color-secondary);
          font-weight: 700;
        }

        /* FLOATING CENTER BUTTON */
        .bottom-nav-center-wrapper {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          height: 100%;
          width: 100%;
          padding-bottom: 4px;
        }

        .btn-floating-ai {
          position: absolute;
          top: -24px; /* Floats above tabbar */
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: var(--gradient-cta);
          border: 4px solid var(--color-white);
          box-shadow: var(--shadow-glow);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 1002;
          transition: transform var(--transition-fast), box-shadow var(--transition-fast);
          animation: pulseGlow 2.5s infinite;
        }

        .btn-floating-ai:active {
          transform: translateY(-2px) scale(0.95);
          box-shadow: 0 4px 10px rgba(255, 13, 26, 0.2);
        }

        .btn-floating-ai.active {
          background: var(--gradient-stats);
          transform: translateY(-2px) rotate(15deg);
        }

        .center-label {
          margin-top: 4px;
        }
      `}</style>
    </nav>
  );
}
