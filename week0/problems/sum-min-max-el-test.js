"use strict";

var testSumMinMaxEl = require("./sum-min-max-el").Sum;

exports.testGet10 = function(test) {
  test.equal(10, testSumMinMaxEl([1,2,3,4,5,6,8,9]));
  test.done();
};

exports.testGet90 = function(test) {
  test.equal(90, testSumMinMaxEl([-10,5,10,100]));
  test.done();
};

exports.testGet2 = function(test) {
  test.equal(2, testSumMinMaxEl([1]));
  test.done();
};
