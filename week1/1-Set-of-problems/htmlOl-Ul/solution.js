"use strict";

var ol = function(list) {
  var result = ["<ol>"];
  list.forEach(function(pair){
    result.push("<li>");
    result.push(pair.label);
    if(pair.children) {
      result.push("<ol>");
      pair.children.forEach(function(childPair){
        result.push("<li>");
        result.push(childPair.label);
        result.push("</li>");
      });
      result.push("</ol>");
    }
    result.push("</li>");
  });
  result.push("</ol>");
  result = result.join("");
  return result;
};


var ul = function(list) {
  var result = "<ul>";
  list.forEach(function(pair) {
    result += "<li>" + pair.label;
    if(pair.children) {
      result += "<ul>";
      pair.children.forEach(function(childPair){
        result += "<li>" + childPair.label + "</li>";
      });
      result += "</ul>";
    }
    result += "</li>";
  });
  result += "</ul>";
  return result;
};
exports.ol = ol;
exports.ul = ul;
