import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import Main from './pages/Main';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [{ index: true, element: <Main /> }],
  },
]);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
