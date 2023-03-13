/* eslint-disable no-undef */
import { pageDataMock } from '../mocks';
import mapHeader from './map-header';

describe('map-header', () => {
  it('Should return a predefined header if no data ', () => {
    const header = mapHeader();
    expect(header.link).toBe('');
    expect(header.text).toBe('');
    expect(header.srcImage).toBe('');
  });

  // ================================= Teste com dados =================================
  it('Should return a header with data ', () => {
    const header = mapHeader(pageDataMock[0].attributes.menu);
    expect(header.link).toBe('#link-teste');
    expect(header.text).toBe('LOGO TESTE');
    expect(header.srcImage).toBe('https://url-da-imagem_teste.svg');
  });

  // ================================= Teste com dados mas imagem null =================================
  it('Should return a header with data ', () => {
    const header = mapHeader({ ...pageDataMock[0].attributes.menu, logo: {} });
    expect(header.link).toBe('#link-teste');
    expect(header.text).toBe('LOGO TESTE');
    expect(header.srcImage).toBe('');
  });
});
