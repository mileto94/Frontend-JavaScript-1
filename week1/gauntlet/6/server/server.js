/* globals console, require */
"use strict";
// trying to start this file but something's not working?
// try npm install first

var express = require('express');
var app = express();

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

var students = ["Milk", "Chocolate", "Sugar", "Cacao", "Rice", "Oil",
                "Olive oil", "Olive", "Meat", "Bread"];

app.get('/students', function(req, res){
  res.json(students);
});


var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});
