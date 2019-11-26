const fs = require('fs');

function csvToJson(csvFile) {
  return new Promise((resolve, reject) => {
    fs.readFile(csvFile, 'utf8', (err, data) => {
      if (!err) {
        const lines = data.split('\n');
        const keys = lines[0].split(',');
        const avengers = lines.slice(1);
        const avengersObjects = avengers.map((avenger) => {
          const avengerProperties = avenger.split(',');
          return avengerProperties.reduce((acc, item, index) => {
            acc[keys[index]] = item;
            return acc;
          }, {});
        });
        resolve(avengersObjects);
      } else {
        reject(err);
      }
    });
  });
}

export {
  csvToJson,
};
