"use strict";

var filter = function (f, arr) {
  var result = [];
  arr.forEach(function(element){
    if(f(element)){
      result.push(element);
    }
  });
  return result;
};

var users = [{
    "name" : "Rado",
    "score" : 50
}, {
    "name" : "Ivan",
    "score" : 67
}, {
    "name" : "Vlado",
    "score" : 30
}];

// filter all users with score bigger than 40

var result = filter(function(user) {
    return user.score > 40;
}, users);

console.log(result);
/*
[ { name: 'Rado', score: 50 },
  { name: 'Ivan', score: 67 } ]
*/
