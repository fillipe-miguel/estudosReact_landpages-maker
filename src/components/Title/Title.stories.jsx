/* eslint-disable react/jsx-props-no-spreading */
import Title from '.';

export default {
  title: 'Title',
  component: Title,
  args: {
    children: 'Children padrão',
    color: '#8d2727',
  },
  argTypes: {
    children: { type: 'string' },
    color: { type: 'string' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export function Template(args) {
  return <Title {...args} />;
}
