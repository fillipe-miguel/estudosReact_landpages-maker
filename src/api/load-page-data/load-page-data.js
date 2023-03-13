import { mapData } from '../map-data';

export default async function loadPageData(slug, callBack) {
  // const URL = `http://localhost:1337/api/pages/${pageNumber}?populate=deep`;
  const URL_NEW = `http://localhost:1337/api/pages/?filters[slug]=${slug}&populate=deep`;

  try {
    const raw = await fetch(URL_NEW);
    const json = await raw.json();
    const dataArray = mapData(json.data);
    callBack(dataArray[0]);
  } catch (err) {
    callBack(undefined);
  }
}
