/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';

import LayoutGridColumn from '..';

import * as mocks from '../../../mocks';
import { MyThemeProvider, theme } from '../../../styles';

describe('<LayoutGridColum />', () => {
  // ================================= Teste 01 =================================
  it('Should render without background', () => {
    const { container } = render(
      <MyThemeProvider>
        <LayoutGridColumn {...mocks.layouts.layoutGridColumn} />
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
        <LayoutGridColumn {...mocks.layouts.layoutGridColumn} setBackground />
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
        <LayoutGridColumn {...mocks.layouts.layoutGridColumn} setBackground />
      </MyThemeProvider>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
