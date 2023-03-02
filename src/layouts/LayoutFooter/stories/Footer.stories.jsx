import LayoutFooter from '..';

export default {
  title: 'LayoutFooter',
  component: LayoutFooter,
  args: {
    html: '<a href="#">Que loucura isso ❤️ aqui!</a>',
  },
};

export function Render01(args) {
  return <LayoutFooter {...args} />;
}