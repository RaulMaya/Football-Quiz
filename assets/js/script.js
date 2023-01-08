var startBtn = document.getElementById("start-quiz-button");
var mainImage = document.querySelector("img");
var h1Text = document.querySelector("h1");
var mainSection = document.querySelector("section");
var highscores = document.querySelector("#highscores");
var main = document.querySelector("main");

var timeEl = document.createElement("p");
var h2Text = document.createElement("h2");
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

inputHighScore.setAttribute("id", "highScoreName");

mainSection.append(h2Text);
mainSection.append(listEl);
mainSection.append(answerOutputEl);
mainSection.append(feedBackAnswer);
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

//localStorage.clear();

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
  }),
  (qTwo = {
    question: "What country does Aubameyang play for?",
    answers: ["Gabón", "Etiophia", "Egypt", "Guinea"],
    correctAnswer: "Gabón",
  }),
  (qThree = {
    question: "Who score the only goal of the EURO 2016 final? ",
    answers: [
      "Cristiano Ronaldo",
      "Ederzito António",
      "Renato Sanches",
      "Rafael Guerreiro",
    ],
    correctAnswer: "Ederzito António",
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
  }),
  (qFive = {
    question:
      "In the 2014 UCL final Real Madrid vs Atletico de Madrid, in what minute of added time did Sergio Ramos tie the game?",
    answers: ["91", "95", "92", "93"],
    correctAnswer: "93",
  }),
  (qSix = {
    question: "Who won the UCL 96-97?",
    answers: ["Juventus", "Borussia Dortmund", "FC Porto", "Ajax FC"],
    correctAnswer: "Borussia Dortmund",
  }),
  (qSeven = {
    question: "Which player didn’t play for Manchester United:",
    answers: [
      "Troy Deeney",
      "Wilfred Zaha",
      "Zlatan Ibrahimovic",
      "Thomas Cleverly",
    ],
    correctAnswer: "Troy Deeney",
  }),
  (qEight = {
    question: "With which of the following teams Jose Mourinho won the UCL?",
    answers: ["Real Madrid", "AS Monaco", "Chelsea", "FC Porto"],
    correctAnswer: "FC Porto",
  }),
  (qNine = {
    question: "Which country scored the first goal in the UEFA Nations League?",
    answers: ["San Marino", "Georgia", "Italy", "Swiss"],
    correctAnswer: "Georgia",
  }),
  (qTen = {
    question: "What was the name of the 2010 World Cup Ball?",
    answers: ["Waka-Waka", "Jabulani", "AfricaBall", "Mandela"],
    correctAnswer: "Jabulani",
  }),
  (qEleven = {
    question: "Which of these players has won the UCL?",
    answers: ["Ronaldo Nazario", "Deco", "Buffon", "Cannavaro"],
    correctAnswer: "Deco",
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
  }),
  (qThirteen = {
    question:
      "Who was the last Manchester United player to win the Ballon d'Or before Cristiano Ronaldo?",
    answers: ["George Best", "Wayne Rooney", "Eric Cantona", "Michael Owen"],
    correctAnswer: "George Best",
  }),
  (qFourteen = {
    question:
      "Which player scored the fastest hat-trick in the Premier League?",
    answers: ["Heung Min Son", "Didier Drogba", "Sadio Mané", "Thierry Henry"],
    correctAnswer: "Sadio Mané",
  }),
  (qFifteen = {
    question: "Who is the Premier League's all-time top scorer?",
    answers: ["Alan Shearer", "Wayne Rooney", "Sergio Agüero", "Harry Kane"],
    correctAnswer: "Alan Shearer",
  }),
  (qSixteen = {
    question: "Who score the fastest goal scored in Premier League history?",
    answers: ["Cesc Fabregas", "Mohamed Salah", "Graziano Pelle", "Shane Long"],
    correctAnswer: "Shane Long",
  }),
  (qSeventeen = {
    question: "Which country won the first ever World Cup in 1930?",
    answers: ["Brazil", "Uruguay", "Argentina", "Italy"],
    correctAnswer: "Uruguay",
  }),
  (qEighteen = {
    question:
      "Cristiano Ronaldo is synonymous with the No.7, but what other number did he wear at Real Madrid?",
    answers: ["77", "17", "28", "9"],
    correctAnswer: "9",
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
  }),
  (qTwenty = {
    question: "Which of these teams is not from London?",
    answers: ["Arsenal", "Brentford FC", "Crystal Palace", "Watford"],
    correctAnswer: "Watford",
  }),
  (qTwentyOne = {
    question: "Which of these teams is not from Madrid?",
    answers: ["CF Fuenlabrada", "CD Leganés", "CA Osasuna", "Real Madrid"],
    correctAnswer: "CA Osasuna",
  }),
  (qTwentyTwo = {
    question:
      "After Juventus, AC Milan and Inter, with nine Scudettos, which team has won the most Serie A titles?",
    answers: ["Genoa", "Napoli", "Torino", "Atalanta"],
    correctAnswer: "Genoa",
  }),
];

function correctAnswer() {
  clearInterval(timeInterval);
  listEl.textContent = "";
  console.log("Correct Answer");
  answerOutputEl.textContent = "Great! Correct Answer!";
  rightAnswers++;
  questionsArray.splice(arrayindex, 1);
  setTimeout(diplayQuestion, 3500);
}

function incorrectAnswer() {
  clearInterval(timeInterval);
  listEl.textContent = "";
  console.log("You are fucking not correct");
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
  wrongAnswers++;
  listEl.textContent = "";
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
  for (var i = 0; i < sortable.length; i++) {
    var tableRow = document.createElement("tr");
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
  var submitHS = document.createElement("button");
  highscoreTable = document.createElement("table");
  gameOverText.classList.remove("hidden");
  urName.classList.remove("hidden");
  submitHS.classList.remove("hidden");
  inputHighScore.classList.remove("hidden");
  resetGame.classList.add("hidden");
  startMenu.classList.add("hidden");
  h2Text.textContent = "";
  listEl.textContent = "";
  timeEl.textContent = "";
  answerOutputEl.textContent = "";
  gameOverText.textContent = "Game Over";
  resetGame.textContent = "Reset Game";
  startMenu.textContent = "Start Menu";
  submitHS.textContent = "Submit";
  urName.textContent = "Enter Your Name";
  score.textContent = "Final Score: " + (rightAnswers / 10) * 100;
  mainSection.append(gameOverText);
  mainSection.append(score);
  mainSection.append(urName);
  mainSection.append(inputHighScore);
  mainSection.append(submitHS);
  mainSection.append(resetGame);
  mainSection.append(startMenu);
  mainSection.append(highscoreTable);
  inputHighScore.value = "";
  submitHS.addEventListener("click", function () {
    console.log(inputHighScore);

    var players = localStorage.getItem("players");
    var scores = localStorage.getItem("scores");
    console.log(players, scores);
    if (players === null) {
      settingOnStorage();
      sortingScores();
      tableGeneration();
    } else {
      userArr = players.split(",");
      scoresArr = scores.split(",");
      settingOnStorage();
      sortingScores();
      tableGeneration();
    }

    urName.classList.add("hidden");
    submitHS.classList.add("hidden");
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
      timeEl.textContent = timeLeft + " Seconds Left.";
    } else if (timeLeft === 1) {
      timeLeft--;
      timeEl.textContent = timeLeft + " Second Left.";
    } else {
      timesUp();
    }
  }, 1000); // 1000 milliseconds
  timeEl.textContent = timeLeft + " Seconds Left.";
}

function startQuiz() {
  startBtn.setAttribute("class", "hidden");
  mainImage.setAttribute("class", "hidden");
  h1Text.setAttribute("class", "hidden");
  startMenu.classList.add("hidden");
  questionsArray = Array.from(questions);
  rightAnswers = 0;
  wrongAnswers = 0;
  qCounter = 0;
  highscoreTable.remove();
  diplayQuestion();
}

function diplayQuestion() {
  countdown();
  qCounter++;
  console.log(qCounter);
  score.textContent = "";
  answerOutputEl.textContent = "";
  feedBackAnswer.textContent = "";
  gameOverText.classList.add("hidden");
  resetGame.classList.add("hidden");
  console.log(questionsArray.length);
  if (qCounter > 1) {
    gameOver();
  } else {
    arrayindex = Math.floor(Math.random() * questionsArray.length);
    console.log(arrayindex);
    h2Text.textContent = questionsArray[arrayindex].question;
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
  mainSection.setAttribute("class", "hidden");
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
  var players = localStorage.getItem("players");
  var scores = localStorage.getItem("scores");
  userArr = players.split(",");
  scoresArr = scores.split(",");
  startMenu.addEventListener("click", function () {
    location.reload();
  });
  clearHighScores.addEventListener("click", function () {
    localStorage.clear();
    watchScores();
  });
  sortingScores()
  tableGeneration();
}

startBtn.addEventListener("click", startQuiz);
highscores.addEventListener("click", watchScores);
