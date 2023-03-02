import LayoutGridDescriptions from '..';
import * as mocks from '../../../mocks';

export default {
  title: 'Layouts/LayoutGridDescriptions',
  component: LayoutGridDescriptions,
  args: mocks.layouts.gridDescription,
  argsTypes: {},
};

export function Render01(args) {
  return <LayoutGridDescriptions {...args} />;
}
