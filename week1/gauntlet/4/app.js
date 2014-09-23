var groupBy = function (groupingFunction, arr) {
  var result = {};
  arr.filter(function(obj){
    var key = groupingFunction(obj);

    if(!result[key]) {
      result[key] = [];
    }
    result[key].push(obj);

  });
  return result;
};


var byCourse = function(student) {
  return student.course;
};


var getStudentsByCourse = function(sortedByCourse) {
  var pickedCourse = $("#course").val(),
      courseStudents = sortedByCourse[pickedCourse];
      courseStudents = courseStudents.map(function(student) {
        return [student.name, student.github];
      });
      return courseStudents;
};


$(document).ready(function(){
  "use strict";
    $.get("http://localhost:3000/students")
    .done(function(students) {

      var inputStudents = $("#students"),
          sortedByCourse = groupBy(byCourse, students),
          courseStudents = [];

      $("#course").click(function(){
        $("#students option").remove();
        courseStudents = getStudentsByCourse(sortedByCourse);
        courseStudents.forEach(function(student){
          var opt = $("<option/>");
          opt.attr({"value": student[0]}).text(student[0]);
          $("#students").append(opt);
        });
        $("#info h2").remove();
        inputStudents.click();
      });


      inputStudents.click(function(){
        $("#info h2").remove();
        courseStudents.forEach(function(student){
          if(student[0] === inputStudents.val()){
          $("#info").append(["<h2>GitHub for ", student[0], " is ", student[1],
                             "</h2>"].join(""));
          }
        });
      });

      $("#course").click();

    })
    .fail(function(){
      alert("A problem occurred while connecting to the server.");
    });
});
