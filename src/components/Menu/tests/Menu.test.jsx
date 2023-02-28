/* eslint-disable no-undef */
import { fireEvent, render, screen } from '@testing-library/react';
// Styles
import MyThemeProvider from '../../../styles/theme/MyThemeProvider';
import theme from '../../../styles/theme/theme';
// Components
import Menu from '..';
// Mocks
import { linksMock, logoDataMock } from '../../../mocks/componentsMocks';

describe('<Menu />', () => {
  // ================================= Teste 01 =================================
  it('Should render LogoLink and MenuNav', () => {
    render(
      <MyThemeProvider>
        <Menu links={linksMock} logoData={logoDataMock} />
      </MyThemeProvider>,
    );

    // ! Testando o se o LogoLink se encontra
    expect(
      screen.queryByRole('heading', { name: logoDataMock.text }),
    ).toBeInTheDocument();

    // ! Testando o se o MenuNav se encontra
    expect(
      screen.queryByRole('navigation', { name: 'Main menu' }),
    ).toBeInTheDocument();
  });

  // ================================= Teste 02 =================================
  it('Should render mobile Menu and the button Open/Close', () => {
    render(
      <MyThemeProvider>
        <Menu links={linksMock} logoData={logoDataMock} />
      </MyThemeProvider>,
    );

    const button = screen.getByLabelText('Open/Close Menu');
    const menuContainer = button.nextSibling;

    // ! Testando se o botão NÃO ta na tela quando PC
    expect(button).toHaveStyleRule('display', 'none');

    // ! Testando se o botão ta na tela quando mobile
    expect(button).toHaveStyleRule('display', 'flex', {
      media: theme.medias.lteMedium,
    });

    // ! Testando se o menu ta oculto
    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.medias.lteMedium,
    });

    // ! Testando se o botão está com o formato de abrir
    expect(screen.getByLabelText('Open menu icon')).toBeInTheDocument();
  });

  // ================================= Teste 03 =================================
  it('Should button Open/Close menu button work', () => {
    render(
      <MyThemeProvider>
        <Menu links={linksMock} logoData={logoDataMock} />
      </MyThemeProvider>,
    );

    const button = screen.getByLabelText('Open/Close Menu');
    const menuContainer = button.nextSibling;

    // * Aqui o botão foi clicado para abrir !!!

    fireEvent.click(button); // Clicando no botão

    // ! Testando se o menu ta visível
    expect(menuContainer).toHaveStyleRule('opacity', '1', {
      media: theme.medias.lteMedium,
    });

    // ! Testando se o botão está com o formato de fechar
    expect(screen.getByLabelText('Close menu icon')).toBeInTheDocument();

    // * Aqui o botão foi clicado para fechar !!!

    fireEvent.click(button); // Clicando no botão

    // ! Testando se o menu ta visível
    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.medias.lteMedium,
    });

    // ! Testando se o botão está com o formato de fechar
    expect(screen.getByLabelText('Open menu icon')).toBeInTheDocument();
  });

  /// ================================= Teste 04 =================================
  it('Should close menu clicking on container', () => {
    render(
      <MyThemeProvider>
        <Menu links={linksMock} logoData={logoDataMock} />
      </MyThemeProvider>,
    );

    const button = screen.getByLabelText('Open/Close Menu');
    const menuContainer = button.nextSibling;

    fireEvent.click(menuContainer); // Clicando no botão para abrir

    // * Aqui o menuContainer clicado !!!

    fireEvent.click(menuContainer); // Clicando no Container para fechar

    // ! Testando se o menu ta visível
    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.medias.lteMedium,
    });

    // ! Testando se o botão está com o formato de fechar
    expect(screen.getByLabelText('Open menu icon')).toBeInTheDocument();
  });

  // ================================= Teste 05 =================================
  it('Should not render links', () => {
    render(
      <MyThemeProvider>
        <Menu logoData={logoDataMock} />
      </MyThemeProvider>,
    );

    // ! Vendo se o MenuNav tem algum link filho
    expect(
      screen.queryByRole('navigation', { name: 'Main menu' }).firstChild,
    ).not.toBeInTheDocument();
  });

  // ================================= Snapshot =================================
  it('Should not render links', () => {
    const { container } = render(
      <MyThemeProvider>
        <Menu logoData={logoDataMock} links={linksMock} />
      </MyThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
