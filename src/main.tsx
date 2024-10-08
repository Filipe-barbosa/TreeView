import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import { raise } from '@/shared/exceptions.ts';

ReactDOM.createRoot(
  document.getElementById('root') ?? raise('root not found'),
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
