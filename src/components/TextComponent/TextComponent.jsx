import P from 'prop-types';
import React from 'react';
// Styles
import * as Styled from './styles';

function TextComponent({ children, colorDarker, asHtml }) {
  return (
    <Styled.TextComponentRoot
      dangerouslySetInnerHTML={{ __html: children }}
      colorDarker={colorDarker}
      as={asHtml ? 'div' : 'p'}
      alias-label="Text-component"
    />
  );
}

TextComponent.defaultProps = {
  colorDarker: true,
  asHtml: false,
};

TextComponent.propTypes = {
  children: P.string.isRequired,
  colorDarker: P.bool,
  asHtml: P.bool,
};

export default TextComponent;
