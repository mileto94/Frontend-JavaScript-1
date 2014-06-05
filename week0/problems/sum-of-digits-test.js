"use strict";

var testSumOfDigits = require("./sum-of-digits").SumOfDigits;

exports.testSumLongNumber = function(test) {
  test.equal(43, testSumOfDigits(1325132435356));
  test.done();
};

exports.testShortNumber = function(test) {
  test.equal(6, testSumOfDigits(123));
  test.done();
};

exports.testSingleNumber = function(test) {
  test.equal(7, testSumOfDigits(7));
  test.done();
};

exports.testNegativeNumber = function(test) {
  test.equal(1, testSumOfDigits(-10));
  test.done();
};
