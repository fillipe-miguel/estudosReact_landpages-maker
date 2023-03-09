import React from 'react';
import ReactDOM from 'react-dom/client';

import { Home } from './pages';

import { MyThemeProvider } from './styles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <MyThemeProvider>
    <Home />
  </MyThemeProvider>,
);
