/* eslint-disable react/function-component-definition */ // ISSO É PARA O ESLINT DEIXAR EU USAR ARROW FUNCTION
import Heading from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Meu titulo funcionando!!',
    level: '1',
    uppercase: false,
  },
  argsTypes: {
    children: { type: 'string' },
    colorDarker: { type: 'boolean' },
    uppercase: { type: 'boolean' },
  },
};

// ===================== LIGHT TEST
export const InLightBG = (args) => <Heading {...args} />;

InLightBG.args = {
  colorDarker: true,
};

InLightBG.parameters = {
  backgrounds: {
    default: 'light',
  },
};

// ===================== DARK TEST
export const InDarkBG = (args) => <Heading {...args} />;

InDarkBG.args = {
  colorDarker: false,
};

InDarkBG.parameters = {
  backgrounds: {
    default: 'dark',
  },
};
