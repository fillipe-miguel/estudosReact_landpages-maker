/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';

import MenuNav from '..';

import * as mocks from '../../../mocks';
import { MyThemeProvider, theme } from '../../../styles';

describe('<MenuNav />', () => {
  // ================================= Teste 1 =================================
  it('should render', () => {
    render(
      <MyThemeProvider>
        <MenuNav links={mocks.components.links} />
      </MyThemeProvider>,
    );

    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  // ================================= Teste 2 =================================
  it('should render without links', () => {
    render(
      <MyThemeProvider>
        <MenuNav />
      </MyThemeProvider>,
    );

    expect(screen.queryAllByRole('link')).toHaveLength(0);
  });

  // ================================= Teste 3 =================================
  it('should render with all links', () => {
    render(
      <MyThemeProvider>
        <MenuNav links={mocks.components.links} />
      </MyThemeProvider>,
    );

    const container = screen.getAllByRole('link');

    expect(container).toHaveLength(mocks.components.links.length);
  });

  // ================================= Teste 4 =================================
  it('should render with screen mobile', () => {
    render(
      <MyThemeProvider>
        <MenuNav links={mocks.components.links} />
      </MyThemeProvider>,
    );

    const container = screen.getByRole('navigation');

    expect(container).toHaveStyleRule('flex-flow', 'column nowrap', {
      media: theme.medias.lteMedium,
    });
  });
  // ================================= SNAPSHOT  =================================
  it('should match snapshot', () => {
    const { container } = render(
      <MyThemeProvider>
        <MenuNav links={mocks.components.links} />
      </MyThemeProvider>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
