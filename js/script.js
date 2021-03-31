var secondsRemaining = 76;
var highScoresBtn = document.querySelector("#highscores-btn");
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
var allDone = document.querySelector("#all-done");
var finalScore = document.querySelector("#final-score");
var isAllDone = false;
var scoreBoard = document.querySelector("#score-board");
var scoreListContainer = document.querySelector("score-list");

//arry of objects for populate the quiz
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

//start the timer
function setTimer () {
    var timer = setInterval(function() {
        secondsRemaining--;
        countDown.textContent = secondsRemaining;
        if(secondsRemaining === 0) {
            clearInterval(timer);
        } else if (isAllDone === true) {
            clearInterval(timer);
        }  
    }, 1000);
}

//populate the next question in the array
function nextQuestion () {
    questionHeader.textContent = quiz[qNum].question;
    answer1.textContent = quiz[qNum].answer1;
    answer2.textContent = quiz[qNum].answer2;
    answer3.textContent = quiz[qNum].answer3;
    answer4.textContent = quiz[qNum].answer4;
}

//checks the answer and if the quiz is over
function buttonClick (event) {
    event.stopPropagation();
    var element = event.target;
    if (element.matches("button")) {
        var answer = event.target.textContent;
        console.log("Your answer: " + answer); //checking the click
        console.log("Correct answer: " + quiz[qNum].correct); //checking the correct answer
        if (answer === quiz[qNum].correct) {
            verdict.textContent = "Correct!";
            verdict.setAttribute("style", "visibility:visible; color: green");
            score = score + 20;
            console.log("Score is: " + score);
            element.blur();
            qNum++;
            console.log("qNum is now: " + qNum); // what is qNum now?
            if (qNum < quiz.length) {
                nextQuestion();
            }
            else {
                finalScreen();
            }
        } else {
            verdict.textContent = "Wrong!";
            verdict.setAttribute("style", "visibility: visible; color: red");
            secondsRemaining = secondsRemaining-10;
            element.blur();
            qNum++;
            console.log("Score is: " + score);
            console.log("qNum is now: " + qNum); // what is qNum now?
            if (qNum < quiz.length) {
                nextQuestion();
            }
            else {
                finalScreen();
            }  
        }
    } 
}

//displays score and allows for initials input
//not sure that I'm storing the initials and scores correctly here
function finalScreen () {
    questionBox.setAttribute("style", "display: none");
    allDone.setAttribute("style", "display: flex");
    finalScore.textContent = score;
    isAllDone = true;
    
    //when the submit button is clicked, store the initials and score and take us to the highscore page
    submit.addEventListener("click", function(event) {
        event.preventDefault();

        //store intials and highscore in an object
        var highScore = {
                initials: initials.value,
                score: score
            }
        //pull existing scores    
        var existingScores = [JSON.parse(localStorage.getItem("existingScores"))];

        //trying to push array of objects to local storage - probably an issue here
        if (existingScores !== null) {
            existingScores.push(highScore);
            localStorage.setItem("existingScores", JSON.stringify(existingScores));
            console.log(existingScores);
            highScores();
        } else {
            existingScores.push(highScore);
            localStorage.setItem("existingScores", JSON.stringify(existingScores));
            console.log(existingScores);
            highScores();
        }
    })
}

//grabbing high scores and trying to display them in an ordered list
function highScores () {
    allDone.setAttribute("style", "display: none");
    scoreBoard.setAttribute("style", "display: flex");
    var storedScores = JSON.parse(localStorage.getItem("storedScores"));
    //console.log(storedScores);

    var scoreList = document.createElement("ol");
    var testScore = document.createElement("li");

    for (i=0; i < storedScores.length; i++) {
        console.log(storedScores[i].initials + " " + storedScores[i].score);
        /*testScore.textContent = storedScores[i];
        console.log(testScore);
        scoreList.appendChild(testScore);*/
    }
    //console.log(scoreList);
}

questionBox.addEventListener("click", buttonClick);  

startButton.addEventListener("click", function () {
    startQuiz.setAttribute("style", "display: none");
    setTimer();
    questionBox.setAttribute("style", "display: flex");
    nextQuestion();
})



