"use strict";

var sumOfMinAndMax = function(arr) {
  var max = Math.max.apply(Math, arr),
      min = Math.min.apply(Math, arr);

  return max + min;

};

exports.Sum = sumOfMinAndMax;
