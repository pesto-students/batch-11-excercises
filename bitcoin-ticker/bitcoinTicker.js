const https = require('https');

function bitcoinTicker({ limit }) {
  const bitcoinPromise = new Promise((resolve, reject) => {
    https.get(`https://api.coinmarketcap.com/v2/ticker/?limit=${limit}`, (resp) => {
      let data = '';
      resp.on('data', (chunk) => {
        data += chunk;
      });
      resp.on('end', () => {
        resolve(JSON.parse(data));
      });
    }).on('error', (err) => {
      reject(err.message);
    });
  });

  return bitcoinPromise;
}

export {
  bitcoinTicker,
};
