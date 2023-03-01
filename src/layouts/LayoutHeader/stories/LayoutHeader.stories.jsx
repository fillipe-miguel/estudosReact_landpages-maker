import LayoutHeader from '..';

import * as mocks from '../../../mocks';

export default {
  title: 'LayoutHeader',
  component: LayoutHeader,
  args: {
    links: mocks.components.links,
    logoData: mocks.components.logoData,
  },
};

export function Render01(args) {
  return <LayoutHeader {...args} />;
}
