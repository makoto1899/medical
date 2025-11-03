import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './PageOne.css';

function PageOne() {
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');
  const [calculatedTimes, setCalculatedTimes] = useState({});

  const handleHourChange = (e) => {
    const value = e.target.value;
    if (value === '' || (Number(value) >= 0 && Number(value) <= 23)) {
      setHour(value);
      setCalculatedTimes({});
    }
  };

  const handleMinuteChange = (e) => {
    const value = e.target.value;
    if (value === '' || (Number(value) >= 0 && Number(value) <= 59)) {
      setMinute(value);
      setCalculatedTimes({});
    }
  };

  const calculateTime = (addMinutes) => {
    if (hour === '' || minute === '') {
      alert('時刻と分数を入力してください');
      return;
    }

    const totalMinutes = Number(hour) * 60 + Number(minute) + addMinutes;
    const newHour = Math.floor(totalMinutes / 60) % 24;
    const newMinute = totalMinutes % 60;

    return { hour: newHour, minute: newMinute, duration: addMinutes };
  };

  const handleDurationClick = (duration, label) => {
    const result = calculateTime(duration);
    if (result) {
      setCalculatedTimes({
        [label]: result
      });
    }
  };

  const handleCurrentTime = () => {
    const now = new Date();
    setHour(now.getHours().toString());
    setMinute(now.getMinutes().toString());
    setCalculatedTimes({});
  };

  const handleTimeAfter3Minutes = () => {
    const now = new Date();
    const after3Min = new Date(now.getTime() + 3 * 60000);
    setHour(after3Min.getHours().toString());
    setMinute(after3Min.getMinutes().toString());
    setCalculatedTimes({});
  };

  return (
    <div className="page-container page-one">
      <div className="page-content">
        <div className="time-input-section">
          <h2>⏰ 時間入力フォーム</h2>
          <form onSubmit={(e) => e.preventDefault()} className="time-form">
            <div className="form-row">
              <div className="form-group">
                <div className="input-wrapper">
                  <input
                    type="number"
                    id="hour"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    min="0"
                    max="23"
                    value={hour}
                    onChange={handleHourChange}
                    placeholder="0-23"
                    className="time-input"
                  />
                  <span className="input-unit">時</span>
                </div>
              </div>

              <div className="form-group">
                <div className="input-wrapper">
                  <input
                    type="number"
                    id="minute"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    min="0"
                    max="59"
                    value={minute}
                    onChange={handleMinuteChange}
                    placeholder="0-59"
                    className="time-input"
                  />
                  <span className="input-unit">分</span>
                </div>
              </div>

              <div className="quick-time-buttons">
                <button
                  type="button"
                  className="quick-button"
                  onClick={handleCurrentTime}
                >
                  現時刻
                </button>
                <button
                  type="button"
                  className="quick-button"
                  onClick={handleTimeAfter3Minutes}
                >
                  3分後
                </button>
              </div>
            </div>

            <div className="duration-buttons">
              <button
                type="button"
                className="duration-button"
                onClick={() => handleDurationClick(15, '15M')}
              >
                15M
              </button>
              <button
                type="button"
                className="duration-button"
                onClick={() => handleDurationClick(30, '30M')}
              >
                30M
              </button>
              <button
                type="button"
                className="duration-button"
                onClick={() => handleDurationClick(60, '1H')}
              >
                1H
              </button>
              <button
                type="button"
                className="duration-button"
                onClick={() => handleDurationClick(90, '1.5H')}
              >
                1.5H
              </button>
              <button
                type="button"
                className="duration-button"
                onClick={() => handleDurationClick(120, '2H')}
              >
                2H
              </button>
            </div>

            {Object.keys(calculatedTimes).length > 0 && (
              <div className="calculated-results">
                <h3>計算結果:</h3>
                {Object.entries(calculatedTimes).map(([label, result]) => (
                  <div key={label} className="result-item">
                    <span className="result-label">{label}後:</span>
                    <span className="result-time">
                      {String(result.hour).padStart(2, '0')}時
                      {String(result.minute).padStart(2, '0')}分
                    </span>
                  </div>
                ))}
              </div>
            )}

            {hour !== '' && minute !== '' && (
              <div className="time-display-result">
                入力中の時刻: <strong>{hour}時{minute}分</strong>
              </div>
            )}
          </form>
        </div>

        <Link to="/" className="back-button">
          ← ホームに戻る
        </Link>
      </div>
    </div>
  );
}

export default PageOne;

