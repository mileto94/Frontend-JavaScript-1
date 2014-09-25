"use strict";

var only = require("./solution").only;

exports.testTrue = function (test) {
  test.equal(false, only("string", [1,2,3,4]));
  test.done();
};

exports.testFalse = function (test) {
  test.equal(true, only("number", [1,2,3,4]));
  test.done();
};
