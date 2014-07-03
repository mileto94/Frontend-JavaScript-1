"use strict";

var any = function(f, arr) {
  return arr.filter(function(element) {
    return f(element);
  }).length > 0;
};

console.log(any(function(item) {
  return item > 10;
  }, [1,34,54,70,1])); // true


console.log(any(function(item) {
  return item > 10;
  }, [1,3,5,7,9])); // false
