import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/styles/globals.css';
import Router from '@/pages/router';

const root = createRoot(document.getElementById('root')!);

root.render(
  <StrictMode>
    <Router />
  </StrictMode>,
);
