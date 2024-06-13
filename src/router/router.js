// src/router/routes.js
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/homePage/Home';
import MainLayout from '../layouts/MainLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      // Add more routes here as needed
    ],
  },
]);