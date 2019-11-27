const express = require('express');
const bodyParser = require('body-parser');
const Cryptr = require('cryptr');
const cryptr = new Cryptr('myPrivateKey');

const app = express();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.get('/', (req,res,next) => {

    const decryptedString = cryptr.decrypt(req.headers.authorization);

    if(req.headers.authorization === undefined){
        res.send('Not Authenticated');
    }else if(decryptedString !== cryptr){
        res.send('Invalid Token');
    }else{
        res.send({
            MovieName: ['A- Team','Fight Club','Dhoom'],
        });
    }
});

app.post('/signup', (req,res) => {
    const userName = req.body.username;
    const passWord = req.body.password;

    const encryptedString = cryptr.encrypt(cryptr);
    res.send({'token': encryptedString});
});

app.listen(8000);

module.exports = app;