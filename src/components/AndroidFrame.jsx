import React, { useState, useEffect } from 'react';
import { Wifi, Battery, Signal } from 'lucide-react';

export default function AndroidFrame({ children }) {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12; // 0 should be 12
      minutes = minutes < 10 ? '0' + minutes : minutes;
      setTime(`${hours}:${minutes} ${ampm}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app-simulator-wrapper">
      {/* Android Top Status Bar */}
      <div className="android-status-bar">
        <span>{time}</span>
        <div className="status-bar-icons">
          <Signal size={14} strokeWidth={2.5} />
          <Wifi size={14} strokeWidth={2.5} />
          <Battery size={16} strokeWidth={2.5} style={{ transform: 'rotate(90deg)', transformOrigin: 'center' }} />
        </div>
      </div>

      {/* Screen Viewport with Navigation Gestures */}
      <div className="app-screen-viewport">
        {children}
      </div>

      {/* Outer 3D Shadows & Android Navigation Pill */}
      <div className="phone-shadow-overlay" />
      <div className="android-gesture-pill" />
    </div>
  );
}
