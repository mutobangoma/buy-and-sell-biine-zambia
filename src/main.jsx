import 'flowbite';
import 'flowbite/dist/flowbite.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import 'lineicons/dist/lineicons.css';

// ✅ Import vite-plugin-pwa auto-register helper
import { registerSW } from 'virtual:pwa-register';

const updateSW = registerSW({
  onNeedRefresh() {
    if (confirm("🚀 A new version is available. Refresh now?")) {
      updateSW(true);
    }
  },
  onOfflineReady() {
    console.log("✅ App is ready to work offline.");
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
