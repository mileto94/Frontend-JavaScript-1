"use strict";

var numberToList = require("./numberToList").numberToList;

exports.testWith123 = function (test) {
  test.deepEqual([1, 2, 3], numberToList(123));
  test.done();
};

exports.testWith99999 = function (test) {
  test.deepEqual([9, 9, 9, 9, 9], numberToList(99999));
  test.done();
};

exports.testWith123023 = function (test) {
  test.deepEqual([1, 2, 3, 0, 2, 3], numberToList(123023));
  test.done();
};
