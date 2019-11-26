const fs = require('fs');

const createObject = (keys, values) => {
  const newObject = {};
  keys.forEach((key, index) => {
    newObject[key] = values[index];
  });
  return newObject;
};
function csvToJson(fileURL) {
  return new Promise((resolve, reject) => {
    if (!fileURL) reject(new Error('Invalid File Location Has Given.'));
    const fileContent = fs.readFileSync(fileURL, 'utf8');
    const csvLines = fileContent.split('\n');
    const firstCSVLine = csvLines.splice(0, 1);
    const objectKeys = firstCSVLine[0].split(',');
    const arrayJSON = csvLines.map((currentLine) => {
      const objectValues = currentLine.split(',');
      return createObject(objectKeys, objectValues);
    });
    resolve(arrayJSON);
  });
}

export { csvToJson };
