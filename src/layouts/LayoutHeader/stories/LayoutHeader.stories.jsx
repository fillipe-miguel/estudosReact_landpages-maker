import LayoutHeader from '..';

import * as mocks from '../../../mocks';

export default {
  title: 'Layouts/LayoutHeader',
  component: LayoutHeader,
  args: {
    links: mocks.components.links,
    logoData: mocks.components.logoData,
  },
};

export function Render01(args) {
  return <LayoutHeader {...args} />;
}

export function Render02(args) {
  return (
    <LayoutHeader
      {...args}
      logoData={{
        ...mocks.components.logoData,
        srcImage: '/public/assets/images/logo.svg',
      }}
    />
  );
}
