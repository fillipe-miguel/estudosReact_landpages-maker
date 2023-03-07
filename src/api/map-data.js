import mapHeader from './map-header/map-header';
import mapSections from './map-sections/map-sections';

export default function mapData(pagesData) {
  if (pagesData) {
    return pagesData.map((data) => ({
      slug: data.slug,
      title: data.title,
      // Aqui o header está vindo com o nome de menu do DB
      header: mapHeader(data.menu),
      sections: mapSections(data.sections),
      footerHtml: data.footer,
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
