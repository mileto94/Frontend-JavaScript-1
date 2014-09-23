$(document).ready(function() {
  "use strict";
  $("#search-button").click(function() {

    var url = $("#search-input").val();
    var image = new Image();
    image.src = url;

    image.onload = function() {
      $(".container").append($(this));

      $(this).on("click",function() {
        $(this).remove();
      });

    };

    image.onerror = function() {
        alert("Input Error: Invalid image URL!");
    };

  });
});
