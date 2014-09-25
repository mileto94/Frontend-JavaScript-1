"use strict";

var without = require("./solution").without;

exports.testWith5_6 = function(test) {
  test.deepEqual([1,2,3,4], without([5,6], [1,2,3,4,5,6]));
  test.done();
};

exports.testWith1_1_1_1 = function(test) {
  test.deepEqual([2,3,4,5], without([1,1,1,1], [1,2,3,4,5]));
  test.done();
};

exports.testWith1 = function(test) {
  test.deepEqual([2,3,4,5], without([1], [2,3,4,5]));
  test.done();
};
