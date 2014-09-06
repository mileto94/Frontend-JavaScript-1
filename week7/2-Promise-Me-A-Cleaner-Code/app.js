require.config({
  paths: {
    "Q": "bower_components/q/q"
  }
});

require(["Q"], function(Q) {

  function first() {
    var deferObj = Q.defer();

    setTimeout(function(){
      deferObj.resolve(console.log("called first!"));
    }, 1000);
    return deferObj.promise;
  }

  function second() {
    var deferObj = Q.defer();
    setTimeout(function() {
      deferObj.resolve(console.log("called second!"));
    }, 1000);
    return deferObj.promise;
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
