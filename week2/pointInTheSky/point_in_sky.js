"use strict";

function Point (x, y) {
  if(!(this instanceof Point)) {
    return new Point(x, y);
  }

  this.getX = function() {
    return x;
  };

  this.getY = function() {
    return y;
  };

  this.xInc = function(amount) {
    return x += amount;
  };

  this.xDec = function(amount) {
    return x -= amount;
  };

  this.yInc = function(amount) {
    return y += amount;
  };

  this.yDec = function(amount) {
    return y -= amount;
  };

}

Point.prototype.equals = function(point) {
  return point.x === this.x && point.y === this.y;
};

Point.prototype.toString = function() {
  return ["Point", "(", this.getX(), ",", this.getY(), ")"].join(" ");
};


function Robot(startPoint) {
  this.moveLeft = function(amount) {
    return startPoint.xDec(amount);
  };

  this.moveRight = function(amount) {
    return startPoint.xInc(amount);
  };

  this.moveUp = function(amount) {
    return startPoint.yDec(amount);
  };

  this.moveDown = function(amount) {
    return startPoint.yInc(amount);
  };

  this.getPosition = function() {
    return ["(", startPoint.getX(), startPoint.getY(), ")"].join(" ");
  };
}



var p1 = new Point(2, 3);
// var p2 = new Point(2, 3);
// console.log(p1.getX());
// console.log(p2.getY());
// console.log(p1.equals(p2));
// console.log(p1.toString());
// console.log(p1.xInc());

var r = new Robot(p1);
console.log(r.moveLeft(1));
