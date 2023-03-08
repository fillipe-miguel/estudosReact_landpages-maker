/* eslint-disable no-undef */
import { pageDataMock } from '../mocks';
import mapSections, {
  mapLayoutCenterContent,
  mapLayoutGridColumn,
  mapLayoutGridDescription,
  mapLayoutGridGallery,
} from './map-sections';

describe('map-sections', () => {
  // ================================= Testando o return default =================================
  it('should return different case pass uncase section', () => {
    const data = mapSections([{ __component: 'section.section-otherSection' }]);
    expect(data).toEqual([{ __component: 'section.section-otherSection' }]);
  });

  // ================================= section-two-columns AS layout-grid-column =================================
  it('Should map (section-two-columns) as (layout-grid-column) with no content', () => {
    const data = mapLayoutGridColumn();

    expect(data.component).toBe('layout-grid-column');
    expect(data.layoutId).toBe('');
    expect(data.setBackground).toBe(false);
    expect(data.srcImage).toBe('');
    expect(data.text).toBe('');
    expect(data.title).toBe('');
  });
  it('Should map (section-two-columns) as (layout-grid-column) with content', () => {
    // Aqui estou passando só a section certa
    const data = mapLayoutGridColumn(pageDataMock[0].attributes.sections[0]);

    expect(data.component).toBe('layout-grid-column');
    expect(data.layoutId).toBe('section-two-columns');
    expect(data.setBackground).toBe(false);
    expect(data.srcImage).toBe('https://layoutgridcolumn-test.jpg');
    expect(data.text).toBe('Descrição da seção de duas colunas');
    expect(data.title).toBe('Essa é a seção de duas colunas');
  });

  // ================================= section-content AS layout-center-content =================================
  it('Should map (section-content) as (layout-center-content) with no content', () => {
    const data = mapLayoutCenterContent();

    expect(data.component).toBe('layout-center-content');
    expect(data.html).toBe('');
    expect(data.layoutId).toBe('');
    expect(data.setBackground).toBe(false);
    expect(data.title).toBe('');
  });
  it('should map (section-content) as (layout-center-content) with content', () => {
    // Aqui estou passando só a section certa
    const data = mapLayoutCenterContent(pageDataMock[0].attributes.sections[1]);

    expect(data.component).toBe('layout-center-content');
    expect(data.html).toBe('lorem lorem lorem lorem lorem');
    expect(data.layoutId).toBe('section-center-content');
    expect(data.setBackground).toBe(true);
    expect(data.title).toBe('Essa é a seção de uma coluna e só texto');
  });

  // ================================= section-grid-text AS layout-grid-description =================================
  it('Should map (section-grid-text) as (layout-grid-description) with no content', () => {
    const data = mapLayoutGridDescription();

    expect(data.component).toBe('layout-grid-description');
    expect(data.description).toBe('');
    expect(data.grid).toEqual([]);
    expect(data.layoutId).toBe('');
    expect(data.setBackground).toBe(false);
    expect(data.title).toBe('');
  });
  it('Should map (section-grid-text) as (layout-grid-description) with content', () => {
    // Aqui estou passando só a section certa
    const data = mapLayoutGridDescription(pageDataMock[0].attributes.sections[2]);

    expect(data.component).toBe('layout-grid-description');
    expect(data.description).toBe('Vários textos ai olha que loucura!');
    expect(data.grid[0]).toEqual({
      description: 'Lorem Ipsum teste',
      title: 'Teste 1',
    });
    expect(data.layoutId).toBe('grid-text');
    expect(data.setBackground).toBe(true);
    expect(data.title).toBe('Aqui é a seção de grid com texto');
  });

  // ================================= section-grid-image AS layout-grid-gallery =================================
  it('should map (section-grid-image) as (layout-grid-gallery) with no content', () => {
    const data = mapLayoutGridGallery();

    expect(data.component).toBe('layout-grid-gallery');
    expect(data.description).toBe('');
    expect(data.grid).toEqual([]);
    expect(data.layoutId).toBe('');
    expect(data.setBackground).toBe(false);
    expect(data.title).toBe('');
  });
  it('should map (section-grid-image) as (layout-grid-gallery) with content', () => {
    // Aqui estou passando só a section certa
    const data = mapLayoutGridGallery(pageDataMock[0].attributes.sections[3]);

    expect(data.component).toBe('layout-grid-gallery');
    expect(data.description).toBe(
      'Éssa é a seção com o grid de imagens muito loucas',
    );
    expect(data.grid[0]).toEqual({
      altText: 'Mulher segurando o peso',
      srcImg: 'https://section-grid-gallery.jpg',
    });
    expect(data.layoutId).toBe('section-grid-gallery');
    expect(data.setBackground).toBe(true);
    expect(data.title).toBe('Section grid com imagens / gallery');
  });

  // ================================= Testando o return default do grid =================================
  it('should return (section) if passed a uncased grid type', () => {
    const data = mapSections([
      {
        __component: 'section.section-grid',
        text_grid: [],
        image_grid: [],
      },
    ]);
    expect(data).toEqual([
      {
        __component: 'section.section-grid',
        text_grid: [],
        image_grid: [],
      },
    ]);
  });
});
