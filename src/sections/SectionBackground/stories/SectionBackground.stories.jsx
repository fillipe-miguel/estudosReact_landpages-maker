import SectionBackground from '..';

export default {
  title: 'Sections/SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>Teste do teste</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
          recusandae accusantium ducimus est veritatis sit officia? Ratione,
          distinctio! Provident iure, ducimus dolorum eos blanditiis repellat
          eaque ipsam magnam aut incidunt!
        </p>
      </div>
    ),
    setBackground: false,
  },
  argsTypes: {
    setBackground: { type: 'boolean' },
  },
};

export function Render01(args) {
  return <SectionBackground {...args} />;
}
