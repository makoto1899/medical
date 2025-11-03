import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import PageOne from './PageOne';
import PageTwo from './PageTwo';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/page1" element={<PageOne />} />
        <Route path="/page2" element={<PageTwo />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// PWAを有効化するには、unregister()をregister()に変更してください
serviceWorkerRegistration.register();

// パフォーマンス測定を開始したい場合は、結果をログに記録する関数を渡します
// 例: reportWebVitals(console.log)
// または分析エンドポイントに送信します。詳細: https://bit.ly/CRA-vitals
reportWebVitals();

