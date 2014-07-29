require.config({
  paths: {
    "Q": "bower_components/q/q"
  }
});

require(["Q"], function(Q) {

  function first() {
    var defer_obj = Q.defer();

    setTimeout(function(){
      defer_obj.resolve(console.log("called first!"));
    }, 1000);
    return defer_obj.promise;
  }

  function second() {
    var defer_obj = Q.defer();
    setTimeout(function() {
      defer_obj.resolve(console.log("called second!"));
    }, 1000);
    return defer_obj.promise;
  }

  function third() {
    console.log("I should do the job after first and second");
  }

  Q.fcall(first)
  .then(second)
  .then(third)
  .catch(function(error){
    console.log(error);
  })
  .done();

});
