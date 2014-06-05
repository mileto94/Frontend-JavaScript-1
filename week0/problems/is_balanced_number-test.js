"use strict";

var isBalanced = require("./is_balanced_number").isBalancedNum;

exports.testWith9 = function (test) {
  test.equal(true, isBalanced(9));
  test.done();
};

exports.testWith11 = function (test) {
  test.equal(true, isBalanced(11));
  test.done();
};

exports.testWith13 = function (test) {
  test.equal(false, isBalanced(13));
  test.done();
};

exports.testWith121 = function (test) {
  test.equal(true, isBalanced(121));
  test.done();
};

exports.testWith4518 = function (test) {
  test.equal(true, isBalanced(4518));
  test.done();
};

exports.testWith28471 = function (test) {
  test.equal(false, isBalanced(28471));
  test.done();
};

exports.testWith1238033 = function (test) {
  test.equal(true, isBalanced(1238033));
  test.done();
};
