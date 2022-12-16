var startBtn = document.getElementById("start-quiz-button");
var mainImage = document.querySelector("img");
var h1Text = document.querySelector("h1");
var mainSection = document.querySelector("section");
var myQuestion = document.createElement("h2");
var answerContainer = document.createElement("ul");

mainSection.appendChild(myQuestion);
mainSection.appendChild(answerContainer)


var questions = {
  questionOne: {
    question: "Who has scored the most goals in World Cup competitions?",
    answerOne: "David Villa",
    answerTwo: "Ronaldo Nazario",
    answerThree: "Gary Lineker",
    answerFour: "Miroslav Klose",
  },
  questionTwo: {
    question: "What country does Aubameyang play for?",
    answerOne: "Gabón",
    answerTwo: "Etiophia",
    answerThree: "Egypt",
    answerFour: "Guinea",
  },
};


function startQuiz() {
  startBtn.setAttribute("class", "hidden");
  mainImage.setAttribute("class", "hidden");
  h1Text.setAttribute("class", "hidden");
}

function loadQuestions() {
  
}

startBtn.addEventListener("click", startQuiz);

