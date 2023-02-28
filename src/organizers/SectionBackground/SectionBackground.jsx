import P from 'prop-types';
import React from 'react';
// Components
import SectionContainer from '../SectionContainer';
// Styles
import * as Styled from './styles';

function SectionBackground({ children, setBackground }) {
  return (
    <Styled.SectionBackgroundRoot setBackground={setBackground}>
      <SectionContainer>{children}</SectionContainer>
    </Styled.SectionBackgroundRoot>
  );
}

SectionBackground.defaultProps = {
  setBackground: false,
};

SectionBackground.propTypes = {
  children: P.node.isRequired,
  setBackground: P.bool,
};

export default SectionBackground;
