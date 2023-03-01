import LayoutGridGallery from '..';

import * as mocks from '../../../mocks'

export default {
  title: 'LayoutGridGallery',
  component: LayoutGridGallery,
  args: mocks.layouts.gridGallery,
};

export function Render01(args){
  return (<LayoutGridGallery {...args} />);
};
