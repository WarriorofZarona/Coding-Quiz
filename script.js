// Create elements
var headerEl = document.getElementById("top");
var contentId = document.getElementById("content");
var countdown = 0;

// This function will handle the basic creation of an element, one attribute, and text content
function createElement(a, b, c, d, e) {
    var a = document.createElement(b);
    a.setAttribute(c, d);
    a.textContent = e;
    return a;
};

// This function will be used to append the Child.
function appendChild(x, y) {

    var x = x.appendChild(y);
    return x;
};

// Creating View Highscore
var highScoreDiv = createElement(highScoreDiv, "div", "id", "high-scores", "View Highscores");
appendChild(headerEl, highScoreDiv);

//Creating Timer
var timerDiv = createElement(timerDiv, "div", "id", "timer", "Timer: " + countdown);
appendChild(headerEl, timerDiv);

//Creating h1 for header/questions
var questionH1 = createElement(questionH1, "h1", "id", "heading", "Coding Quiz Challenge");
appendChild(contentId, questionH1);

//Creating Description of Quiz
var descriptionDiv = createElement(descriptionDiv, "p", "id", "description", "Try to answer the following code - related questions within the time limit. Keep in mind that incorrect answers will penalize your scoretime by ten seconds!");
appendChild(contentId, descriptionDiv);

//Creating Button to Start Quiz, needing to add one more Attribute to this one
var startButton = createElement(startButton, "button", "id", "start-quiz", "Start Quiz");
startButton.setAttribute("type", "button");
appendChild(contentId, startButton);



