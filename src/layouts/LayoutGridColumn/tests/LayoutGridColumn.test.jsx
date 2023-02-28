/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
// Styles
import MyThemeProvider from '../../../styles/theme/MyThemeProvider';
import theme from '../../../styles/theme/theme';
// Components
import LayoutGridColumn from '..';
// Mock
import { layoutGridColumnMock } from '../../../mocks/layoutsMocks';

describe('<LayoutGridColum />', () => {
  // ================================= Teste 01 =================================
  it('Should render without background', () => {
    const { container } = render(
      <MyThemeProvider>
        <LayoutGridColumn {...layoutGridColumnMock} />
      </MyThemeProvider>,
    );

    expect(container.firstChild).toHaveStyle({
      'background-color': theme.colors.white,
    });

    expect(
      screen.queryByRole('heading', { name: 'Grid Two columns' }),
    ).toBeInTheDocument();
  });

  // ================================= Teste 02 =================================
  it('Should render with background', () => {
    const { container } = render(
      <MyThemeProvider>
        <LayoutGridColumn {...layoutGridColumnMock} setBackground />
      </MyThemeProvider>,
    );

    expect(container.firstChild).toHaveStyle({
      'background-color': theme.colors.primaryColor,
    });
  });

  // ================================= Teste 03 =================================
  it('should match snapshot', () => {
    const { container } = render(
      <MyThemeProvider>
        <LayoutGridColumn {...layoutGridColumnMock} setBackground />
      </MyThemeProvider>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
