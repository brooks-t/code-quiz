var secondsRemaining = 76;
var startButton = document.querySelector("#start-button");
var startQuiz = document.querySelector("#start-quiz");
var countDown = document.querySelector("#count-down");
var currentQuestion = 0;
var questionBox = document.querySelector("#question-box");
var questionHeader = document.querySelector("#question-header");
var answer1 = document.querySelector("#answer-1");
var answer2 = document.querySelector("#answer-2");
var answer3 = document.querySelector("#answer-3");
var answer4 = document.querySelector("#answer-4");
var verdict = document.querySelector("#verdict");

var quiz = [
    {
        question: "The condition in an if/else statement is enclosed within ____.",
        answer1: "1. quotes",
        answer2: "2. curly brackets",
        answer3: "3. parentheses",
        answer4: "4. square brackets"
    },
    {
        question: "question2TBD",
        answer1: "answer2-1TBD",
        answer2: "answer2-2TBD",
        answer3: "answer2-3TBD",
        answer4: "answer2-4TBD"
    },
    {
        question: "question3TBD",
        answer1: "answer3-1TBD",
        answer2: "answer3-2TBD",
        answer3: "answer3-3TBD",
        answer4: "answer3-4TBD"
    },
    {
        question: "question4TBD",
        answer1: "answer4-1TBD",
        answer2: "answer4-2TBD",
        answer3: "answer4-3TBD",
        answer4: "answer4-4TBD"
    },
    {
        question: "question5TBD",
        answer1: "answer5-1TBD",
        answer2: "answer5-2TBD",
        answer3: "answer5-3TBD",
        answer4: "answer5-4TBD"
    },
]



function setTimer () {
    var timer = setInterval(function() {
        secondsRemaining--;
        countDown.textContent = secondsRemaining;
        if(secondsRemaining === 0) {
            clearInterval(timer);
        }
    }, 1000);
}

function nextQuestion () {
    
 
}

startButton.addEventListener("click", function () {
    startQuiz.setAttribute("style", "display: none");
    questionBox.setAttribute("style", "display: flex");
    setTimer();
    nextQuestion();
})

console.log(quiz);

//var randomQuestion = Math.floor(Math.random() * quiz.length);
//console.log(randomQuestion);


