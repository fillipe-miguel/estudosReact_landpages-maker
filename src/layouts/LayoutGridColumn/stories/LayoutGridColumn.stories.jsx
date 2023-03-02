import LayoutGridColumn from '..';

import * as mocks from '../../../mocks';

export default {
  title: 'Layouts/LayoutGridColumn',
  component: LayoutGridColumn,
  args: mocks.layouts.layoutGridColumn,
};

export function Render01(args) {
  return <LayoutGridColumn {...args} />;
}
