$(document).ready(function() {
  console.log("ready!");

  // variables
  var answer = 0;


  // Application launcher
  $(".start").click(function() {
    start();
  });

  // Application Functions
  function start() {
    var counter = 30;
    var myVar = setInterval(function() { myTimer() }, 1000);

    function myTimer() {
      counter--;
      if (counter < 10) {
        counter = "0" + String(counter);
      }
      $('#timerDisplay').html(":" + counter);
    }

    $('#a1').click(function() {
      answer = 1;
    });
    $('#a2').click(function() {
      answer = 2;
    });
    $('#a3').click(function() {
      answer = 3;
    });
    $('#a4').click(function() {
      answer = 4;
    });
        $('#a5').click(function() {
      answer = 5;
    });
  }

});