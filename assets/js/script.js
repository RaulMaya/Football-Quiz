var startBtn = document.getElementById("start-quiz-button");
var mainImage = document.querySelector("img");
var h1Text = document.querySelector("h1");
var mainSection = document.querySelector("section");
var timeEl = document.createElement("p");
var h2Text = document.createElement("h2");
var listEl = document.createElement("ul");

mainSection.append(timeEl);

var questions = [
  questionOne = {
    question: "Who has scored the most goals in World Cup competitions?",
    answers: [
      "David Villa",
      "Ronaldo Nazario",
      "Gary Lineker",
      "Miroslav Klose",
    ],
  },
  questionTwo = {
    question: "What country does Aubameyang play for?",
    answers: ["Gabón", "Etiophia", "Egypt", "Guinea"],
  },
  questionThree = {
    question: "Who score the only goal of the EURO 2016 final? ",
    answers: ["Cristiano Ronaldo", "Eder", "Renato Sanches", "Rafael Guerreiro"],
  },
  questionFour = {
    question: "Who won the Golden Ball of South Africa 2010 World Cup",
    answers: ["Lionel Messi", "Andres Iniesta", "Diego Forlan", "Wesley Sneijder"],
  },
  questionFive = {
    question: "In the 2014 UCL final Real Madrid vs Atletico de Madrid, in what minute of added time did Sergio Ramos tie the game?",
    answers: ["91", "95", "92", "93"],
  },
  questionSix = {
    question: "Who won the UCL 96-97?",
    answers: ["Juventus", "Borussia Dortmund", "FC Porto", "Ajax FC"],
  },
  questionSeven = {
    question: "Which player didn’t play for Manchester United:",
    answers: ["Troy Deeney", "Wilfred Zaha", "Zlatan Ibrahimovic", "Thomas Cleverly"],
  },
];

function countdown() {
  var timeLeft = 2;
  
  // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // YOUR CODE HERE
    if (timeLeft > 1) {
      timeEl.textContent = timeLeft + " Seconds Left.";
      timeLeft--;

    } else if (timeLeft === 1) {
      timeEl.textContent = timeLeft + " Second Left.";
      timeLeft--;
      
    } else {
      clearInterval(timeInterval);
      diplayQuestion();
      
    }
  }, 1000); // 1000 milliseconds
}

function startQuiz() {
  startBtn.setAttribute("class", "hidden");
  mainImage.setAttribute("class", "hidden");
  h1Text.setAttribute("class", "hidden");
  diplayQuestion();
}

function diplayQuestion() {
  countdown();
  var arrayindex =   Math.round(Math.random() * questions.length)
  h2Text.textContent = questions[arrayindex].question
  listEl.textContent = ""
  for (item of questions[arrayindex].answers) {
    var listItem =  document.createElement("li");
    listItem.textContent = item;
    listEl.append(listItem);
  }
  mainSection.append(h2Text);
  mainSection.append(listEl);
}

startBtn.addEventListener("click", startQuiz);
