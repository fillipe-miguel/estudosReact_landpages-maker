/* eslint-disable no-undef */
import { render } from '@testing-library/react';
// Styles
import MyThemeProvider from '../../../styles/theme/MyThemeProvider';
import theme from '../../../styles/theme/theme';
// Component
import SectionBackground from '..';

describe('<SectionBackground />', () => {
  // ================================= Teste 01 =================================
  it('should render with bg darker', () => {
    const { container } = render(
      <MyThemeProvider>
        <SectionBackground setBackground>
          <h1>Teste</h1>
        </SectionBackground>
      </MyThemeProvider>,
    );

    expect(container.firstChild).toHaveStyle({
      'background-color': theme.colors.primaryColor,
    });
  });

  // ================================= Teste 01 =================================
  it('should render with bg light', () => {
    const { container } = render(
      <MyThemeProvider>
        <SectionBackground>
          <h1>Teste</h1>
        </SectionBackground>
      </MyThemeProvider>,
    );

    expect(container.firstChild).toHaveStyle({
      'background-color': theme.colors.white,
    });
  });

  // ================================= Teste 01 =================================
  it('should match to snapshot', () => {
    const { container } = render(
      <MyThemeProvider>
        <SectionBackground>
          <h1>Teste</h1>
        </SectionBackground>
      </MyThemeProvider>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
