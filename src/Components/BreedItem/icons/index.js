function importAll(r) {
  const fileNames = r.keys();
  const imports = fileNames.map(r);

  const object = {};
  imports.forEach((image, i) => {
    const key = fileNames[i].match(/\.\/(.*?)\.svg/)[1];
    object[key] = image;
  });

  return object;
}

const images = importAll(require.context('./', false, /\.(svg)$/));
export default images;
