import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages';

import { MyThemeProvider } from './styles';

const Router = createBrowserRouter([
  {
    path: '*',
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <MyThemeProvider>
    <RouterProvider router={Router} />
  </MyThemeProvider>,
);
