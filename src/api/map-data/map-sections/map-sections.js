/* eslint-disable no-underscore-dangle */
export function mapLayoutGridColumn(sectionData) {
  if (sectionData) {
    return {
      component: 'layout-grid-column',
      layoutId: sectionData.metadata.section_id,
      setBackground: sectionData.metadata.background,
      srcImage: sectionData.image.data.attributes.url,
      text: sectionData.description,
      title: sectionData.title,
    };
  }

  return {
    component: 'layout-grid-column',
    layoutId: '',
    setBackground: false,
    srcImage: '',
    text: '',
    title: '',
  };
}

export function mapLayoutCenterContent(sectionData) {
  if (sectionData) {
    return {
      component: 'layout-center-content',
      html: sectionData.content,
      layoutId: sectionData.metadata.section_id,
      setBackground: sectionData.metadata.background,
      title: sectionData.title,
    };
  }

  return {
    component: 'layout-center-content',
    html: '',
    layoutId: '',
    setBackground: false,
    title: '',
  };
}

export function mapLayoutGridDescription(sectionData) {
  if (sectionData) {
    return {
      component: 'layout-grid-description',
      description: sectionData.description,
      grid: sectionData.text_grid.map((textElement) => ({
        description: textElement.description,
        title: textElement.title,
      })),
      layoutId: sectionData.metadata.section_id,
      setBackground: sectionData.metadata.background,
      title: sectionData.title,
    };
  }

  return {
    component: 'layout-grid-description',
    description: '',
    grid: [],
    layoutId: '',
    setBackground: false,
    title: '',
  };
}

export function mapLayoutGridGallery(sectionData) {
  if (sectionData) {
    return {
      component: 'layout-grid-gallery',
      description: sectionData.description,
      grid: sectionData.image_grid.map((imageElement) => ({
        altText: imageElement.image.data.attributes.alternativeText,
        srcImg: imageElement.image.data.attributes.url,
      })),
      layoutId: sectionData.metadata.section_id,
      setBackground: sectionData.metadata.background,
      title: sectionData.title,
    };
  }

  return {
    component: 'layout-grid-gallery',
    description: '',
    grid: [],
    layoutId: '',
    setBackground: false,
    title: '',
  };
}

// Para selecionar qual função usar dependendo do dado que receber
export default function mapSections(sectionsDada) {
  return sectionsDada.map((section) => {
    switch (section.__component) {
      case 'section.section-content':
        return mapLayoutCenterContent(section);

      case 'section.section-grid':
        if (section.text_grid.length > 0) {
          return mapLayoutGridDescription(section);
        }

        if (section.image_grid.length > 0) {
          return mapLayoutGridGallery(section);
        }

        return section;

      case 'section.section-two-columns':
        return mapLayoutGridColumn(section);

      default:
        return section;
    }
  });
}

// if (section.__component === 'section.section-content') {
//   return mapLayoutCenterContent(section);
// }

// if (section.__component === 'section.section-grid') {
//   // grid de textos
//   if (section.text_grid.length > 0) {
//     return mapLayoutGridDescription(section);
//   }
//   // grid de imagem
//   if (section.image_grid.length > 0) {
//     return mapLayoutGridGallery(section);
//   }

//   return section;
// }

// if (section.__component === 'section.section-two-columns') {
//   return mapLayoutGridColumn(section);
// }

// return section;
