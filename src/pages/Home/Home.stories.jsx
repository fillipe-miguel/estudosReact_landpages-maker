/* eslint-disable react/jsx-props-no-spreading */
import Home from '.';

export default {
  title: 'Home',
  component: Home,
};

export function Template(args) {
  return <Home {...args} />;
}
