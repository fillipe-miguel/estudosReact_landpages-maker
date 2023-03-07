import { mapData } from '../map-data';

export default async function loadPageData(pageNumber, callBack) {
  const URL = `http://localhost:1337/api/pages/${pageNumber}?populate=deep`;

  try {
    const raw = await fetch(URL);
    const json = await raw.json();
    // Passando dentro de um array pois a função espera um array
    const dataArray = mapData([json.data]);
    callBack(dataArray[0]);
  } catch (err) {
    callBack(undefined);
  }
}
