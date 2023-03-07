/* eslint-disable no-undef */

import mapData from './map-data';

import { pageDataMock } from './mocks';

describe('map-data', () => {
  it('Should map data even if there is no data', () => {
    const pagesData = mapData()[0];
    expect(pagesData.footerHtml).toBe('');
    expect(pagesData.title).toBe('');
    expect(pagesData.slug).toBe('');
  });

  it('Should map data even if there is data', () => {
    const pagesData = mapData(pageDataMock)[0];
    expect(pagesData.footerHtml).toBe('<p>Teste aqui</p>');
    expect(pagesData.title).toBe('Title teste 01');
    expect(pagesData.slug).toBe('title-teste-01');
  });
});
