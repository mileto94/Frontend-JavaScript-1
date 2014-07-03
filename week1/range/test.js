"use strict";

var range = require("./solution").range;

exports.testWith10 = function (test) {
  test.deepEqual([1,2,3,4,5,6,7,8,9,10], range(1, 10));
  test.done();
};
