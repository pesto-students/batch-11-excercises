const https = require('https');

const responseParser = (resolve, response) => {
  let data = '';
  response.on('data', (d) => {
    data += d;
  });
  response.on('end', () => {
    resolve(JSON.parse(data));
  });
};

function bitcoinTicker({ limit }) {
  return new Promise((resolve) => {
    https.get(`https://api.coinmarketcap.com/v2/ticker/?limit=${limit}`, responseParser.bind(null, resolve));
  });
}

export {
  bitcoinTicker,
};
