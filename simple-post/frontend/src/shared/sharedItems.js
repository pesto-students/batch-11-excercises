const storage = window.localStorage;
storage.setItem('page', 1);

const server = 'localhost';
const port = '3001'
const baseUrl = `http://${server}:${port}/`;

module.exports = { storage, baseUrl };