var secondsRemaining = 76;
var startButton = document.querySelector("#start-button");
var startQuiz = document.querySelector("#start-quiz");
var countDown = document.querySelector("#count-down");

var quiz = [
    {
        question: "question1TBD",
        answer1: "answer1-1TBD",
        answer2: "answer1-2TBD",
        answer3: "answer1-3TBD",
        answer4: "answer1-4TBD"
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

console.log(quiz);

function setTimer () {
    var timer = setInterval(function() {
        secondsRemaining--;
        countDown.textContent = secondsRemaining;
        if(secondsRemaining === 0) {
            clearInterval(timer);
        }
    }, 1000);
}

startButton.addEventListener("click", function () {
    startQuiz.setAttribute("style", "display: none");
    setTimer();
})

