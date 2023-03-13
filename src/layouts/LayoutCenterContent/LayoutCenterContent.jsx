import P from 'prop-types';
import React from 'react';

import * as Styled from './styles';

import { Heading, TextComponent } from '../../components';
import { SectionBackground } from '../../sections';

function LayoutCenterContent({ title, html, setBackground, layoutId }) {
  return (
    <SectionBackground layoutId={layoutId} setBackground={setBackground}>
      <Styled.LayoutCenterContentRoot>
        <Heading
          size="xxxlarge"
          level="2"
          uppercase
          colorDarker={!setBackground}
        >
          {title}
        </Heading>
        <Styled.InnerHtml>
          <TextComponent asHtml colorDarker={!setBackground}>{html}</TextComponent>
        </Styled.InnerHtml>
      </Styled.LayoutCenterContentRoot>
    </SectionBackground>
  );
}

LayoutCenterContent.defaultProps = {
  setBackground: false,
};

LayoutCenterContent.propTypes = {
  title: P.string.isRequired,
  html: P.string.isRequired,
  setBackground: P.bool,
  layoutId: P.string.isRequired
};

export default LayoutCenterContent;
