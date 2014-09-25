"use strict";

var always = require("./solution").always;

exports.testWith5 = function (test) {
  test.equal(5, always(function (item) {
    return item;
  }, 5));
  test.done();
};
