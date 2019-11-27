const express = require('express');

const app = express();

const port = 3000;


app.get('/', (req, res) => res.send('Hello'));

app.get('/languages', (req, res) => {
    
    res.json(['java', 'python', 'haskell', 'c++', 'ruby'])
})

app.get('/pacjakges', (req, res) => {

    res.set("middleware-header", req.route.path);
    res.json(['Express', 'body-parser', 'react', 'mongoose', 'passport']);
    console.log(res, Date.now())
})


app.listen(port, () => console.log(`Server listening on port: ${port}`))


module.exports = app;