var readlineSync = require('readline-sync');
var score = 0;


//array Object

var questionArray = [{
    question: "where do I live? ",
    answer: "Balichak"
},
{
    question: "My favorite cricketer ? ",
    answer: "Virat"
},
{
    question: "Where do I work? ",
    answer: "Accenture"
},
{
    question: "My mother Tongue? ",
    answer: "Bengali"
},
{
    question: "My favorite singer? ",
    answer: "Arijit singh"
}]


function welcome() {
    var userName = readlineSync.question("What is your name? ");
    console.log("Welcome " + userName + " to Do you know Rana? ")
}

function play(question, answer) {
    var userAnswer = readlineSync.question(question);

    if (userAnswer.toUpperCase() === answer.toUpperCase()) {
        console.log("right!");
        score += 1;
    }
    else {
        console.log("wrong!")
    }
    console.log("current score: ", score);
    console.log("-----------------");
}

function game() {
    for (var i = 0; i < questionArray.length; i++) {
        var currentQuestion = questionArray[i];
        play(currentQuestion.question, currentQuestion.answer)
    }
}


function showScore() {
    console.log("YAY! You scored: ", score);
}

welcome();
game();
showScore();
