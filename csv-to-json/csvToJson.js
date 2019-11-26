const fs = require('fs');

const buildJSON = (keys, values) => {
  let jsonObject = {};
  jsonObject = values.reduce((acc, curr, index) => {
    acc[keys[index]] = curr;
    return acc;
  }, {});
  return jsonObject;
};

function csvToJson(csvFilePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(csvFilePath, 'utf-8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        const properties = data.split('\n')[0].split(',');
        const entries = data.split('\n').slice(1);
        const arrayOfJson = entries.map((entry) => buildJSON(properties, entry.split(',')));
        resolve(arrayOfJson);
      }
    });
  });
}

export {
  csvToJson,
};
