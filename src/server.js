var express = require('express');
var app = express();
var db = require('./db');

app.use(express.static('public'));
app.listen(process.env.PORT || 8080);

module.exports = app; //CommonJS
