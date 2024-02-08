# Milestone Project 2 - Retro Videogame Quiz

## About

My second milestone project is focused on gaming just like my first project but this time it is in the form of an interactive quiz which takes full advantage of HTML, CSS and Javascript to create an entertaining and well designed environment for gamers to test their knowledge against a series of seven questions from a pool of 21 so this means that the player has a good chance that they will be able to play the quiz multiple times without facing the same questions. The questions are displayed above four multiple choice answers, each having the requisite answer contained within the button and each question follows the theme of retro gaming.

## Aesthetics

The user will first be introduced to the quiz by a "Splash Screen" which will require the user to press a button to enter the quiz, this splash screen will be simplistic but effective and will just a coloured screen featuring a logo for the site and a button below said logo, once the start button is pressed a Javascript script will initalise and transform the screen to the quiz where the player will be greeted with a simple set up of a container that holds the quiz question, data below it that records how many correct or incorrect answers the player has made as well as a question counter and will be followed by four multiple choice answers below the player data. The background colour of the website is Black and the fonts used are Orbitron for the headings and questions and Roboto for the answers. The colour scheme is very simple but I believe that when combined with the fonts used and the images that will be displayed with each question that it will lead to a simple but effective scheme.

I am hoping to be able to add images as backgrounds to the questions that change with each question to display a relevant image to the question being asked, I will enable this function by linking images to the correct array within the the questions array. I will need twenty one images for each question and none of the questions re-use the same question material so they will all need to be different, I will use tinyJPG to minimize the size of the images and the length of time it will take to load on the page. 
I have also created a logo for the splash screen which will aid the user with recognising the ethos of the website from a glance.
![retro-gaming-quiz-high-resolution-logo](https://github.com/Aansteydev/mp2-quiz/assets/137046660/4d7cbbac-d083-4a03-aa34-fff5ba074329)

## User Stories

- As a user I will like to be able to ascertain what the site is about from just an initial glance.
- This will be acheived by the use of a splash screen and logo as the logo featured above is at least to me obvious that this is a gaming related site which features a quiz.

- As a user I would like to be able to see my highscores in relation to other peoples scores.
- A leaderboard may be implemented someday but that will require backend integration and more time to work on this feature than I currently have spare.

- As a user I would not like to see the same questions repeated too often.
- This has been acheieved by writing twenty one questions and only using seven of the questions per game which are picked at random, unfortunately due to the limited amount of questions there will eventually be a repeated question but by theory you should be able to play the game at least three times without a single repeat(21/3=7).

- As a user I would like the functionality of the site to be easy to navigate I.E how to access the answers, where to check my score etc.
- This will be implemented by using clearly labelled buttons for the answers that will change colour upon the user hovering or clicking on them to provide feedback to the user, the site also tracks the users score I.E correct and incorrect answers and this is large enough and labelled so that this information is apparent to the user.

- As a user I would like to be able to ...
- This will be....

- As a user I would like to be able to ...
- This will be ....

# Testing 
Due to this project being quite small in scope I have neglected automated testing and have focused on creating functionality through my code, so whilst there is a lack of automated testing I have been working through my code as the project has expanded and my findings are as follows. 

