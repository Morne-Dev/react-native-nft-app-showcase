import React from 'react';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import './index.css';
import App from './App';

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
