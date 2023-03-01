import P from 'prop-types';
import React from 'react';

import SectionContainer from '../SectionContainer';
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
