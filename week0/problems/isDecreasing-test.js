"use strict";

var isDecreasing = require("./isDecreasing").isDecreasing;

exports.testWith5_4_3_2_1 = function (test) {
  test.equal(true, isDecreasing([5,4,3,2,1]));
  test.done();
};

exports.testWith1 = function (test) {
  test.equal(false, isDecreasing([1,2,3]));
  test.done();
};

exports.testWith100_50_20 = function (test) {
  test.equal(true, isDecreasing([100, 50, 20]));
  test.done();
};

exports.testWith11111 = function (test) {
  test.equal(false, isDecreasing([1, 1, 1, 1, 1]));
  test.done();
};
