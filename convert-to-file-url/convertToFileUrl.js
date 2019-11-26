const path = require('path');

function convertToFileUrl(file) {
  const pathPattern = /\w(?=[/\\])/;
  let fileUrl;
  if (pathPattern.test(file)) {
    fileUrl = `file://${file}`;
  } else {
    fileUrl = `file://${path.join(__dirname, file)}`;
  }
  return fileUrl.replace('&', '&amp;')
    .replace('>', '&gt;')
    .replace('<', '&lt;')
    .replace('\'', '&#39;')
    .replace('"', '&quot;')
    .replace('^', '%5E')
    .replace('?', '%3F')
    .replace('#', '%23');
}

export {
  convertToFileUrl,
};
