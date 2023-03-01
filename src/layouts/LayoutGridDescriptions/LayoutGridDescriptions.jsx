import P from 'prop-types';
import React from 'react';

import * as Styled from './styles';

import { Heading, TextComponent } from '../../components';
import { SectionBackground } from '../../sections';

function LayoutGridDescriptions({ title, description, setBackground, grid }) {
  return (
    <SectionBackground setBackground={setBackground}>
      <Styled.HeaderContainer>
        <Heading
          uppercase
          size="xxlarge"
          level="2"
          colorDarker={!setBackground}
        >
          {title}
        </Heading>
        <TextComponent colorDarker={!setBackground}>
          {description}
        </TextComponent>
      </Styled.HeaderContainer>
      <Styled.Grid>
        {grid.map((element) => (
          <Styled.GridElement key={element.title}>
            <Heading size="medium" level="3" colorDarker={!setBackground}>
              {element.title}
            </Heading>
            <TextComponent colorDarker={!setBackground}>
              {element.description}
            </TextComponent>
          </Styled.GridElement>
        ))}
      </Styled.Grid>
    </SectionBackground>
  );
}

LayoutGridDescriptions.defaultProps = {
  setBackground: false,
};

LayoutGridDescriptions.propTypes = {
  title: P.string.isRequired,
  description: P.string.isRequired,
  setBackground: P.bool,
  grid: P.arrayOf(
    P.shape({
      title: P.string.isRequired,
      description: P.string.isRequired,
    }),
  ).isRequired,
};

export default LayoutGridDescriptions;
