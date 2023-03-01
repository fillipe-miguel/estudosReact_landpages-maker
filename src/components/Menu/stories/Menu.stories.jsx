import Menu from '..';

import * as mocks from '../../../mocks';

export default {
  title: 'Menu',
  component: Menu,
  args: {
    links: mocks.components.links,
    logoData: mocks.components.logoData,
  },
};

export function Render01(args) {
  return <Menu {...args} />;
}
