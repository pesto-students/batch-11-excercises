import { readFile } from 'fs';

function csvToJson(csvFile) {
  return new Promise((resolve) => {
    readFile(csvFile, (err, data) => {
      const csvLines = data.toString().split('\n');
      const [csvHeaders, ...csvData] = csvLines;
      resolve(csvData.reduce((acc, line) => {
        acc.push(line.split(',').reduce((object, value, index) => {
          // eslint-disable-next-line no-param-reassign
          object[csvHeaders.split(',')[index]] = value;
          return object;
        }, {}));
        return acc;
      }, []));
    });
  });
}

export {
  csvToJson,
};
