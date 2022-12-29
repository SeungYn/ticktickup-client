import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import App from './App';
import Main from './pages/Main';
import TimeDetail from './pages/TimeDetail';
import MyInfo from './pages/MyInfo';
import Login from './pages/Login';
import RegisterPage from './pages/RegisterPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Main /> },
      {
        path: 'TimeDetail',
        element: <TimeDetail />,
      },
      {
        path: 'Myinfo',
        element: <MyInfo />,
      },
      {
        path: 'Login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
