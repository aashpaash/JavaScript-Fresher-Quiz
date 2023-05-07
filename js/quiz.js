//Quiz logic
//Variables
var startDiv = document.getElementById('start');
var startQuizButton = document.getElementById('start-quiz');
var endQuizButton = document.getElementById('end-quiz');
var timeEL = document.getElementById('time');
var questionsEL = document.getElementById('questions');
let playerScore;


//Timer logic function
var timeLeft = 75;
var timeOut = 0;
//var timerID;
var timerEL = document.getElementById('countdown');
var timeInterval = setInterval(function timerEL() {
    if (timeLeft <= 0 || timeOut == "Times Up!") {
        clearInterval(timeInterval);
        endQuizButton();
        document.getElementById("timerEl").textContent ="Time" + timeLeft;
    } else {
//        document.getElementById("timerEl").textContent ="Time" + timeLeft;
        displayMessage("Quiz finished");
    }
}, 1000);

//Start quiz
//To start quiz elements that were hiding need to be shown and vice versa
function startQuizButton () {
    var homePage = document.getElementById('home-page');
    homePage.setAttribute('class','hide');
    qSection.classList.removeAttribute('hide');
    
    timeEL.textContent=time;

    displayQuestions();
}

//Run quiz questions
function displayQuestions() {
    questionsEL.innerText = questions.questions;
    questions.answers.array.forEach(answer => {
        let button = document.createElement("button");
        button.innerText = answer;
        button.classList.add("answer-btn");
        button.addEventListener("click", () => {
            checkAnswer(answer);
        });
        answersEL.appendChild(button);
    });
}

//Save players quiz results
function saveScore() {
    var playerScore = {
        score: yourScore,
        username: playerUsername.value
    }
}

//Save highscores and save to local storage
var highScore = JSON.parse(localStorage.getItem("highScore")) || [];
function saveHighScore(){
    highScore.push(playerScore);
    localStorage.setItem("highScore", JSON.stringify(highScore));
    window.location.href='highscore.html';
}

//RESULTS

//




