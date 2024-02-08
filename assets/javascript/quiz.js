const questions = [
    {
        question: "When was the first Super Mario Brothers game released?",
        choices: ["1983", "1985", "1988", "1980"],
        correct: 0
    },

    {
        question: "How many games are there in the original Megaman series?",
        choices: ["12", "11", "10", "9"],
        correct: 1
    },
    {
        question: "Which games company is well known for creating the Dark Souls and Armoured Core series of games?",
        choices: ["Konami", "Capcom", "Nintendo", "From Software"],
        correct: 3
    },
    {
        question: "What was the name of Sega's first games console?",
        choices: ["The SG-1000", "The Master System", "The MegaDrive", "Sega Saturn"],
        correct: 0
    },
    {
        question: "British games devs Rare had a hit on their hands with Goldeneye for the N64 but what year did they first begin to create games? ",
        choices: ["1980", "1984", "1985", "1982"],
        correct: 2
    },
    {
        question: "Nintendo broke into the market with the Famicom in 1983 but what was the name of the add on for that system?",
        choices: ["The Gameboy", "Disk System", "The Famicom Twin", "64DD"],
        correct: 1
    },
    {
        question: "The Castlevania series is one of Konami's best series of games but what is the name of the protagonist from the first title?",
        choices: ["Trevor Belmont", "Alucard", "Sypha Belnades", "Simon Belmont"],
        correct: 3
    },
    {
        question: "Capcom are well known for their games such as Resident Evil and Street Fighter but what is Capcom and abbreviation of",
        choices: ["Capsule Company", "Capsule Computer", "Capsule Corp", "Capsule Community"],
        correct: 0
    },
    {
        question: "The Resident Evil series has had a few spin offs over the years but what is the title of the only Gameboy Colour game that was created in the series?",
        choices: ["Resident Evil 2", "Resident Evil Gaiden", "Resident Evil Deadly Silence", "Resident Evil Portable"],
        correct: 1
    },
    {
        question: "Which manga artist has famously created art for the Dragon Quest series of games? ",
        choices: ["Akira Toriyama", "Katsuhiro Otomo", "Naoki Urasawa", "Rumiko Takahashi"],
        correct: 0
    },
    {
        question: "In what game did Sonic the Hedgehog have his first debut?",
        choices: ["Sonic The Hedgehog", "Rad Racer", "Rad Mobile", "Fighting Vipers"],
        correct: 2
    },
    {
        question: "Nintendo were founded in 1889 in Kyoto, Japan what were they famous for making at the time?",
        choices: ["Pachislot", "Playing Cards ", " Alcohol", "Household goods"],
        correct: 1
    },
    {
        question: " In what year did Wario, Marios nemesis make his debut?",
        choices: ["1992", "1985", "1993", "1983"],
        correct: 0
    },
    {
        question: "Sega had a hit on it's hands with 'Nights into Dreams' for the Sega Saturn but who produced the game?",
        choices: ["Reiko Kodama", "Yu Suzuki", "Yuji Saito", "Yuji Naka"],
        correct: 1
    },
    {
        question: "Final Fantasy 7(1997) featured a summon that took ages to finish their attack due to the amount of attackers, what is their name?",
        choices: ["Neo Bahamut", "Odin", "Ifrit", "Knights Of The Round"],
        correct: 3
    },
    {
        question: "Pikmin was a hit on the Nintendo Gamecube but what type of game is it?",
        choices: ["Platformer", "Beat 'em up", "Real Time Strategy", "Fishing simulator"],
        correct: 2
    },
    {
        question: "Every game in the Final Fantasy series contains a character with which name?",
        choices: ["Locke", "Cid", "Garland", "Kefka"],
        correct: 1
    },
    {
        question: "Captain Falcon first appeared in which game series?",
        choices: ["Earthbound", "Pilot Wings", "F-Zero", "Star Fox"],
        correct: 2
    },
    {
        question: "Earthbound is a classic in the JRPG genre but what is the series creators name?",
        choices: ["Shigeru Miyamoto", "Shigesato Itoi", "Hironobu Sakaguchi", "Yu Suzuki"],
        correct: 1
    },
    {
        question: "Donkey Kong JR is a spin off of the arcade classic which had it's own spin off which taught...?",
        choices: ["English", "Science", "Maths", "Geography"],
        correct: 2
    },
    {
        question: "What is the name of the eco-terrorist group that Cloud joins in Final Fantasy 7 ? ",
        choices: ["COLLAPSE", "SOLDIER", "SHINRA", "AVALANCHE"],
        correct: 3
    },

];

let questionNumber = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;
let shuffledQuestions = [];


function handleQuestions() {
    console.log("here");
    //function to shuffle and push 7 questions to shuffledQuestions array
    while (shuffledQuestions.length <= 6) {
        const random = questions[Math.floor(Math.random() * questions.length)];
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random);
        }
    }
}

function showQuestion() {
    // function to display question text
    const questionText = document.getElementById("question-text");
    questionText.textContent = shuffledQuestions[questionNumber].question;

    const choices = document.querySelectorAll(".choice");
    choices.forEach((choice, index) => {
        choice.textContent = shuffledQuestions[questionNumber].choices[index];
    });

    const feedback = document.getElementById("feedback");
    feedback.textContent = "";
}


// everything below here 
function nextQuestion(choice) {
    setTimeout(() => {
        questionNumber++;
    }, 2000);
    document.getElementById("choice" + choice).style.backgroundColor = "rgb(93, 93, 220)";
    //Change the question text
    // change the button text 
    // change the three scores 
}
// work on this first, complete the function
function changeQuestionText() {
    const nextQuestion = shuffledQuestions.textContent[questionNumber];
    console.log(nextQuestion);
     

}
// stay here! you can do this Alex, think about what you are trying to acheive. 

function checkAnswer(choice) {
    // function to check answer and use onclick function
    const currentQuestion = shuffledQuestions[questionNumber];
    console.log(currentQuestion);
    const currentQuestionCorrect = currentQuestion.correct;
    const outcome = choice == currentQuestionCorrect;
    if (outcome) {
        document.getElementById("choice" + choice).style.backgroundColor = "green";
        correctAnswers++;
    } else {
        incorrectAnswers++;
        document.getElementById("choice" + choice).style.backgroundColor = "red";
    }
    nextQuestion(choice);
}

document.addEventListener("DOMContentLoaded", function (event) {
    handleQuestions();
});