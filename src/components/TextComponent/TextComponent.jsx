import P from 'prop-types';
import React from 'react';
// Styles
import * as Styled from './styles';

function TextComponent({ children, colorDarker }) {
  return (
    <Styled.TextComponentRoot
      dangerouslySetInnerHTML={{ __html: children }}
      colorDarker={colorDarker}
    />
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
