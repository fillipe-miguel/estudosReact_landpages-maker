import React from 'react';
import ReactDOM from 'react-dom/client';
// Styles
import MyThemeProvider from './styles/theme/MyThemeProvider';
// Pages
import Home from './pages/Home';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyThemeProvider>
      <Home />
    </MyThemeProvider>
  </React.StrictMode>,
);
