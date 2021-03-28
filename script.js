var secondsRemaining = 76;
var startButton = document.querySelector("#start-button");
var startQuiz = document.querySelector("#start-quiz");
var countDown = document.querySelector("#count-down");
var qNum = 0;
var questionBox = document.querySelector("#question-box");
var questionHeader = document.querySelector("#question-header");
var answer1 = document.querySelector("#answer-1");
var answer2 = document.querySelector("#answer-2");
var answer3 = document.querySelector("#answer-3");
var answer4 = document.querySelector("#answer-4");
var verdict = document.querySelector("#verdict");
var score = 0;

var quiz = [
    {
        question: "The condition in an if/else statement is enclosed within _____.",
        answer1: "1. quotes",
        answer2: "2. curly brackets",
        answer3: "3. parentheses",
        answer4: "4. square brackets",
        correct: "3. parentheses"
    },
    {
        question: "Commonly used datatypes DO NOT include:",
        answer1: "1. strings",
        answer2: "2. booleans",
        answer3: "3. alerts",
        answer4: "4. numbers",
        correct: "3. alerts"
    },
    {
        question: "Arrays in JavaScript can be used to store _____",
        answer1: "1. numbers and strings",
        answer2: "2. other arrays",
        answer3: "3. booleans",
        answer4: "4. all of the above",
        correct: "4. all of the above"
    },
    {
        question: "String values must be enclosed within _____",
        answer1: "1. commas",
        answer2: "2. curly brackets",
        answer3: "3. quotes",
        answer4: "4. parentheses",
        correct: "3. quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answer1: "1. JavaScript",
        answer2: "2. terminal/bash",
        answer3: "3. for loops",
        answer4: "4. console log",
        correct: "4. console log"
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
    questionHeader.textContent = quiz[qNum].question;
    answer1.textContent = quiz[qNum].answer1;
    answer2.textContent = quiz[qNum].answer2;
    answer3.textContent = quiz[qNum].answer3;
    answer4.textContent = quiz[qNum].answer4;
    questionBox.addEventListener("click", function(event) {
        var element = event.target;

        if (element.matches("button")) {
            var answer = event.target.textContent;
            console.log(answer);
            if (answer === quiz[qNum].correct) {
                verdict.textContent = "Correct!";
                verdict.setAttribute("style", "visibility:visible; color: green");
                score++;
            } else {
                verdict.textContent = "Wrong!";
                verdict.setAttribute("style", "visibility: visible; color: red");
                secondsRemaining = secondsRemaining-10;
            }
        }
    })
    qNum++;
    nextQuestion();
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


