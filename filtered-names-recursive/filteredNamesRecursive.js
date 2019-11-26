import fs from 'fs';
import path from 'path';


function filteredNamesRecursive(pathToDir, extension) {
  const fileList = fs.readdirSync(pathToDir);

  return fileList.reduce((acc, current) => {
    if (current.endsWith(extension)) {
      return acc.concat(current);
    } if (fs.lstatSync(path.join(pathToDir, current)).isDirectory()) {
      return acc.concat(filteredNamesRecursive(path.join(pathToDir, current), extension));
    }
    return acc;
  }, []);
}

export {
  filteredNamesRecursive,
};
