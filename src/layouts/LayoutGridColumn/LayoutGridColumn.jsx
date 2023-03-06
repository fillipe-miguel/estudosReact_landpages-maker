import P from 'prop-types';
import React from 'react';

import * as Styled from './styles';

import { Heading, TextComponent } from '../../components';
import { SectionBackground } from '../../sections';

function LayoutGridColumn({ title, text, setBackground, srcImage }) {
  return (
    <SectionBackground setBackground={setBackground}>
      <Styled.LayoutGridColumnRoot>
        <Styled.TextContainer>
          <Heading
            colorDarker={!setBackground}
            size="xxxlarge"
            level="2"
            uppercase
          >
            {title}
          </Heading>
          <TextComponent colorDarker={!setBackground}>{text}</TextComponent>
        </Styled.TextContainer>

        <Styled.ImageContainer>
          <Styled.Image src={srcImage} alt={title} />
        </Styled.ImageContainer>
      </Styled.LayoutGridColumnRoot>
    </SectionBackground>
  );
}

LayoutGridColumn.defaultProps = {
  setBackground: false,
};

LayoutGridColumn.propTypes = {
  text: P.string.isRequired,
  title: P.string.isRequired,
  srcImage: P.string.isRequired,
  setBackground: P.bool,
};

export default LayoutGridColumn;
