import P from 'prop-types';
import React from 'react';
// Styles
import * as Styled from './style';

function Title({ children, color }) {
  return <Styled.Container color={color}>{children}</Styled.Container>;
}

Title.defaultProps = {
  color: 'black',
};

Title.propTypes = {
  children: P.string.isRequired,
  color: P.string,
};

export default Title;
