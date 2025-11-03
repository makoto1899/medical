import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('ja-JP', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long'
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="time-display">
          <div className="current-time">{formatTime(currentTime)}</div>
          <div className="current-date">{formatDate(currentTime)}</div>
        </div>

        <div className="navigation-buttons">
          <Link to="/page1" className="nav-button button-one">
            <span className="button-icon">📋</span>
            <span className="button-text">医療情報管理</span>
          </Link>
          <Link to="/page2" className="nav-button button-two">
            <span className="button-icon">🏥</span>
            <span className="button-text">予約管理</span>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default App;

