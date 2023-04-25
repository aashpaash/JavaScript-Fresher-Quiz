// Get the quizes high scores
function getHighScores() {
    var highScores = JSON.parse(window.localStorage.getItem('highScores')) || [];
    // Check work
    console.log(highScores);
// Display/Sort results in order
    highScores.sort(function(a, b) {
        return b.score - a.score;
    });
// Add results to Html pages
    document.querySelector("scorelist").innerHTML = highScores.map((score) => <li>${score.score} - ${score.username}</li>)}
    join('')
}

//Clear high scores function
function clearHighscores() {
    window.localStorage.removeItem('highScores');
    window.location.reload();
}
  
document.getElementById('clear').onclick = clearHighscores;

//Initialize get high scores function
getHighScores ();