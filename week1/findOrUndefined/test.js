"use strict";

var find = require("./solution").find;

exports.testWithFind = function (test) {
  test.equal(3, find(function(item) {
    return item > 2;
  }, [3, 4, 2, 5]));
  test.done();
};
