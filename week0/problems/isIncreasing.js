"use strict";

var isIncreasing = function (list) {
  if(list.length === 1) {
    return true;
  }
  else {
    return list.every(function (a, b) {
      return a - b < 0;
    });
  }
};

exports.isIncreasing = isIncreasing;
