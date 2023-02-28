import P from 'prop-types';
import React from 'react';
// Styles
import * as Styled from './styles';

function TextComponent({ children, colorDarker }) {
  return (
    <Styled.TextComponentRoot colorDarker={colorDarker}>
      {children}
    </Styled.TextComponentRoot>
  );
}

TextComponent.defaultProps = {
  colorDarker: true,
};

TextComponent.propTypes = {
  children: P.string.isRequired,
  colorDarker: P.bool,
};

export default TextComponent;
