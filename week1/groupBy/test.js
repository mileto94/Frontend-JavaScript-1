"use strict";

var group = require("./solution").groupBy;

var students = [{
  "name" : "Daniel Taskoff",
  "course" : "Frontend JavaScript"
}, {
  "name" : "Elena Jeleva",
  "course" : "Programming 101"
}, {
  "name" : "Luboslava Dimitrova",
  "course" : "Frontend JavaScript"
}, {
  "name" : "Anton Antonov",
  "course" : "Core Java"
}, {
  "name" : "Nikola Dichev",
  "course" : "Core Java"
}];

var f = function(student) {
  return student.course;
};


var byCourse = { "Frontend JavaScript":
   [ { name: "Daniel Taskoff", course: "Frontend JavaScript" },
     { name: "Luboslava Dimitrova", course: "Frontend JavaScript" } ],
  "Programming 101": [ { name: "Elena Jeleva", course: "Programming 101" } ],
  "Core Java":
   [ { name: "Anton Antonov", course: "Core Java" },
     { name: "Nikola Dichev", course: "Core Java" } ] };

exports.testWithKeys = function (test) {
  test.equal(byCourse, group(f, students));
  test.done();
};

var groupBy = function (groupingFunction, arr) {
  return arr.filter( function(obj) { return obj[groupingFunction(obj)]; } );
};
console.log(groupBy(f, students));
