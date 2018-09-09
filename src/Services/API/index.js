import axios from 'axios';

const base = 'https://dog.ceo/api';

function request(endpoint) {
  return axios.get(base + endpoint);
}

async function getNames(num) {
  return axios.get(`https://uinames.com/api/?amount=${num}`);
}

export async function getBreeds() {
  const result = await request('/breeds/list/all');
  return result.data.message;
}

export async function getDogs(breed, subBreed = null) {
  const endpoint = (subBreed) ? `/breed/${breed}/${subBreed}/images` : `/breed/${breed}/images`;
  const imageResults = await request(endpoint);

  const numImages = imageResults.data.message.length;
  const nameResults = getNames(numImages);

  // combine dog imgages with random names
  const result = imageResults.data.map((image, i) => { return { name: nameResults[i], image }; });
  return result;
}
