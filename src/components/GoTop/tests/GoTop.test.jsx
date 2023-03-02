/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';

import GoTop from '..';

import { MyThemeProvider } from '../../../styles';

describe('<GoTop />', () => {
  // ================================= test 1 =================================
  it('Should render default', () => {
    render(
      <MyThemeProvider>
        <GoTop />
      </MyThemeProvider>,
    );

    expect(
      screen.getByRole('link', { name: 'Button go to top' }),
    ).toHaveAttribute('href', '#');
  });

  // ================================= Snapshot =================================
  it('Should render default', () => {
    const { container } = render(
      <MyThemeProvider>
        <GoTop />
      </MyThemeProvider>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
