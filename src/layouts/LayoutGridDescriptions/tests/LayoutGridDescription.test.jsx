/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';

import LayoutGridDescriptions from '..';

import * as mocks from '../../../mocks';
import { MyThemeProvider, theme } from '../../../styles';

describe('<LayoutGridDescriptions/>', () => {
  // ================================= Teste 01 =================================
  it('Should render default', () => {
    render(
      <MyThemeProvider>
        <LayoutGridDescriptions {...mocks.layouts.gridDescription} />
      </MyThemeProvider>,
    );

    // Getting a random thing to comprove rendering
    expect(screen.queryAllByRole('heading')).toHaveLength(4);
  });

  // ================================= Teste 02 =================================
  it('Should render with background set', () => {
    const { container } = render(
      <MyThemeProvider>
        <LayoutGridDescriptions
          {...mocks.layouts.gridDescription}
          setBackground
        />
      </MyThemeProvider>,
    );

    expect(container.firstChild).toHaveStyle({
      'background-color': theme.colors.primaryColor,
    });
  });

  // ================================= Snapshot =================================
  it('Should render with background set', () => {
    const { container } = render(
      <MyThemeProvider>
        <LayoutGridDescriptions
          {...mocks.layouts.gridDescription}
          setBackground
        />
      </MyThemeProvider>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
