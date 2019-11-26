const https = require('https');

const fetch = (url) => new Promise((resolve, reject) => {
  https.get(url, (apiResponse) => {
    const contentType = apiResponse.headers['content-type'];
    let JSONData = {};
    if (apiResponse.statusCode !== 200) {
      reject(new Error(`Request Failed.\nStatus Code: ${apiResponse.statusCode}`));
    } else if (!/^application\/json/.test(contentType)) {
      reject(new Error(`Invalid content-type.
                        Expected application/json but received ${contentType}`));
    }
    apiResponse.setEncoding('utf8');
    let receivedData = '';
    apiResponse.on('data', (partialData) => {
      receivedData += partialData;
    });
    apiResponse.on('end', () => {
      try {
        JSONData = JSON.parse(receivedData);
        resolve(JSONData);
      } catch (e) {
        reject(new Error(`Error While Parsing JSON data: ${e}`));
      }
    });
  });
});

const bitcoinTicker = async () => {
  try {
    const bitCoinData = await fetch('https://api.coinmarketcap.com/v2/ticker/');
    return bitCoinData;
  } catch (e) {
    throw new Error(e);
  }
};
export {
  bitcoinTicker,
};
