"use strict";

var charsHistogram = require("./solution").chars;

exports.testWithSentence = function(test) {
  var expected = {c: 4,
                  o: 3,
                  u: 2,
                  n: 5,
                  t: 5,
                  h: 3,
                  e: 6,
                  a: 2,
                  r: 4,
                  s: 3,
                  i: 2,
                  v: 1,
                  y: 1,
                  p: 1,
                  f: 1,
                  d: 1 };
  test.deepEqual(expected, charsHistogram("Count the characters in this very profound sentence"));
  test.done();
};
