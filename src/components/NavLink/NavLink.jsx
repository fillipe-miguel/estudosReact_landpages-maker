import P from 'prop-types';
import React from 'react';
// Components
import MenuLink from '../MenuLink';
// Styles
import * as Styled from './styles';

function NavLink({ links }) {
  return (
    <Styled.NavLinkRoot>
      {links.map((link) => (
        <MenuLink key={link.link} link={link.link} newTab={link?.newTab}>
          {link.children}
        </MenuLink>
      ))}
    </Styled.NavLinkRoot>
  );
}

NavLink.defaultProps = {
  links: [],
};

NavLink.propTypes = {
  links: P.arrayOf(
    P.shape({
      link: P.string.isRequired,
      children: P.string.isRequired,
      newTab: P.bool,
    }),
  ),
};

export default NavLink;
