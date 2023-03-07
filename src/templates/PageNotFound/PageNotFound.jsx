import React from 'react';
import { LayoutCenterContent } from '../../layouts';

import * as styled from './styles';

function PageNotFound() {
  return (
    <styled.PageNotFoundRoot>
      <LayoutCenterContent
        title="Erro 404 😔😔"
        html="Por favor <a href='#'>Contate</a> o suporte !!"
        setBackground
      />
    </styled.PageNotFoundRoot>
  );
}

export default PageNotFound;
