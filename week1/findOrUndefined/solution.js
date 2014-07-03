"use strict";

var find = function (f, arr) {
  if(arr.some(f, arr)) {
    return arr[0];
  }
};

exports.find = find;
