"use strict";

var map = function(f, arr) {
  var result = [];
  arr.forEach(function(element) {
    result.push(f(element));
  });
  return result;
};

var result = map(function(x) {
    return x * x;
}, [1,2,3]);

console.log(result); // [1, 4, 9]
