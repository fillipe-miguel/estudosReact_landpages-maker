import LayoutCenterContent from '..';

import * as mocks from '../../../mocks';

export default {
  title: 'LayoutCenterContent',
  component: LayoutCenterContent,
  args: mocks.layouts.layoutCenterContent,
  argsTypes: {},
};

export function Render01(args){
  return (<LayoutCenterContent {...args} />);
};
