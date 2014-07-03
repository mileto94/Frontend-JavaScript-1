"use strict";

var all = function (f, arr) {
  return arr.filter(function(element) {
    return f(element);
  }).length === arr.length;
};

console.log(all(function (item) {
  return item > 4;
}, [1,2,5,3])); // false

console.log(all(function (item) {
  return item > 4;
}, [12,23,5,5])); // true
