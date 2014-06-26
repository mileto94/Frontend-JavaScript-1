"use strict";

var isDecreasing = function (list) {
  return list.every(function(a, b) {
    console.log(a, b);
    return a - b > 0;
  });
};

exports.isDecreasing = isDecreasing;
