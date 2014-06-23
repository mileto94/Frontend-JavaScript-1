"use strict";

var groupBy = function (groupingFunction, arr) {
  var result = {};
  arr.filter(function(obj){
    var key = groupingFunction(obj);

    if(!result[key]) {
      result[key] = [];
    }
    result[key].push(obj);

  });

  return result;

};

exports.groupBy = groupBy;
