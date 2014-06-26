"use strict";

var countConsonants = function (str) {
  str = str.toLowerCase();
  var count = 0, consonants = "qwrtpsdfghjklzxcvbnm";
  consonants = consonants.split("");
  consonants.forEach(function(consonant) {
    count += str.split(consonant).length - 1;
  });
  return count;
};

exports.countConsonants = countConsonants;
