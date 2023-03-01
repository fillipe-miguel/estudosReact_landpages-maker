import React from 'react';
import ReactDOM from 'react-dom/client';

import { MyThemeProvider } from './styles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyThemeProvider>
      <h1>Olá Mundo!</h1>
    </MyThemeProvider>
  </React.StrictMode>,
);
