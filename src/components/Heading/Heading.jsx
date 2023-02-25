import P from 'prop-types';
import React from 'react';
import * as Styled from './style';

function Heading({ children, colorDarker, level, size, uppercase }) {
  return (
    <Styled.Container
      colorDarker={colorDarker}
      as={`h${level}`}
      size={size}
      uppercase={uppercase}
    >
      {children}
    </Styled.Container>
  );
}

Heading.defaultProps = {
  size: 'large',
  uppercase: false,
  colorDarker: true,
};

Heading.propTypes = {
  children: P.string.isRequired,
  colorDarker: P.bool,
  level: P.oneOf(['1', '2', '3', '4', '5', '6']).isRequired,
  size: P.oneOf(['medium', 'large', 'xlarge', 'xxlarge', 'xxxlarge']),
  uppercase: P.bool,
};

export default Heading;
