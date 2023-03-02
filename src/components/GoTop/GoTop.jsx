import React from 'react';

import { MdArrowUpward } from 'react-icons/md';

import * as Styled from './styles';

function GoTop() {
  return (
    <Styled.GoTopRoot
      href="#"
      aria-label="Button go to top"
      title="Voltar ao topo"
    >
      <MdArrowUpward />
    </Styled.GoTopRoot>
  );
}

export default GoTop;
