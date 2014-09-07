"use strict";

var ol = function(list) {
  var result = ["<ol>"];
  list.forEach(function(pair){
    result.push("<li>");
    result.push(pair.label);
    result.push("</li>");
  });
  result.push("</ol>");
  result = result.join("");
  return result;
};


var ul = function(list) {
  var result = "<ul>";
  list.forEach(function(pair) {
    result += "<li>" + pair.label + "</li>";
  });
  result += "</ul>";
  return result;
};
exports.ol = ol;
exports.ul = ul;
