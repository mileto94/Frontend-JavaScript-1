$(document).ready(function() {
  "use strict";
  $("#search-button").click(function() {
    var url = $("#search-input").val();

    if(url.indexOf("http://") > -1) {
      var image = $("<img class='i' src=" + url + ">");
      $(this).after(image);
    }
    else {
      alert("Input Error - Invalid URL!");
    }


    // $("#1").onerror = function(){
    //   alert("errror");
    // };

    // $.ajax({
    //     crossOrigin: true,
    //     url: url,
    //     success: function(data) {
    //         console.log(data);
    //     },
    //     error: function() {
    //       alert("zsgf");
    //     }
    // });


    $("img").on("click", function() {
      $(this).remove();
    });

  });
});
