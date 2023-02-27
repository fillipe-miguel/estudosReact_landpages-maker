/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
// Styles
import MyThemeProvider from '../../../styles/theme/MyThemeProvider';
import theme from '../../../styles/theme/theme';
// Components
import Heading from '..';

describe('<Heading />', () => {
  // ================================= test 1 =================================
  it('Should render default', () => {
    render(
      <MyThemeProvider>
        <Heading level="1">texto</Heading>
      </MyThemeProvider>,
    );
    // Heading ==> h1 | h6 // ! Pegando o componente renderizado pelo texto
    const heading = screen.getByRole('heading', { name: 'texto' });

    // ! Checando estilo
    // Cor padrão | FontSize padrão
    expect(heading).toHaveStyle({
      color: theme.colors.primaryColor,
      'font-size': theme.fonts.sizes.large,
      'text-transform': 'none',
    });
  });

  // ================================= test 2 =================================
  it('Should render with white color', () => {
    render(
      <MyThemeProvider>
        <Heading level="1" colorDarker={false}>
          texto
        </Heading>
      </MyThemeProvider>,
    );
    // Heading ==> h1 | h6 // ! Pegando o componente renderizado pelo texto
    const heading = screen.getByRole('heading', { name: 'texto' });

    // ! Checando estilo
    // Cor white
    expect(heading).toHaveStyle({
      color: theme.colors.white,
    });
  });

  // ================================= test 3 =================================
  it('Should render with xxxlarge size', () => {
    render(
      <MyThemeProvider>
        <Heading level="1" size="xxxlarge">
          texto
        </Heading>
      </MyThemeProvider>,
    );
    // Heading ==> h1 | h6 // ! Pegando o componente renderizado pelo texto
    const heading = screen.getByRole('heading', { name: 'texto' });

    // ! Checando estilo
    // FontSize grandão
    expect(heading).toHaveStyle({
      'font-size': theme.fonts.sizes.xxxlarge,
    });
  });

  // ================================= test 4 =================================
  it('Should render with large size', () => {
    render(
      <MyThemeProvider>
        <Heading level="1" size="large">
          texto
        </Heading>
      </MyThemeProvider>,
    );
    // Heading ==> h1 | h6 // ! Pegando o componente renderizado pelo texto
    const heading = screen.getByRole('heading', { name: 'texto' });

    // ! Checando estilo
    expect(heading).toHaveStyle({
      'font-size': theme.fonts.sizes.large,
    });
  });

  // ================================= test 5 =================================
  it('Should render correct font-size when screen mobile', () => {
    render(
      <MyThemeProvider>
        <Heading level="1" size="xxxlarge">
          texto
        </Heading>
      </MyThemeProvider>,
    );
    // Heading ==> h1 | h6 // ! Pegando o componente renderizado pelo texto
    const heading = screen.getByRole('heading', { name: 'texto' });

    // ! Checando estilo
    // Mudando a fonte quando a tela fica pequena
    expect(heading).toHaveStyleRule('font-size', theme.fonts.sizes.xlarge, {
      media: theme.medias.lteMedium,
    });
  });

  // ================================= test 6 =================================
  it('Should render with uppercase', () => {
    render(
      <MyThemeProvider>
        <Heading level="4" uppercase>
          texto
        </Heading>
      </MyThemeProvider>,
    );
    // Heading ==> h1 | h6 // ! Pegando o componente renderizado pelo texto
    const heading = screen.getByRole('heading', { name: 'texto' });

    // ! Checando estilo
    // Text transform
    expect(heading).toHaveStyle({
      'text-transform': 'uppercase',
    });
  });

  // ================================= Snapshot =================================
  it('Should match snapshot', () => {
    const {container} = render(
      <MyThemeProvider>
        <Heading level="1">SNAP</Heading>
      </MyThemeProvider>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
