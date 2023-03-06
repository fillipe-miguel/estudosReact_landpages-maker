import React from 'react';

import { Base } from '../../templates';

import {
  LayoutCenterContent,
  LayoutGridColumn,
  LayoutGridDescriptions,
  LayoutGridGallery,
} from '../../layouts';

import * as mocks from '../../mocks';

function Teste() {
  return (
    <Base
      links={mocks.components.links}
      logoData={mocks.components.logoData}
      footerHtml="<p>Teste de <a href='#'>Qualidade</a></p>"
    >
      <LayoutCenterContent
        {...mocks.layouts.layoutCenterContent}
        setBackground
      />
      <LayoutGridDescriptions {...mocks.layouts.gridDescription} />
      <LayoutGridColumn {...mocks.layouts.layoutGridColumn} setBackground />
      <LayoutGridGallery {...mocks.layouts.gridGallery} />
    </Base>
  );
}

export default Teste;
