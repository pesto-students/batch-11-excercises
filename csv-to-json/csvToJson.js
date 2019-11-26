const fs = require('fs');

function csvToJSON(csv) {
  const lines = csv.split('\n');
  const result = [];
  const headers = lines[0].split(',');

  for (let i = 1; i < lines.length; i += 1) {
    const obj = {};
    const currentline = lines[i].split(',');

    for (let j = 0; j < headers.length; j += 1) {
      obj[headers[j]] = currentline[j];
    }
    result.push(obj);
  }
  return JSON.parse(JSON.stringify(result));
}

function csvToJson(file) {
  return new Promise((res, rej) => {
    fs.readFile(file, 'utf-8', (err, data) => {
      if (err) {
        rej(err);
      } else {
        res(csvToJSON(data));
      }
    });
  });
}

export {
  csvToJson,
};
