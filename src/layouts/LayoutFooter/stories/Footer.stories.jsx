import LayoutFooter from '..';

export default {
  title: 'Layouts/LayoutFooter',
  component: LayoutFooter,
  args: {
    footerHtml: '<a href="#">Que loucura isso ❤️ aqui!</a>',
  },
};

export function Render01(args) {
  return <LayoutFooter {...args} />;
}
