"use strict";

var containsAll = function(elements, array) {
  return elements.every(function(element) {
        return array.indexOf(element) >= 0;
    });
};

exports.areAll = containsAll;
