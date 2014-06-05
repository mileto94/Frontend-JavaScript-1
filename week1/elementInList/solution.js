"use strict";

var contains = function (element, arr) {
  if(!(arr instanceof Array)) {
  arr = arr.split("");
}
  return arr.some(function() {
  return arr.indexOf(element) >= 0;
  });
};

exports.elementInList = contains;
