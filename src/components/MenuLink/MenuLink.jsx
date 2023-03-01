import P from 'prop-types';
import React from 'react';

import * as Styled from './styles';

function MenuLink({ children, link, newTab }) {
  const target = newTab ? '_blank' : '_self';

  return (
    <Styled.MenuLinkRoot href={link} target={target}>
      {children}
    </Styled.MenuLinkRoot>
  );
}

MenuLink.defaultProps = {
  newTab: false,
};

MenuLink.propTypes = {
  children: P.string.isRequired,
  link: P.string.isRequired,
  newTab: P.bool,
};

export default MenuLink;
