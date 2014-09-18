/* globals $, console, document */

$(document).ready(function() {
  "use strict";
  var paragraphs = $("p"),
      first = paragraphs.first(),
      last = paragraphs.last(),
      current = $(".first");
  $("button").click(function() {
      current.addClass("highlight");
      current.prev().removeClass("highlight");
      if(current.prev().length === 0) {
        last.removeClass("highlight");
      }
      current = current.next();
      if(current.length === 0) {
        current = first;
      }
  });
});
