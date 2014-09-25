"use strict";

var wordsHistogram = function(str) {
  var result = {};
  var input = str.toLowerCase();
  input = input.split("").filter(function(letter) {
    return ["!", "?", "-", ".", ","].indexOf(letter) < 0;
  }).join("");
  input.split(" ").forEach(function(word){
    if(Object.keys(result).indexOf(word) < 0) {
      result[word] = 1;
    }
    else {
      result[word] += 1;
    }
  });
  return result;
};

exports.p = wordsHistogram;
