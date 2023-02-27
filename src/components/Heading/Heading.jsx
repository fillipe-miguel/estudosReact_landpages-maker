import P from 'prop-types';
import React from 'react';
// Styles
import * as Styled from './styles';

function Heading({ children, colorDarker, level, size, uppercase }) {
  return (
    <Styled.HeadingRoot
      colorDarker={colorDarker}
      as={`h${level}`}
      size={size}
      uppercase={uppercase}
    >
      {children}
    </Styled.HeadingRoot>
  );
}

Heading.defaultProps = {
  size: 'large',
  uppercase: false,
  colorDarker: true,
};

Heading.propTypes = {
  uppercase: P.bool,
  colorDarker: P.bool,
  children: P.string.isRequired,
  level: P.oneOf(['1', '2', '3', '4', '5', '6']).isRequired,
  size: P.oneOf(['medium', 'large', 'xlarge', 'xxlarge', 'xxxlarge']),
};

export default Heading;
