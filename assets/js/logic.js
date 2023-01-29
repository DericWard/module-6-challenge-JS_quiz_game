let body = document.body;
let startScreen = document.querySelector("#start-screen");
let finalScore = document.querySelector("#final-score");
let playerInitials = document.querySelector("#initials");
let submitPlayerIntials = document.querySelector("#submit");

// countdown timer - slightly modified version from the class exercise '10-STU-TIMERS-INTERVALS' 
function countdown() {
    let timeDisplay = document.querySelector("#time");
    let timeLeft = 3; //make this maybe 30 seconds
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
};

// test screen write
function displayAnswerButton() {
    let button1 = document.createElement("button");
    let button2 = document.createElement("button");
    let button3 = document.createElement("button");
    let button4 = document.createElement("button");
    
    let button1Text = document.createTextNode("Answer 1");
    let button2Text = document.createTextNode("Answer 2");
    let button3Text = document.createTextNode("Answer 3");
    let button4Text = document.createTextNode("Answer 4");

    button1.appendChild(button1Text);
    button2.appendChild(button2Text);
    button3.appendChild(button3Text);
    button4.appendChild(button4Text);

    body.appendChild(button1);
    body.appendChild(button2);
    body.appendChild(button3);
    body.appendChild(button4);
};

// listen for the start quiz button being pressed
function startQuiz() {
    let startQuizButton = document.querySelector("#start");
    let startScreenClass = document.querySelector(".start");
    startQuizButton.addEventListener("click", function(event) {
    startScreenClass.toggleAttribute("hidden"); // clear the screen
    countdown(); // run the countdown timer
    displayAnswerButton();
});
};



startQuiz();



