"use strict";

var forEach = function (f, arr) {
  var i = 0,
  n = arr.length;
  if(Array.isArray(arr)) {
    for(i; i < n; i++) {
      f(arr[i], i, arr);
    }
  }
  else {
    Object.keys(arr).forEach(function(key) { f(key, arr[key], arr); });
  }

};

var info = {
    "name" : "Rado",
    "age" : 23
};

console.log(forEach(function(key, value) {
   console.log(key, "-", value);
   // name - Rado
   // age - 23
}, info));
