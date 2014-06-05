"use strict";

var test_fib = require("./nth-fibonacci").fib;

exports.test0thMember = function(test) {
  test.equal(0, test_fib(0));
  test.done();
};

exports.test1stMember = function(test) {
  test.equal(1, test_fib(1));
  test.done();
};

exports.test2ndMember = function(test) {
  test.equal(1, test_fib(2));
  test.done();
};

exports.test3rdMember = function(test) {
  test.equal(2, test_fib(3));
  test.done();
};

exports.test10thMember = function(test) {
  test.equal(55, test_fib(10));
  test.done();
};
