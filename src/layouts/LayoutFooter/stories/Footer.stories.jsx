import LayoutFooter from '..';

export default {
  title: 'Layouts/LayoutFooter',
  component: LayoutFooter,
  args: {
    footerHtml:
      "<p>Feito com ❤️ por : <strong>Fillipe Miguel</strong></p> <p>Assece o <a href='#linkedin' target='_blank'>linkedin</a></p>",
  },
};

export function Render01(args) {
  return <LayoutFooter {...args} />;
}
