import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import 'tailwindcss/tailwind.css';

import App from './app/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
