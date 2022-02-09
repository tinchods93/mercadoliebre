require("dotenv").config();
const express = require('express');
const app = express();

app.use('/static', express.static(__dirname + '/public'));
const puerto = process.env.PORT || 3000;
app.listen(puerto, () => {
  console.log(`Servidor funcionando en el puerto ${puerto}`);
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/home.html');
});

app.get('/register', (req, res) => {
  res.sendFile(__dirname + '/views/registro.html');
});

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/views/login.html');
});