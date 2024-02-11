# Milestone Project 2 - Retro Videogame Quiz

## About

My second milestone project is focused on gaming just like my first project but this time it is in the form of an interactive quiz which takes full advantage of HTML, CSS and Javascript to create an entertaining and well designed environment for gamers to test their knowledge against a series of seven questions from a pool of twenty-one available questions which means that the player has a good chance that they will be able to play the quiz multiple times without answering the same questions multiple times I have implemented a javascript script to ensure that the questions are drawn and displayed at random. The questions are displayed above four multiple choice answers, each having the requisite answer contained within one of four possible options. The buttons are updated with each new answer so that they will display the correct array of multiple choices available, once the user has clicked a button to answer the current question being asked they will be greeted by a visual representation to display whether they have answered correctly(Green) or incorrectly(Red) then the players score will be updated. 

## Aesthetics

The user will first be introduced to the quiz by a "Splash Screen" which will require the user to press a button to enter the quiz, this splash screen will be simplistic but effective and will be just a coloured screen(rgb 93, 93, 220 - Dark Lavender see below for example) featuring a logo for the site and a button below said logo, once the start button is pressed a Javascript script will initalise and transform the screen to the quiz where the player will be greeted with a simple set up of a container that holds the quiz question, data below it that records how many correct or incorrect answers the player has made as well as a question counter and will be followed by four multiple choice answers below the player data. The colours used are as follows:

I am hoping to be able to add images as backgrounds to the questions that change with each question to display a relevant image to the question being asked, I will enable this function by linking images to the correct array within the the questions array. I will need twenty one images for each question and none of the questions re-use the same question material so they will all need to be different, I will use tinyJPG to minimize the size of the images and the length of time it will take to load on the page. 
I have also created a logo for the splash screen which will aid the user with recognising the ethos of the website from a glance.
![retro-gaming-quiz-high-resolution-logo](https://github.com/Aansteydev/mp2-quiz/assets/137046660/4d7cbbac-d083-4a03-aa34-fff5ba074329)

## Background - black ![mp2black](https://github.com/Aansteydev/mp2-quiz/assets/137046660/1e014518-845c-4749-86f8-33c62d74603a) 

## Font - A dark lavender rgb(93, 93, 220) this is for the H3 and choice text ![mp2fontcolour](https://github.com/Aansteydev/mp2-quiz/assets/137046660/f470dedd-052f-4f9b-b104-3fbbfc1ae56e)

## H1 - lavender ![mp2lavender](https://github.com/Aansteydev/mp2-quiz/assets/137046660/a671859a-63da-4b27-88d9-f3f2c1f619c9)

## a light blue which is used when the user hovers over a button element ![mp2hover](https://github.com/Aansteydev/mp2-quiz/assets/137046660/2737f84b-39e2-43e4-b468-f245ab1099c8) 

The fonts used are Roboto for the answers and orbitron for the question and heading. I feel that these work very well with the theme especially the Orbitron font 

## Orbitron font example - ![mp2orbitron](https://github.com/Aansteydev/mp2-quiz/assets/137046660/e38ef869-0f21-413d-bca9-28e1cf866895)

## Roboto font example - ![mp2roboto](https://github.com/Aansteydev/mp2-quiz/assets/137046660/517a71ed-8fc3-4747-b1cd-3338be3ae92c)

I feel that the black background combined with the colour choices compliment each other nicely to create a retro effect whilst the font style choices, especially with the Orbitron font being used for headings and the question display iterate upon the retro stylings which is important for the feel of the site since all of the questions are based around retro gaming.  

## User Stories

- As a user I would like to be able to ascertain what the site is about from just an initial glance.
- This will be acheived by the use of a splash screen and logo as the logo featured above is at least to me obvious that this is a gaming related site which features a quiz.

- As a user I would like to be able to see my highscores in relation to other peoples scores.
- A leaderboard may be implemented someday but that will require backend integration and more time to work on this feature than I currently have spare.

- As a user I would not like to see the same questions repeated too often.
- This has been acheieved by writing twenty one questions and only using seven of the questions per game which are picked at random, unfortunately due to the limited amount of questions there will eventually be a repeated question but by theory you should be able to play the game at least three times without a single repeat(21/3=7) I will be adding more questions at a later chance to decrease the chance of repeat questions.

- As a user I would like the functionality of the site to be easy to navigate I.E how to access the answers, where to check my score etc.
- This will be implemented by using clearly labelled buttons for the answers that will change colour upon the user hovering or clicking on them to provide feedback to the user, the site also tracks the users score I.E correct and incorrect answers and this is large enough and labelled so that this information is apparent to the user.



# Testing 
Due to this project being quite small in scope I have neglected automated testing and have focused on creating functionality through my code, so whilst there is a lack of automated testing I have been working through my code as the project has expanded and my findings are as follows. 

Error message - quiz.js:167 Uncaught TypeError: Cannot read properties of null (reading 'style')
    at checkAnswer (quiz.js:167:51)
    at HTMLButtonElement.onclick ((index):28:68)

    This is an error that explains that when a question is answered the corresponding negative or positive reinforcement in the form of displaying red for incorrect or green for correct is not displaying.( So far this seems to only throw an error when the first button element is pressed which is an incorrect answer but so are two of the remaining three buttons that don't give this error message)

    Fix - 

Error message -

Error message -
