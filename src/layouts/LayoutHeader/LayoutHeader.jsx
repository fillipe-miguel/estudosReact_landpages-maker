import P from 'prop-types';
import React, { useState } from 'react';
import { MdOutlineClose, MdOutlineMenu } from 'react-icons/md';

import { LogoLink, MenuNav } from '../../components';
import { SectionContainer } from '../../sections';

import * as Styled from './styles';

function LayoutHeader({ links = [], logoData }) {
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

      <Styled.LayoutHeaderRoot
        visible={visible}
        onClick={() => {
          toggleVisibility();
        }}
      >
        <SectionContainer>
          <Styled.HeaderContainer>
            <LogoLink {...logoData} />
            <MenuNav links={links} />
          </Styled.HeaderContainer>
        </SectionContainer>
      </Styled.LayoutHeaderRoot>
    </>
  );
}

LayoutHeader.defaultProps = {
  // Aqui as propriedades default
};

LayoutHeader.propTypes = {
  ...MenuNav.propTypes,
  logoData: P.shape(LogoLink.propTypes).isRequired,
};

export default LayoutHeader;
