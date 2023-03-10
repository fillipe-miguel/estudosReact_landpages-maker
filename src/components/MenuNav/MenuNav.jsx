import P from 'prop-types';
import React from 'react';

import MenuLink from '../MenuLink';

import * as Styled from './styles';

function MenuNav({ links }) {
  return (
    <Styled.MenuNavRoot aria-label="Main menu">
      {links.map((link) => (
        <MenuLink key={link.link} link={link.link} newTab={link?.newTab}>
          {link.children}
        </MenuLink>
      ))}
    </Styled.MenuNavRoot>
  );
}

MenuNav.defaultProps = {
  links: [],
};

MenuNav.propTypes = {
  links: P.arrayOf(
    P.shape({
      link: P.string.isRequired,
      children: P.string.isRequired,
      newTab: P.bool,
    }),
  ),
};

export default MenuNav;
