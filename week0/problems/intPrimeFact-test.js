"use strict";

var primeFactorization = require("./intPrimeFact").primeFactorization;

exports.testWith10 = function (test) {
  test.equal([[2, 1], [5, 1]], primeFactorization(10));
  test.done();
};
