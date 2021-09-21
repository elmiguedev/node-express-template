const express = require('express');
const path = require('path');
const app = express();

// 1. configuracion de express
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.set('view options', { layout: 'layouts/main' });

// 2. definicion de rutas
app.use('/', require('./controllers/home.controller.js'));

// 3. inicio del servidor
app.listen(3000, console.log('Server escuchando en 3000'));
