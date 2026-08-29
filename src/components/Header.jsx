import React, { useState } from 'react';
import { Menu, Globe, Bell, X, ChevronRight, Settings, Info, MessageSquare } from 'lucide-react';

export default function Header({ currentTab, setCurrentTab, setLanguage, activeLanguage }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const notifications = [
    { id: 1, title: 'Worksheet generated', desc: 'Grade 3 Math worksheet in Gondi is ready.', time: '2m ago' },
    { id: 2, title: 'Offline package updated', desc: 'Offline voice engine for Santhali downloaded.', time: '1h ago' },
    { id: 3, title: 'Classroom analytics ready', desc: 'FLN outcomes assessment compiled.', time: 'Yesterday' }
  ];

  const languages = [
    { code: 'hi', name: 'हिन्दी (Hindi)' },
    { code: 'en', name: 'English' },
    { code: 'gon', name: 'गोंडी (Gondi)' },
    { code: 'sat', name: 'संताली (Santhali)' },
    { code: 'mr', name: 'मराठी (Marathi)' }
  ];

  return (
    <>
      {/* SVG Chroma Key Filter to remove black background from logo.png */}
      <svg width="0" height="0" style={{ position: 'absolute', pointerEvents: 'none', width: 0, height: 0 }}>
        <defs>
          <filter id="remove-black-bg" colorInterpolationFilters="sRGB">
            <feColorMatrix type="matrix" values="
              1 0 0 0 0
              0 1 0 0 0
              0 0 1 0 0
              3 3 3 0 0
            " />
          </filter>
        </defs>
      </svg>

      {/* Top App Bar Header */}
      <header className="app-header">
        <div className="header-left-section">
          <button 
            className="header-icon-btn press-effect" 
            onClick={() => setIsDrawerOpen(true)}
            aria-label="Open side drawer"
          >
            <Menu size={22} color="var(--color-primary)" />
          </button>

          <div className="header-logo-container" onClick={() => setCurrentTab('home')}>
            <img src="/assets/logo.png" alt="VaaniSetu Logo" className="header-logo-img-chroma" />
          </div>
        </div>

        <div className="header-right-actions">
          <button 
            className="header-icon-btn press-effect" 
            onClick={() => setIsLanguageOpen(true)}
            aria-label="Select language"
          >
            <Globe size={20} color="var(--color-primary)" />
            <span className="language-badge">{activeLanguage.toUpperCase()}</span>
          </button>
          
          <button 
            className="header-icon-btn press-effect notification-bell" 
            onClick={() => setIsNotificationsOpen(true)}
            aria-label="View notifications"
          >
            <Bell size={20} color="var(--color-primary)" />
            <span className="notification-badge-dot"></span>
          </button>
        </div>
      </header>

      {/* --- SIDE NAVIGATION DRAWER --- */}
      {isDrawerOpen && (
        <div className="drawer-overlay" onClick={() => setIsDrawerOpen(false)}>
          <div className="drawer-container" onClick={(e) => e.stopPropagation()}>
            <div className="drawer-header">
              <div className="header-logo-container">
                <img src="/assets/logo.png" alt="VaaniSetu Logo" className="header-logo-img-chroma" />
              </div>
              <button className="drawer-close-btn press-effect" onClick={() => setIsDrawerOpen(false)}>
                <X size={20} />
              </button>
            </div>
            
            <div className="drawer-user-card">
              <div className="user-avatar">AP</div>
              <div className="user-info">
                <h3>Anjali Patel</h3>
                <p>Primary School Teacher • Grade 3</p>
              </div>
            </div>

            <nav className="drawer-nav">
              <button 
                className={`drawer-nav-item ${currentTab === 'home' ? 'active' : ''}`}
                onClick={() => { setCurrentTab('home'); setIsDrawerOpen(false); }}
              >
                <span>🏠 Home Dashboard</span>
                <ChevronRight size={16} />
              </button>
              
              <button 
                className={`drawer-nav-item ${currentTab === 'services' ? 'active' : ''}`}
                onClick={() => { setCurrentTab('services'); setIsDrawerOpen(false); }}
              >
                <span>▦ Explore Services</span>
                <ChevronRight size={16} />
              </button>

              <button 
                className="drawer-nav-item"
                onClick={() => { setCurrentTab('ai-tools'); setIsDrawerOpen(false); }}
              >
                <span>✦ AI Translator Tools</span>
                <ChevronRight size={16} />
              </button>

              <button 
                className={`drawer-nav-item ${currentTab === 'resources' ? 'active' : ''}`}
                onClick={() => { setCurrentTab('resources'); setIsDrawerOpen(false); }}
              >
                <span>📖 Training & Resources</span>
                <ChevronRight size={16} />
              </button>
              
              <div className="drawer-divider"></div>
              
              <button className="drawer-nav-item secondary">
                <Settings size={18} />
                <span>App Settings</span>
              </button>
              
              <button className="drawer-nav-item secondary">
                <MessageSquare size={18} />
                <span>Feedback & Support</span>
              </button>
              
              <button className="drawer-nav-item secondary">
                <Info size={18} />
                <span>About VaaniSetu</span>
              </button>
            </nav>

            <div className="drawer-footer">
              <p>v2.4.0 (Offline Mode Enabled)</p>
            </div>
          </div>
        </div>
      )}

      {/* --- LANGUAGE DIALOG MODAL --- */}
      {isLanguageOpen && (
        <div className="modal-overlay" onClick={() => setIsLanguageOpen(false)}>
          <div className="modal-content animate-fade-in-up" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Select Language</h2>
              <button className="modal-close press-effect" onClick={() => setIsLanguageOpen(false)}>
                <X size={20} />
              </button>
            </div>
            <p className="modal-subtitle">Choose classroom translation language</p>
            
            <div className="languages-list">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  className={`language-option press-effect ${activeLanguage === lang.code ? 'selected' : ''}`}
                  onClick={() => {
                    setLanguage(lang.code);
                    setIsLanguageOpen(false);
                  }}
                >
                  <span>{lang.name}</span>
                  {activeLanguage === lang.code && <span className="checkmark">✓</span>}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* --- NOTIFICATIONS BOTTOM SHEET / MODAL --- */}
      {isNotificationsOpen && (
        <div className="modal-overlay" onClick={() => setIsNotificationsOpen(false)}>
          <div className="modal-content animate-fade-in-up bottom-sheet" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Notifications</h2>
              <button className="modal-close press-effect" onClick={() => setIsNotificationsOpen(false)}>
                <X size={20} />
              </button>
            </div>
            
            <div className="notifications-list">
              {notifications.map((notif) => (
                <div key={notif.id} className="notification-item">
                  <div className="notification-icon-indicator"></div>
                  <div className="notification-details">
                    <h4>{notif.title}</h4>
                    <p>{notif.desc}</p>
                    <span className="notification-time">{notif.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Embedded CSS specific to the header drawer to avoid clutter */}
      <style>{`
        .app-header {
          height: 60px;
          background-color: var(--color-white);
          border-bottom: 1px solid var(--color-border-light);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 16px;
          position: sticky;
          top: 0;
          z-index: 98;
          box-shadow: var(--shadow-sm);
        }

        .header-icon-btn {
          background: none;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          cursor: pointer;
          position: relative;
        }

        .header-icon-btn:hover {
          background-color: rgba(63, 81, 181, 0.06);
        }

        .header-left-section {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .header-logo-container {
          cursor: pointer;
          display: flex;
          align-items: center;
        }

        .header-logo-img-chroma {
          height: 34px;
          object-fit: contain;
          filter: url(#remove-black-bg);
        }

        .header-right-actions {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .language-badge {
          position: absolute;
          bottom: 0px;
          right: -2px;
          background-color: var(--color-secondary);
          color: white;
          font-size: 7px;
          font-weight: 800;
          padding: 1px 4px;
          border-radius: 4px;
          text-transform: uppercase;
        }

        .notification-bell {
          position: relative;
        }

        .notification-badge-dot {
          position: absolute;
          top: 6px;
          right: 8px;
          width: 8px;
          height: 8px;
          background-color: var(--color-cta);
          border-radius: 50%;
          border: 1.5px solid var(--color-white);
        }

        /* DRAWER LAYER */
        .drawer-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(10, 25, 49, 0.5);
          z-index: 1002;
          animation: fadeIn var(--transition-fast) forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .drawer-container {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          width: 85%;
          max-width: 320px;
          background-color: var(--color-white);
          z-index: 1003;
          display: flex;
          flex-direction: column;
          box-shadow: 10px 0 30px rgba(0,0,0,0.15);
          animation: slideIn var(--transition-normal) cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes slideIn {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }

        .drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px;
          border-bottom: 1px solid var(--color-border-light);
        }

        .drawer-logo {
          height: 28px;
          object-fit: contain;
        }

        .drawer-close-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          border-radius: 50%;
        }

        .drawer-close-btn:hover {
          background-color: var(--color-bg-light);
        }

        .drawer-user-card {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 20px 16px;
          background: linear-gradient(135deg, rgba(63, 81, 181, 0.05) 0%, rgba(123, 31, 162, 0.05) 100%);
          border-bottom: 1px solid var(--color-border-light);
        }

        .user-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--gradient-accent);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 16px;
          box-shadow: var(--shadow-sm);
        }

        .user-info h3 {
          font-size: 15px;
          font-weight: 600;
          color: var(--color-primary);
        }

        .user-info p {
          font-size: 11px;
          color: var(--color-text-muted);
        }

        .drawer-nav {
          padding: 12px;
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 4px;
          overflow-y: auto;
        }

        .drawer-nav-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 14px;
          border-radius: var(--radius-sm);
          border: none;
          background: none;
          font-size: 14px;
          font-weight: 500;
          color: var(--color-text-dark);
          text-align: left;
          cursor: pointer;
          transition: background-color var(--transition-fast);
        }

        .drawer-nav-item:hover, .drawer-nav-item.active {
          background-color: rgba(63, 81, 181, 0.08);
          color: var(--color-secondary);
          font-weight: 600;
        }

        .drawer-nav-item.secondary {
          justify-content: flex-start;
          gap: 12px;
          color: var(--color-text-muted);
          font-size: 13px;
        }

        .drawer-nav-item.secondary:hover {
          background-color: var(--color-bg-light);
          color: var(--color-primary);
        }

        .drawer-divider {
          height: 1px;
          background-color: var(--color-border-light);
          margin: 8px 12px;
        }

        .drawer-footer {
          padding: 16px;
          border-top: 1px solid var(--color-border-light);
          text-align: center;
          font-size: 10px;
          color: var(--color-text-muted);
        }

        /* MODAL LAYER */
        .modal-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(10, 25, 49, 0.6);
          z-index: 1004;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }

        .modal-content {
          background-color: var(--color-white);
          border-radius: var(--radius-lg);
          width: 100%;
          max-width: 340px;
          padding: 24px;
          box-shadow: var(--shadow-lg);
          position: relative;
        }

        .modal-content.bottom-sheet {
          align-self: flex-end;
          max-width: 390px;
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
          padding-bottom: 40px;
          animation: slideUpSheet var(--transition-normal) cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes slideUpSheet {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }

        .modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 8px;
        }

        .modal-header h2 {
          font-size: 20px;
          font-weight: 700;
        }

        .modal-close {
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          border-radius: 50%;
        }

        .modal-close:hover {
          background-color: var(--color-bg-light);
        }

        .modal-subtitle {
          font-size: 13px;
          color: var(--color-text-muted);
          margin-bottom: 16px;
        }

        /* Languages List */
        .languages-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .language-option {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 16px;
          border: 1px solid var(--color-border-light);
          border-radius: var(--radius-md);
          background-color: var(--color-bg-light);
          font-size: 14px;
          font-weight: 500;
          color: var(--color-text-dark);
          text-align: left;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .language-option:hover {
          border-color: var(--color-secondary);
          background-color: rgba(63, 81, 181, 0.03);
        }

        .language-option.selected {
          border-color: var(--color-secondary);
          background-color: rgba(63, 81, 181, 0.08);
          font-weight: 600;
          color: var(--color-secondary);
        }

        .checkmark {
          font-weight: 700;
        }

        /* Notifications List */
        .notifications-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          max-height: 250px;
          overflow-y: auto;
        }

        .notification-item {
          display: flex;
          gap: 12px;
          padding: 10px 0;
          border-bottom: 1px solid var(--color-border-light);
        }

        .notification-item:last-child {
          border-bottom: none;
        }

        .notification-icon-indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: var(--color-secondary);
          margin-top: 6px;
          flex-shrink: 0;
        }

        .notification-details h4 {
          font-size: 13px;
          font-weight: 600;
          color: var(--color-primary);
        }

        .notification-details p {
          font-size: 11px;
          color: var(--color-text-muted);
          margin: 2px 0 4px 0;
          line-height: 1.4;
        }

        .notification-time {
          font-size: 9px;
          color: var(--color-text-muted);
        }
      `}</style>
    </>
  );
}
