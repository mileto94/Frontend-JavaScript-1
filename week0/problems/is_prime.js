"use strict";

var isPrime = function(n) {
  n = Math.abs(n);
  var i = 1, count = 0;
  while(i < n) {
    if(n % i === 0){
      count++;
    }
    i++;
  }

  if(count > 2 || n === 1) {
    return false;
  }
  else {
    return true;
  }
};

exports.isPrime = isPrime;
