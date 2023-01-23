let currentQuestionIndex = 0;
let time = questions.length * 15;
let timerID;

// HTML elements;
let questionTitle = document.getElementById('questions');
let timer = document.getElementById('timer');
let questionChoices = document.getElementById('choices');
let startScreen = document.getElementById('start-screen');
let startButton = document.getElementById('start');
let initialElement = document.getElementById("initials");
let submitButton = document.getElementById('submit');
let feedback = document.getElementById('feedback');

//question sound effects
let sfxCorrect = new Audio("assets/sfx/correct.wav");
let sfxIncorrect = new Audio("assets/sfx/incorrect.wav");

function getQuestion(){
 let currentQuestion = question[currentQuestionIndex];
 let titleElement = document.getElementById("question-title");
 titleElement.textContent = currentQuestion.title;
 questionChoices.innerHTML = "";
 currentQuestion.choices.forEach(function(choice, index) {
    let choiceButton = document.createElement("button");
    choiceButton.setAttribute("class", "choice");
    choiceButton.setAttribute("value", choice);
    choiceButton.textContent = `${i + 1} . ${choice}`
    choiceButton.addEventListener("click", questionClick)
    choicesElement.append(choiceButton);
 })
}

function questionClick(){
if(this.value !== questions[currentQuestionIndex].answer) {
    time -= 15;
if(time < 0) {
    time = 0;
}

timer.textContent = time;
    sfxIncorrect.play();
    feedback.textContent = "Incorrect"
} else {
    sfxCorrect.play();
    feedback.textContent = "Correct!"
}
feedback.setAttribute("class", "feedback");
setTimeout(function(){
    feedback.setAttribute("class", "feedback hide");

}, 1000);

currentQuestionIndex++;
if(currentQuestionIndex === questions.length){
    quizEnd()
} else {
    getQuestion();
}
}



function countDown(){
 time--;
 timer.textContent = time;
 if(time <= 0){
    quizEnd()
 }
}

function startQuiz(){
let startQuiz = document.getElementById("start-screen");
startQuiz.setAttribute("class", "hide");

questionTitle.removeAttribute("class");
timerID = setInterval(clockTick, 1000)

timer.textContent = time;
getQuestion();
}

function quizEnd(){
 clearInterval(timerID);
 let endscreenElement = document.getElementById("end-screen");
 endscreenElement.removeAttribute("class");
 let finalscoreElement = document.getElementById("final-score");
 finalscoreElement.textContent = time;
 questionTitle.setAttribute("class", "hide");
}


function saveHighScore(){
let initials = initialElement.value.trim();
console.log(initials);

if(initial !== "") {
    let highScores = JSON.parse(localStorage.getItem("highscores")) || [];
    let newScore = {
        score: time,
        initials : initials
    }
highScores.push(newScore);
localStorage.setItem("highscores", JSON.stringify(highScores));

window.location.href = "highscores.html";
}
}

function checkForEnter(event){
if(event.key === "Enter") {
    saveHighScore();
}
}

startButton.addEventListener('click', startQuiz);

/*function (evt){
    evt.preventDefault()
    startScreen.setAttribute('class', 'hide')
    displayQuestion(0)
})
*/

submitButton.addEventListener("click", saveHighScore);

initialElement.addEventListener("keyup", checkForEnter);

/*function displayQuestion(questionIndex){
}

function timerLogic() {
    var time
    if (localStorage.getItem('timer')) {
        time = localStorage.getItem('timer')
    }
    else {
        time = 100
    }
}

var countdown = setInterval(function() {
    timeSubstractionFunction = 1000)
}

function timeSubstractionFunction(time = 1) {
    if (time === 0) {
        clearInterval(countdown)
    }
    localStorage.setItem('timer', time)
    timer.textContent = localStorage.getItem('timer')

    if ((timerLargeSubtraction = 'big')) {
        timer = timer - 10
        timerLargeSubtraction = 'none'
    }
}

// variable for quiz progression
let currentQuestionIndex = 0;
let time = questions.length * 15;
let timerID;

//HTML elements
let questionElement

*/