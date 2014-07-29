"use strict";

/* globals require, console */

var data = require("./data");
var groupBy = require("../../week1/groupBy/solution").groupBy;

var storage = [];

var sortedStudents = groupBy(function(item){
    return item.fields.date;
}, data);

Object.keys(sortedStudents).forEach(function(d){
    sortedStudents[d].forEach(function(st){
    //doesn't work
        if(storage.indexOf(st.fields.student)){
        storage.push(st);
    }
    });
});


console.log(storage);

