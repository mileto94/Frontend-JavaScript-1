"use strict";

var sumOfDigits = function (number) {
  var n = Math.abs(number), sum = 0;
  while(n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }

  return sum;
};

exports.SumOfDigits = sumOfDigits;
