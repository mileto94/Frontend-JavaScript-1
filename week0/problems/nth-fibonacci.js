"use strict";

var nth_fibonacci = function(number) {
  if(number === 0) {
    return 0;
  }
  else if(number === 1 || number === 2) {
    return 1;
  }
  else {
    return nth_fibonacci(number - 1) + nth_fibonacci(number - 2);
  }
};

exports.fib = nth_fibonacci;
