let timeDisplay = document.querySelector("#time");
let startScreenClass = document.querySelector(".start");
let startScreen = document.querySelector("#start-screen");
let startQuizButton = document.querySelector("#start");
let finalScore = document.querySelector("#final-score");
let playerInitials = document.querySelector("#initials");
let submitButton = document.querySelector("#submit");

// listen for the start quiz button being pressed
startQuizButton.addEventListener("click", function(event) {
    startScreenClass.toggleAttribute("hidden"); // clear the screen
    countdown(); // run the countdown timer
});

// countdown timer - slightly modified version from the class '10-STU-TIMERS-INTERVALS' 
function countdown() {
    let timeLeft = 15;
    var timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            timeDisplay.textContent = timeLeft;
            timeLeft--;
        }
        else { 
            timeDisplay.textContent = "0";
            clearInterval(timeInterval);
        }
    }, 1000);
}





