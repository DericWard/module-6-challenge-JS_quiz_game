// listen for the user to click the button to clear
// the highscores and reload the page so that scores
// are no longer displayed
function clearHighScores() {
    let clearButton = document.getElementById("clear");
    clearButton.addEventListener("click", function() {
        localStorage.clear();
        window.location.reload();
    },
)};

// display the high scores, call the function to listen for
// the clear the high scores button
function printHighScores(highScores) {
    highScores.forEach(function(highScoresEntry) {
        let li = document.createElement("li");
        let ol = document.getElementById("highscores");
        li.textContent = (highScoresEntry.player + ": " +  highScoresEntry.score);
        ol.appendChild(li);
    });
    clearHighScores();
};

// sort the stored values from high to low, call the 
// function to display the scores
function sortHighScores() {
    let highScores = JSON.parse(localStorage.getItem("highscores")) || [];
    highScores.sort(function(a, b) {
        return b.score - a.score;
    });
    printHighScores(highScores);
};

// call the sort function
sortHighScores();
