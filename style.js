//TIMER
var timerEL = document.getElementById('countdown');

function countdown () {
    var timeLeft = 10;
    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timerEL.textContent = countdown + ' seconds remaining';
            timeLeft--;
        } else if (timeLeft ===1) {
            timerEL.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        } else {
            timerEL.textContent = '';
            clearInterval(timeInterval);
            displayMessage();
        }
    }, 90);

}


//QUESTIONS
var questions = [
    {
        joke: "How much does a roof cost?",
        choices: ["1. Nothing it's on the house", "2. The house", "3. House and home"],
        answer: "1. Nothing it's on the house"
    },
    {
        joke: "Why are elevator jokes so classic and good?",
        choices: ["1. Everyone gets in", "2. It can only go up", "3. They work on every level"],
        answer: "3. They work on every level"
    },
    {
        joke: "Did you hear about the restaurant on the moon?",
        choices: ["1. No! It's on the moon", "2. Yea! Great food, no atmoshphere", "3. Yea, I go every luner"],
        answer: "2. Yea! Great food, no atmoshphere!"
    },
    {
        joke: "What do sprinters eat before a race?",
        choices: ["1. Break - Fast!", "2. Nothing! They fast!", "3. Banana Split!"],
        answer: "2. Nothing! They fast!"
    },
    {
        joke: "What rock group has four men that don't sing?",
        choices: ["1. Mount Rushmore", "2. KISS", "3. Nine Inch Nails"],
        answer: "1. Mount Rushmore"
    }
];

//SCORE
function score() {


//RESULTS



//HIGHSCORE


