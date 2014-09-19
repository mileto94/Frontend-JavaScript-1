$(document).ready(function() {
  "use strict";
  $("#search-button").click(function() {

    var url = $("#search-input").val();
    var image = new Image();
    image.src = url;

    image.onload = function() {
      $(".container").append($(this));
    };

    image.onerror = function() {
        alert("Input Error: Invalid image URL!");
    };

    $("img").on("click", function() {
      $(this).remove();
    });

  });
});
