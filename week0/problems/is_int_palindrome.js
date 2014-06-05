"use strict";

var is_int_palindrome = function(n) {
  var number = (Math.abs(n)).toString(), count = 0, size = number.length;
  if(size === 1) {
    return true;
  }
  else {
    for(var i = 0; i < parseInt(size / 2); i++) {
      if(number[i] === number[size - i - 1]) {
        count += 1;
      }
      else {
        break;
      }
    }
  }

  if(count === parseInt(size / 2) || size === 1) {
    return true;
  }
  else {
    return false;
  }
};

exports.isIntPalindrome = is_int_palindrome;
