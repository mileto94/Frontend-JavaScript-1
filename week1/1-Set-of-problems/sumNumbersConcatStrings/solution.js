"use strict";


var sum = function (a, b) {
  if(typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  else {
    f();
  }
};

var f = function() {
  throw new TypeError("You've entered an invalid data!");
};

var concat = function(a, b) {
  if(typeof a === "string" && typeof b === "string") {
    return (a + b);
  }
  else {
    f();
  }
};


exports.sum = sum;
exports.concat = concat;
