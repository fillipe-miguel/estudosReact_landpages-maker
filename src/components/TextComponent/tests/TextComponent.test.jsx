/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';

import TextComponent from '..';

import { MyThemeProvider, theme } from '../../../styles';

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
    expect(textComponent).toBeInTheDocument();
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

      <div
        class="c0"
      >
        Teste
      </div>
    `);
  });
});
