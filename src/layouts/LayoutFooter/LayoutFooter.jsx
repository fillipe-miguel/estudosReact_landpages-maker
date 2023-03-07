import P from 'prop-types';
import React from 'react';

import * as Styled from './styles';

import { TextComponent } from '../../components';
import { SectionContainer } from '../../sections';

function LayoutFooter({ footerHtml }) {
  return (
    <Styled.LayoutFooterRoot>
      <SectionContainer>
        <TextComponent asHtml>{footerHtml}</TextComponent>
      </SectionContainer>
    </Styled.LayoutFooterRoot>
  );
}

LayoutFooter.propTypes = {
  footerHtml: P.string.isRequired,
};

export default LayoutFooter;
