"use strict";

var isBalancedNumber = function (n) {
  n = Math.abs(n);
  var sumLeft = 0, sumRight = 0;
  if(n < 10) {
    return true;
  }
  else {
    var number = (n.toString()).split("");
    var arr = number.map(function(g) { return parseInt(g);});

    for(var i = 0; i < arr.length; i++) {
      if(i < parseInt(arr.length / 2, 10)) {
        sumLeft += arr[i];
      }
        else if(i > parseInt(arr.length / 2, 10) && arr.length % 2 !== 0) {
          sumRight += arr[i];
        }
      else if(i >= parseInt(arr.length / 2, 10) && arr.length % 2 === 0) {
        sumRight += arr[i];
      }
      }
    return sumRight === sumLeft;
  }
};

exports.isBalancedNum = isBalancedNumber;
