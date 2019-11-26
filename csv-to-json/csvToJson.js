const csvjson = require('csvjson');
const readFile = require('fs').readFile;

function csvToJson(filePath) {
  return new Promise((resolve,reject) => {
    readFile(filePath,'utf-8').then((fileContent) => {
      const jsonObj = csvjson(fileContent);
      return jsonObj;
    })
    .catch((err) => {
      throw new Error(err);
    });
  });
}

export {
  csvToJson,
};
