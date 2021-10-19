const express = require('express');
const controller = express.Router();

controller.get('/', (req, res) => {
  res.render('index');
});
controller.get('/ping', (req, res) => {
  res.send('pong!');
});

module.exports = controller;
