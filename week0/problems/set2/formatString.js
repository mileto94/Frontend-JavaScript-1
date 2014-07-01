"use strict";

var formatString = function(str, dict) {
  Object.keys(dict).forEach(function(key) {
    str = str.split("{" + key + "}").join(dict[key]);
  });
  return str;
};
var formatted = formatString("{lang} is a very lang {thing}!", {
  "lang" : "JavaScript",
  "thing" : "language"
});

console.log(formatted); // JavaScript is a very weird language!
