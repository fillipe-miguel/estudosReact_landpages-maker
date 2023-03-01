/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';

import LayoutGridGallery from '..';

import * as mocks from '../../../mocks';
import { MyThemeProvider, theme } from '../../../styles';

describe('<LayoutGridGallery/>', () => {
  // ================================= Teste 01 =================================
  it('Should render default', () => {
    render(
      <MyThemeProvider>
        <LayoutGridGallery {...mocks.layouts.gridGallery} />
      </MyThemeProvider>,
    );

    // Getting a random thing to comprove rendering
    expect(screen.queryAllByRole('img')).toHaveLength(6);
  });

  // ================================= Teste 02 =================================
  it('Should render with background set', () => {
    const { container } = render(
      <MyThemeProvider>
        <LayoutGridGallery {...mocks.layouts.gridGallery} setBackground />
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
        <LayoutGridGallery {...mocks.layouts.gridGallery} setBackground />
      </MyThemeProvider>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
