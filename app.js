const express = require('express');
const app = express();
const ejs = require('ejs');
const porta = 1010;
//const User = require('./models/User.js');
//aceitar json
app.use(express.json());

app.use(express.static('/pages/principal'));

app.get('/', async (req, res) => {
    res.sendFile(__dirname + '/poke/pages/principal/index.html');
});
//requisição informações hotel

app.listen(porta, () => {
    console.log(`servidor rodando na url http://localhost:${porta}`);
});
