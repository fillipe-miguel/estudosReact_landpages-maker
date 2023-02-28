/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
// Styles
import MyThemeProvider from '../../../styles/theme/MyThemeProvider';
import theme from '../../../styles/theme/theme';
// Component
import TextComponent from '..';

describe('<TextComponent />', () => {
  // ================================= Render =================================
  it('Should render default with font size correct', () => {
    render(
      <MyThemeProvider>
        <TextComponent>Teste</TextComponent>
      </MyThemeProvider>,
    );

    const textComponent = screen.getByText('Teste');

    // ! Checando estilo
    expect(textComponent).toHaveStyle({
      'font-size': theme.fonts.sizes.medium,
    });
  });

  // ================================= Render =================================
  it('Should render with correct color font', () => {
    render(
      <MyThemeProvider>
        <TextComponent colorDarker={false}>Teste</TextComponent>
      </MyThemeProvider>,
    );

    const textComponent = screen.getByText('Teste');

    // ! Checando estilo
    expect(textComponent).toHaveStyle({
      color: theme.colors.white,
    });
  });

  // ================================= Snapshot =================================
  it('Match snapshot', () => {
    const { container } = render(
      <MyThemeProvider>
        <TextComponent>Teste</TextComponent>
      </MyThemeProvider>,
    );

    // FirstChild para não pegar a div de fora
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        font-size: 2.4rem;
        color: #0A1128;
      }

      <p
        class="c0"
      >
        Teste
      </p>
    `);
  });
});
