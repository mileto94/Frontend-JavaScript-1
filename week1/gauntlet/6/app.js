$(document).ready(function() {

  var insertOption = function(target, item) {
    if(item !== "") {
      var opt = $("<option/>");
      opt.text(item);
      target.append(opt);
    }
  };

  // var removeOption = function(target, item) {
  //   var toRemove = target.filter(function(){
  //     console.log(target.text().search(item) > -1);
  //     return target.text().search(item) > -1;
  //   });
    // console.log(toRemove);
    // target.remove(toRemove);
  // };

  $.get("http://localhost:3000/students")
  .done(function(data){

    var first = $(".items1"),
        second = $(".items2");

    data.forEach(function(item){
      insertOption(first, item);
    });

    var selected = [];
    first.click(function(){
      selected.push($(".items1 option:selected").val());
      console.log(selected);

    $(".right").click(function(){
      selected.forEach(function(item){
        insertOption(second, item);
        console.log(item);
        // removeOption(first, item);
        // $(".items1 option:selected").text("");
        //doesn't remove all selected items in once
        $(".items1 option:selected").remove();

      });
      selected = [];
    });
    });


  })
  .fail(function(){
    alert("ERROOR");
  });
});
