/* eslint-disable no-undef */
import { pageDataMock } from '../../mocks';
import mapLinks from './map-links';

describe('map-links', () => {
  it('Should return a predefined links if no data ', () => {
    const links = mapLinks()[0];
    expect(links.children).toBe('');
    expect(links.link).toBe('');
    expect(links.newTab).toBe(false);
  });

  // ================================= Teste com dados =================================
  it('Should return a header with data ', () => {
    const links = mapLinks(pageDataMock[0].attributes.menu.menu_link)[0];
    expect(links.children).toBe('Text do link test');
    expect(links.link).toBe('#link-test');
    expect(links.newTab).toBe(true);
  });
});
