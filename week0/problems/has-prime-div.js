"use strict";

var hasPrimeDivisors = function (n) {
  var isPrime = require("./is_prime").isPrime,
      div = 0, primeDiv = 0;
  for(var i = 2; i <= n; i++) {
    if(n % i === 0) {
      div++;
      if(isPrime(i)) {
        primeDiv++;
      }
    }
  }
  return primeDiv === div;
};

exports.hasPrimeDivisors = hasPrimeDivisors;
