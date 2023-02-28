/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
// Styles
import MyThemeProvider from '../../../styles/theme/MyThemeProvider';
// Components
import LogoLink from '../LogoLink';

describe('<LogoLink/>', () => {
  // ================================= Teste 01 =================================
  it('should render without image', () => {
    render(
      <MyThemeProvider>
        <LogoLink text="Meu Título" link="#" />
      </MyThemeProvider>,
    );

    expect(
      screen.queryByRole('heading', { name: 'Meu Título' }),
    ).toBeInTheDocument();
  });

  // ================================= Teste 02 =================================
  it('should render with image', () => {
    render(
      <MyThemeProvider>
        <LogoLink
          text="Meu Título com imagem"
          link="#"
          srcImage="public\assets\images\logo.svg"
        />
      </MyThemeProvider>,
    );

    expect(
      screen.queryByRole('img', { name: 'Meu Título com imagem' }),
    ).toBeInTheDocument();
  });

  // ================================= Snapshot =================================
  it('should match snapshot', () => {
    const { container } = render(
      <MyThemeProvider>
        <LogoLink text="Meu Título com imagem" link="#" />
      </MyThemeProvider>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
