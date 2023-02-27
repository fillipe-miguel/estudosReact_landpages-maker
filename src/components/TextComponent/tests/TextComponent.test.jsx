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

  // ================================= Snapshot =================================
  it('Match snapshot', () => {
    render(
      <MyThemeProvider>
        <TextComponent>Teste</TextComponent>
      </MyThemeProvider>,
    );

    // FirstChild para não pegar a div de fora
    expect(screen.getByText('Teste')).toMatchInlineSnapshot(`
      .c0 {
        font-size: 2.4rem;
      }

      <p
        class="c0"
      >
        Teste
      </p>
    `);
  });
});
