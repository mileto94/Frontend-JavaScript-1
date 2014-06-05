"use strict";

var sumOfDivisors = function (number) {
  var sum = 0, i = 0;
  while(i <= number) {
    if(number % i === 0) {
      sum += i;
    }
    i++;
  }

  return sum;
};

exports.sumDiv = sumOfDivisors;
