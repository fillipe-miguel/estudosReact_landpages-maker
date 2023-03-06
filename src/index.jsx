import React from 'react';
import ReactDOM from 'react-dom/client';

import Teste from './pages/Teste/Teste';

import { MyThemeProvider } from './styles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyThemeProvider>
      <Teste />
    </MyThemeProvider>
  </React.StrictMode>,
);
