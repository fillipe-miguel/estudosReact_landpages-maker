/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';

import LayoutCenterContent from '..';

import * as mocks from '../../../mocks';
import { MyThemeProvider, theme } from '../../../styles';

describe('<LayoutCenterContent />', () => {
  // ================================= Test 01 =================================
  it('Should render default', () => {
    render(
      <MyThemeProvider>
        <LayoutCenterContent {...mocks.layouts.layoutCenterContent} />
      </MyThemeProvider>,
    );

    // Getting a random component to comprove!
    expect(
      screen.queryByRole('heading', { name: 'Header Level 3' }),
    ).toBeInTheDocument();
  });

  // ================================= Test 02 =================================
  it('Should render with background set', () => {
    const { container } = render(
      <MyThemeProvider>
        <LayoutCenterContent
          {...mocks.layouts.layoutCenterContent}
          setBackground
        />
      </MyThemeProvider>,
    );

    // Getting styles of first container should be <SectionBackground/>
    expect(container.firstChild).toHaveStyle({
      'background-color': theme.colors.darkBg,
    });

    // Getting a heading to check color
    expect(
      screen.queryByRole('heading', { name: 'Layout Center' }),
    ).toHaveStyle({
      color: theme.colors.white,
    });
  });

  // ================================= Snapshot =================================
  it('Should render with background set', () => {
    const { container } = render(
      <MyThemeProvider>
        <LayoutCenterContent {...mocks.layouts.layoutCenterContent} />
      </MyThemeProvider>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
