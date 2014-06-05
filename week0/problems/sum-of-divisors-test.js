"use strict";

var summDiv = require("./sum-of-divisors").sumDiv;

exports.testWith8 = function(test) {
  test.equal(15, summDiv(8));
  test.done();
};

exports.testWith7 = function(test) {
  test.equal(8, summDiv(7));
  test.done();
};

exports.testWith1 = function(test) {
  test.equal(1, summDiv(1));
  test.done();
};

exports.testWith1000 = function(test) {
  test.equal(2340, summDiv(1000));
  test.done();
};
