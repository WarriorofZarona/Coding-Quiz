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
    tmp.setAttribute("id", num);
    return tmp;

};

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
    var wrongAnswer = 10;
    countDownSpan.textContent = countDown;


    function addButtons() {
        appendChild(contentId, button1);
        appendChild(contentId, button2);
        appendChild(contentId, button3);
        appendChild(contentId, button4);

    }

    function addAnswers(choices) {

        for (var i = 0; i < choices.length; i++) {

            document.getElementById(i + 1).textContent = i + 1 + " - " + choices[i];

        }


    }

    function checkAnswer() {

        if (document.querySelectorAll(".answers").clicked && questionList[index].correctAnswer) {
            score++
            console.log(score);
            index++


        }
        else {

            countDown = countDown - 10;
            index++


        }

    }

    function clearQuestion() {



    }



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
        addAnswers(questionList[index].choices);


    }

    if (event.target.matches("button")) {

        document.querySelector("#description").style.display = "none";
        document.querySelector("#start-quiz").style.display = "none";
        contentId.style.textAlign = "left";
        setTime();

        for (var i = 0; i < questionList.length; i++) {

            if (i === index) { continue }

        }
        askQuestion();
    }

});


