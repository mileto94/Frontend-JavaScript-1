"use strict";

var charsHistogram = function(str) {
  var result = {};
  var input = str.toLowerCase();
  input.split("").forEach(function(letter){
    if(["!", "?", "-", ",", ".", " "].indexOf(letter) < 0) {
      if(Object.keys(result).indexOf(letter) < 0) {
        result[letter] = 1;
      }
      else {
        result[letter] += 1;
      }
    }
  });
  return result;
};

exports.chars = charsHistogram;
