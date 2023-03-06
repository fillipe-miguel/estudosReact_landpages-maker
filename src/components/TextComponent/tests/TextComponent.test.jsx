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

  // ================================= Teste 03 =================================
  it('Should render as div when html input content', () => {
    render(
      <MyThemeProvider>
        <TextComponent colorDarker={false} asHtml>
          Teste
        </TextComponent>
      </MyThemeProvider>,
    );

    const textComponent = screen.getByText('Teste');

    expect(textComponent).toMatchInlineSnapshot(`
      .c0 {
        font-size: 1.6rem;
        color: #FFF;
      }

      .c0 p {
        margin: 2.4rem 0;
      }

      .c0 a {
        font-weight: bolder;
        color: #DC143C;
      }

      .c0 a:hover {
        -webkit-text-decoration: underline;
        text-decoration: underline;
      }

      .c0 h1,
      .c0 h2,
      .c0 h3,
      .c0 h4,
      .c0 h5,
      .c0 h6 {
        margin: 1.6rem 0;
      }

      .c0 ol,
      .c0 ul {
        margin: 1.6rem;
      }

      .c0 ol > li,
      .c0 ul > li {
        margin: 1.6rem 0;
        font-style: italic;
      }

      <div
        class="c0"
      >
        Teste
      </div>
    `);
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
        font-size: 1.6rem;
        color: #0A1128;
      }

      .c0 p {
        margin: 2.4rem 0;
      }

      .c0 a {
        font-weight: bolder;
        color: #DC143C;
      }

      .c0 a:hover {
        -webkit-text-decoration: underline;
        text-decoration: underline;
      }

      .c0 h1,
      .c0 h2,
      .c0 h3,
      .c0 h4,
      .c0 h5,
      .c0 h6 {
        margin: 1.6rem 0;
      }

      .c0 ol,
      .c0 ul {
        margin: 1.6rem;
      }

      .c0 ol > li,
      .c0 ul > li {
        margin: 1.6rem 0;
        font-style: italic;
      }

      <p
        class="c0"
      >
        Teste
      </p>
    `);
  });
});
