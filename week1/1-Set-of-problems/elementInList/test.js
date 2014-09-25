"use strict";

var exists = require("./solution").elementInList;

exports.testTrueWithArray = function (test) {
  test.equal(true, exists(3, [1,3,4,5]));
  test.done();
};

exports.testFalseWithArray = function (test) {
  test.equal(false, exists(2, [22,3,4,5,6,7]));
  test.done();
};

exports.testTrueWithString = function (test) {
  test.equal(true, exists("a", "sgdgadg"));
  test.done();
};

exports.testFalseWithString = function (test) {
  test.equal(false, exists("s", "dghrhrh"));
  test.done();
};

