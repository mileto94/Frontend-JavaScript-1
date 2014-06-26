"use strict";

var countWovels = require("./countWovels").countWovels;

exports.testWithJavaScript = function (test) {
  test.equal(3, countWovels("JavaScript"));
  test.done();
};

exports.testWithTheistareykjarbunga = function (test) {
  test.equal(8, countWovels("Theistareykjarbunga"));
  test.done();
};

exports.testWithGrrrrgh = function (test) {
  test.equal(0, countWovels("grrrrgh!"));
  test.done();
};

exports.testWithGithub_is_the_second_best_thing_that_happend_to_programmers_after_the_keyboard = function (test) {
  test.equal(22, countWovels("Github is the second best thing that happend to programmers, after the keyboard!"));
  test.done();
};

exports.testWithA_nice_day_to_code = function (test) {
  test.equal(8, countWovels("A nice day to code!"));
  test.done();
};
