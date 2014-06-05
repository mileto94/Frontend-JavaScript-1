"use strict";

var isPrime = require("./is_prime").isPrime;

exports.testWithOne = function(test) {
  test.equal(false, isPrime(1));
  test.done();
};

exports.testPrime = function(test) {
  test.equal(true, isPrime(2));
  test.done();
};

exports.testNotPrime = function(test) {
  test.equal(false, isPrime(10));
  test.done();
};

exports.testWithNegativePrime = function(test) {
  test.equal(true, isPrime(-2));
  test.done();
};

exports.testWithNegativeNotPrime = function(test) {
  test.equal(false, isPrime(-8));
  test.done();
};
