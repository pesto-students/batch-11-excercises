const express = require('express');

const app = express();

app.get('/',(req,res) => {
    res.send(`Hey, I am server response`);
});

app.listen(3000);
module.exports = app;
