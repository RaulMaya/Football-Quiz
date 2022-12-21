var startBtn = document.getElementById("start-quiz-button");
var mainImage = document.querySelector("img");
var h1Text = document.querySelector("h1");
var mainSection = document.querySelector("section");

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
];

function countdown() {
  var timeLeft = 5;
  // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // YOUR CODE HERE
    if (timeLeft > 1) {
      mainSection.textContent = timeLeft + " Seconds Left.";
      timeLeft--;
    } else if (timeLeft === 1) {
      mainSection.textContent = timeLeft + " Second Left.";
      timeLeft--;
    } else {
      mainSection.textContent = "";
      clearInterval(timeInterval);
    }
  }, 1000); // 1000 milliseconds
}

function startQuiz() {
  startBtn.setAttribute("class", "hidden");
  mainImage.setAttribute("class", "hidden");
  h1Text.setAttribute("class", "hidden");
  countdown();
}

function diplayQuestion() {
  
}

startBtn.addEventListener("click", startQuiz);
