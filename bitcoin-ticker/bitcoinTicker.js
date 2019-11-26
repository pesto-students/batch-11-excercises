const https = require('https');

const bitcoinTicker = ({ limit }) => {
  const httpPromise = new Promise((resolve, reject) => {
    https.get(
      `https://api.coinmarketcap.com/v2/ticker/?limit=${limit}`,
      (res) => {
        let rawData = '';
        res.on('data', (chunk) => {
          rawData += chunk;
        });
        res.on('end', () => {
          try {
            const parsedData = JSON.parse(rawData);
            resolve(parsedData);
          } catch (e) {
            reject(e.message);
          }
        });
      },
    );
  });
  return httpPromise;
};

export { bitcoinTicker };
