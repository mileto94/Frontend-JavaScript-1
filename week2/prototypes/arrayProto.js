"use strict";

Array.prototype.first = function() {
  if(this.length > 0) {
    return this[0];
  }
  else {
    throw new TypeError("Your array has no elements!");
  }
};

Array.prototype.range = function(from, to) {
  var i = from, result = [];

  while(i <= to) {
    result.push(i);
    i++;
  }
  return result;
};

Array.prototype.sum = function() {
  return this.reduce(function(a, b) {
    return a + b;
  });
};

Array.prototype.average = function() {
  return this.sum() / this.length;
};

// console.log([].first());  //throws exception always
console.log([2].first());
console.log([].range(1, 4));
console.log([1,2,3,4,5,6,7,8,9,10].sum());
console.log([1,2].average());
