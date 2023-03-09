import React, { useEffect, useState } from 'react';

import { loadPagaData } from '../../api';

import { Base, Loading, PageNotFound } from '../../templates';

import {
  LayoutCenterContent,
  LayoutGridColumn,
  LayoutGridDescriptions,
  LayoutGridGallery,
} from '../../layouts';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadPagaData(3, setData);
  }, []);

  const { footerHtml, header, sections } = data;

  if (data && !data.slug) {
    return <Loading />;
  }

  if (data === undefined) {
    return <PageNotFound />;
  }

  return (
    <Base
      links={header.links}
      logoData={{
        text: header.text,
        link: header.link,
        srcImage: header.srcImage,
      }}
      footerHtml={footerHtml}
    >
      {sections.map((section) => {
        switch (section.component) {
          case 'layout-center-content':
            return (
              <LayoutCenterContent
                key={section.layoutId}
                id={section.layoutId}
                title={section.title}
                html={section.html}
                setBackground={section.setBackground}
              />
            );
          case 'layout-grid-description':
            return (
              <LayoutGridDescriptions
                id={section.layoutId}
                key={section.layoutId}
                title={section.title}
                description={section.description}
                setBackground={section.setBackground}
                grid={section.grid}
              />
            );
          case 'layout-grid-gallery':
            return (
              <LayoutGridGallery
                id={section.layoutId}
                key={section.layoutId}
                title={section.title}
                description={section.description}
                setBackground={section.setBackground}
                grid={section.grid}
              />
            );
          case 'layout-grid-column':
            return (
              <LayoutGridColumn
                key={section.layoutId}
                id={section.layoutId}
                title={section.title}
                text={section.text}
                setBackground={section.setBackground}
                srcImage={section.srcImage}
              />
            );
          default:
            return <h5>Erro!</h5>;
        }
      })}
    </Base>
  );
}

export default Home;
