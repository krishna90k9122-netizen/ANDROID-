import React from 'react';

export default function AndroidFrame({ children }) {
  return (
    <div className="app-simulator-wrapper">
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
