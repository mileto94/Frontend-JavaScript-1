"use strict";

String.prototype.capitalize = function() {
  return this.toUpperCase();
};

String.prototype.dasherize = function() {
  return this.split("_").join("-");
};

String.prototype.times = function(amount) {
  // return [].range(1, amount).map(function(){
  //   return this;
  // }).join(" ");

  var i = 0, result = [];

  while(i < amount) {
    result.push(this);
    i++;
  }

  return result.join(" ");
};

String.prototype.blank = function() {
  var that = this.split("");
  return that.every(function(element) { return element === " "; }) || this === "";
};

console.log("hello".capitalize());
console.log("border_bottom_width".dasherize());
console.log("Nicole".times(5));
console.log("".blank());
console.log(" ".blank());
console.log("    ".blank());
console.log(" a".blank());
