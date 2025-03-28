// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // react-dom/client dan import qilish
import App from './App';
import './styles.css';

// React 18 dan boshlab
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
