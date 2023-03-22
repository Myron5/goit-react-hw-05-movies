// import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { App } from 'components/App';

import './index.css';

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename={'/goit-react-hw-05-movies'}>
    <App />
  </BrowserRouter>
);
