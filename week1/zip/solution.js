"use strict";

var zip = function() {
  var arg = arguments;
  var result = [];
  var size = Object.keys(arg).length;
  Object.keys(arg).forEach(function(key, index){
    arg[key].forEach(function(item, i) {
      if(index === 0) {
        result.push([item]);
      }
      else {
        result[i].push(item);
      }
    });
  });
  return result;
};

exports.zip = zip;

console.log(zip([1, 2, 3], [4, 5, 6]));
