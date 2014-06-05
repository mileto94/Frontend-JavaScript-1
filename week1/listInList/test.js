"use strict";

var all = require("./solution").areAll;

exports.testTrueWithArray = function (test) {
  test.equal(true, all([3,2], [1,2,3,4,45,6]));
  test.done();
};

exports.testFalseWithArray = function (test) {
  test.equal(false, all([3], [1.4, 6,7,8,9,5,7]));
  test.done();
};

