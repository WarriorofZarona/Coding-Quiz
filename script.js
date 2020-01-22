// Create variable references 
var headerEl = document.getElementById("top");
var contentId = document.getElementById("content");


var button0 = createButton("btn0");
var button1 = createButton("btn1");
var button2 = createButton("btn2");
var button3 = createButton("btn3");


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

function startQuiz(event) {

    event.preventDefault;

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

    var lastQuestionIndex = questionList.length - 1
    var score = 0;
    var currentQuestionIndex = 0;

    var wrongAnswer = 10;

    countDown = 75;
    countDownSpan.textContent = countDown;
    document.querySelector("#description").style.display = "none";
    document.querySelector("#start-quiz").style.display = "none";
    contentId.style.textAlign = "left";
    setTime();
    createAnswers();
    renderQuestion();

    var answerList = document.querySelectorAll(".answers");

    console.log(answerList);

    for (var i = 0; i < answerList.length; i++) {
        answerList[i].addEventListener('click', checkAnswer)
    };
    console.log(currentQuestionIndex);



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

    function createAnswers() {

        var q = questionList[currentQuestionIndex];
        var answers = createElement("div", "id", "answers")
        appendChild(contentId, answers);
        var answersDiv = document.getElementById("answers");
        appendChild(answersDiv, button0);
        appendChild(answersDiv, button1);
        appendChild(answersDiv, button2);
        appendChild(answersDiv, button3);

        for (var i = 0; i < q.choices.length; i++) {

            var textSpan = createSpan(i);

            appendChild(document.getElementById("btn" + i), textSpan)
        };
    };


    // This function will create the answer div inside the content div

    function renderQuestion() {

        var q = questionList[currentQuestionIndex];
        var answerText0 = document.getElementById("option0");
        var answerText1 = document.getElementById("option1");
        var answerText2 = document.getElementById("option2");
        var answerText3 = document.getElementById("option3");

        questionH1.textContent = q.text;
        answerText0.textContent = q.choices[0];
        answerText1.textContent = q.choices[1];
        answerText2.textContent = q.choices[2];
        answerText3.textContent = q.choices[3];

    }







    // This function will check the correct answer against the user choice

    function checkAnswer(event) {

        event.preventDefault();
        var q = questionList[currentQuestionIndex];
        var userInput = this.children[0].getAttribute("data-answer");

        if (userInput === q.correctAnswer) {
            score++
            console.log("You got a point! Score is now " + score)

        } else {
            console.log(userInput + " does not equal " + q.correctAnswer)
            countDown = countDown - wrongAnswer;
            countDown.textContent = countDown;


        }

        if (currentQuestionIndex < lastQuestionIndex) {
            currentQuestionIndex++;
            renderQuestion();
        } else {
            //showscore
            console.log("Score will be shown here");
        }
    };
};

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


//Need to create a reset function that resets the page


// This starts the quiz
document.getElementById("start-quiz").addEventListener("click", startQuiz);
