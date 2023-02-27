/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
// Styles
import MyThemeProvider from '../../../styles/theme/MyThemeProvider';
// Component
import MenuLink from '..';

describe('<MenuLink />', () => {
  // ================================= Teste 01 =================================
  it('should render a link', () => {
    render(
      <MyThemeProvider>
        <MenuLink link="http://localhost">Teste</MenuLink>
      </MyThemeProvider>,
    );

    expect(screen.getByRole('link', { name: 'Teste' })).toBeInTheDocument();
  });

  // ================================= Teste 02 =================================
  it('should render with new tab atribute', () => {
    render(
      <MyThemeProvider>
        <MenuLink link="http://localhost" newTab>
          Teste
        </MenuLink>
      </MyThemeProvider>,
    );

    expect(screen.getByRole('link', { name: 'Teste' })).toHaveAttribute(
      'target',
      '_blank',
    );
  });

  // ================================= SNAPSHOT =================================
  it('should match snapshot', () => {
    const {container} = render(
      <MyThemeProvider>
        <MenuLink link="http://localhost" newTab>
          Teste
        </MenuLink>
      </MyThemeProvider>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
