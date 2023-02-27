import P from 'prop-types';
import React from 'react';
// Styles
import * as Styled from './styles';

function TextComponent({ children }) {
  return <Styled.TextComponentRoot>{children}</Styled.TextComponentRoot>;
}

TextComponent.propTypes = {
  children: P.string.isRequired,
};

export default TextComponent;
