"use strict";

function Pair (left, right) {
  if(!(this instanceof Pair)){
    return new Pair(left, right);
  }

  this.left = left;
  this.right = right;

}


Pair.prototype.equals = function(pair) {
    return this.left === pair.left && this.right === pair.right;
};


Pair.prototype.toString = function() {
  var result = ["(", this.left.toString(), ",", this.right.toString(), ")"];
  return result.join("");
};

Pair.prototype.toList = function() {
  return [this.left, this.right];
};

Pair.prototype.combine = function(f) {
  return f(this.left, this.right);
};


var pair1 = new Pair(3, 4);
var pair2 = new Pair(2, 4);
var pair3 = new Pair(3, 4);


console.log(pair1.equals(pair2));
console.log(pair1.equals(pair3));
console.log(typeof(pair1.toString()));
console.log(pair1.toList());
console.log(pair1.combine(function(left, right) {
  return left + right;
}));
console.log(pair1.combine(function(left, right) {
  return left * right;
}));


