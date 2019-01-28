import { CATS_API_KEY, CATS_API_URL, DEFAULt_NB_IMG } from './cats.constants';

export async function getImages(types, nbImages = DEFAULt_NB_IMG) {
  // axios.defaults.headers.common['x-api-key'] = CATS_API_KEY; // Replace this with your API Key

  // const params = {
  // limit: this.limit,
  // order: this.order,
  // page: this.page - 1,
  // };
  // const response = await axios.get(CATS_API_URL, { params });

  // const pagination_count = response.headers['pagination-count'];
  // const images = response.data;
  // console.info(`-- ('${images.length}') Images from TheCatAPI.com`, images);
  // console.log(`${pagination_count} images available for this query.`);
  // return images;

  const headers = {
    'Content-Type': 'application/json',
    'x-api-key': `Bearer ${CATS_API_KEY}`,
  };
  const options = { headers /* mode: 'no-cors' */ };
  const url = new URL(CATS_API_URL);
  url.searchParams.set('mime_types', types);
  url.searchParams.set('limit', nbImages.toString());

  return fetch(url, options)
    .then((res) => res.json())
    .then((res) => res.map((r) => r.url));
  // .then((res) => console.log('response', res) || res);
}
