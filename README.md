# Coding-Quiz
Homework #4

I need to create a timed multiple-choice quiz that tracks the score of the user using updating HTML and CSS powered by Javascript.

The plan is to build in HTML and CSS first to get a general idea of what the game should look like, then rebuild using Javascript.

Buttons should be used to start the quiz, and any answer will proceed to the next question while letting the user know if the answer is correct or wrong.

At the end of the quiz, the user will be shown the score and allowed to type in their initials, which will go into a list of highscores.

My goal is to have the bare minimum HTML and CSS and have everything be built in JS.

--- After finishing the project --

The questions are asked in a random order each time a user starts a quiz.

The user has 75 seconds to answer 10 questions. With each wrong answer, the timer is subtracted by 10 seconds.

When the timer hits 0, or when the user has answered all 10 questions, a game over screen appears with the final score
and input for putting in the initials. The form cannot be blank when submitting and a message will display to alert the user.

Clicking submit takes the user to a high score page. It will be listed in order of score from highest to lowest. Go back button goes back to the start of the quiz. Clear list will clear the high score list. The high scores are stored on the user's localstorage.