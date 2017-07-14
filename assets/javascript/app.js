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
      $('#a1').click(function() {
        answer = 1;
      });
      $('#a1').click(function() {
        answer = 1;
      });
      $('#a1').click(function() {
        answer = 1;
      });
    }

  });