"use strict";

var countSubstrings = function(haystack, needle) {
  var count = 0;
  while(haystack.length > 0) {
    if(haystack.substr(0, needle.length) === needle) {
      count++;
      haystack = haystack.substr(needle.length);
    }
    else {
      haystack = haystack.substr(1);
    }
  }

  return count;
};

exports.CSS = countSubstrings;

