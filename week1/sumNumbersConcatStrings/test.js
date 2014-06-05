"use strict";

var sum = require("./solution").sum;
var str = require("./solution").concat;

exports.testSumWith2and4 = function(test) {
    test.equal(6, sum(2, 4));
    test.done();
};

exports.testSumWith2andAND = function(test) {
  test.throws(function() {
    sum(2, "and");
  });
  test.done();
};

exports.testStrWith2andAND = function(test) {
  test.throws(function() {
    str(2, "and");
  });
  test.done();
};

exports.testStrWithGOandAHEAD = function(test) {
  test.equal("goahead", str("go", "ahead"));
  test.done();
};
