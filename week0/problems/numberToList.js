"use strict";

var numberToList = function (number) {
  return number.toString().split("").map(function(item){return Number(item);});
};

exports.numberToList = numberToList;
