import P from 'prop-types';
import React, { useState } from 'react';
// Components
import { MdOutlineClose, MdOutlineMenu } from 'react-icons/md';
import SectionContainer from '../../sections/SectionContainer';
import LogoLink from '../LogoLink';
import MenuNav from '../MenuNav';
// Styles
import * as Styled from './styles';
// Icons

function Menu({ links = [], logoData }) {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => setVisible((current) => !current);

  return (
    <>
      <Styled.ToggleMenuButton
        onClick={() => {
          toggleVisibility();
        }}
        title={visible ? 'Close menu' : 'Open menu'}
        aria-label="Open/Close Menu"
      >
        {visible ? (
          <MdOutlineClose aria-label="Close menu icon" />
        ) : (
          <MdOutlineMenu aria-label="Open menu icon" />
        )}
      </Styled.ToggleMenuButton>

      <Styled.MenuRoot
        visible={visible}
        onClick={() => {
          toggleVisibility();
        }}
      >
        <SectionContainer>
          <Styled.MenuContainer>
            <LogoLink {...logoData} />
            <MenuNav links={links} />
          </Styled.MenuContainer>
        </SectionContainer>
      </Styled.MenuRoot>
    </>
  );
}

Menu.defaultProps = {};

Menu.propTypes = {
  ...MenuNav.propTypes,
  logoData: P.shape(LogoLink.propTypes).isRequired,
};

export default Menu;

// MdOutlineClose
// MdOutlineMenu
