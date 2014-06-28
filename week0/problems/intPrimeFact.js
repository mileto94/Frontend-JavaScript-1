"use strict";

var isPrime = require("./is_prime").isPrime;

var primeFactorization = function (n) {
  var index = 2, array = [];
  while(index <= n/2) {
    if(n % index === 0){
    if(isPrime(index) && array.indexOf(index)) {
      array.push(index);
      // array.push(0);
      // if(array.indexOf(index) < 0) {
      //   array.push(0);
      // }
      // else {
      //   array[1] += 1;
      // }
    }
  }
    index++;
  }
  console.log(array);
  return array;
};

exports.primeFactorization = primeFactorization;
