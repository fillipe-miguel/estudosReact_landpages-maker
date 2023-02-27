import MenuLink from '..';

export default {
  title: 'MenuLink',
  component: MenuLink,
  args: {
    children: 'Link to',
    link: '#',
    newTab: false,
  },
  argsTypes: {
    children: { type: 'string' },
    link: { type: 'string' },
  },
};

export function Render01(args) {
  return <MenuLink {...args} />;
}
