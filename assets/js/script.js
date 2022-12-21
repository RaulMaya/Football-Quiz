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
  var timeEl = document.createElement("p");
  // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // YOUR CODE HERE
    if (timeLeft > 1) {
      timeEl.textContent = timeLeft + " Seconds Left.";
      timeLeft--;
      mainSection.append(timeEl);
    } else if (timeLeft === 1) {
      timeEl.textContent = timeLeft + " Second Left.";
      timeLeft--;
      mainSection.append(timeEl);
    } else {
      timeEl.textContent = "";
      mainSection.append(timeEl);
      clearInterval(timeInterval);
    }
  }, 1000); // 1000 milliseconds
}

function startQuiz() {
  startBtn.setAttribute("class", "hidden");
  mainImage.setAttribute("class", "hidden");
  h1Text.setAttribute("class", "hidden");
  countdown();
  diplayQuestion();
}

function diplayQuestion() {
  var h2Text = document.createElement("h2");
  var listEl = document.createElement("ul");
  h2Text.textContent = questions[0].question
  for (item of questions[0].answers) {
    var listItem =  document.createElement("li");
    listItem.textContent = item;
    listEl.append(listItem);
  }
  mainSection.append(h2Text);
  mainSection.append(listEl);
}

startBtn.addEventListener("click", startQuiz);
