"use strict";

var primeFactorization = require("./intPrimeFact").primeFactorization;

exports.testWith10 = function (test) {
  test.deepEqual([[2, 1], [5, 1]], primeFactorization(10));
  test.done();
};

exports.tetsWith14 = function (test) {
  test.deepEqual([ [2, 1], [7, 1] ], primeFactorization(14));
  test.done();
};

exports.testWith356 = function (test) {
  test.deepEqual([[2, 2], [89, 1] ], primeFactorization(356));
  test.done();
};

exports.testWith89 = function (test) {
  test.deepEqual([[89, 1]], primeFactorization(89));
  test.done();
};

exports.testWith1000 = function (test){
  test.deepEqual([ [2, 3], [5, 3] ], primeFactorization(1000));
  test.done();
};
