"use strict";

var countConsonants = require("./countConsonants").countConsonants;

exports.testWithJavaScript = function (test) {
  test.equal(7, countConsonants("JavaScript"));
  test.done();
};

exports.testWithTheistareykjarbunga = function (test) {
  test.equal(11, countConsonants("Theistareykjarbunga"));
  test.done();
};

exports.testWithgrrrrgh = function (test) {
  test.equal(7, countConsonants("grrrrgh!"));
  test.done();
};

exports.testWithGithub = function (test) {
  test.equal(44, countConsonants("Github is the second best thing that happend to programmers, after the keyboard!"));
  test.done();
};

exports.testWithA_nice_day_to_code = function (test) {
  test.equal(6, countConsonants("A nice day to code!"));
  test.done();
};
