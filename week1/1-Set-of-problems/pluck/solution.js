"use strict";

var pluck = function(property, arr) {
  return arr.map(function(element) {
    return element[property];
  });
};

exports.pluck = pluck;
