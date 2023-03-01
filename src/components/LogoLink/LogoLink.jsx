import P from 'prop-types';
import React from 'react';

import * as Styled from './styles';

import Heading from '../Heading';

function LogoLink({ text, srcImage, link }) {
  return (
    <Styled.LogoLinkRoot href={link}>
      {srcImage ? (
        <img src={srcImage} alt={text} />
      ) : (
        <Heading uppercase level="2" size="medium">
          {text}
        </Heading>
      )}
    </Styled.LogoLinkRoot>
  );
}

LogoLink.defaultProps = {
  srcImage: '',
};

LogoLink.propTypes = {
  text: P.string.isRequired,
  link: P.string.isRequired,
  srcImage: P.string,
};

export default LogoLink;
