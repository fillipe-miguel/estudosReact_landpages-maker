import P from 'prop-types';
import React from 'react';

import * as Styled from './styles';

import { Heading, TextComponent } from '../../components';
import { SectionBackground } from '../../sections';

function LayoutGridGallery({
  title,
  description,
  setBackground,
  grid,
  layoutId,
}) {
  return (
    <SectionBackground layoutId={layoutId} setBackground={setBackground}>
      <Styled.HeaderContainer>
        <Heading
          uppercase
          size="xxlarge"
          level="2"
          colorDarker={!setBackground}
        >
          {title}
        </Heading>
        <TextComponent asHtml colorDarker={!setBackground}>
          {description}
        </TextComponent>
      </Styled.HeaderContainer>
      <Styled.Grid>
        {grid.map((element) => (
          <Styled.GridElement key={element.srcImg}>
            <img src={element.srcImg} alt={element.altText} />
          </Styled.GridElement>
        ))}
      </Styled.Grid>
    </SectionBackground>
  );
}

LayoutGridGallery.defaultProps = {
  setBackground: false,
};

LayoutGridGallery.propTypes = {
  title: P.string.isRequired,
  description: P.string.isRequired,
  setBackground: P.bool,
  grid: P.arrayOf(
    P.shape({
      srcImg: P.string.isRequired,
      altText: P.string.isRequired,
    }),
  ).isRequired,
  layoutId: P.string.isRequired,
};

export default LayoutGridGallery;
