"use strict";

var isDecreasing = function (list) {
  if(list.length === 1) {
    return false;
  }
  else {
    var index = 0, difference = list[0] - list[1];
    while(index < list.length - 1 && difference > 0) {
      difference = list[index] - list[index + 1];
      index+=2;
    }
    return difference > 0;
  }
};

exports.isDecreasing = isDecreasing;
