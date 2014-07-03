"use strict";

var groupBy = require("../groupBy/solution").groupBy;

var countBy = function (f, arr) {
  var grouped = groupBy(f, arr),
      result = {};
  Object.keys(grouped)
    .forEach(function(element) {
    result[element] = grouped[element].length;
  });
  return result;
  };

exports.countBy = countBy;
