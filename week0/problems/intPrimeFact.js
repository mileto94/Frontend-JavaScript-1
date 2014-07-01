"use strict";

var isPrime = require("./is_prime").isPrime;

var primeFactorization = function (number) {
  var result = [], index = 2, count = 0;

  while(index <= number) {
    if(number % index !== 0) {
      count = 0;
      index++;
    }
    else {
      while(isPrime(index) && number % index === 0){
        number /= index;
        count++;
      }
      result.push([index, count]);
    }
  }
  return result;
};

exports.primeFactorization = primeFactorization;
