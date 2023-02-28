import LogoLink from '..';

export default {
  title: 'LogoLink',
  component: LogoLink,
  argsTypes: {
    link: { type: 'string' },
    srcImage: { type: 'string' },
    text: { type: 'string' },
  },
};

// ================================= With logo =================================
export function Render01(args) {
  return <LogoLink {...args} />;
}

Render01.args = {
  link: '#',
  srcImage: 'assets/images/logo.svg',
  text: 'Title com logo',
};

// ================================= without logo =================================
export function Render02(args) {
  return <LogoLink {...args} />;
}

Render02.args = {
  link: '#',
  srcImage: '',
  text: 'Title sem logo',
};
