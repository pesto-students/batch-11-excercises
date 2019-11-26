import fs from 'fs';

function csvToJson(filePath) {
  const mapObject = (keys, values) => keys.reduce((acc, key, index) => {
    acc[key] = values[index];
    return acc;
  }, {});

  const filePromise = new Promise((resolve, reject) => {
    fs.readFile((filePath), (error, data) => {
      if (error) {
        reject(error);
      }
      const lines = data.toString().split('\n');
      const keys = lines[0].split(',');
      const resultJson = lines.reduce((acc, line, index) => {
        if (index !== 0) {
          acc.push(mapObject(keys, line.split(',')));
        }
        return acc;
      }, []);

      resolve(resultJson);
    });
  });

  return filePromise;
}

export {
  csvToJson,
};
