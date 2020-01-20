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
function createButton(idValue) {
    var tmp = document.createElement("button");
    tmp.setAttribute("type", "button");
    tmp.setAttribute("class", "answers")
    tmp.setAttribute("id", idValue);
    return tmp;

};

function createSpan(idValue) {

    var tmp = document.createElement("span");
    tmp.setAttribute("id", "option" + idValue);
    return tmp;

}

function topPosition(element) {
    element.setAttribute("class", "top-position");
}

// This function will be used to append the Child.
function appendChild(location, element) {

    var tmp = location.appendChild(element);
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
    choices: ["1 - Booleans", "2 - Alerts", "3 - Strings", "4 - Numbers"],
    correctAnswer: "2 - Alerts"
};

var question2 = {

    text: "The condition of an if/else statement is enclosed within ______.",
    choices: ["1 - Quotes", "2 - Curly Brackets", "3 - Parentheses", "4 - Square Brackets"],
    correctAnswer: "3 - Parentheses"
};

var question3 = {
    text: "Arrays in Javascript can be used to store ______.",
    choices: ["1 - Numbers and strings", "2 - Other Arrays", "3 - Booleans", "4 - All of the above",],
    correctAnswer: "4 - All of the above"
};

var question4 = {
    text: "String values must be enclosed within ______ when being assigned to variables.",
    choices: ["1 - Quotes", "2 - Curly Brackets", "3 - Commas", "4 - Parentheses"],
    correctAnswer: "1 - Quotes"
};

var question5 = {
    text: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["1 - Javascript", "2 - console.log", "3 - Terminal/bash", "4 - For loops"],
    correctAnswer: "2 - console.log"
};

var questionList = [question1, question2, question3, question4, question5];

// }
var button0 = createButton("btn0");
var button1 = createButton("btn1");
var button2 = createButton("btn2");
var button3 = createButton("btn3");

var score = 0;
var index = 0;
var wrongAnswer = 10;




// function clearQuestion() {



// }



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

function addAnswers(choices) {

    appendChild(contentId, button0);
    appendChild(contentId, button1);
    appendChild(contentId, button2);
    appendChild(contentId, button3);


    for (var i = 0; i < choices.length; i++) {

        var textSpan = createSpan(i);
        textSpan.textContent = choices[i];
        appendChild(document.getElementById("btn" + i), textSpan)


    }



}

function generateQA(questionId) {

    document.getElementById("heading").textContent = questionList[questionId].text;
    addAnswers(questionList[questionId].choices);





};

function selection(questionIndex) {

    var answers = questionList[questionIndex].choices;
    var correct = questionList[questionIndex].correctAnswer;
    for (var i = 0; i < answers.length; i++) {
        var button = document.getElementById("btn" + i);
        button.addEventListener("click", function (event) {
            event.preventDefault;
            if (button.textContent === correct) {
                score++;
                console.log(score);

            } else {
                console.log(score);
            }

        });

    };
    // clearAnswers();

}

// function clearAnswers() {

//     for (var i = 0; i < 5; i++) {

//         document.getElementById("btn" + i).textContent = "";

//     }

// }
document.getElementById("start-quiz").addEventListener("click", function (event) {

    event.preventDefault;

    countDown = 75;
    countDownSpan.textContent = countDown;
    document.querySelector("#description").style.display = "none";
    document.querySelector("#start-quiz").style.display = "none";
    contentId.style.textAlign = "left";
    setTime();

    generateQA(0);
    selection(0);
});
