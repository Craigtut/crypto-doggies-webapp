import axios from 'axios';

const base = 'https://dog.ceo/api';

function request(endpoint) {
  return axios.get(base + endpoint);
}

async function getNames(num) {
  const result = await axios.get(`https://uinames.com/api/?region=united states&amount=${Math.min(num, 500)}`);
  return result.data;
}

export async function getBreeds() {
  const result = await request('/breeds/list/all');
  return result.data.message;
}

export async function getDogs(breed, subBreed = null) {
  const endpoint = (subBreed) ? `/breed/${breed}/${subBreed}/images` : `/breed/${breed}/images`;
  const imageResults = await request(endpoint);

  const numImages = imageResults.data.message.length;
  const nameResults = await getNames(numImages);

  // combine dog imgages with random names
  const result = imageResults.data.message.map((image, i) => {
    const name = (nameResults[i]) ? nameResults[i].name : 'Un-named';
    return { name, image };
  });
  return result;
}
