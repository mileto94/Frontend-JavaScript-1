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

var items = [{ "label" : "Item 1"},
             { "label" : "Item 2", "children" : [
                {
                    "label" : "Level 2 of Item 2"
                },
                {
                    "label" : "Another level 2"
                }
             ]}];

exports.testWithNestedOl = function(test) {
  var expected = "<ol><li>Item 1</li><li>Item 2<ol><li>Level 2 of Item 2</li><li>Another level 2</li></ol></li></ol>";
  test.equal(expected, ol(items));
  test.done();
};

exports.testWithNestedUl = function(test) {
  var expected = "<ul><li>Item 1</li><li>Item 2<ul><li>Level 2 of Item 2</li><li>Another level 2</li></ul></li></ul>";
  test.equal(expected, ul(items));
  test.done();
};
