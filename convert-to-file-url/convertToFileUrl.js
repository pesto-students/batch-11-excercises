import url from 'url';

function convertToFileUrl(path) {
  console.log( encodeURI( url.pathToFileURL(path).toString()));

  return encodeURI((url.pathToFileURL(decodeURI(path)).toString()));
}

export {
  convertToFileUrl,
};
