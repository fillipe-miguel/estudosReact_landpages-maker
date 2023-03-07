import mapHeader from './map-header/map-header';
import mapSections from './map-sections/map-sections';

export default function mapData(pagesData) {
  if (pagesData) {
    return pagesData.map((data) => ({
      slug: data.attributes.slug,
      title: data.attributes.title,
      // Aqui o header está vindo com o nome de menu do DB
      header: mapHeader(data.attributes.menu),
      sections: mapSections(data.attributes.sections),
      footerHtml: data.attributes.footer,
    }));
  }

  // ================================= Retorno Padrão =================================
  return [
    {
      slug: '',
      title: '',
      header: {},
      sections: [],
      footerHtml: '',
    },
  ];
}
