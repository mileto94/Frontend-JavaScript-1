"use strict";

var countSS = require("./countSubstr").CSS;

exports.testWithBaba = function(test) {
  test.equal(2, countSS("babababa", "baba"));
  test.done();
};

exports.testWithO = function(test) {
  test.equal(3, countSS("JavaScript is an awesome language to program in!", "o"));
  test.done();
};

exports.testWithIS = function(test) {
  test.equal(2, countSS("This is a test string", "is"));
  test.done();
};

exports.testWithReally = function(test) {
  test.equal(0, countSS("We have nothing in common!", "really?"));
  test.done();
};

exports.testWithThis = function(test) {
  test.equal(2, countSS("This is this and that is this", "this"));
  test.done();
};
