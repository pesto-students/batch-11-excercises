const fs = require('fs');

const filteredNames = async (dirPath, extension) => {
  const files = fs.readdirSync(dirPath);
  const filteredFiles = files.filter((i) => i.endsWith(`.${extension}`));
  return filteredFiles;
};

export { filteredNames };
