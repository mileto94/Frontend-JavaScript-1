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

    var selected = [];
    $("option").click(function(){
      var value = $(this).val();

      if(selected.indexOf(value) < 0){
        selected.push(value);
        $(this).addClass("to");
      }

      console.log(selected);

    $(".right").click(function(){
      $(this).data("clicked", true);
      selected.forEach(function(item){
        insertOption(second, item);
        $(".to").remove();
        selected = [];
        });
      });
    });


  })
  .fail(function(){
    alert("ERROOR");
  });
});
