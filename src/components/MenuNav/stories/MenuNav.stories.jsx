import MenuNav from '..';
// Mocks
import { linksMock } from '../../../mocks/componentsMocks';

export default {
  title: 'Menu Nav',
  component: MenuNav,
  args: {
    links: linksMock,
  },
};

export function Render01(args) {
  return <MenuNav {...args} />;
}
