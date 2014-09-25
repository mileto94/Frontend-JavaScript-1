"use strict";

var pluck = require("./solution").pluck;

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

exports.testWithCourse = function(test) {
  test.deepEqual(["Frontend JavaScript", "Programming 101", "Frontend JavaScript", "Core Java", "Core Java"], pluck("course", students));
  test.done();
};

exports.testWithName = function(test) {
  test.deepEqual(["Daniel Taskoff", "Elena Jeleva", "Luboslava Dimitrova", "Anton Antonov", "Nikola Dichev"], pluck("name", students));
  test.done();
};
