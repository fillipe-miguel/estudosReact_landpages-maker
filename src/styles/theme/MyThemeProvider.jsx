import P from 'prop-types';
import React from 'react';
// Styles
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../global-styles';
import theme from './theme';

function MyThemeProvider({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}

MyThemeProvider.propTypes = {
  children: P.node.isRequired,
};

export default MyThemeProvider;
