"use strict";

Array.prototype.range = function(from, to) {
  var i = from, result = [];

  while(i <= to) {
    result.push(i);
    i++;
  }
  return result;
};


Number.prototype.times = function(action) {
  var arr = [].range(1, this);
  arr.forEach(function() { action(); });
};

console.log((5).times(function () { console.log("Hey!!!"); }));
