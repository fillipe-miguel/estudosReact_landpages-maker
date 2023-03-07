import mapLinks from './map-links/map-links';

export default function mapHeader(dataHeader) {
  if (dataHeader) {
    return {
      link: dataHeader.logo_link,
      text: dataHeader.logo_text,
      srcImage: dataHeader.logo.data.attributes.url,
      links: mapLinks(dataHeader.menu_link),
    };
  }

  return {
    link: '',
    text: '',
    srcImage: '',
    links: [],
  };
}
