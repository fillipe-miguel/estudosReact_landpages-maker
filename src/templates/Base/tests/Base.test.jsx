/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';

import { MyThemeProvider } from '../../../styles';

import Base from '../Base';

// Um mock criado para aglomerar as coisas
import { baseArgs } from '../stories/Base.stories';

describe('<Base />', () => {
  // ================================= Teste 01 =================================
  it('Should match snapshot', () => {
    const { container } = render(
      <MyThemeProvider>
        <Base {...baseArgs} />
      </MyThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  // ================================= Teste 02 =================================
  it('Should render whit links modifier', () => {
    render(
      <MyThemeProvider>
        <Base
          {...baseArgs}
          links={undefined}
          logoData={{
            text: 'Teste',
            link: '#',
            srcImage: '',
          }}
        />
      </MyThemeProvider>,
    );

    expect(screen.queryByRole('heading', { name: 'Teste' })).toBeInTheDocument();
  });
});
