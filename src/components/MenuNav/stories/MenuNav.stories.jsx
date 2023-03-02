import MenuNav from '..';

import * as mocks from '../../../mocks';

export default {
  title: 'Components/Menu Nav',
  component: MenuNav,
  args: {
    links: mocks.components.links,
  },
};

export function Render01(args) {
  return <MenuNav {...args} />;
}
