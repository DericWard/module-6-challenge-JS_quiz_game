const quizQuestions = [
    {
        "question": "Javascript is a ... ",
        "answers": ["Coffee", "Ancient scroll", "Scripting language", "Typeface"],
        "correctAnswer": "Scripting language",
    },
    {
        "question": "Boolean refers to ... ",
        "answers": ["Abacus", "Vegetable", "Board game", "True/False"],
        "correctAnswer": "True/False",
    },
    {
        "question": "Javascript can implement ... ",
        "answers": ["Socks", "Buttons", "Gloves", "Collars"],
        "correctAnswer": "Buttons",
    },    
];

const body = document.body;
// const startScreen = document.getElementById("#start-screen");
const finalScore = document.querySelector("#final-score");
const playerInitials = document.getElementById("#initials");
const submitPlayerIntials = document.getElementById("#submit");
const questionTitle = document.querySelector("#question-title");
const choicesSection = document.querySelector("#choices");
const timeDisplay = document.querySelector("#time");

let timeLeft = 0;
let questions = document.getElementById("questions");

questionTitle.textContent = quizQuestions[0].question;
questionTitle.style.textAlign = "center";
choicesSection.style.textAlign = "center";
console.log(questionTitle.textContent);
body.append(questionTitle);

function endQuiz(){
    console.log("End quiz");
    const endScreen = document.querySelector("#end-screen");
    endScreen.toggleAttribute("hidden");
    questions.toggleAttribute("hidden");
};

// countdown timer - slightly modified version from the class exercise '10-STU-TIMERS-INTERVALS' 
function countdown() {
    // const timeDisplay = document.querySelector("#time");
    timeLeft = 2; // 2s for testing only - make this maybe 30 seconds?
    const timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            timeDisplay.textContent = timeLeft;
            timeLeft--;
        }
        else { 
            timeDisplay.textContent = "0";
            clearInterval(timeInterval);
            questionTitle.textContent = quizQuestions[1].question; // test output
            endQuiz();
        }
    }, 1000);
    return;
};

function buttonClicks() {
    const buttonListener = document.querySelectorAll(".buttonClass");

    //displayAnswerButtons();

    buttonListener.forEach(function (i) {
        i.addEventListener("click", function() {
            let selectedAnswer = i.textContent;
            if (selectedAnswer === quizQuestions[0].correctAnswer) {
                console.log("Correct answer!");
            }
            else {
                console.log("Wrong answer!");
            }
        });
     });
};

function startQuiz() {
    const startQuizButton = document.querySelector("#start");
    const startScreen = document.querySelector("#start-screen");

    startQuizButton.addEventListener("click", function() {
        startScreen.toggleAttribute("hidden");
        questions.toggleAttribute("hidden");
    countdown();
    
    });
};

startQuiz();

// 

// console.log(quizQuestions.length);

// function buttonClicks() {

//     let buttonListener = document.querySelectorAll(".buttonClass");

//     displayAnswerButtons();

//     buttonListener.forEach(function (i) {
//         i.addEventListener("click", function() {
//             let selectedAnswer = i.textContent;
//             if (selectedAnswer === quizQuestions[0].correctAnswer) {
//                 console.log("Correct answer!");
//             }
//             else {
//                 console.log("Wrong answer!");
//             }
//         });
//      });
// };
// };

// listen for the start quiz button being pressed


// startQuiz();



// console.log(quizQuestions[0].question);
// console.log(quizQuestions[0].answers[1]);
// console.log(quizQuestions[0].answers.length);
//console.log(quizQuestions[0].correctAnswer);



