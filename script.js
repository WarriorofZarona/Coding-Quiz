// Create variable references for ID locations
var headerEl = document.getElementById("top");
var contentId = document.getElementById("content");

// This function will handle the basic creation of an element, one attribute, and text content
function createElement(element, type, value, text) {
    var tmp = document.createElement(element);
    tmp.setAttribute(type, value);
    tmp.textContent = text;
    return tmp;
};

//This function will create buttons for answer later
function createButton(num) {
    var tmp = document.createElement("button");
    tmp.setAttribute("type", "button");
    tmp.setAttribute("class", "answers")
    tmp.setAttribute("id", x);
    return tmp;

};

function topPosition(id) {
    id.setAttribute("class", "top-position");
}

// This function will be used to append the Child.
function appendChild(id, element) {

    var tmp = id.appendChild(element);
    return tmp;
};

// Creating View Highscore
var highScoreDiv = createElement("div", "id", "high-scores", "View Highscores");
topPosition(highScoreDiv);
appendChild(headerEl, highScoreDiv);

//Creating Timer
var countDown = 0;
var timerDiv = createElement("div", "id", "timer", "Timer: ");
topPosition(timerDiv);
appendChild(headerEl, timerDiv);
var countDownSpan = createElement("span", "id", "countdown", countDown);
headerEl.childNodes[1].appendChild(countDownSpan);


//Creating h1 for header/questions
var questionH1 = createElement("h1", "id", "heading", "Coding Quiz Challenge");
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
    choices: ["Booleans", "Alerts", "Strings", "Numbers"],
    correctAnswer: "Alerts"
};

var question2 = {

    text: "The condition of an if/else statement is enclosed within ______.",
    choices: ["Quotes", "Curly Brackets", "Parentheses", "Square Brackets"],
    correctAnswer: "Parentheses"
};

var question3 = {
    text: "Arrays in Javascript can be used to store ______.",
    choices: ["Numbers and strings", "Other Arrays", "Booleans", "All of the above",],
    correctAnswer: "All of the above"
};

var question4 = {
    text: "String values must be enclosed within ______ when being assigned to variables.",
    choices: ["Quotes", "Curly Brackets", "Commas", "Parentheses"],
    correctAnswer: "Quotes"
};

var question5 = {
    text: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["Javascript", "console.log", "Terminal/bash", "For loops"],
    correctAnswer: "console.log"
};

var questionList = [question1, question2, question3, question4, question5];

// Answers
// var answer1 = ["Booleans", "Alerts", "Strings", "Numbers"], "Alerts"];
// var answer2 = [["Quotes", "Curly Brackets", "Parentheses", "Square Brackets"], "Parentheses"]
// var answer3 = [["Numbers and strings", "Other Arrays", "Booleans", "All of the above",], "All of the above"]
// var answer4 = [["Quotes", "Curly Brackets", "Commas", "Parentheses"], "Quotes"]
// var answer5 = [["Javascript", "console.log", "Terminal/bash", "For loops"], "console.log"]

// var answerList = [answer1, answer2, answer3, answer4, answer5];

// var quiz = {

//     text: questionList[i],
//     choices: answer1[i],
//     correctAnswer: "Alerts",

// }

document.getElementById("content").addEventListener("click", function (event) {


    event.preventDefault;

    var button1 = createButton("1");
    var button2 = createButton("2");
    var button3 = createButton("3");
    var button4 = createButton("4");

    var score = 0;
    var index = 0;
    countDown = 75;
    countDownSpan.textContent = countDown;


    function addButtons() {
        appendChild(contentId, button1);
        appendChild(contentId, button2);
        appendChild(contentId, button3);
        appendChild(contentId, button4);

    }

    function addAnswers(x) {

        document.getElementById("1").textContent = "1 - " + (x)[0];
        document.getElementById("2").textContent = "2 - " + (x)[1];
        document.getElementById("3").textContent = "3 - " + (x)[2];
        document.getElementById("4").textContent = "4 - " + (x)[3];



    }


    // function correctAnswer(x) {
    //     contentId.addEventListener("click", function (event) {
    //         event.preventDefault;
    //         if (event.target.matches(".answers")) {


    //         };


    // Timer countdown

    function setTime() {
        var timerInterval = setInterval(function () {
            countDown--;
            countDownSpan.textContent = countDown;

            if (countDown === 0) {
                clearInterval(timerInterval);
                gameOver()
            }

        }, 1000);
    };

    // When the timer hits 0

    function gameOver() {

        // Goes to the next question
    };

    function askQuestion() {


        document.getElementById("heading").textContent = questionList[index].text;
        addButtons();
        addAnswers((answerList[index][0]));


    }

    if (event.target.matches("button")) {

        document.querySelector("#description").style.display = "none";
        document.querySelector("#start-quiz").style.display = "none";
        contentId.style.textAlign = "left";
        setTime();
        askQuestion();
    }
});


