const path = require('path');

function convertToFileUrl(filepath) {
  let pathname = path.resolve(filepath);
  pathname = pathname.replace(/\\/g, '/');
  return encodeURI(`file://${pathname}`).replace(/[?#]/g, encodeURIComponent);
}

export {
  convertToFileUrl,
};
