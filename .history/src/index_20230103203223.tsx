import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import App from './App';
import Main from './pages/Main';
import TimeDetail from './pages/TimeDetail';
import MyInfo from './pages/MyInfo';
import LoginContainer from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { Provider } from 'react-redux';
import { store } from './modules';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Provider store={store}>
        <App />
      </Provider>
    ),
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
    ],
  },
  {
    path: 'Login',
    element: <LoginContainer />,
  },
  {
    path: 'register',
    element: <RegisterPage />,
  },
]);

root.render(<RouterProvider router={router}></RouterProvider>);
