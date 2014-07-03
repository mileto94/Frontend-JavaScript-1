"use strict";

var reduce = function(f, arr, start) {
  var result = start;
  arr.forEach(function(element) {
    result = f(result, element);
  });
  return result;
};

console.log(reduce(function (a, b) {
  return a + b;
}, [1,2,3,4,5], 0 ));

console.log(reduce(function (a, b) {
  return a * b;
}, [1,2,3,4,5], 1 ));
