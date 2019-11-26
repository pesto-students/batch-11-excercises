import fs from 'fs';

function filteredNames(pathToDir, extension) {
  const fileList = fs.readdirSync(pathToDir);

  return fileList.reduce((acc, current) => {
    if (current.endsWith(extension)) {
      acc.push(current);
    }
    return acc;
  }, []);
}

export {
  filteredNames,
};
