//Needed modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//Load env variables
require('dotenv').config();

//Creates app and json parsing
const app = express();
app.use(bodyParser.json());

//Import Routes
const mobsRoute = require('./routes/mobs');

//Middlewares
app.use('/mobs', mobsRoute);

//Connection to DB
mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log('Connected to DB');
});

app.listen(8080);