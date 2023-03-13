import P from 'prop-types';
import React from 'react';

import SectionContainer from '../SectionContainer';
import * as Styled from './styles';

function SectionBackground({ children, setBackground, layoutId }) {
  return (
    <Styled.SectionBackgroundRoot id={layoutId} setBackground={setBackground}>
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
  layoutId: P.string.isRequired,
};

export default SectionBackground;
