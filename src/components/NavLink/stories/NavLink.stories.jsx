import NavLink from '..';
// Mocks
import { linksMock } from '../../../mocks/componentsMocks';

export default {
  title: 'NavLink',
  component: NavLink,
  args: {
    links: linksMock,
  },
  argsTypes: {},
};

export function Render01(args) {
  return <NavLink {...args} />;
}
