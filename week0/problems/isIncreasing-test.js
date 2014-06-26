"use strict";

var isIncreasing = require("./isIncreasing").isIncreasing;

exports.testWith12345 = function (test) {
  test.equal(true, isIncreasing([1, 2, 3, 4, 5]));
  test.done();
};

exports.testWith1 = function (test) {
  test.equal(true, isIncreasing([1]));
  test.done();
};

exports.testWith56_10 = function (test) {
  test.equal(false, isIncreasing([5, 6, -10]));
  test.done();
};

exports.testWith11111 = function (test) {
  test.equal(false, isIncreasing([1, 1, 1, 1]));
  test.done();
};
