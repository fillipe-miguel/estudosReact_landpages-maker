/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
// Styles
import MyThemeProvider from '../../../styles/theme/MyThemeProvider';
import theme from '../../../styles/theme/theme';
// Mocks
import { layoutCenterContentMock } from '../../../mocks/layoutsMocks';
// Components
import LayoutCenterContent from '..';

describe('<LayoutCenterContent />', () => {
  // ================================= Test 01 =================================
  it('Should render default', () => {
    render(
      <MyThemeProvider>
        <LayoutCenterContent {...layoutCenterContentMock} />
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
        <LayoutCenterContent {...layoutCenterContentMock} setBackground />
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
        <LayoutCenterContent {...layoutCenterContentMock} />
      </MyThemeProvider>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
