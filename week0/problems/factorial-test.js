"use strict";

// we require the module name - without .js
// and after this - the function that we want to test
var test_fact = require("./factorial").jim;

exports.testFactorialForZero = function(test) {
  test.equal(1, test_fact(0));
  test.done();
};

exports.testFactorialForFive = function(test) {
  test.equal(120, test_fact(5));
  test.done();
};
