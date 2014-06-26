"use strict";

var countWovels = function (str) {
  var count = 0;
  var wovels = ["e", "y", "u", "i", "o", "a"];
  str = str.toLowerCase();
  wovels.forEach(function (wovel) {
    count += str.split(wovel).length - 1;
  });
  return count;
};

exports.countWovels = countWovels;
