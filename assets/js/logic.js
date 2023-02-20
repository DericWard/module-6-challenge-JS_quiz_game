// array of questions and answers for the quiz
const quizQuestions = [
    {
        "question": "Javascript is a ... ",
        "answers": ["Coffee", "Ancient scroll", "Scripting language", "Typeface"],
        "correctAnswerIndex": 2,
    },
    {
        "question": "Boolean refers to ... ",
        "answers": ["Abacus", "Vegetable", "Board game", "True/False"],
        "correctAnswerIndex": 3,
    },
    {
        "question": "Javascript can modify ... ",
        "answers": ["Socks", "Buttons", "Gloves", "Hats"],
        "correctAnswerIndex": 1,
    },    
];

let timeLeft = (quizQuestions.length * 10); // set the time for the quiz to (10s x number of questions)
let questionIndex = 0;
let questionAnswered = 0; // check if the user has answered a question

const timerDisplay = document.getElementById("time"); // HTML elements
const questionsDiv = document.getElementById("questions");
const feedbackDisplay = document.getElementById("feedback");

const correctSound = new Audio("./assets/sfx/correct.wav"); // define the strange sounds for correct
const incorrectSound = new Audio("./assets/sfx/incorrect.wav"); // and incorrect answers

// at quiz end, display final score, ensure it is non-negative and
// make the score zero if the user has not answered any questions,
// otherwise set the user's score to how much time was left 
function endQuiz() {
    let endScreen = document.getElementById("end-screen");
    let finalScoreDisplay = document.getElementById("final-score");
    feedbackDisplay.setAttribute("class", "hide"); 
    questionsDiv.setAttribute("class", "hide");
    endScreen.toggleAttribute("class");
    if((timeLeft < 0) || (questionAnswered === 0)) {
        timerDisplay.textContent = 0;
    };
    finalScoreDisplay.textContent = timerDisplay.textContent;
};

// when the user presses the submit button, read the user's initials text input
// and append it to the highscores array, if the array doesn't exist create it.
// ensure non-negative values. Load the highscroes.html page
function saveScore() {
    let submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", function() {
        let initialsDisplay = document.getElementById("initials");
        let initials = initialsDisplay.value.trim();
        if(initials !== "") {
            let highScores = JSON.parse(localStorage.getItem("highscores")) || [];
            if (timeLeft < 0) {
                timeLeft = 0;
            }
            let newScore = {
                score: timeLeft,
                player: initials,
            }
        highScores.push(newScore);
        localStorage.setItem("highscores", JSON.stringify(highScores));
        window.location.href = "./assets/html/highscores.html";
        };
        });
};

// display the current question
function displayQuestion() {
    let questionDisplay = document.getElementById("question-title");
    let currentQuestion = quizQuestions[questionIndex];
    questionDisplay.textContent = currentQuestion.question;
    displayAnswerButtons(currentQuestion);
};

// move to the next question in the array, if at the end of the array
// end the quiz, otherwise call the displayQuestion function
function nextQuestion() {
    questionIndex++; 
    if(questionIndex === quizQuestions.length) {
        timerDisplay.textContent = timeLeft;
        endQuiz();
    }
    else {
        displayQuestion();
    };
};

// check if the index referenced in the correct answer part of the array
// does not match the index of the correct answer in the answers part of the array,
// if the user answer does not match, deduct 10s from the timer, display 'incorrect',
// and play a strange sound to indicate an incorrect answer.
// Otherwise, display 'correct' and play a diferent strange sound.
// increment the counter that determines if the user has answwred a question.
function checkAnswer() {
    feedbackDisplay.toggleAttribute("class"); 
    if(this.value !== quizQuestions[questionIndex].answers[quizQuestions[questionIndex].correctAnswerIndex]) {
        timeLeft -= 10;    
        feedbackDisplay.textContent = "Incorrect!"
        incorrectSound.play();
    }
    else {
        feedbackDisplay.textContent = "Correct!";
        correctSound.play();   
    };
    questionAnswered ++;
    nextQuestion();
};

// get the answer choices from the questions/answers array and
// display wach anser in a button
function displayAnswerButtons(currentQuestion) {
    let choicesDisplay = document.getElementById("choices");
    choicesDisplay.innerHTML = "";
    currentQuestion.answers.forEach(function(choice, index) {
        let choiceButton = document.createElement("button");
        choiceButton.setAttribute("value", choice);
        choiceButton.textContent = currentQuestion.answers[index];
        choicesDisplay.append(choiceButton);
        choiceButton.addEventListener("click", checkAnswer);
    });
};

// time function that ends the quiz if the time runs out or all
// of the questions have been attempted.
// otherwise call the ask another question function
function countdown() {
    let timer;
    timer = setInterval(function() {
        if((timeLeft <= 0) || (questionIndex === quizQuestions.length)) {
            clearInterval(timer);
            saveScore();
            endQuiz();
        }
        else {
            timerDisplay.textContent = timeLeft;
            timeLeft--;
        };
    }, 1000);
    displayQuestion();
};

// listen for the user to start the quiz, hide the home screen, start the timer.
function startQuiz(){
    let startButton = document.getElementById("start");
    let startScreen = document.getElementById("start-screen");
    startButton.addEventListener("click", function() {
        startScreen.setAttribute("class", "hide"); //hide the startscreen elements
        questionsDiv.toggleAttribute("class");  // unhide the questionsDiv elements
        countdown(); // start the countdown timer function
    });
};

// call the start the quiz function to listen for the user to press the start button
startQuiz();



