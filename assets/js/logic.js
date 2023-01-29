const quizQuestions = [
    {
        "question": "Javascript is a ... :",
        "answers": ["Coffee", "Ancient scroll", "Scripting language", "Typeface"],
        "correctAnswer": 2,
    },
    {
        "question": "Boolean refers to ... :",
        "answers": ["Abacus", "Vegetable", "Scripting language", "True/False"],
        "correctAnswer": 3,
    },
    {
        "question": "Javascript can have ... :",
        "answers": ["Socks", "Buttons", "Gloves", "Collars"],
        "correctAnswer": 1,
    },    
];

// console.log(quizQuestions[0].question);
// console.log(quizQuestions[0].answers[1]);
// console.log(quizQuestions[0].answers.length);

const body = document.body;
const startScreen = document.querySelector("#start-screen");
const finalScore = document.querySelector("#final-score");
const playerInitials = document.querySelector("#initials");
const submitPlayerIntials = document.querySelector("#submit");

// countdown timer - slightly modified version from the class exercise '10-STU-TIMERS-INTERVALS' 
function countdown() {
    const timeDisplay = document.querySelector("#time");
    let timeLeft = 3; //make this maybe 30 seconds
    let timeInterval = setInterval(function () {
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
function displayAnswerButtons() { 
    let button1 = document.createElement("button"); 
    let button2 = document.createElement("button");
    let button3 = document.createElement("button");
    let button4 = document.createElement("button");
    
    let button1Text = document.createTextNode(quizQuestions[0].answers[0]);  
    let button2Text = document.createTextNode(quizQuestions[0].answers[1]);
    let button3Text = document.createTextNode(quizQuestions[0].answers[2]);
    let button4Text = document.createTextNode(quizQuestions[0].answers[3]);

    button1.appendChild(button1Text);
    button2.appendChild(button2Text);
    button3.appendChild(button3Text);
    button4.appendChild(button4Text);

    body.appendChild(button1);
    body.appendChild(button2);
    body.appendChild(button3);
    body.appendChild(button4);

    button1.classList.add("buttonClass");
    button2.classList.add("buttonClass");
    button3.classList.add("buttonClass");
    button4.classList.add("buttonClass");
    
    let buttonListener = document.querySelectorAll(".buttonClass");

    // buttonListener.forEach(function (i) {
    //     console.log(i.textContent);
    // });

    for (i of buttonListener) {
        i.addEventListener("click", function() {
            let selectedAnswer = this.textContent;
            console.log(selectedAnswer);
        });
    }

};

// listen for the start quiz button being pressed
function startQuiz() {
    let startQuizButton = document.querySelector("#start");
    let startScreenClass = document.querySelector(".start");
    startQuizButton.addEventListener("click", function(event) {
    startScreenClass.toggleAttribute("hidden"); // clear the screen
    countdown(); // run the countdown timer
    displayAnswerButtons();
});
};

startQuiz();



