import Menu from '..';
// Mocks
import { linksMock, logoDataMock } from '../../../mocks/componentsMocks';

export default {
  title: 'Menu',
  component: Menu,
  args: {
    links: linksMock,
    logoData: logoDataMock,
  },
};

export function Render01(args) {
  return <Menu {...args} />;
}
