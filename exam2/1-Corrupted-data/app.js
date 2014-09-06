"use strict";

/* globals require, console */

var data = require("./data");
var groupBy = require("../../week1/groupBy/solution").groupBy;

var storage = [],
  studentIds = [];

var sortedStudents = groupBy(function(item) {
  return item.fields.date;
}, data);


Object.keys(sortedStudents).forEach(function(key) {
  sortedStudents[key].forEach(function(studentObj) {
      studentIds.push(studentObj.fields.student);
    //doesn't work
    if (studentIds.indexOf(studentObj.fields.student) > 2) {
      storage.push(studentObj);
    }
  });
});



console.log(storage);
