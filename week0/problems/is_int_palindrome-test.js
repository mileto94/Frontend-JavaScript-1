"use strict";

var isIntPalindrome = require("./is_int_palindrome").isIntPalindrome;

exports.testWith1 = function(test) {
  test.equal(true, isIntPalindrome(1));
  test.done();
};

exports.testWith42 = function(test) {
  test.equal(false, isIntPalindrome(42));
  test.done();
};

exports.testWith100001 = function(test) {
  test.equal(true, isIntPalindrome(100001));
  test.done();
};

exports.testWith999 = function(test) {
  test.equal(true, isIntPalindrome(999));
  test.done();
};


exports.testWith123 = function(test) {
  test.equal(false, isIntPalindrome(123));
  test.done();
};
