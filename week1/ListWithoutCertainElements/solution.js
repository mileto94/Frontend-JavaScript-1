"use strict";

var without = function(exclude, arr) {
  return arr.filter(function(element) {
    return exclude.indexOf(element) < 0;
  });
};

exports.without = without;
