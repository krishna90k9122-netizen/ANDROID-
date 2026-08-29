import React, { useState } from 'react';
import { Volume2, Play, Circle, Download, Share2, Sparkles, Languages, Mic, FileText, CheckCircle, RefreshCw, Layers } from 'lucide-react';

/* --- CONTENT TRANSLATOR MOCK PANEL --- */
export function ContentTranslatorDemo() {
  const [inputText, setInputText] = useState('');
  const [sourceLang, setSourceLang] = useState('en');
  const [targetLang, setTargetLang] = useState('gon');
  const [isTranslating, setIsTranslating] = useState(false);
  const [translationResult, setTranslationResult] = useState(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const mockTranslations = {
    'en-gon': {
      'Welcome to school, let us study math today.': 'नेहनाल इस्कुल ते, आज माट गणित वेहनाय.',
      'How are you all doing?': 'निमा सबे चोखट आंदिर?',
      'Please open page number ten of your textbook.': 'अपन किताब तो दसवो पन्ना उघाडा.'
    },
    'hi-gon': {
      'स्कूल में आपका स्वागत है, आज हम गणित पढ़ेंगे।': 'नेहनाल इस्कुल ते, आज माट गणित वेहनाय.',
      'आप सब कैसे हैं?': 'निमा सबे चोखट आंदिर?',
      'कृपया अपनी पाठ्यपुस्तक का पृष्ठ संख्या दस खोलें।': 'अपन किताब तो दसवो पन्ना उघाडा.'
    }
  };

  const handleTranslate = () => {
    if (!inputText.trim()) return;
    setIsTranslating(true);
    setTranslationResult(null);

    setTimeout(() => {
      setIsTranslating(false);
      const key = `${sourceLang}-${targetLang}`;
      const textKey = inputText.trim();
      let res = '';

      if (mockTranslations[key] && mockTranslations[key][textKey]) {
        res = mockTranslations[key][textKey];
      } else {
        // Fallback generic translation
        res = `[गोंडी / संताली अनुवाद]: ${textKey.split(' ').map(w => w + 'ळ').join(' ')}`;
      }

      setTranslationResult({
        translatedText: res,
        audioLength: '0:04'
      });
    }, 1200);
  };

  const playVoiceNote = () => {
    if (!translationResult) return;
    setIsPlayingAudio(true);
    setTimeout(() => {
      setIsPlayingAudio(false);
    }, 3000);
  };

  const loadSample = (sampleText, src = 'en') => {
    setSourceLang(src);
    setInputText(sampleText);
  };

  return (
    <div className="demo-panel card-shadow animate-fade-in-up">
      <div className="demo-panel-header">
        <Languages size={18} color="var(--color-purple)" />
        <h3>AI Content Translator</h3>
      </div>

      <div className="lang-selectors">
        <select value={sourceLang} onChange={(e) => setSourceLang(e.target.value)}>
          <option value="en">English</option>
          <option value="hi">हिन्दी (Hindi)</option>
        </select>
        <span className="arrow">➔</span>
        <select value={targetLang} onChange={(e) => setTargetLang(e.target.value)}>
          <option value="gon">गोंडी (Gondi)</option>
          <option value="sat">संताली (Santhali)</option>
        </select>
      </div>

      <textarea
        className="text-input-field"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Type text or tap a sample below..."
        rows={3}
      />

      <div className="samples-box">
        <span className="samples-title">Sample Prompts:</span>
        <div className="samples-chips">
          <button onClick={() => loadSample('Welcome to school, let us study math today.', 'en')}>"Welcome to school..."</button>
          <button onClick={() => loadSample('आप सब कैसे हैं?', 'hi')}>"आप सब कैसे हैं?"</button>
        </div>
      </div>

      <button 
        className="btn-action press-effect translation-trigger" 
        onClick={handleTranslate}
        disabled={isTranslating || !inputText.trim()}
        style={{ backgroundColor: 'var(--color-purple)' }}
      >
        {isTranslating ? (
          <>
            <RefreshCw size={14} className="spinning-icon" />
            <span>Translating via Edge AI...</span>
          </>
        ) : (
          <span>Translate Document</span>
        )}
      </button>

      {translationResult && (
        <div className="result-container animate-fade-in-up">
          <div className="result-header">
            <span>Translated Output:</span>
            <button className={`btn-speaker press-effect ${isPlayingAudio ? 'playing' : ''}`} onClick={playVoiceNote}>
              <Volume2 size={16} />
              <span>{isPlayingAudio ? 'Playing...' : 'Play Audio'}</span>
            </button>
          </div>
          <p className="result-text">{translationResult.translatedText}</p>
          
          {isPlayingAudio && (
            <div className="audio-wave-animation">
              <span className="wave-bar"></span>
              <span className="wave-bar"></span>
              <span className="wave-bar"></span>
              <span className="wave-bar"></span>
              <span className="wave-bar"></span>
            </div>
          )}
        </div>
      )}

      <style>{`
        .demo-panel {
          background-color: var(--color-white);
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border-light);
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .demo-panel-header {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .demo-panel-header h3 {
          font-size: 14px;
          font-weight: 700;
        }

        .lang-selectors {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }

        .lang-selectors select {
          flex: 1;
          padding: 8px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--color-border-light);
          font-size: 12px;
          font-weight: 600;
          color: var(--color-primary);
        }

        .lang-selectors .arrow {
          font-size: 12px;
          color: var(--color-text-muted);
        }

        .text-input-field {
          width: 100%;
          border: 1px solid var(--color-border-light);
          border-radius: var(--radius-md);
          padding: 10px;
          font-size: 12px;
          font-family: inherit;
          resize: none;
          outline: none;
          background-color: var(--color-bg-light);
        }

        .text-input-field:focus {
          border-color: var(--color-purple);
        }

        .samples-box {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .samples-title {
          font-size: 10px;
          color: var(--color-text-muted);
          font-weight: 600;
        }

        .samples-chips {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
        }

        .samples-chips button {
          font-size: 10px;
          color: var(--color-primary);
          background-color: var(--color-bg-light);
          border: 1px solid var(--color-border-light);
          padding: 4px 8px;
          border-radius: 50px;
          cursor: pointer;
          white-space: nowrap;
        }

        .btn-action {
          border: none;
          color: white;
          padding: 12px;
          border-radius: var(--radius-md);
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          font-size: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          cursor: pointer;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }

        .spinning-icon {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .result-container {
          background-color: rgba(123, 31, 162, 0.04);
          border: 1px dashed rgba(123, 31, 162, 0.2);
          border-radius: var(--radius-md);
          padding: 12px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .result-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 10px;
          color: var(--color-text-muted);
          font-weight: 600;
        }

        .btn-speaker {
          background-color: var(--color-purple);
          border: none;
          color: white;
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 4px 8px;
          border-radius: 50px;
          font-size: 9px;
          font-weight: 700;
          cursor: pointer;
        }

        .btn-speaker.playing {
          background-color: var(--color-success-green);
        }

        .result-text {
          font-family: 'Outfit', sans-serif;
          font-size: 14px;
          font-weight: 700;
          color: var(--color-purple);
        }

        /* Audio Wave Simulator */
        .audio-wave-animation {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 3px;
          height: 16px;
          margin-top: 4px;
        }

        .wave-bar {
          width: 3px;
          height: 100%;
          background-color: var(--color-success-green);
          border-radius: 2px;
          animation: danceWave 0.8s ease infinite alternate;
        }

        .wave-bar:nth-child(2) { animation-delay: 0.15s; }
        .wave-bar:nth-child(3) { animation-delay: 0.3s; }
        .wave-bar:nth-child(4) { animation-delay: 0.45s; }
        .wave-bar:nth-child(5) { animation-delay: 0.05s; }

        @keyframes danceWave {
          from { height: 2px; }
          to { height: 16px; }
        }
      `}</style>
    </div>
  );
}

/* --- REAL-TIME VOICE BRIDGE MOCK PANEL --- */
export function RealTimeVoiceDemo() {
  const [isRecording, setIsRecording] = useState(false);
  const [recordingStep, setRecordingStep] = useState(0); // 0: idle, 1: listening, 2: processing, 3: completed
  const [transcript, setTranscript] = useState('');
  const [translation, setTranslation] = useState('');

  const triggerRecording = () => {
    if (isRecording) {
      // Stop early
      resetDemo();
      return;
    }

    setIsRecording(true);
    setRecordingStep(1);
    setTranscript('Listening for teacher speech...');
    setTranslation('');

    // Step 1: Simulated capture of teacher Hindi speech
    setTimeout(() => {
      setRecordingStep(2);
      setTranscript('Detected (Hindi): "बच्चों, कृपया यहाँ ध्यान दें और बोर्ड को देखें।"');
      
      // Step 2: Processing translation on Edge AI
      setTimeout(() => {
        setRecordingStep(3);
        setTranslation('Translated (Gondi): "पेकालोर, जोका इग्गा ध्यान कीम अते बोर्ड तुन सुळाम।"');
        setIsRecording(false);
      }, 1500);

    }, 2000);
  };

  const resetDemo = () => {
    setIsRecording(false);
    setRecordingStep(0);
    setTranscript('');
    setTranslation('');
  };

  return (
    <div className="demo-panel card-shadow animate-fade-in-up">
      <div className="demo-panel-header">
        <Mic size={18} color="var(--color-cta)" />
        <h3>Real-Time Voice Bridge</h3>
      </div>

      <p className="voice-sub">Speak in Hindi, broadcast to students in Gondi instantly.</p>

      <div className="mic-container">
        <button 
          className={`mic-ring-button press-effect ${recordingStep === 1 ? 'recording' : ''} ${recordingStep === 2 ? 'processing' : ''}`}
          onClick={triggerRecording}
        >
          {recordingStep === 2 ? (
            <RefreshCw size={24} color="white" className="spinning-icon" />
          ) : (
            <Mic size={24} color="white" />
          )}
        </button>
        <span className="mic-status-label">
          {recordingStep === 0 && 'Tap mic to start broadcasting'}
          {recordingStep === 1 && 'Recording... Speak now'}
          {recordingStep === 2 && 'AI Transcribing & Translating...'}
          {recordingStep === 3 && 'Translation Ready'}
        </span>
      </div>

      {(recordingStep > 0) && (
        <div className="speech-result-box animate-fade-in-up">
          <div className="speech-segment">
            <span className="seg-lang">Teacher Transcript:</span>
            <p className="seg-text">{transcript}</p>
          </div>

          {translation && (
            <div className="speech-segment translated">
              <span className="seg-lang font-gondi">Gondi Audio Broadcast:</span>
              <p className="seg-text font-accent">{translation}</p>
              
              <button className="play-broadcast-btn press-effect">
                <Play size={10} fill="white" />
                <span>Play Broadcast Sound</span>
              </button>
            </div>
          )}
        </div>
      )}

      <style>{`
        .voice-sub {
          font-size: 11px;
          color: var(--color-text-muted);
          line-height: 1.4;
        }

        .mic-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          padding: 16px 0;
        }

        .mic-ring-button {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: var(--gradient-cta);
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: var(--shadow-glow);
          position: relative;
        }

        .mic-ring-button.recording {
          animation: pulseRed 1s infinite alternate;
        }

        .mic-ring-button.processing {
          background: var(--gradient-accent);
          box-shadow: var(--shadow-blue-glow);
        }

        @keyframes pulseRed {
          from {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(255, 13, 26, 0.5);
          }
          to {
            transform: scale(1.08);
            box-shadow: 0 0 0 14px rgba(255, 13, 26, 0);
          }
        }

        .mic-status-label {
          font-size: 11px;
          font-weight: 700;
          color: var(--color-primary);
        }

        .speech-result-box {
          background-color: var(--color-bg-light);
          border-radius: var(--radius-md);
          padding: 12px;
          border: 1px solid var(--color-border-light);
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .speech-segment {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .seg-lang {
          font-size: 9px;
          font-weight: 700;
          color: var(--color-text-muted);
        }

        .seg-text {
          font-size: 11.5px;
          font-weight: 500;
          color: var(--color-text-dark);
          line-height: 1.4;
        }

        .speech-segment.translated {
          border-top: 1px solid var(--color-border-light);
          padding-top: 8px;
        }

        .speech-segment.translated .seg-lang {
          color: var(--color-cta);
        }

        .speech-segment.translated .seg-text {
          color: var(--color-cta);
          font-weight: 700;
          font-size: 12.5px;
        }

        .play-broadcast-btn {
          align-self: flex-start;
          margin-top: 6px;
          background-color: var(--color-cta);
          border: none;
          color: white;
          font-size: 9px;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 50px;
          display: flex;
          align-items: center;
          gap: 4px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}

/* --- WORKSHEET GENERATOR MOCK PANEL --- */
export function WorksheetGeneratorDemo() {
  const [grade, setGrade] = useState('grade3');
  const [subject, setSubject] = useState('math');
  const [dialect, setDialect] = useState('gondi');
  const [complexity, setComplexity] = useState('medium');
  const [isGenerating, setIsGenerating] = useState(false);
  const [worksheetResult, setWorksheetResult] = useState(null);

  const triggerGenerate = () => {
    setIsGenerating(true);
    setWorksheetResult(null);

    setTimeout(() => {
      setIsGenerating(false);
      setWorksheetResult({
        title: `${grade.toUpperCase()} ${subject.toUpperCase()} - ${dialect.toUpperCase()}`,
        id: `VS-WS-${Math.floor(1000 + Math.random() * 9000)}`,
        questions: [
          { q: '1. Addition: 5 + 3 = ? (पाँच जमा तीन बराबर कितना?)', ans: 'गोंडी अनुवाद अभ्यास: ८ (आठ)' },
          { q: '2. Count the trees below and write in Gondi numerals.', ans: 'झाड़ियों को गिनें और संख्या लिखें।' },
          { q: '3. Complete the pattern: 2, 4, 6, [ ]', ans: 'संख्या श्रेणी पूर्ण करें।' }
        ]
      });
    }, 1500);
  };

  return (
    <div className="demo-panel card-shadow animate-fade-in-up">
      <div className="demo-panel-header">
        <FileText size={18} color="var(--color-secondary)" />
        <h3>Worksheet Generator</h3>
      </div>

      <div className="worksheet-form">
        <div className="form-row-2">
          <div className="form-field">
            <label>Grade Level</label>
            <select value={grade} onChange={(e) => setGrade(e.target.value)}>
              <option value="grade1">Grade 1 (Balvatika)</option>
              <option value="grade2">Grade 2</option>
              <option value="grade3">Grade 3</option>
            </select>
          </div>
          
          <div className="form-field">
            <label>Subject</label>
            <select value={subject} onChange={(e) => setSubject(e.target.value)}>
              <option value="math">Mathematics</option>
              <option value="literacy">Literacy / Lang</option>
              <option value="fln">FLN Skills</option>
            </select>
          </div>
        </div>

        <div className="form-row-2">
          <div className="form-field">
            <label>Tribal Dialect</label>
            <select value={dialect} onChange={(e) => setDialect(e.target.value)}>
              <option value="gondi">Gondi (गोंडी)</option>
              <option value="santhali">Santhali (संताली)</option>
            </select>
          </div>

          <div className="form-field">
            <label>Complexity</label>
            <select value={complexity} onChange={(e) => setComplexity(e.target.value)}>
              <option value="easy">Easy (Foundational)</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard (Advanced)</option>
            </select>
          </div>
        </div>

        <button 
          className="btn-action press-effect" 
          onClick={triggerGenerate}
          disabled={isGenerating}
          style={{ backgroundColor: 'var(--color-secondary)', marginTop: '6px' }}
        >
          {isGenerating ? (
            <>
              <RefreshCw size={14} className="spinning-icon" />
              <span>Generating bilingual PDF...</span>
            </>
          ) : (
            <span>Generate Leveled Worksheet</span>
          )}
        </button>
      </div>

      {worksheetResult && (
        <div className="worksheet-preview-box animate-fade-in-up">
          <div className="ws-preview-header">
            <div>
              <h4>{worksheetResult.title}</h4>
              <span className="ws-id">{worksheetResult.id} • PDF Preview</span>
            </div>
            <CheckCircle size={18} color="var(--color-success-green)" />
          </div>

          <div className="ws-questions">
            {worksheetResult.questions.map((q, index) => (
              <div key={index} className="ws-question-item">
                <p className="ws-q">{q.q}</p>
                <p className="ws-ans">{q.ans}</p>
              </div>
            ))}
          </div>

          <div className="ws-actions">
            <button className="ws-btn press-effect">
              <Download size={12} />
              <span>Download PDF</span>
            </button>
            <button className="ws-btn secondary press-effect">
              <Share2 size={12} />
              <span>Share</span>
            </button>
          </div>
        </div>
      )}

      <style>{`
        .worksheet-form {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .form-row-2 {
          display: flex;
          gap: 8px;
        }

        .form-field {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .form-field label {
          font-size: 9px;
          font-weight: 700;
          color: var(--color-text-muted);
        }

        .form-field select {
          padding: 8px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--color-border-light);
          font-size: 11px;
          background-color: var(--color-bg-light);
          color: var(--color-primary);
        }

        .worksheet-preview-box {
          background-color: var(--color-white);
          border: 1.5px solid var(--color-border-light);
          border-radius: var(--radius-md);
          padding: 12px;
          box-shadow: var(--shadow-sm);
        }

        .ws-preview-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid var(--color-border-light);
          padding-bottom: 8px;
          margin-bottom: 8px;
        }

        .ws-preview-header h4 {
          font-size: 12px;
          font-weight: 700;
          color: var(--color-primary);
        }

        .ws-id {
          font-size: 9px;
          color: var(--color-text-muted);
        }

        .ws-questions {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .ws-question-item {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .ws-q {
          font-size: 10.5px;
          font-weight: 600;
          color: var(--color-text-dark);
        }

        .ws-ans {
          font-size: 9px;
          color: var(--color-text-muted);
          font-style: italic;
          padding-left: 8px;
        }

        .ws-actions {
          display: flex;
          gap: 8px;
          border-top: 1px solid var(--color-border-light);
          padding-top: 8px;
          margin-top: 8px;
        }

        .ws-btn {
          flex: 1;
          border: none;
          background-color: var(--color-secondary);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 6px 12px;
          border-radius: var(--radius-sm);
          font-size: 10px;
          font-weight: 700;
          cursor: pointer;
        }

        .ws-btn.secondary {
          background-color: var(--color-bg-light);
          color: var(--color-primary);
          border: 1px solid var(--color-border-light);
        }
      `}</style>
    </div>
  );
}

/* --- FLASHCARD CREATOR DEMO --- */
export function FlashcardCreatorDemo() {
  const [category, setCategory] = useState('animals');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const cardDecks = {
    animals: [
      { english: 'Cat', tribal: 'बिळाई (Bilai)', phonetic: 'Bi-laa-ee', image: '🐱' },
      { english: 'Parrot', tribal: 'कोया (Koya)', phonetic: 'Ko-yaa', image: '🦜' },
      { english: 'Elephant', tribal: 'येनी (Yeni)', phonetic: 'Yay-nee', image: '🐘' }
    ],
    objects: [
      { english: 'Book', tribal: 'पोथी (Pothi)', phonetic: 'Po-thee', image: '📖' },
      { english: 'Clay Pot', tribal: 'कुंडा (Kunda)', phonetic: 'Kun-daa', image: '🏺' },
      { english: 'Pencil', tribal: 'लेखनी (Lekhani)', phonetic: 'Lay-kha-nee', image: '✏️' }
    ],
    verbs: [
      { english: 'To Read', tribal: 'वाचू कीना (Vachu Keena)', phonetic: 'Vaa-choo Kee-naa', image: '📚' },
      { english: 'To Write', tribal: 'लीही कीना (Leehee Keena)', phonetic: 'Lee-hee Kee-naa', image: '📝' },
      { english: 'To Laugh', tribal: 'कवना (Kavana)', phonetic: 'Ka-va-naa', image: '😄' }
    ]
  };

  const activeDeck = cardDecks[category];
  const activeCard = activeDeck[currentIndex];

  const handleNext = () => {
    setIsFlipped(false);
    setIsPlayingAudio(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % activeDeck.length);
    }, 150);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setIsPlayingAudio(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + activeDeck.length) % activeDeck.length);
    }, 150);
  };

  const triggerAudio = (e) => {
    e.stopPropagation(); // Avoid flipping the card when clicking audio
    setIsPlayingAudio(true);
    setTimeout(() => {
      setIsPlayingAudio(false);
    }, 1500);
  };

  return (
    <div className="demo-panel card-shadow animate-fade-in-up">
      <div className="demo-panel-header">
        <Layers size={18} color="var(--color-accent-orange)" />
        <h3>Bilingual Flashcard Creator</h3>
      </div>

      <div className="flashcard-controls">
        <label className="fc-select-label">Category</label>
        <select 
          value={category} 
          onChange={(e) => {
            setCategory(e.target.value);
            setCurrentIndex(0);
            setIsFlipped(false);
            setIsPlayingAudio(false);
          }}
          className="fc-category-select"
        >
          <option value="animals">Animals (🐱 🦜 🐘)</option>
          <option value="objects">Everyday Objects (📖 🏺 ✏️)</option>
          <option value="verbs">Action Verbs (📚 📝 😄)</option>
        </select>
      </div>

      {/* 3D Flippable Card Frame */}
      <div className="flashcard-perspective" onClick={() => setIsFlipped(!isFlipped)}>
        <div className={`flashcard-inner ${isFlipped ? 'flipped' : ''}`}>
          
          {/* Card Front Side */}
          <div className="flashcard-front">
            <span className="fc-emoji">{activeCard.image}</span>
            <span className="fc-lang-tag">English / Hindi</span>
            <h2 className="fc-word-main">{activeCard.english}</h2>
            <span className="fc-hint">Tap Card to Translate</span>
          </div>

          {/* Card Back Side */}
          <div className="flashcard-back">
            <span className="fc-lang-tag-back">Gondi Translation</span>
            <h2 className="fc-word-tribal">{activeCard.tribal}</h2>
            <span className="fc-phonetic">Pronounce: "{activeCard.phonetic}"</span>
            
            <button 
              className={`fc-speaker-btn press-effect ${isPlayingAudio ? 'playing' : ''}`}
              onClick={triggerAudio}
            >
              <Volume2 size={16} />
              <span>{isPlayingAudio ? 'Speaking...' : 'Listen Audio'}</span>
            </button>
          </div>

        </div>
      </div>

      {/* Navigation Indicators */}
      <div className="flashcard-footer-nav">
        <button className="fc-nav-btn press-effect" onClick={handlePrev}>
          ◀ Prev
        </button>
        <span className="fc-nav-indicator">
          {currentIndex + 1} of {activeDeck.length}
        </span>
        <button className="fc-nav-btn press-effect" onClick={handleNext}>
          Next ▶
        </button>
      </div>

      <style>{`
        .flashcard-controls {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .fc-select-label {
          font-size: 9px;
          font-weight: 700;
          color: var(--color-text-muted);
          text-transform: uppercase;
        }

        .fc-category-select {
          padding: 8px 12px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--color-border-light);
          font-size: 11px;
          font-weight: 600;
          background-color: var(--color-bg-light);
          color: var(--color-primary);
        }

        /* 3D Card Animation Styles */
        .flashcard-perspective {
          perspective: 1000px;
          width: 100%;
          height: 185px;
          cursor: pointer;
        }

        .flashcard-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          transform-style: preserve-3d;
        }

        .flashcard-inner.flipped {
          transform: rotateY(180deg);
        }

        .flashcard-front, .flashcard-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          border-radius: var(--radius-lg);
          padding: 20px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          border: 1.5px solid var(--color-border-light);
          box-shadow: var(--shadow-sm);
        }

        .flashcard-front {
          background-color: var(--color-bg-light);
          color: var(--color-primary);
        }

        .flashcard-back {
          background: linear-gradient(135deg, var(--color-primary) 0%, #15305B 100%);
          color: white;
          transform: rotateY(180deg);
          border-color: rgba(255, 255, 255, 0.1);
        }

        .fc-emoji {
          font-size: 32px;
          margin-bottom: 6px;
        }

        .fc-lang-tag {
          font-size: 9px;
          font-weight: 700;
          color: var(--color-text-muted);
          text-transform: uppercase;
        }

        .fc-lang-tag-back {
          font-size: 9px;
          font-weight: 700;
          color: var(--color-accent-orange);
          text-transform: uppercase;
        }

        .fc-word-main {
          font-size: 22px;
          font-weight: 800;
          color: var(--color-primary);
          margin: 4px 0 8px 0;
        }

        .fc-word-tribal {
          font-size: 22px;
          font-weight: 800;
          color: white;
          margin: 4px 0 2px 0;
        }

        .fc-phonetic {
          font-size: 10px;
          color: rgba(255,255,255,0.7);
          margin-bottom: 12px;
          font-style: italic;
        }

        .fc-hint {
          font-size: 9px;
          color: var(--color-secondary);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          animation: pulseOpacity 1.5s infinite alternate;
        }

        @keyframes pulseOpacity {
          from { opacity: 0.5; }
          to { opacity: 1; }
        }

        .fc-speaker-btn {
          border: none;
          background-color: var(--color-accent-orange);
          color: white;
          padding: 6px 14px;
          border-radius: 50px;
          font-size: 10px;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
        }

        .fc-speaker-btn.playing {
          background-color: var(--color-success-green);
        }

        .flashcard-footer-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid var(--color-border-light);
          padding-top: 12px;
        }

        .fc-nav-btn {
          background-color: var(--color-white);
          border: 1px solid var(--color-border-light);
          border-radius: var(--radius-sm);
          padding: 6px 12px;
          font-size: 11px;
          font-weight: 700;
          color: var(--color-primary);
          cursor: pointer;
        }

        .fc-nav-indicator {
          font-size: 11px;
          font-weight: 600;
          color: var(--color-text-muted);
        }
      `}</style>
    </div>
  );
}

