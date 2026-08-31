import React, { useState } from 'react';
import AndroidFrame from './components/AndroidFrame';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServiceCarousel from './components/ServiceCarousel';
import ExploreServices from './components/ExploreServices';
import WhyVaaniSetu from './components/WhyVaaniSetu';
import StatsSection from './components/StatsSection';
import AdvisoryCard from './components/AdvisoryCard';
import PartnerCTA from './components/PartnerCTA';
import BottomNavigation from './components/BottomNavigation';
import { 
  ContentTranslatorDemo, 
  RealTimeVoiceDemo, 
  WorksheetGeneratorDemo,
  FlashcardCreatorDemo
} from './components/InteractiveDemos';
import { 
  Download, 
  Play, 
  FileText, 
  Check, 
  ToggleLeft, 
  ToggleRight, 
  Trash2, 
  Award, 
  FileCheck, 
  Calendar, 
  Database,
  Search,
  BookOpen
} from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState('home');
  const [activeLanguage, setActiveLanguage] = useState('gon');
  const [toastMessage, setToastMessage] = useState(null);
  const [selectedServiceDemo, setSelectedServiceDemo] = useState('translator');

  // Offline settings state for Profile
  const [offlineGondi, setOfflineGondi] = useState(true);
  const [offlineSanthali, setOfflineSanthali] = useState(false);

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  const handleLanguageChange = (code) => {
    setActiveLanguage(code);
    const names = {
      hi: 'Hindi',
      en: 'English',
      gon: 'Gondi',
      sat: 'Santhali',
      mr: 'Marathi'
    };
    triggerToast(`Active language switched to ${names[code]}`);
  };

  const handleServiceSelect = (serviceId) => {
    if (['translator', 'voice', 'worksheet'].includes(serviceId)) {
      setSelectedServiceDemo(serviceId);
      setCurrentTab('services');
      triggerToast(`Loaded interactive ${serviceId} demo`);
    } else if (serviceId === 'offline') {
      setCurrentTab('profile');
      triggerToast('Showing Offline Database sync options');
    } else if (serviceId === 'outcomes') {
      setCurrentTab('profile');
      triggerToast('Showing classroom analytics and metrics');
    } else {
      triggerToast(`Service "${serviceId}" detail page loaded`);
    }
  };

  const handleInitiativeSelect = (id) => {
    if (id === 'resources') {
      setCurrentTab('resources');
    } else if (id === 'reports') {
      setCurrentTab('resources');
      triggerToast('Scroll to view State Assessment Reports');
    } else {
      triggerToast(`Opened Initiative: ${id}`);
    }
  };

  return (
    <PlatformSpecificLayout>
      <AndroidFrame>
        {/* Top App Header with global navigation states */}
        <Header 
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
          setLanguage={handleLanguageChange}
          activeLanguage={activeLanguage}
        />

        {/* --- MAIN TAB CONTENTS --- */}
        <main className="tab-scroll-container">
          {/* 1. HOME TAB */}
          {currentTab === 'home' && (
            <div className="tab-page animate-fade-in-up">
              <HeroSection />
              <ServiceCarousel onSelectService={handleServiceSelect} />
              <ExploreServices onSelectInitiative={handleInitiativeSelect} />
              <WhyVaaniSetu />
              <StatsSection />
              <AdvisoryCard />
              <PartnerCTA />
            </div>
          )}

          {/* 2. SERVICES TAB (Interactive Workspaces) */}
          {currentTab === 'services' && (
            <div className="tab-page services-page animate-fade-in-up">
              <div className="services-page-header">
                <h2>AI Tools Workspace</h2>
                <p>Run locally on your Android edge device.</p>
              </div>

              {/* Toggle Interactive demo switcher */}
              <div className="workspace-tabs-pill">
                <button 
                  className={selectedServiceDemo === 'translator' ? 'active' : ''} 
                  onClick={() => setSelectedServiceDemo('translator')}
                >
                  Text Translator
                </button>
                <button 
                  className={selectedServiceDemo === 'voice' ? 'active' : ''} 
                  onClick={() => setSelectedServiceDemo('voice')}
                >
                  Voice Bridge
                </button>
                <button 
                  className={selectedServiceDemo === 'worksheet' ? 'active' : ''} 
                  onClick={() => setSelectedServiceDemo('worksheet')}
                >
                  Worksheet Gen
                </button>
                <button 
                  className={selectedServiceDemo === 'flashcard' ? 'active' : ''} 
                  onClick={() => setSelectedServiceDemo('flashcard')}
                >
                  Flashcard Creator
                </button>
              </div>

              {/* Display selected interactive panel */}
              <div className="workspace-active-demo">
                {selectedServiceDemo === 'translator' && <ContentTranslatorDemo />}
                {selectedServiceDemo === 'voice' && <RealTimeVoiceDemo />}
                {selectedServiceDemo === 'worksheet' && <WorksheetGeneratorDemo />}
                {selectedServiceDemo === 'flashcard' && <FlashcardCreatorDemo />}
              </div>

              {/* Other services preview */}
              <div className="other-tools-list">
                <h3>Additional Services</h3>
                
                <div className="tool-strip press-effect" onClick={() => handleServiceSelect('flashcard')}>
                  <div className="tool-strip-icon bg-orange">✨</div>
                  <div className="tool-strip-info">
                    <h4>Bilingual Flashcard Creator</h4>
                    <p>Create visual memory cards with local audio pronunciations.</p>
                  </div>
                </div>

                <div className="tool-strip press-effect" onClick={() => handleServiceSelect('offline')}>
                  <div className="tool-strip-icon bg-green">☁</div>
                  <div className="tool-strip-info">
                    <h4>Offline-First Database Cache</h4>
                    <p>Sync all audio vectors and neural networks to offline storage.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 3. QUICK LAUNCH AI TOOLS DASHBOARD (Floating button shortcut) */}
          {currentTab === 'ai-tools' && (
            <div className="tab-page ai-tools-dashboard animate-fade-in-up">
              <div className="ai-tools-glow-box">
                <div className="central-glowing-logo">✦</div>
                <h2>VaaniSetu AI Engine</h2>
                <p>Grounding vernacular translation directly in local classroom settings.</p>
              </div>

              <div className="ai-shortcuts-grid">
                <button className="ai-shortcut-btn press-effect" onClick={() => { setSelectedServiceDemo('translator'); setCurrentTab('services'); }}>
                  <span className="sc-icon purple">🌐</span>
                  <h4>Text Translate</h4>
                  <p>Books & manuals</p>
                </button>
                
                <button className="ai-shortcut-btn press-effect" onClick={() => { setSelectedServiceDemo('voice'); setCurrentTab('services'); }}>
                  <span className="sc-icon red">🎙</span>
                  <h4>Voice Bridge</h4>
                  <p>Speech broadcast</p>
                </button>

                <button className="ai-shortcut-btn press-effect" onClick={() => { setSelectedServiceDemo('worksheet'); setCurrentTab('services'); }}>
                  <span className="sc-icon blue">📄</span>
                  <h4>Worksheet Gen</h4>
                  <p>Differentiated PDFs</p>
                </button>

                <button className="ai-shortcut-btn press-effect" onClick={() => { setCurrentTab('profile'); triggerToast('Loading data manager'); }}>
                  <span className="sc-icon green">💾</span>
                  <h4>Offline Sync</h4>
                  <p>Manage model weights</p>
                </button>
              </div>

              <div className="edge-stats-alert">
                <div className="alert-circle"></div>
                <div>
                  <h4>Status: Offline Edge Active</h4>
                  <p>Lightweight 2.4B neural models running natively on device hardware.</p>
                </div>
              </div>
            </div>
          )}

          {/* 4. RESOURCES & GUIDES TAB */}
          {currentTab === 'resources' && (
            <div className="tab-page resources-page animate-fade-in-up">
              <div className="resources-search-bar">
                <Search size={16} color="var(--color-text-muted)" />
                <input type="text" placeholder="Search guides, manuals, reports..." />
              </div>

              <div className="learning-banner">
                <h3>Teacher Training Academy</h3>
                <p>Learn how to integrate bilingual instructions effectively.</p>
              </div>

              <div className="resource-list-container">
                <h3>Classroom Resources</h3>
                
                <div className="resource-item-card press-effect" onClick={() => triggerToast('Downloading: Gondi Literacy Guide (4.2 MB)')}>
                  <div className="res-icon-circle pdf"><FileText size={18} /></div>
                  <div className="res-details">
                    <h4>Gondi Primary Literacy Guide</h4>
                    <p>Standardized classroom dialogue scripts for Grade 1-3 teachers. • PDF (4.2 MB)</p>
                  </div>
                  <Download size={18} color="var(--color-text-muted)" className="res-action-arrow" />
                </div>

                <div className="resource-item-card press-effect" onClick={() => triggerToast('Downloading: Santhali Vocab Sheet (1.8 MB)')}>
                  <div className="res-icon-circle pdf"><FileText size={18} /></div>
                  <div className="res-details">
                    <h4>Santhali Math Vocabulary Reference</h4>
                    <p>Bilingual glossary sheet showing regional terms. • PDF (1.8 MB)</p>
                  </div>
                  <Download size={18} color="var(--color-text-muted)" className="res-action-arrow" />
                </div>

                <div className="resource-item-card press-effect" onClick={() => triggerToast('Launching training video... Playing Module 1')}>
                  <div className="res-icon-circle video"><Play size={16} fill="white" /></div>
                  <div className="res-details">
                    <h4>FLN Training Video - Module 1</h4>
                    <p>Video walk-through of the Real-time Voice Bridge tool. • MP4 Video (18 min)</p>
                  </div>
                  <Play size={16} color="var(--color-text-muted)" className="res-action-arrow" />
                </div>

                <div className="resource-item-card press-effect" onClick={() => triggerToast('Downloading: State Assessment Report (12 MB)')}>
                  <div className="res-icon-circle report"><BookOpen size={18} /></div>
                  <div className="res-details">
                    <h4>State Assessment Metrics Report 2025</h4>
                    <p>Official school outcomes and pilot review indices. • PDF (12 MB)</p>
                  </div>
                  <Download size={18} color="var(--color-text-muted)" className="res-action-arrow" />
                </div>
              </div>
            </div>
          )}

          {/* 5. PROFILE & METRICS TAB */}
          {currentTab === 'profile' && (
            <div className="tab-page profile-page animate-fade-in-up">
              <div className="profile-hero-card">
                <div className="profile-avatar">AP</div>
                <h3>Anjali Patel</h3>
                <p>Primary School Teacher • Grade 3</p>
                <span className="school-pill">🏫 Rampur Govt Primary School, Bastar</span>
              </div>

              {/* Statistics Metrics Cards */}
              <div className="profile-metrics-row">
                <div className="metric-box">
                  <Award size={20} color="var(--color-purple)" />
                  <span className="num">142</span>
                  <span className="lbl">Materials Translated</span>
                </div>
                
                <div className="metric-box">
                  <Calendar size={20} color="var(--color-secondary)" />
                  <span className="num">1,280m</span>
                  <span className="lbl">Voice Bridge Playtime</span>
                </div>

                <div className="metric-box">
                  <FileCheck size={20} color="var(--color-success-green)" />
                  <span className="num">84</span>
                  <span className="lbl">Worksheets Generated</span>
                </div>
              </div>

              {/* Classroom Analytics SVG Card */}
              <div className="profile-analytics-card">
                <div className="section-title-strip">
                  <span style={{ fontSize: '16px' }}>📈</span>
                  <h3>Classroom Literacy Growth</h3>
                </div>
                <p className="analytics-sub">Average student foundational literacy & comprehension index (%)</p>
                
                <div className="analytics-chart-container">
                  <svg viewBox="0 0 340 100" width="100%" height="100%">
                    <defs>
                      <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--color-secondary)" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="var(--color-secondary)" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    
                    {/* Grid lines */}
                    <line x1="0" y1="20" x2="340" y2="20" stroke="rgba(0,0,0,0.04)" strokeDasharray="3,3" />
                    <line x1="0" y1="50" x2="340" y2="50" stroke="rgba(0,0,0,0.04)" strokeDasharray="3,3" />
                    <line x1="0" y1="80" x2="340" y2="80" stroke="rgba(0,0,0,0.04)" strokeDasharray="3,3" />
                    
                    {/* Area under curve */}
                    <path d="M 10 80 C 60 75, 100 55, 140 45 S 220 25, 260 20 S 300 12, 330 10 L 330 90 L 10 90 Z" fill="url(#chartGrad)" />
                    
                    {/* Curve path */}
                    <path d="M 10 80 C 60 75, 100 55, 140 45 S 220 25, 260 20 S 300 12, 330 10" fill="none" stroke="var(--color-secondary)" strokeWidth="3" strokeLinecap="round" />
                    
                    {/* Data dots */}
                    <circle cx="10" cy="80" r="4" fill="var(--color-secondary)" stroke="white" strokeWidth="1.5" />
                    <circle cx="100" cy="55" r="4" fill="var(--color-secondary)" stroke="white" strokeWidth="1.5" />
                    <circle cx="180" cy="35" r="4" fill="var(--color-secondary)" stroke="white" strokeWidth="1.5" />
                    <circle cx="260" cy="20" r="4" fill="var(--color-secondary)" stroke="white" strokeWidth="1.5" />
                    <circle cx="330" cy="10" r="4" fill="var(--color-cta)" stroke="white" strokeWidth="2" />
                    
                    {/* Values labels */}
                    <text x="10" y="70" fontSize="8" fontWeight="bold" fill="var(--color-text-muted)" textAnchor="middle">45%</text>
                    <text x="100" y="45" fontSize="8" fontWeight="bold" fill="var(--color-text-muted)" textAnchor="middle">58%</text>
                    <text x="180" y="25" fontSize="8" fontWeight="bold" fill="var(--color-text-muted)" textAnchor="middle">72%</text>
                    <text x="260" y="10" fontSize="8" fontWeight="bold" fill="var(--color-text-muted)" textAnchor="middle">80%</text>
                    <text x="330" y="24" fontSize="8" fontWeight="bold" fill="var(--color-cta)" textAnchor="end">88%</text>
                    
                    {/* Month labels */}
                    <text x="10" y="98" fontSize="8" fontWeight="600" fill="var(--color-text-muted)" textAnchor="middle">Jul</text>
                    <text x="100" y="98" fontSize="8" fontWeight="600" fill="var(--color-text-muted)" textAnchor="middle">Aug</text>
                    <text x="180" y="98" fontSize="8" fontWeight="600" fill="var(--color-text-muted)" textAnchor="middle">Sep</text>
                    <text x="260" y="98" fontSize="8" fontWeight="600" fill="var(--color-text-muted)" textAnchor="middle">Oct</text>
                    <text x="330" y="98" fontSize="8" fontWeight="600" fill="var(--color-text-muted)" textAnchor="end">Nov</text>
                  </svg>
                </div>
                
                <div className="analytics-insight">
                  💡 Gondi literacy targets are up by 40% after implementing bilingual voice flashcards.
                </div>
              </div>

              {/* Offline Database Settings */}
              <div className="profile-section-card">
                <div className="section-title-strip">
                  <Database size={16} color="var(--color-primary)" />
                  <h3>Offline Engine Settings</h3>
                </div>
                
                <div className="profile-setting-toggle">
                  <div className="toggle-info">
                    <h4>Gondi Voice Model Package</h4>
                    <p>Active locally. Weight file size: 142MB</p>
                  </div>
                  <button 
                    className="toggle-button press-effect" 
                    onClick={() => {
                      setOfflineGondi(!offlineGondi);
                      triggerToast(offlineGondi ? 'Uninstalled Gondi language weights' : 'Gondi voice models active offline');
                    }}
                  >
                    {offlineGondi ? <ToggleRight size={28} color="var(--color-success-green)" /> : <ToggleLeft size={28} color="var(--color-text-muted)" />}
                  </button>
                </div>

                <div className="profile-setting-toggle">
                  <div className="toggle-info">
                    <h4>Santhali Voice Model Package</h4>
                    <p>Uncached. Required file size: 118MB</p>
                  </div>
                  <button 
                    className="toggle-button press-effect" 
                    onClick={() => {
                      setOfflineSanthali(!offlineSanthali);
                      triggerToast(offlineSanthali ? 'Uninstalled Santhali language weights' : 'Downloaded and cached Santhali language models');
                    }}
                  >
                    {offlineSanthali ? <ToggleRight size={28} color="var(--color-success-green)" /> : <ToggleLeft size={28} color="var(--color-text-muted)" />}
                  </button>
                </div>

                <button 
                  className="btn-clear-cache press-effect" 
                  onClick={() => triggerToast('Cached neural network database weights cleared')}
                >
                  <Trash2 size={14} />
                  <span>Clear Offline Models Storage</span>
                </button>
              </div>
            </div>
          )}
        </main>

        {/* --- GLOBAL TOAST TOAST COMPONENT --- */}
        {toastMessage && (
          <div className="global-toast animate-fade-in-up">
            <Check size={14} style={{ marginRight: '6px' }} />
            <span>{toastMessage}</span>
          </div>
        )}

        {/* Sticky Bottom Android Navigation Tabbar */}
        <BottomNavigation 
          currentTab={currentTab} 
          setCurrentTab={setCurrentTab} 
        />
      </AndroidFrame>

      {/* Embedded CSS Specifics for Tab Layouts */}
      <style>{`
        .tab-scroll-container {
          flex: 1;
          overflow-y: auto;
          position: relative;
          padding-bottom: 84px; /* Ensure content is not covered by bottom navigation */
          -webkit-overflow-scrolling: touch; /* Smooth momentum scrolling on mobile */
        }

        .tab-page {
          display: flex;
          flex-direction: column;
          min-height: 100%;
        }

        /* Services Screen Style */
        .services-page-header {
          padding: 16px 20px 8px 20px;
          background-color: var(--color-white);
        }

        .services-page-header h2 {
          font-size: 20px;
          font-weight: 700;
        }

        .services-page-header p {
          font-size: 11px;
          color: var(--color-text-muted);
          margin-top: 2px;
        }

        .workspace-tabs-pill {
          display: flex;
          background-color: rgba(63, 81, 181, 0.05);
          padding: 4px;
          border-radius: var(--radius-md);
          margin: 4px 20px 14px 20px;
          overflow-x: auto;
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE 10+ */
          gap: 4px;
        }

        .workspace-tabs-pill::-webkit-scrollbar {
          display: none; /* Safari and Chrome */
        }

        .workspace-tabs-pill button {
          flex: 0 0 auto;
          border: none;
          background: none;
          padding: 8px 12px;
          font-size: 11px;
          font-weight: 700;
          color: var(--color-text-muted);
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .workspace-tabs-pill button.active {
          background-color: var(--color-white);
          color: var(--color-secondary);
          box-shadow: var(--shadow-sm);
        }

        .workspace-active-demo {
          padding: 0 20px 20px 20px;
          border-bottom: 1px solid var(--color-border-light);
        }

        .other-tools-list {
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .other-tools-list h3 {
          font-size: 14px;
          font-weight: 700;
          margin-bottom: 2px;
        }

        .tool-strip {
          display: flex;
          align-items: center;
          gap: 12px;
          background-color: var(--color-white);
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border-light);
          padding: 12px;
          cursor: pointer;
        }

        .tool-strip-icon {
          width: 36px;
          height: 36px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          flex-shrink: 0;
        }

        .tool-strip-icon.bg-orange {
          background-color: rgba(255, 138, 0, 0.08);
          color: var(--color-accent-orange);
        }

        .tool-strip-icon.bg-green {
          background-color: rgba(0, 200, 83, 0.08);
          color: var(--color-success-green);
        }

        .tool-strip-info h4 {
          font-size: 12px;
          font-weight: 700;
        }

        .tool-strip-info p {
          font-size: 9.5px;
          color: var(--color-text-muted);
          margin-top: 1px;
          line-height: 1.3;
        }

        /* Quick Launch Engine Hub Dashboard (Tab 3) */
        .ai-tools-dashboard {
          padding: 24px 20px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .ai-tools-glow-box {
          background: var(--gradient-primary);
          color: white;
          border-radius: var(--radius-lg);
          padding: 28px 20px;
          text-align: center;
          position: relative;
          overflow: hidden;
          box-shadow: var(--shadow-lg);
        }

        .central-glowing-logo {
          font-size: 32px;
          width: 54px;
          height: 54px;
          border-radius: 50%;
          background: var(--gradient-cta);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 12px auto;
          box-shadow: var(--shadow-glow);
          animation: pulseGlow 2.5s infinite;
        }

        .ai-tools-glow-box h2 {
          font-size: 18px;
          font-weight: 800;
          color: white;
        }

        .ai-tools-glow-box p {
          font-size: 11px;
          color: rgba(255,255,255,0.75);
          margin-top: 4px;
          line-height: 1.4;
        }

        .ai-shortcuts-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .ai-shortcut-btn {
          background-color: var(--color-white);
          border: 1px solid var(--color-border-light);
          border-radius: var(--radius-lg);
          padding: 16px 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          cursor: pointer;
          transition: all var(--transition-normal);
        }

        .ai-shortcut-btn:hover {
          border-color: var(--color-secondary);
          box-shadow: var(--shadow-md);
        }

        .sc-icon {
          font-size: 24px;
          margin-bottom: 6px;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .sc-icon.purple { background-color: rgba(123, 31, 162, 0.08); }
        .sc-icon.red { background-color: rgba(255, 13, 26, 0.08); }
        .sc-icon.blue { background-color: rgba(63, 81, 181, 0.08); }
        .sc-icon.green { background-color: rgba(0, 200, 83, 0.08); }

        .ai-shortcut-btn h4 {
          font-size: 12px;
          font-weight: 700;
        }

        .ai-shortcut-btn p {
          font-size: 9px;
          color: var(--color-text-muted);
          margin-top: 2px;
        }

        .edge-stats-alert {
          background-color: rgba(0, 200, 83, 0.05);
          border: 1px solid rgba(0, 200, 83, 0.2);
          border-radius: var(--radius-md);
          padding: 12px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .alert-circle {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: var(--color-success-green);
          flex-shrink: 0;
          animation: pulseGlow 1.5s infinite;
        }

        .edge-stats-alert h4 {
          font-size: 11px;
          font-weight: 700;
          color: var(--color-primary);
        }

        .edge-stats-alert p {
          font-size: 9.5px;
          color: var(--color-text-muted);
          margin-top: 1px;
        }

        /* Resources Screen Layout (Tab 4) */
        .resources-page {
          padding: 16px 20px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .resources-search-bar {
          display: flex;
          align-items: center;
          gap: 8px;
          background-color: var(--color-white);
          border: 1px solid var(--color-border-light);
          padding: 10px 14px;
          border-radius: 50px;
        }

        .resources-search-bar input {
          flex: 1;
          border: none;
          background: none;
          font-size: 12px;
          outline: none;
          font-family: inherit;
        }

        .learning-banner {
          background: var(--gradient-accent);
          color: white;
          border-radius: var(--radius-lg);
          padding: 20px 16px;
          box-shadow: var(--shadow-sm);
        }

        .learning-banner h3 {
          color: white;
          font-size: 16px;
          font-weight: 700;
        }

        .learning-banner p {
          font-size: 10.5px;
          color: rgba(255,255,255,0.8);
          margin-top: 4px;
          line-height: 1.4;
        }

        .resource-list-container {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .resource-list-container h3 {
          font-size: 14px;
          font-weight: 700;
          margin-bottom: 2px;
        }

        .resource-item-card {
          display: flex;
          align-items: center;
          gap: 12px;
          background-color: var(--color-white);
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border-light);
          padding: 12px;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .resource-item-card:hover {
          border-color: var(--color-secondary);
        }

        .res-icon-circle {
          width: 36px;
          height: 36px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .res-icon-circle.pdf {
          background-color: rgba(255, 13, 26, 0.08);
          color: var(--color-cta);
        }

        .res-icon-circle.video {
          background-color: rgba(63, 81, 181, 0.08);
          color: var(--color-secondary);
        }

        .res-icon-circle.report {
          background-color: rgba(123, 31, 162, 0.08);
          color: var(--color-purple);
        }

        .res-details {
          flex: 1;
        }

        .res-details h4 {
          font-size: 12px;
          font-weight: 700;
        }

        .res-details p {
          font-size: 9.5px;
          color: var(--color-text-muted);
          margin-top: 2px;
          line-height: 1.35;
        }

        .res-action-arrow {
          flex-shrink: 0;
        }

        /* Profile Screen Layout (Tab 5) */
        .profile-page {
          padding: 24px 20px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .profile-hero-card {
          background-color: var(--color-white);
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border-light);
          padding: 24px 16px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-shadow: var(--shadow-sm);
        }

        .profile-avatar {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: var(--gradient-primary);
          color: white;
          font-size: 22px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 12px;
          box-shadow: var(--shadow-md);
        }

        .profile-hero-card h3 {
          font-size: 18px;
          font-weight: 700;
        }

        .profile-hero-card p {
          font-size: 11px;
          color: var(--color-text-muted);
        }

        .school-pill {
          margin-top: 10px;
          font-size: 10px;
          font-weight: 600;
          color: var(--color-secondary);
          background-color: rgba(63, 81, 181, 0.05);
          padding: 4px 10px;
          border-radius: 50px;
        }

        .profile-metrics-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
        }

        .metric-box {
          background-color: var(--color-white);
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border-light);
          padding: 10px 6px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .metric-box .num {
          font-family: 'Outfit', sans-serif;
          font-size: 15px;
          font-weight: 800;
          color: var(--color-primary);
          margin-top: 4px;
        }

        .metric-box .lbl {
          font-size: 8px;
          color: var(--color-text-muted);
          font-weight: 600;
          margin-top: 1px;
          line-height: 1.25;
        }

        .profile-section-card {
          background-color: var(--color-white);
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border-light);
          padding: 16px;
          box-shadow: var(--shadow-sm);
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .profile-analytics-card {
          background-color: var(--color-white);
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border-light);
          padding: 16px;
          box-shadow: var(--shadow-sm);
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .analytics-sub {
          font-size: 9.5px;
          color: var(--color-text-muted);
          line-height: 1.3;
        }

        .analytics-chart-container {
          position: relative;
          width: 100%;
          height: 110px;
          margin: 6px 0;
        }

        .analytics-insight {
          background-color: rgba(0, 200, 83, 0.05);
          border-radius: var(--radius-sm);
          padding: 8px 10px;
          font-size: 9.5px;
          color: var(--color-success-green);
          font-weight: 600;
          line-height: 1.35;
        }

        .section-title-strip {
          display: flex;
          align-items: center;
          gap: 8px;
          border-bottom: 1px solid var(--color-border-light);
          padding-bottom: 8px;
        }

        .section-title-strip h3 {
          font-size: 13px;
          font-weight: 700;
        }

        .profile-setting-toggle {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 6px 0;
        }

        .toggle-info h4 {
          font-size: 11.5px;
          font-weight: 700;
        }

        .toggle-info p {
          font-size: 9.5px;
          color: var(--color-text-muted);
          margin-top: 1px;
        }

        .toggle-button {
          background: none;
          border: none;
          cursor: pointer;
        }

        .btn-clear-cache {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          background: none;
          border: 1px solid var(--color-cta);
          color: var(--color-cta);
          padding: 10px;
          border-radius: var(--radius-md);
          font-family: inherit;
          font-size: 11px;
          font-weight: 700;
          cursor: pointer;
          transition: all var(--transition-fast);
          margin-top: 6px;
        }

        .btn-clear-cache:hover {
          background-color: rgba(255, 13, 26, 0.05);
        }

        /* GLOBAL TOAST NOTIFICATION */
        .global-toast {
          position: absolute;
          bottom: 84px; /* Sits right above bottom tab bar */
          left: 20px;
          right: 20px;
          background-color: var(--color-primary);
          color: var(--color-white);
          border-radius: 50px;
          padding: 10px 16px;
          font-size: 11px;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-lg);
          z-index: 1010;
        }
      `}</style>
    </PlatformSpecificLayout>
  );
}

// Simple wrapper inside App.jsx to center the mobile frame on desktop, and disable it on actual mobile width
function PlatformSpecificLayout({ children }) {
  return (
    <div className="app-simulator-desktop-container">
      {children}
      
      <style>{`
        .app-simulator-desktop-container {
          min-height: 100vh;
          width: 100vw;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
        }
        
        @media (max-width: 600px) {
          .app-simulator-desktop-container {
            display: block;
            background: none;
          }
        }
      `}</style>
    </div>
  );
}
