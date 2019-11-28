const express = require('express');
const bodyParser = require('body-parser');
const AES = require("crypto-js/aes");
const cryptr = 'abcd@1234';


const app = express();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.get('/', (req,res,next) => {

    if(req.headers.authorization === undefined){
        res.send('Not Authenticated');
    } 

    const decryptedString = cryptr.decrypt(req.headers.authorization,'1234567891011121');
    
    if(decryptedString !== cryptr){
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

    const encryptedString = AES(cryptr);
    req.headers.authorization = encryptedString;
    res.send({'token': encryptedString});
});

app.listen(8000);

module.exports = app;