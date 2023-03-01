import TextComponent from '..';

// Para fazer um container em volta do elemento!
const containerStyle = {
  padding: '23px',
  'max-width': '65rem',
};

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, rerum quisquam placeat nobis dolor suscipit quia adipisci sapiente. Magni minus blanditiis ratione aut possimus commodi nam eligendi quis id voluptate.`,
  },
  argsTypes: {
    children: { type: 'string' },
    colorDarker: { type: 'boolean' },
  },
};

export function Render01(args) {
  return (
    // Isso não é necessário!
    <div style={containerStyle}>
      <TextComponent {...args} />
    </div>
  );
}
