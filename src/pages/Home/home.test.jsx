/* eslint-disable no-undef */
import { render } from '@testing-library/react';
import MyThemeProvider from '../../styles/theme/MyThemeProvider';
import Home from './Home';

describe('Home', () => {
  it('should render Home', () => {
    // Tem que passar com o tema pois as props de estilos vem dai karalho!
    render(
      <MyThemeProvider>
        <Home />
      </MyThemeProvider>,
    );
  });
});
