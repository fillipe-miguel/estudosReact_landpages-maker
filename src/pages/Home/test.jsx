/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import MyThemeProvider from '../../styles/theme/MyThemeProvider';
import Home from './Home';

it('should test', () => {
  // Tem que passar com o tema pois as props de estilos vem dai karalho!
  render(
    <MyThemeProvider>
      <Home />
    </MyThemeProvider>,
  );
  screen.debug();
});
