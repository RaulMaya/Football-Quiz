var startBtn = document.getElementById("start-quiz-button");
var mainImage = document.querySelector("img");
var h1Text = document.querySelector("h1");
var mainSection = document.querySelector("section");
var timeEl = document.createElement("p");
var h2Text = document.createElement("h2");
var listEl = document.createElement("ul");
var answerOutputEl = document.createElement("div")

mainSection.append(timeEl);
mainSection.append(answerOutputEl);

var timeLeft, timeInterval, arrayindex;
var rightAnswers = 0;
var wrongAnswers = 0;

var questions = [
  questionOne = {
    question: "Who has scored the most goals in World Cup competitions?",
    answers: [
      "David Villa",
      "Ronaldo Nazario",
      "Gary Lineker",
      "Miroslav Klose",
    ],
    correctAnswer: "Miroslav Klose",
  },
  questionTwo = {
    question: "What country does Aubameyang play for?",
    answers: ["Gabón", "Etiophia", "Egypt", "Guinea"],
    correctAnswer: "Gabón",
  },
  questionThree = {
    question: "Who score the only goal of the EURO 2016 final? ",
    answers: ["Cristiano Ronaldo", "Ederzito António", "Renato Sanches", "Rafael Guerreiro"],
    correctAnswer: "Ederzito António",
  },
  questionFour = {
    question: "Who won the Golden Ball of South Africa 2010 World Cup?",
    answers: ["Lionel Messi", "Andres Iniesta", "Diego Forlan", "Wesley Sneijder"],
    correctAnswer: "Diego Forlan",
  },
  questionFive = {
    question: "In the 2014 UCL final Real Madrid vs Atletico de Madrid, in what minute of added time did Sergio Ramos tie the game?",
    answers: ["91", "95", "92", "93"],
    correctAnswer: "93",
  },
  questionSix = {
    question: "Who won the UCL 96-97?",
    answers: ["Juventus", "Borussia Dortmund", "FC Porto", "Ajax FC"],
    correctAnswer: "Borussia Dortmund",
  },
  questionSeven = {
    question: "Which player didn’t play for Manchester United:",
    answers: ["Troy Deeney", "Wilfred Zaha", "Zlatan Ibrahimovic", "Thomas Cleverly"],
    correctAnswer: "Troy Deeney",
  },
];

function countdown() {
  timeLeft = 10;
  
  // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  timeInterval = setInterval(function () {
    // YOUR CODE HERE
    if (timeLeft > 1) {
      timeEl.textContent = timeLeft + " Seconds Left.";
      timeLeft--;

    } else if (timeLeft === 1) {
      timeEl.textContent = timeLeft + " Second Left.";
      timeLeft--;
      
    } else {
      wrongAnswers++
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
  console.log(questions)
  if (questions.length < 1) {
    clearInterval(timeInterval);
    mainSection.setAttribute("class", "hidden");
    console.log(rightAnswers);
    console.log(wrongAnswers);
    console.log("Game Over");
  } else { 
    arrayindex = Math.floor(Math.random() * questions.length);
    console.log(arrayindex);
    h2Text.textContent = questions[arrayindex].question;
    listEl.textContent = "";
    for (item of questions[arrayindex].answers) {
      console.log(item)
      var listItem =  document.createElement("li");
      var answerBtn =  document.createElement("button");
      answerBtn.setAttribute("class", "multipleChoice")
      answerBtn.setAttribute("id", item)
      answerBtn.textContent = item;
      listEl.append(listItem);
      listItem.append(answerBtn);
    }
    mainSection.append(h2Text);
    mainSection.append(listEl);
  
    var answersList = document.getElementsByClassName("multipleChoice");
    console.log(answersList);
    answersList[0].addEventListener("click", function () {
      var selectedAnswer = this.attributes.id.textContent
      if(selectedAnswer === questions[arrayindex].correctAnswer) {
        console.log("Correct Answer");
        answerOutputEl.textContent = "Great! Correct Answer!";
        rightAnswers++
        questions.splice(arrayindex, 1);
        clearInterval(timeInterval);
        diplayQuestion();
      } else {
        console.log("You are fucking not correct");
        wrongAnswers++
        questions.splice(arrayindex, 1);
        clearInterval(timeInterval);
        diplayQuestion();
      }
    })
    answersList[1].addEventListener("click", function () {
      var selectedAnswer = this.attributes.id.textContent
      if(selectedAnswer === questions[arrayindex].correctAnswer) {
        console.log("Correct Answer");
        answerOutputEl.textContent = "Great! Correct Answer!";
        rightAnswers++
        questions.splice(arrayindex, 1);
        clearInterval(timeInterval);
        diplayQuestion();
      } else {
        console.log("You are fucking not correct");
        answerOutputEl.textContent = "Wrong Answer";
        wrongAnswers++
        questions.splice(arrayindex, 1);
        clearInterval(timeInterval);
        diplayQuestion();
      }
    })
    answersList[2].addEventListener("click", function () {
      var selectedAnswer = this.attributes.id.textContent
      if(selectedAnswer === questions[arrayindex].correctAnswer) {
        console.log("Correct Answer");
        answerOutputEl.textContent = "Great! Correct Answer!";
        rightAnswers++
        questions.splice(arrayindex, 1);
        clearInterval(timeInterval);
        diplayQuestion();
      } else {
        console.log("You are fucking not correct");
        answerOutputEl.textContent = "Wrong Answer";
        wrongAnswers++
        questions.splice(arrayindex, 1);
        clearInterval(timeInterval);
        diplayQuestion();
      }
    })
    answersList[3].addEventListener("click", function () {
      var selectedAnswer = this.attributes.id.textContent
      if(selectedAnswer === questions[arrayindex].correctAnswer) {
        console.log("Correct Answer");
        answerOutputEl.textContent = "Great! Correct Answer!";
        rightAnswers++
        questions.splice(arrayindex, 1);
        clearInterval(timeInterval);
        diplayQuestion();
      } else {
        console.log("You are fucking not correct");
        answerOutputEl.textContent = "Wrong Answer";
        wrongAnswers++
        questions.splice(arrayindex, 1);
        clearInterval(timeInterval);
        diplayQuestion();
      }
    })
  }


}

startBtn.addEventListener("click", startQuiz);
