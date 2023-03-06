import P from 'prop-types';
import React from 'react';

import { GoTop } from '../../components';
import { LayoutFooter, LayoutHeader } from '../../layouts';

import * as Styled from './styles';

function Base({ links = [], logoData, footerHtml, children }) {
  return (
    <>
      <Styled.BaseRoot>
        <LayoutHeader links={links} logoData={logoData} />
        {children}
        <LayoutFooter html={footerHtml} />
      </Styled.BaseRoot>
      <GoTop />
    </>
  );
}

Base.defaultProps = {

};

Base.propTypes = {
  ...LayoutHeader.propTypes,
  children: P.node.isRequired,
  footerHtml: P.string.isRequired,
};

export default Base;
