"use strict";

var find = function (f, arr) {
  if(arr.some(f, arr)) {
    return arr.filter(function(element) {
      if(f(element)) {
        return element;
      }
    })[0];
  }
};

exports.find = find;
