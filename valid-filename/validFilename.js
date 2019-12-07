
function validFilename(fileName) {
  const invalidFileNamePattern1 = /(con|prn|aux|nul)$/;
  const invalidFileNamePattern2 = /(com|lpt)[0-9]+/;
  const invalidFileNamePattern3 = /[|<>/?:]/;
  const invalidFileNamePattern4 = /^\.{1,2}$/;
  const isValidFileName = !(invalidFileNamePattern1.test(fileName)
    || invalidFileNamePattern2.test(fileName)
    || invalidFileNamePattern3.test(fileName)
    || !fileName || fileName.length > 255 || invalidFileNamePattern4.test(fileName));
  return isValidFileName;
}

export {
  validFilename,
};
