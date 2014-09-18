$(document).ready(function() {
  "use strict";
  $("#search-button").click(function() {
    var url = $("#search-input").val();
    var image = $("<img class='i' src=" + url + ">");
    $(this).after(image);

    $("img").on("click", function() {
      $(this).remove();
    });

  });
});
