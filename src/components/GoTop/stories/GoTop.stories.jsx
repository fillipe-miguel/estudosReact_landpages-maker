import GoTop from '..';

export default {
  title: 'Components/GoTop',
  component: GoTop,
};

export function Render01(args) {
  return (
    <div style={{ height: '400vh' }}>
      <GoTop {...args} />
    </div>
  );
}
