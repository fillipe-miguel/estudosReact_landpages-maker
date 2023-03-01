import P from 'prop-types';
import React from 'react';

import * as Styled from './styles';

import { Heading, TextComponent } from '../../components';
import { SectionBackground } from '../../sections';

function LayoutCenterContent({ title, html, setBackground }) {
  return (
    <SectionBackground setBackground={setBackground}>
      <Styled.LayoutCenterContentRoot>
        <Heading
          size="xxlarge"
          level="3"
          uppercase
          colorDarker={!setBackground}
        >
          {title}
        </Heading>
        <Styled.InnerHtml>
          <TextComponent colorDarker={!setBackground}>{html}</TextComponent>
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
};

export default LayoutCenterContent;
