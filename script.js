// Create variable references
var headerEl = document.getElementById("top");
var contentId = document.getElementById("content");

// This function will handle the basic creation of an element, one attribute, and text content
function createElement(a, b, c, d) {
    var tmp = document.createElement(a);
    tmp.setAttribute(b, c);
    tmp.textContent = d;
    return tmp;
};

// This function will be used to append the Child.
function appendChild(x, y) {

    var tmp = x.appendChild(y);
    return tmp;
};

// Creating View Highscore
var highScoreDiv = createElement("div", "id", "high-scores", "View Highscores");
appendChild(headerEl, highScoreDiv);

//Creating Timer
var countdown = 0;
var timerDiv = createElement("div", "id", "timer", "Timer: " + countdown);
appendChild(headerEl, timerDiv);

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

var question1 = "Commonly used data types do NOT include:";
var question2 = "The condition of an if/else statement is enclosed within ______.";
var question3 = "Arrays in Javascript can be used to store ______.";
var question4 = "String values must be enclosed within ______ when being assigned to variables.";
var question5 = "A very useful tool used during development and debugging for printing content to the debugger is:";

var questionList = [question1, question2, question3, question4, question5];

var answer1 = {
    true: "Alerts",
    false: ["Booleans", "Strings", "Numbers"]
}
var answer2 = {
    true: "Parentheses",
    false: ["Quotes", "Curly Brackets", "Square Brackets"]
}

var answer3 = {
    true: "All of the above",
    false: ["Numbers and strings", "Other Arrays", "Booleans"]
}

var answer4 = {

    true: "Quotes",
    false: ["Curly Brackets", "Commas", "Parentheses"]
}

var answer5 = {

    true: "console.log",
    false: ["Javascript", "Terminal/bash", "For loops"]

}

var quiz = {
    question1: answer1,
    question2: answer2,
    question3: answer3,
    question4: answer4,
    question5: answer5
}

var answerList =

    document.getElementById("start-quiz").addEventListener("click", function (event) {

        event.preventDefault;



    });

