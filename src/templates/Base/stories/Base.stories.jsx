import Base from '..';
import {
  LayoutCenterContent,
  LayoutGridColumn,
  LayoutGridGallery,
} from '../../../layouts';

import * as mocks from '../../../mocks';

export const baseArgs = {
  links: mocks.components.links,
  logoData: mocks.components.logoData,
  footerHtml: '<p>Bah que loucura</p>',
  children: (
    <>
      <LayoutCenterContent
        {...mocks.layouts.layoutCenterContent}
        setBackground
      />
      <LayoutGridGallery {...mocks.layouts.gridGallery} />
      <LayoutGridColumn {...mocks.layouts.layoutGridColumn} setBackground />
      <LayoutGridGallery {...mocks.layouts.gridGallery} />
    </>
  ),
}

export default {
  title: 'Templates/Base',
  component: Base,
  args: baseArgs,
};

export function Render01(args) {
  return <Base {...args} />;
}
