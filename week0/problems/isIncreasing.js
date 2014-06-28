"use strict";

var isIncreasing = function (list) {
  if(list.length === 1) {
    return true;
  }
  else {
    var index = 0, flag = false;
    while(index < list.length - 1) {
      console.log(list[index] , list[index + 1]);
      if(list[index] < list[index + 1]) {
        flag = true;
      }
      else {
        flag = false;
        break;
      }
      index++;
    }
    return flag;
  }
};

exports.isIncreasing = isIncreasing;
