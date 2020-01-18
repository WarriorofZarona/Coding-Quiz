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

//This function will create buttons for answer later
function createButton(x) {
    var tmp = document.createElement("button");
    tmp.setAttribute("type", "button");
    tmp.setAttribute("class", "answers")
    tmp.setAttribute("id", x);
    return tmp;

};

function topPosition(x) {
    x.setAttribute("class", "top-position");
}

// This function will be used to append the Child.
function appendChild(x, y) {

    var tmp = x.appendChild(y);
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
var question1 = "Commonly used data types do NOT include:";
var question2 = "The condition of an if/else statement is enclosed within ______.";
var question3 = "Arrays in Javascript can be used to store ______.";
var question4 = "String values must be enclosed within ______ when being assigned to variables.";
var question5 = "A very useful tool used during development and debugging for printing content to the debugger is:";

var questionList = [question1, question2, question3, question4, question5];

// Answers
var answer1 = ["Booleans", "Alerts", "Strings", "Numbers"];
var answer2 = ["Quotes", "Curly Brackets", "Parentheses", "Square Brackets"]
var answer3 = ["Numbers and strings", "Other Arrays", "Booleans", "All of the above",]
var answer4 = ["Quotes", "Curly Brackets", "Commas", "Parentheses"]
var answer5 = ["Javascript", "console.log", "Terminal/bash", "For loops"]

var answerList = [answer1, answer2, answer3, answer4, answer5];

document.getElementById("start-quiz").addEventListener("click", function (event) {

    event.preventDefault;

    contentId.style.textAlign = "left";

    var button1 = createButton("1");
    var button2 = createButton("2");
    var button3 = createButton("3");
    var button4 = createButton("4");

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

    var score = 0;

    function correctAnswer(x) {
        if (x) {
            score++;

        }

        else {


        }
    }

    // Timer countdown

    countDown = 75;
    countDownSpan.textContent = countDown;

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

        var index = 0;

        document.getElementById("heading").textContent = questionList[index];
        document.querySelector("#description").style.display = "none";
        document.querySelector("#start-quiz").style.display = "none";
        addButtons();
        addAnswers(answerList[index]);


    }
    setTime();
    askQuestion();
});


