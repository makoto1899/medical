import React from 'react';
import { Link } from 'react-router-dom';
import './PageTwo.css';

function PageTwo() {
  return (
    <div className="page-container page-two">
      <div className="page-content">
        <h1>🏥 ページ2</h1>
        <p>2番目のページへようこそ</p>
        <div className="info-box">
          <h2>予約管理システム</h2>
          <p>患者の予約やスケジュールを効率的に管理します。</p>
          <ul>
            <li>オンライン予約</li>
            <li>スケジュール管理</li>
            <li>リマインダー通知</li>
            <li>待ち時間の最適化</li>
          </ul>
        </div>
        <Link to="/" className="back-button">
          ← ホームに戻る
        </Link>
      </div>
    </div>
  );
}

export default PageTwo;

