"use strict";

var wordsHistogram = require("./solution").p;

exports.testWithSentence = function(test) {
  var expected = {
    "a" : 3,
    "function" : 3,
    "is" : 1,
    "with" : 1,
    "very" : 1,
    "functional" : 1
  };
  test.deepEqual(expected, wordsHistogram("A function is a function with a very functional function!"));
  test.done();
};
