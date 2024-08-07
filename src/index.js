import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'App';

import './i18n';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<p>Loading...</p>}>
      <BrowserRouter basename="/React-Site-Irina">
        <App />
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>
);
