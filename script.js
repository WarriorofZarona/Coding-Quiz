// Create variable references 
var headerEl = document.getElementById("top");
var contentId = document.getElementById("content");

var button0 = createButton("btn0");
var button1 = createButton("btn1");
var button2 = createButton("btn2");
var button3 = createButton("btn3");

var score = 0;
var currentQuestionIndex = 0;
var wrongAnswer = 10;
var isButtonClick = false;



// This function will handle the basic creation of an element, one attribute, and text content
function createElement(element, type, value, text) {
    var tmp = document.createElement(element);
    tmp.setAttribute(type, value);
    tmp.textContent = text;
    return tmp;
};

//This function will create buttons for answer later
function createButton(idValue) {
    var tmp = document.createElement("button");
    tmp.setAttribute("type", "button");
    tmp.setAttribute("class", "answers")
    tmp.setAttribute("id", idValue);
    return tmp;

};

function createSpan(idValue) {

    var tmp = document.createElement("span");
    tmp.setAttribute("data-answer", "option" + idValue);
    tmp.setAttribute("id", "option" + idValue)
    return tmp;

}

// This function will be used to append the Child.
function appendChild(location, element) {

    var tmp = location.appendChild(element);
    return tmp;
};

// This function starts the timer counting down to 0 when the quiz starts
function setTime() {
    var timerInterval = setInterval(function () {

        countDown--;
        countDownSpan.textContent = countDown;

        if (countDown === 0) {
            clearInterval(timerInterval);
        }

    }, 1000);
};


// This function will put the question text into h1, and answer text into the buttons
function generateQA(questionId) {

    document.getElementById("h1").textContent = questionList[questionId].text;
    addAnswers(questionList[questionId].choices);

};

// This function will create the answer div inside the content div

function createAnswers() {


    var answers = createElement("div", "id", "answers")
    appendChild(contentId, answers);
};

// This function appends the four buttons that the user can click, along with the spans that will eventually have the answer strings

function addAnswers(choices) {
    var answersDiv = document.getElementById("answers");

    appendChild(answersDiv, button0);
    appendChild(answersDiv, button1);
    appendChild(answersDiv, button2);
    appendChild(answersDiv, button3);


    for (var i = 0; i < choices.length; i++) {

        var textSpan = createSpan(i);
        textSpan.textContent = choices[i];
        appendChild(document.getElementById("btn" + i), textSpan)

    }

}

// This function will check the correct answer against the user choice

function checkAnswer(questionIndex) {


    var answer0 = document.getElementById("option0").getAttribute("data-answer");
    var answer1 = document.getElementById("option1").getAttribute("data-answer");
    var answer2 = document.getElementById("option2").getAttribute("data-answer");
    var answer3 = document.getElementById("option3").getAttribute("data-answer");

    var answersId = document.getElementById("answers");

    if (userChoice() === questionList[questionIndex].correctAnswer) {
        score++
        console.log(score)

    } else {

        countDown = countdown - wrongAnswer;
        countDown.textContent = countdown;
        console.log("nope");
    }

    // This function returns the data-answers attribute that was clicked by the user

    function userChoice() {
        var userInput = "";

        answersId.addEventListener("click", function (event) {

            if (event.target.matches("#option0")) {
                console.log(answer0)
                userInput = answer0
                console.log("This is option0")

            }

            else if (event.target.matches("#option1")) {

                console.log(answer1)
                userInput = answer1
                console.log("This is option1")


            } else if (event.target.matches("#option2")) {

                console.log(answer2)
                userInput = answer2
                console.log("This is option2")

            } else if (event.target.matches("#option3")) {

                console.log(answer3)
                userInput = answer3
                console.log("This is option3")

            }
        })
        console.log(userInput)
        return userInput
    }

    function clearAnswers() {

        if (isButtonClick === false) {

            return false

        } else {

            for (var i = 0; i < 4; i++) {
                document.getElementById("btn" + i).textContent = "";

            }
            isButtonClick = false;
            currentQuestionIndex++

        }
    }


}


function quiz(index) {

    generateQA(index);
    checkAnswer(index);
    clearAnswers();

}



// Creating View Highscore
var highScoreDiv = createElement("div", "id", "high-scores", "View Highscores");
highScoreDiv.setAttribute("class", "top-position");
appendChild(headerEl, highScoreDiv);

//Creating Timer, first a button then the span that contains the countDown variable
var countDown = 0;
var timerDiv = createElement("div", "id", "timer", "Timer: ");
timerDiv.setAttribute("class", "top-position");
appendChild(headerEl, timerDiv);
var countDownSpan = createElement("span", "id", "countdown", countDown);
headerEl.childNodes[1].appendChild(countDownSpan);

//Creating h1 for displaying game name/questions
var questionH1 = createElement("h1", "id", "h1", "Coding Quiz Challenge");
appendChild(contentId, questionH1);

//Creating Description of Quiz
var descriptionDiv = createElement("p", "id", "description", "Try to answer the following code - related questions within the time limit. Keep in mind that incorrect answers will penalize your scoretime by ten seconds!");
appendChild(contentId, descriptionDiv);

//Creating Button to Start Quiz, needing to add one more Attribute to this one
var startButton = createElement("button", "id", "start-quiz", "Start Quiz");
startButton.setAttribute("type", "button");
appendChild(contentId, startButton);

// Data for quiz starts here
// Questions
var question1 = {
    text: "Commonly used data types do NOT include:",
    choices: ["1 - Booleans", "2 - Alerts", "3 - Strings", "4 - Numbers"],
    correctAnswer: "option1",
};

var question2 = {

    text: "The condition of an if/else statement is enclosed within ______.",
    choices: ["1 - Quotes", "2 - Curly Brackets", "3 - Parentheses", "4 - Square Brackets"],
    correctAnswer: "option2",
};

var question3 = {
    text: "Arrays in Javascript can be used to store ______.",
    choices: ["1 - Numbers and strings", "2 - Other Arrays", "3 - Booleans", "4 - All of the above",],
    correctAnswer: "option3",
};

var question4 = {
    text: "String values must be enclosed within ______ when being assigned to variables.",
    choices: ["1 - Quotes", "2 - Curly Brackets", "3 - Commas", "4 - Parentheses"],
    correctAnswer: "option0",
};

var question5 = {
    text: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["1 - Javascript", "2 - console.log", "3 - Terminal/bash", "4 - For loops"],
    correctAnswer: "option1",
};

var questionList = [question1, question2, question3, question4, question5];


//Need to create a reset function that resets the page


// This starts the quiz
document.getElementById("start-quiz").addEventListener("click", function (event) {

    event.preventDefault;
    event.stopPropagation;

    countDown = 75;
    countDownSpan.textContent = countDown;
    document.querySelector("#description").style.display = "none";
    document.querySelector("#start-quiz").style.display = "none";
    contentId.style.textAlign = "left";
    setTime();
    createAnswers();
    generateQA(0);

    checkAnswer(0)

});