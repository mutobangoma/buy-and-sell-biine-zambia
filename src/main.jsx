import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import PostAd from './pages/PostAd';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<PostAd />} />
        <Route path="*" element={<App />} /> {/* fallback for 404s */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
