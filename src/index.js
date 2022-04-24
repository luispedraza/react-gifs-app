import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import GifApp from "./components/GifApp"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GifApp />
  </React.StrictMode>
);

