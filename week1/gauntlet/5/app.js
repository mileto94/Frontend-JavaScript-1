$(document).ready(function() {
  "use strict";

    var r = (parseInt(Math.random() * Math.pow(10, 12), 10)).toString();
    $(".r_number").text(r);

    var value = "";
    $(".num").click(function(){
      value += $(this).text();
      $(".input").text(value);
      if(value === r) {
        alert("Congratulations - you've won the game!");
      }
    });

    $(".back").click(function() {
      value = value.slice(0, -1);
      $(".input").text(value);
    });
});
