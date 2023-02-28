import LayoutGridColumn from '..';
import { layoutGridColumnMock } from '../../../mocks/layoutsMocks';

export default {
  title: 'LayoutGridColumn',
  component: LayoutGridColumn,
  args: layoutGridColumnMock,
};

export function Render01(args) {
  return <LayoutGridColumn {...args} />;
}
