/* eslint-disable no-undef */
import { render } from '@testing-library/react';
import LayoutFooter from '..';

import { MyThemeProvider } from '../../../styles';

describe('<LayoutFooter />', () => {
  it('Should match snapshot', () => {
    const { container } = render(
      <MyThemeProvider>
        <LayoutFooter footerHtml={'<a href="#">Teste intenso aqui!</a>'} />
      </MyThemeProvider>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
