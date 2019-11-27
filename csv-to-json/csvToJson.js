const fs = require('fs');

function csvToJson(csvFile) {
  return new Promise((resolve, reject) => {
    fs.readFile(csvFile, 'utf-8', (err, data) => {
      if (err) {
        reject(err);
      }
      const rows = data.split('\n');
      const header = rows[0].split(',');
      rows.splice(0, 1);
      const jsonData = rows.reduce((superheroes, row) => {
        const columns = row.split(',');
        const superhero = {
          [header[0]]: columns[0],
          [header[1]]: columns[1],
          [header[2]]: columns[2],
        };
        superheroes.push(superhero);
        return superheroes;
      }, []);
      resolve(jsonData);
    });
  });
}

export {
  csvToJson,
};
