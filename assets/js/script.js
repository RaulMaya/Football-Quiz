var body = document.querySelector("body");
var startBtn = document.getElementById("start-quiz-button");
var h1Text = document.querySelector("h1");
var h3Text = document.querySelector("h3");
var mainSection = document.querySelector("section");
var highscores = document.querySelector("#highscores");
var main = document.querySelector("main");
var timeEl = document.createElement("p");
var askedQuestion = document.createElement("h2");
var listEl = document.createElement("ul");
var answerOutputEl = document.createElement("div");
var gameOverText = document.createElement("p");
var feedBackAnswer = document.createElement("p");
var score = document.createElement("p");
var urName = document.createElement("p");
var resetGame = document.createElement("button");
var startMenu = document.createElement("button");
var clearHighScores = document.createElement("button");
var inputHighScore = document.createElement("input");
var highscoreTable = document.createElement("table");
var noHighScores = document.createElement("p");
var answerImage = document.createElement("img");
var submitHS = document.createElement("button");

inputHighScore.setAttribute("id", "highScoreName");
askedQuestion.setAttribute("class", "questionAsked");
timeEl.setAttribute("class", "timer");
startMenu.setAttribute("class", "lastButtons");
resetGame.setAttribute("class", "lastButtons");
clearHighScores.setAttribute("class", "lastButtons");
noHighScores.setAttribute("class", "noHighscores");

mainSection.append(askedQuestion);
mainSection.append(listEl);
mainSection.append(answerOutputEl);
answerOutputEl.setAttribute("class", "ansOutput");
gameOverText.setAttribute("class", "gameOver");
urName.setAttribute("class", "urName");

mainSection.append(feedBackAnswer);
feedBackAnswer.setAttribute("class", "feedback");

mainSection.append(answerImage);
answerImage.classList.add("hidden");

mainSection.append(timeEl);

var timeLeft,
  timeInterval,
  arrayindex,
  questionsArray,
  qCounter,
  rightAnswers,
  wrongAnswers;
var userArr = [];
var scoresArr = [];
var sortable = [];

var questions = [
  (qOne = {
    question: "Who has scored the most goals in World Cup competitions?",
    answers: [
      "David Villa",
      "Ronaldo Nazario",
      "Gary Lineker",
      "Miroslav Klose",
    ],
    correctAnswer: "Miroslav Klose",
    img: "assets/images/qImages/ans1.png",
  }),
  (qTwo = {
    question: "What country does Aubameyang play for?",
    answers: ["Gab??n", "Etiophia", "Egypt", "Guinea"],
    correctAnswer: "Gab??n",
    img: "assets/images/qImages/ans2.png",
  }),
  (qThree = {
    question: "Who score the only goal of the EURO 2016 final? ",
    answers: [
      "Cristiano Ronaldo",
      "Ederzito Ant??nio",
      "Renato Sanches",
      "Rafael Guerreiro",
    ],
    correctAnswer: "Ederzito Ant??nio",
    img: "assets/images/qImages/ans3.png",
  }),
  (qFour = {
    question: "Who won the Golden Ball of South Africa 2010 World Cup?",
    answers: [
      "Lionel Messi",
      "Andres Iniesta",
      "Diego Forlan",
      "Wesley Sneijder",
    ],
    correctAnswer: "Diego Forlan",
    img: "assets/images/qImages/ans4.png",
  }),
  (qFive = {
    question:
      "In the 2014 UCL final Real Madrid vs Atletico de Madrid, in what minute of added time did Sergio Ramos tie the game?",
    answers: ["91", "95", "92", "93"],
    correctAnswer: "93",
    img: "assets/images/qImages/ans5.png",
  }),
  (qSix = {
    question: "Who won the UCL 96-97?",
    answers: ["Juventus", "Borussia Dortmund", "FC Porto", "Ajax FC"],
    correctAnswer: "Borussia Dortmund",
    img: "assets/images/qImages/ans6.png",
  }),
  (qSeven = {
    question: "Which player didn???t play for Manchester United:",
    answers: [
      "Troy Deeney",
      "Wilfred Zaha",
      "Zlatan Ibrahimovic",
      "Thomas Cleverly",
    ],
    correctAnswer: "Troy Deeney",
    img: "assets/images/qImages/ans7.png",
  }),
  (qEight = {
    question: "With which of the following teams Jose Mourinho won the UCL?",
    answers: ["Real Madrid", "AS Monaco", "Chelsea", "FC Porto"],
    correctAnswer: "FC Porto",
    img: "assets/images/qImages/ans8.png",
  }),
  (qNine = {
    question: "Which country scored the first goal in the UEFA Nations League?",
    answers: ["San Marino", "Georgia", "Italy", "Swiss"],
    correctAnswer: "Georgia",
    img: "assets/images/qImages/ans9.png",
  }),
  (qTen = {
    question: "What was the name of the 2010 World Cup Ball?",
    answers: ["Waka-Waka", "Jabulani", "AfricaBall", "Mandela"],
    correctAnswer: "Jabulani",
    img: "assets/images/qImages/ans10.png",
  }),
  (qEleven = {
    question: "Which of these players has won the UCL?",
    answers: ["Ronaldo Nazario", "Deco", "Buffon", "Cannavaro"],
    correctAnswer: "Deco",
    img: "assets/images/qImages/ans11.png",
  }),
  (qTwelve = {
    question: "Who was the first Italian manager to win the Premier League?",
    answers: [
      "Roberto Mancini",
      "Antonio Conte",
      "Claudio Ranieri",
      "Carlo Ancelotti",
    ],
    correctAnswer: "Carlo Ancelotti",
    img: "assets/images/qImages/ans12.png",
  }),
  (qThirteen = {
    question:
      "Who was the last Manchester United player to win the Ballon d'Or before Cristiano Ronaldo?",
    answers: ["George Best", "Wayne Rooney", "Eric Cantona", "Michael Owen"],
    correctAnswer: "George Best",
    img: "assets/images/qImages/ans13.png",
  }),
  (qFourteen = {
    question:
      "Which player scored the fastest hat-trick in the Premier League?",
    answers: ["Heung Min Son", "Didier Drogba", "Sadio Man??", "Thierry Henry"],
    correctAnswer: "Sadio Man??",
    img: "assets/images/qImages/ans14.png",
  }),
  (qFifteen = {
    question: "Who is the Premier League's all-time top scorer?",
    answers: ["Alan Shearer", "Wayne Rooney", "Sergio Ag??ero", "Harry Kane"],
    correctAnswer: "Alan Shearer",
    img: "assets/images/qImages/ans15.png",
  }),
  (qSixteen = {
    question: "Who score the fastest goal scored in Premier League history?",
    answers: ["Cesc Fabregas", "Mohamed Salah", "Graziano Pelle", "Shane Long"],
    correctAnswer: "Shane Long",
    img: "assets/images/qImages/ans16.png",
  }),
  (qSeventeen = {
    question: "Which country won the first ever World Cup in 1930?",
    answers: ["Brazil", "Uruguay", "Argentina", "Italy"],
    correctAnswer: "Uruguay",
    img: "assets/images/qImages/ans17.png",
  }),
  (qEighteen = {
    question:
      "Cristiano Ronaldo is synonymous with the No.7, but what other number did he wear at Real Madrid?",
    answers: ["77", "17", "28", "9"],
    correctAnswer: "9",
    img: "assets/images/qImages/ans18.png",
  }),
  (qNineteen = {
    question: "Who was the first goalkeeper to score a Premier League goal?",
    answers: [
      "Petr Cech",
      "Edwin Van Der Sar",
      "Peter Schmeichel",
      "David Seaman",
    ],
    correctAnswer: "Peter Schmeichel",
    img: "assets/images/qImages/ans19.png",
  }),
  (qTwenty = {
    question: "Which of these teams is not from London?",
    answers: ["Arsenal", "Brentford FC", "Crystal Palace", "Watford FC"],
    correctAnswer: "Watford FC",
    img: "assets/images/qImages/ans20.png",
  }),
  (qTwentyOne = {
    question: "Which of these teams is not from Madrid?",
    answers: ["CF Fuenlabrada", "CD Legan??s", "CA Osasuna", "Real Madrid"],
    correctAnswer: "CA Osasuna",
    img: "assets/images/qImages/ans21.png",
  }),
  (qTwentyTwo = {
    question:
      "After Juventus, AC Milan and Inter, with nine Scudettos, which team has won the most Serie A titles?",
    answers: ["Genoa", "Napoli", "Torino", "Atalanta"],
    correctAnswer: "Genoa",
    img: "assets/images/qImages/ans22.png",
  }),
  (qTwentyThree = {
    question:
      "In the 2010 world cup who was the captain of Spain?",
    answers: ["Carles Puyol", "Iker Casillas", "Andres Iniesta", "David Villa"],
    correctAnswer: "Iker Casillas",
    img: "assets/images/qImages/ans23.png",
  }),
  (qTwentyFour = {
    question:
      "Which nations played the 'Copa America Argentina 2011' final?",
    answers: ["Uruguay-Chile", "Argentina-Uruguay", "Argentina-Chile", "Argentina-Brazil"],
    correctAnswer: "Uruguay-Chile",
    img: "assets/images/qImages/ans24.png",
  }),
  (qTwentyFive = {
    question:
      "Who was the first English player to win league titles in four countries?",
    answers: ["Eric Dier", "Michael Owen", "David Beckham", "Wayne Rooney"],
    correctAnswer: "David Beckham",
    img: "assets/images/qImages/ans25.png",
  }),
  (qTwentySix = {
    question:
      "What football player holds the world record for most career goals by a keeper?",
    answers: ["Federico Vilar", "Jose Luis Chilavert", "Jorge Campos", "Rog??rio Ceni"],
    correctAnswer: "Rog??rio Ceni",
    img: "assets/images/qImages/ans26.png",
  }),
  (qTwentySeven = {
    question:
      "Who kicked the longest goal in football history?",
    answers: ["Asmir Begovic", "David De Gea", "Victor Valdes", "David Luiz"],
    correctAnswer: "Asmir Begovic",
    img: "assets/images/qImages/ans27.png",
  }),
  (qTwentyEight = {
    question:
      "Which african national team is nicknamed Les Elephants?",
    answers: ["Cameroon", "Ivory Coast", "Senegal", "Nigeria"],
    correctAnswer: "Ivory Coast",
    img: "assets/images/qImages/ans28.png",
  }),
  (qTwentyNine = {
    question:
      "What Premier League club is involved with Manchester United in the ???Roses Rivalry????",
    answers: ["Manchester City", "Liverpool FC", "Leeds United", "Arsenal FC"],
    correctAnswer: "Leeds United",
    img: "assets/images/qImages/ans29.png",
  }),
  (qThirty = {
    question:
      "What was the name of the first Real Madrid's stadium?",
    answers: ["Estadio del Madrid", "Estadio Monumental", "Estadio de Chamart??n", "Estadio Pardos Rubio"],
    correctAnswer: "Estadio de Chamart??n",
    img: "assets/images/qImages/ans30.png",
  }),
  (qThirtyOne = {
    question:
      "What country has appeared in the most World Cup's (17) without ever winning the tournament?",
    answers: ["Belgium", "Mexico", "Uruguay", "Portugal"],
    correctAnswer: "Mexico",
    img: "assets/images/qImages/ans31.png",
  }),
  (qThirtyTwo = {
    question:
      "What Italian legend spent his full career with his hometown club and is the 2nd highest scorer in Serie A history?",
    answers: ["Francesco Totti", "Alessandro Del Piero", "Luca Toni", "Daniele De Rossi"],
    correctAnswer: "Francesco Totti",
    img: "assets/images/qImages/ans32.png",
  }),
  (qThirtyThree = {
    question:
      "Premier League club Newcastle is also known by which nickname?",
    answers: ["The Toffees", "The Hoops", "The Magpies", "The Rovers"],
    correctAnswer: "The Magpies",
    img: "assets/images/qImages/ans33.png",
  }),
];

//Generating a new background
bgSelect = Math.floor(Math.random() * 21);
console.log("bg" + bgSelect);
body.classList.add("bg" + bgSelect);

function correctAnswer() {
  clearInterval(timeInterval);
  answerOutputEl.style.color = "#00FFAB";
  answerImage.setAttribute("src", questionsArray[arrayindex].img);
  answerImage.classList.remove("hidden");
  listEl.textContent = "";
  timeEl.textContent = "";
  console.log("Correct Answer");
  answerOutputEl.textContent = "Great! Correct Answer!";
  rightAnswers++;
  questionsArray.splice(arrayindex, 1);
  setTimeout(diplayQuestion, 3500);
}

function incorrectAnswer() {
  clearInterval(timeInterval);
  answerImage.setAttribute("src", questionsArray[arrayindex].img);
  answerImage.classList.remove("hidden");
  listEl.textContent = "";
  timeEl.textContent = "";
  console.log("You are fucking not correct");
  answerOutputEl.style.color = "red";
  answerOutputEl.textContent = "Wrong Answer";
  feedBackAnswer.textContent =
    "Correct Answer: " + questionsArray[arrayindex].correctAnswer;
  wrongAnswers++;
  questionsArray.splice(arrayindex, 1);
  setTimeout(diplayQuestion, 3500);
}

function timesUp() {
  clearInterval(timeInterval);
  console.log("Times Up");
  answerOutputEl.style.color = "orange";
  wrongAnswers++;
  answerImage.setAttribute("src", questionsArray[arrayindex].img);
  answerImage.classList.remove("hidden");
  listEl.textContent = "";
  timeEl.textContent = "";
  answerOutputEl.textContent = "Time's Up";
  feedBackAnswer.textContent =
    "Correct Answer: " + questionsArray[arrayindex].correctAnswer;
  questionsArray.splice(arrayindex, 1);
  setTimeout(diplayQuestion, 3500);
}

function settingOnStorage() {
  var player = document.querySelector("#highScoreName").value;
  var scoring = parseInt((rightAnswers / 10) * 100);
  userArr.push(player);
  scoresArr.push(scoring);
  localStorage.setItem("players", userArr);
  localStorage.setItem("scores", scoresArr);
}

function tableGeneration() {
  console.log(sortable[0][0]);
  console.log(sortable.length);

  for (var i = 0; i < sortable.length; i++) {
    tableRow = document.createElement("tr");
    if (i === 0) {
      var tableHeaderUser = document.createElement("th");
      var tableHeaderScore = document.createElement("th");
      tableHeaderUser.textContent = "Player Name";
      tableHeaderScore.textContent = "Player Score";
      tableRow.append(tableHeaderUser);
      tableRow.append(tableHeaderScore);
      var firstTableRow = document.createElement("tr");
      var tableUser = document.createElement("td");
      var tableScore = document.createElement("td");
      tableUser.textContent = sortable[i][0];
      tableScore.textContent = sortable[i][1];
      firstTableRow.append(tableUser);
      firstTableRow.append(tableScore);
      highscoreTable.append(tableRow);
      highscoreTable.append(firstTableRow);
    } else {
      var tableUser = document.createElement("td");
      var tableScore = document.createElement("td");
      tableUser.textContent = sortable[i][0];
      tableScore.textContent = sortable[i][1];
      tableRow.append(tableUser);
      tableRow.append(tableScore);
      highscoreTable.append(tableRow);
    }
  }
}

function sortingScores() {
  var scoresObj = {};
  sortable = [];
  console.log(sortable);
  userArr.forEach((element, index) => {
    scoresObj[element] = scoresArr[index];
  });
  console.log(scoresObj);

  for (var indScores in scoresObj) {
    sortable.push([indScores, scoresObj[indScores]]);
  }
  sortable.sort(function (a, b) {
    if (a[1] == b[1]) {
      if (a[0] === b[0]) {
        return 0;
      } else {
        return a[0] < b[0] ? -1 : 1;
      }
    } else {
      return a[1] < b[1] ? 1 : -1;
    }
  });
  console.log(sortable);
}

function gameOver() {
  clearInterval(timeInterval);
  submitHS = document.createElement("button");
  submitHS.setAttribute("class", "lastButtons");
  highscoreTable = document.createElement("table");
  highscoreTable.classList.add("hidden");
  gameOverText.classList.remove("hidden");
  urName.classList.remove("hidden");
  inputHighScore.classList.remove("hidden");
  inputHighScore.setAttribute("placeholder", "Enter your name...");
  inputHighScore.required = true;
  resetGame.classList.add("hidden");
  startMenu.classList.add("hidden");
  askedQuestion.textContent = "";
  listEl.textContent = "";
  timeEl.textContent = "";
  answerOutputEl.textContent = "";
  gameOverText.textContent = "Game Over";
  resetGame.textContent = "Reset Game";
  startMenu.textContent = "Start Menu";
  submitHS.textContent = "Submit";
  urName.textContent = "Enter Your Name";
  score.innerHTML =
    "Final Score: " +
    "<span class='finalScore'>" +
    (rightAnswers / 10) * 100 +
    "</span>";
  score.setAttribute("class", "score");
  mainSection.append(gameOverText);
  mainSection.append(score);
  mainSection.append(urName);
  mainSection.append(inputHighScore);
  main.append(submitHS);
  mainSection.append(resetGame);
  mainSection.append(startMenu);
  mainSection.append(highscoreTable);
  inputHighScore.value = "";
  submitHS.addEventListener("click", function () {
    console.log(inputHighScore);
    highscoreTable.classList.remove("hidden");
    var players = localStorage.getItem("players");
    var scores = localStorage.getItem("scores");
    console.log(players, scores);
    if (players === null) {
      console.log("UNO")
      settingOnStorage();
      sortingScores();
      tableGeneration();
    } else {
      userArr = players.split(",");
      scoresArr = scores.split(",");
      console.log("DOS")
      settingOnStorage();
      sortingScores();
      tableGeneration();
    }

    urName.classList.add("hidden");
    submitHS.remove()
    inputHighScore.classList.add("hidden");
    resetGame.classList.remove("hidden");
    startMenu.classList.remove("hidden");
  });
  resetGame.addEventListener("click", startQuiz);
  startMenu.addEventListener("click", function () {
    location.reload();
  });
  console.log(rightAnswers);
  console.log(wrongAnswers);
  console.log("Game Over");
}

function countdown() {
  timeLeft = 10;

  // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  timeInterval = setInterval(function () {
    // YOUR CODE HERE
    if (timeLeft > 1) {
      timeLeft--;
      timeEl.innerHTML = "<span>" + timeLeft + "</span>" + " Seconds Left.";
      if (timeLeft > 5) {
        var timing = document.querySelector("span");
        timing.style.color = "#9CFF2E";
      } else {
        var timing = document.querySelector("span");
        timing.style.color = "#FF0032";
      }
    } else if (timeLeft === 1) {
      timeLeft--;
      timeEl.innerHTML = "<span>" + timeLeft + "</span>" + " Second Left.";
      var timing = document.querySelector("span");
      timing.style.color = "#CD0404";
    } else {
      timesUp();
    }
  }, 1000); // 1000 milliseconds
  timeEl.innerHTML = "<span>" + timeLeft + "</span>" + " Seconds Left.";
  var timing = document.querySelector("span");
  timing.style.color = "#38E54D";
}

function startQuiz() {
  startBtn.setAttribute("class", "hidden");
  h3Text.setAttribute("class", "hidden");
  h1Text.setAttribute("class", "hidden");
  startMenu.classList.add("hidden");
  questionsArray = Array.from(questions);
  rightAnswers = 0;
  wrongAnswers = 0;
  qCounter = 0;
  highscoreTable.remove();
  highscoreTable = document.createElement("table");
  diplayQuestion();
}

function diplayQuestion() {
  countdown();
  answerImage.classList.add("hidden");
  answerImage.setAttribute("src", "#");
  body.classList.remove("bg" + bgSelect);
  qCounter++;
  bgSelect = Math.floor(Math.random() * 21);
  console.log("bg" + bgSelect);
  body.classList.add("bg" + bgSelect);
  console.log(qCounter);
  score.textContent = "";
  answerOutputEl.textContent = "";
  feedBackAnswer.textContent = "";
  gameOverText.classList.add("hidden");
  resetGame.classList.add("hidden");
  console.log(questionsArray.length);
  if (qCounter > 10) {
    gameOver();
  } else {
    arrayindex = Math.floor(Math.random() * questionsArray.length);
    console.log(arrayindex);
    askedQuestion.textContent = questionsArray[arrayindex].question;
    listEl.textContent = "";
    for (item of questionsArray[arrayindex].answers) {
      console.log(item);
      var listItem = document.createElement("li");
      var answerBtn = document.createElement("button");
      answerBtn.setAttribute("class", "multipleChoice");
      answerBtn.setAttribute("id", item);
      answerBtn.textContent = item;
      listEl.append(listItem);
      listItem.append(answerBtn);
    }

    var answersList = document.getElementsByClassName("multipleChoice");
    console.log(answersList);
    answersList[0].addEventListener("click", function () {
      var selectedAnswer = this.attributes.id.textContent;
      if (selectedAnswer === questionsArray[arrayindex].correctAnswer) {
        correctAnswer();
      } else {
        incorrectAnswer();
      }
    });
    answersList[1].addEventListener("click", function () {
      var selectedAnswer = this.attributes.id.textContent;
      if (selectedAnswer === questionsArray[arrayindex].correctAnswer) {
        correctAnswer();
      } else {
        incorrectAnswer();
      }
    });
    answersList[2].addEventListener("click", function () {
      var selectedAnswer = this.attributes.id.textContent;
      if (selectedAnswer === questionsArray[arrayindex].correctAnswer) {
        correctAnswer();
      } else {
        incorrectAnswer();
      }
    });
    answersList[3].addEventListener("click", function () {
      var selectedAnswer = this.attributes.id.textContent;
      if (selectedAnswer === questionsArray[arrayindex].correctAnswer) {
        correctAnswer();
      } else {
        incorrectAnswer();
      }
    });
  }
}

function watchScores() {
  var players = localStorage.getItem("players");
  var scores = localStorage.getItem("scores");
  if (players === null) {
    mainSection.setAttribute("class", "hidden");
    submitHS.setAttribute("class", "hidden");
    startMenu.classList.remove("hidden");
    highscoreTable.remove();
    var highScoreSection = document.createElement("section");

    main.append(highScoreSection);
    noHighScores.textContent = "No High Scores Registered";
    clearHighScores.textContent = "Clear High Scores";
    startMenu.textContent = "Start Menu";
    highScoreSection.append(noHighScores);
    highScoreSection.append(startMenu);
    highScoreSection.append(clearHighScores);
    startMenu.addEventListener("click", function () {
      location.reload();
    });
    clearHighScores.addEventListener("click", function () {
      localStorage.clear();
      watchScores();
    });
  } else {
    mainSection.setAttribute("class", "hidden");
    submitHS.setAttribute("class", "hidden");
    startMenu.classList.remove("hidden");
    highscoreTable.remove();
    highscoreTable = document.createElement("table");
    var highScoreSection = document.createElement("section");
    highScoreSection.append(highscoreTable);
    main.append(highScoreSection);
    clearHighScores.textContent = "Clear High Scores";
    startMenu.textContent = "Start Menu";
    main.append(startMenu);
    main.append(clearHighScores);
    userArr = players.split(",");
    scoresArr = scores.split(",");
    startMenu.addEventListener("click", function () {
      location.reload();
    });
    clearHighScores.addEventListener("click", function () {
      localStorage.clear();
      watchScores();
    });
    sortingScores();
    tableGeneration();
  }
}

startBtn.addEventListener("click", startQuiz);
highscores.addEventListener("click", watchScores);
