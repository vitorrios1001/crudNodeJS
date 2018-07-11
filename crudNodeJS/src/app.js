'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();
const router = express.Router();

//Conecta no banco
mongoose.connect(config.connectionString);

//Carrega os Models
const Product = require('./models/product');

//Carrega as Rotas
const indexRoute= require('./routes/index-route');
const productRoute = require('./routes/product-route');

app.use(bodyParser.json({
    limit: '5mb'
}));
app.use(bodyParser.urlencoded({ 
    extended: false 
}));

app.set('view engine', 'ejs');
app.set('views', './src/views');

// Habilita o CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

app.use('/',indexRoute);
app.use('/products',productRoute);

module.exports = app;

