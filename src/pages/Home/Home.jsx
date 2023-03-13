import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

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
  const pathName = useLocation().pathname.replace(/[^a-z0-9-_]/gi, '');
  const slug = pathName || 'pagina-teste';

  useEffect(() => {
    loadPagaData(slug, setData);
  }, [slug]);

  if (data && !data.slug) {
    return <Loading />;
  }

  if (data === undefined) {
    return <PageNotFound />;
  }

  // Isso esta aqui em baixo pois caso nao retorne dados do server ele vem undefined!!!
  const { footerHtml, header, sections } = data;

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
                html={section.html}
                key={section.layoutId}
                layoutId={section.layoutId}
                setBackground={section.setBackground}
                title={section.title}
              />
            );
          case 'layout-grid-description':
            return (
              <LayoutGridDescriptions
                description={section.description}
                grid={section.grid}
                key={section.layoutId}
                layoutId={section.layoutId}
                setBackground={section.setBackground}
                title={section.title}
              />
            );
          case 'layout-grid-gallery':
            return (
              <LayoutGridGallery
                description={section.description}
                grid={section.grid}
                key={section.layoutId}
                layoutId={section.layoutId}
                setBackground={section.setBackground}
                title={section.title}
              />
            );
          case 'layout-grid-column':
            return (
              <LayoutGridColumn
                key={section.layoutId}
                layoutId={section.layoutId}
                setBackground={section.setBackground}
                srcImage={section.srcImage}
                text={section.text}
                title={section.title}
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
