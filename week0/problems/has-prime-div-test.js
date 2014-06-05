"use strict";

var hasPrimeDivisors = require("./has-prime-div").hasPrimeDivisors;

exports.testWith8 = function(test) {
  test.equal(false, hasPrimeDivisors(8));
  test.done();
};

exports.testWith7 = function(test) {
  test.equal(true, hasPrimeDivisors(7));
  test.done();
};

exports.testWith9 = function(test) {
  test.equal(true, hasPrimeDivisors(9));
  test.done();
};
