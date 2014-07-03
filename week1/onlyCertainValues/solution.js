"use strict";

var only = function (str, arr) {
  return arr.every(function (element) {
      return typeof element === str;
  });
};

exports.only = only;
