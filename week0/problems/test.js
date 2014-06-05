"use strict";

// var forEach = function(array, func) {
//   for(var i = 0; i < array.length; i++) {
//     func(array[i], i, array);
//   }
// };

// // console.log(forEach([24,34,2,5,3,1,5,2], function(a) {return a * 2;}));


var a = [
          { "name": "John",
            "age": 23,
            "gender": "male",
            "city": "New York"},
          { "name": "Jane",
            "age": 21,
            "gender": "female",
            "city": "LA"},
          { "name": "Tom",
            "age": 25,
            "gender": "male",
            "city": "Washington"}
        ];

// a.forEach(function (argument) {console.log(argument);});

// console.log(forEach(a, function(a) {return a.name;}));
// a.forEach(key,value) {console.log(key, value);}
///////////////////////////////////////////////

var format = function(string, substring) {
  for(var i = 0; i < string.length; i++) {
    if(string[i] === substring.lang) {
      console.log(23);
    }
  }
};

var formatted = format("{lang} is a very weird {thing}!", {
  "lang" : "JavaScript",
  "thing" : "language"
});

console.log(formatted); // JavaScript is a very weird language!






















