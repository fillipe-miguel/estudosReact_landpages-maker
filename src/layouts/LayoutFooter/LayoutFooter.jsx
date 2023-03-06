import P from 'prop-types';
import React from 'react';

import * as Styled from './styles';

import { TextComponent } from '../../components';
import { SectionContainer } from '../../sections';

function LayoutFooter({ html }) {
  return (
    <Styled.LayoutFooterRoot>
      <SectionContainer>
        <TextComponent asHtml>{html}</TextComponent>
      </SectionContainer>
    </Styled.LayoutFooterRoot>
  );
}

LayoutFooter.propTypes = {
  html: P.string.isRequired,
};

export default LayoutFooter;
