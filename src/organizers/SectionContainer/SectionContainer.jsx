import P from 'prop-types';
import React from 'react';
// Styles
import * as Styled from './styles';

function SectionContainer({ children }) {
  return <Styled.SectionContainerRoot>{children}</Styled.SectionContainerRoot>;
}

SectionContainer.defaultProps = {};

SectionContainer.propTypes = {
  children: P.node.isRequired,
};

export default SectionContainer;
