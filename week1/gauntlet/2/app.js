"use strict";

$(document).ready(function() {
  var paragraphs = [$(".first"), $(".second"), $(".third")];
  var index = 0;
  $("button").click(function() {
    switch(index % 3) {
      case 0:
        paragraphs[0].addClass("highlight");
        paragraphs[2].removeClass("highlight");
        break;
      case 1:
        paragraphs[1].addClass("highlight");
        paragraphs[0].removeClass("highlight");
        break;
      case 2:
        paragraphs[2].addClass("highlight");
        paragraphs[1].removeClass("highlight");
        break;
    }
      index++;
  });
});
