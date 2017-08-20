const express = require('express');
const path = require('path');

const config = require('./config');

const app = express();

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile('./public/dist/index.html');
});

app.listen(config.port, function(err) {
  if(err) {
    console.log(err);
  } else {
    console.log(`Running on ${config.port}`);
  }
});