"use strict";

var groupBy = function (groupingFunction, arr) {
  return arr.filter( function(obj) { return obj[groupingFunction(obj)]; } );
};

exports.groupBy = groupBy;
