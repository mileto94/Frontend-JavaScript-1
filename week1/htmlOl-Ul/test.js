"use strict";

var ol = require("./solution").ol,
    ul = require("./solution").ul;


exports.testWithOl = function(test) {
  var expected = "<ol><li>Item 1</li><li>Item 2</li></ol>";
  test.equal(expected, ol([{ "label" : "Item 1"}, { "label" : "Item 2"}]));
  test.done();
};


exports.testWithUl = function(test) {
  var expected = "<ul><li>Item 1</li><li>Item 2</li></ul>";
  test.equal(expected, ul([{ "label" : "Item 1"}, { "label" : "Item 2"}]));
  test.done();
};
