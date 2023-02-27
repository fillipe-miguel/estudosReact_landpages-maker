import NavLink from '..';
import linksMock from '../mocks/linksMock'

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
