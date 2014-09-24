$(document).ready(function() {

  var insertOption = function(target, item) {
    if(item !== "") {
      var opt = $("<option/>");
      opt.text(item);
      target.append(opt);
    }
  };

  $.get("http://localhost:3000/students")
  .done(function(data){

    var first = $(".items1"),
        second = $(".items2");

    data.forEach(function(item){
      insertOption(first, item);
    });

    $(".right").click(function(){

      left_queue = $(".items1 option:selected");

      for (var i = 0; i < left_queue.length; i++) {
        insertOption(second, left_queue[i].textContent);
      }

      left_queue.remove();
    });

    $(".left").click(function() {
      right_queue = $(".items2 option:selected");

      for (var i = 0; i < right_queue.length; i++) {
        insertOption(first, right_queue[i].textContent);
      }

      right_queue.remove();
    });

  })
  .fail(function(){
    alert("ERROOR");
  });
});
