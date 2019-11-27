require('./src/index');
const request = require('request');

describe('Server Initializations', () => {
  it('should receive status 200 from /', () =>
    new Promise((resolve, reject) => {
      request
        .get('http://localhost:3000')
        .on('response', (apiResponse) => {
          const { statusCode } = apiResponse;
          if (statusCode !== 200) {
            reject(new Error(`Received Status Code: ${statusCode}`));
          } else {
            resolve();
          }
        })
        .on('error', (err) => {
          reject(err);
        });
    }));
});
