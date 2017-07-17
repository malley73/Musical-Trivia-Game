$(document).ready(function() {
  console.log("ready!");

  // build data Array of objects
  // music clip, background, correct answer, answer GIF 
  var data = [{ "Movie": "Superman", "image": "./assets/images/Superman.jpg", "music": "Superman", "gif": '<iframe src="https://giphy.com/embed/R8MIGe47XWx68" width="480" height="199" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/superman-ok-R8MIGe47XWx68">via GIPHY</a></p>', "correctAnswer": "John Towner Williams" },
    { "Movie": "Starwars", "image": "./assets/images/Starwars.jpg", "music": "StarWars", "gif": '<iframe src="https://giphy.com/embed/wNJOehuKsF84M" width="480" height="203" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/star-wars-han-solo-greedo-wNJOehuKsF84M">via GIPHY</a></p>', "correctAnswer": "John Towner Williams" },
    { "Movie": "Starwars2", "image": "./assets/images/DarthVader.jpg", "music": "TheImperialMarch", "gif": '<iframe src="https://giphy.com/embed/1FZqAOn4hzGO4" width="480" height="392" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/darth-vader-star-wars-1FZqAOn4hzGO4">via GIPHY</a></p>', "correctAnswer": "John Towner Williams" },
    { "Movie": "Raiders", "image": "./assets/images/IndianaJones.jpg", "music": "RaidersoftheLostArk", "gif": '<iframe src="https://giphy.com/embed/RJOYRvEEeMlby" width="480" height="206" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/indiana-jones-RJOYRvEEeMlby">via GIPHY</a></p>', "correctAnswer": "John Towner Williams" },
    { "Movie": "ET", "image": "./assets/images/ETMovie.jpg", "music": "ETtheExtraTerrestrial", "gif": '<iframe src="https://giphy.com/embed/cSGfgL0JVp19C" width="480" height="264" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/et-steven-spielberg-the-extra-terrestrial-cSGfgL0JVp19C">via GIPHY</a></p>', "correctAnswer": "John Towner Williams" },
    { "Movie": "Jaws", "image": "./assets/images/Jaws.jpg", "music": "Jaws", "gif": '<iframe src="https://giphy.com/embed/l4HnN3TbBNYZbeEdq" width="480" height="205" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/jaws-top-100-movie-quotes-youre-gonna-need-a-bigger-boat-l4HnN3TbBNYZbeEdq">via GIPHY</a></p>', "correctAnswer": "John Towner Williams" },
    { "Movie": "JurassicPark", "image": "./assets/images/JurassicPark.jpg", "music": "JurassicPark", "gif": '<iframe src="https://giphy.com/embed/m7R82ZvFaEi0U" width="480" height="261" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/jurassic-park-1993-bart-gets-an-elephant-m7R82ZvFaEi0U">via GIPHY</a></p>', "correctAnswer": "John Towner Williams" }
  ];

  //Wrong Answers
  var wrongAnswers = ["Johann Sebastian Bach", "Wolfgang Amadeus Mozart", "Ludwig van Beethoven", "George Frideric Handel", "Johannes Brahms", "Franz Schubert", "Claude Debussy", "George Gershwin", "Frederic Chopin", "Igor Stravinsky"];

  // variablesvar answer = 0;var counter = 0;
  var timer; //Interval Test
  var counter = 30;
  var answer = 0;
  var dataset = 7;
  var wrongDisplayAnswers = ["", "", ""];
  var correctDiv = 0;
  var playerCorrect = 0;
  var playerWrong = 0;
  var playerTimeOut = 0;
  var questionCounter = 0; // when this is 4 End game 

  // Application launcher
  startPage();


  //Build Start Page
  // build Jumbotron
  function startPage() {
      $(".start").click(function() {
    questionPage();
  });
    $(".container").empty();
    var $jumbo = $("<div class='jumbotron'><h1>Welcome to a Trivia Game</h1><h1>FOR YOUR EARS</h1><p>Listen to the following 30 second clips of classical orchestral music from the silver screen. Name, not the movie from wence it came as that will be obvious, but the composer of the arrangement.</p><p></p><p>Click Start to begin...</p></div>");
    $(".container").append($jumbo);
  }
  timer; //Interval Test
  counter = 30;
  answer = 0;
  dataset = 7;
  wrongDisplayAnswers = ["", "", ""];
  correctDiv = 0;
  playerCorrect = 0;
  playerWrong = 0;
  playerTimeOut = 0;
  questionCounter = 0;

  //Build Question Page
  // insert Divs
  function questionPage() {
    $(".start").off('click');
    $(".container").empty();

    var $newdivq = $("<div class='row question'><h2><stong>Who is the composer of the music you are listening to?</strong></h2></div>");
    $(".container").append($newdivq);

    for (i = 1; i < 5; i++) {
      $(".container").append("<div class='row answers' id='a" + i + "'>New Div " + i + "</div>");
    }

    // populate divs
    // pick dataset
    dataset = Math.floor(Math.random() * 7);
    // select 3 random wrong answers w/o duplicates
    var i = 0;
    while (i < 3) {
      var potentialWrongAnswer = wrongAnswers[Math.floor(Math.random() * wrongAnswers.length)];
      if (wrongDisplayAnswers.indexOf(potentialWrongAnswer) === -1) {
        wrongDisplayAnswers[i] = potentialWrongAnswer;
        i++;
      }
    }

    //Correct Answer div
    correctDiv = (Math.floor(Math.random() * 4)) + 1;
    console.log("correctDiv: " + correctDiv);
    $("#a" + correctDiv).html("<h2>" + data[dataset].correctAnswer + "</h2>");
    //populate other divs, not the correctDiv
    var x = 0;
    for (i = 1; i < 5; i++) {
      if (i !== correctDiv) {
        $("#a" + i).html("<h2>" + wrongDisplayAnswers[x] + "</h2>");
        x++;
        console.log("wongDivs: " + i);
      }
    }
    start(); // start time activate fields for selection
  }


  function start() {
    //change background
    $('#full').css('background-image', 'url(' + data[dataset].image + ')');
    //start music
    document.getElementById(data[dataset].music).play();
    //start timer
    timer = setInterval(function() { myTimer() }, 1000);

    function myTimer() {
      counter--;
      if (counter < 10) {
        counter = "0" + String(counter);
      }
      if (counter === "00") {
        answer = 0;
        clearInterval(timer);
        checkAnswer(answer);
      }
      $('#timerDisplay').html(":" + counter);
    }

    $('#a1').click(function() {
      answer = 1;
      checkAnswer(answer);
    });
    $('#a2').click(function() {
      answer = 2;
      checkAnswer(answer);
    });
    $('#a3').click(function() {
      answer = 3;
      checkAnswer(answer);
    });
    $('#a4').click(function() {
      answer = 4;
      checkAnswer(answer);
    });
    $('#a5').click(function() {
      answer = 5;
      checkAnswer(answer);
    });
  }

  function checkAnswer(answer) {
    document.getElementById(data[dataset].music).pause();
    $('#full').css('background-image', 'url(./assets/images/e8B1phX.jpg)');
    $(".container").empty();
    console.log(answer);
    clearInterval(timer);
    counter = 30;
    questionCounter++;
    if (answer === correctDiv) {
      playerCorrect++;
      responsePage(1);
      console.log("playerCorrect: " + playerCorrect);
    } else if (answer === 0) {
      playerTimeOut++;
      responsePage(3)
      console.log("playerTimeOut: " + playerTimeOut);
    } else {
      playerWrong++;
      responsePage(2)
      console.log("playerWrong: " + playerWrong);
    }
  }

  //Build Response Page
  function responsePage(wld) {
    if (wld === 1) {
      var $jumbo = $("<div class='jumbotron'><h1>Correct!</h1></div>");
    } else if (wld === 2) {
      var $jumbo = $("<div class='jumbotron'><h1>Wrong!</h1><p>The correct answer was " + data[dataset].correctAnswer + "</p></div>");
    } else {
      var $jumbo = $("<div class='jumbotron'><h1>You ran out of time!</h1><p>The correct answer was " + data[dataset].correctAnswer + "</p></div>");
    }
    $(".container").append($jumbo);
    $(".jumbotron").append(data[dataset].gif);
    if (questionCounter < 4) {
      setTimeout(questionPage, 8000)
    } else {
      setTimeout(finalPage, 8000)
    }
  }

  function finalPage() {
    $(".container").empty();
    var $jumbo = $("<div class='jumbotron'><h1>Final Score</h1><p>Correct Answers: " + playerCorrect + "</p><p>Wrong Answers: " + playerWrong + "</p><p> Unanswered: " + playerTimeOut + "</p></div>");
    $(".container").append($jumbo);

    setTimeout(startPage,10000);
  }

});