import LayoutCenterContent from '..';
import { layoutCenterContentMock } from '../../../mocks/layoutsMocks';

export default {
  title: 'LayoutCenterContent',
  component: LayoutCenterContent,
  args: layoutCenterContentMock,
  argsTypes: {},
};

export function Render01(args){
  return (<LayoutCenterContent {...args} />);
};
