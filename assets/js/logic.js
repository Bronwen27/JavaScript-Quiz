// Set quiz rules
let currentQuestionIndex = 0;
let time = questions.length * 10;
let timerID;

// HTML elements;
let questionTitle = document.getElementById('questions');
let timerElement = document.getElementById('time');
let choicesElement = document.getElementById('choices');
let startScreen = document.getElementById('start-screen');
let startButton = document.getElementById('start');
let initialElement = document.getElementById("initials");
let submitButton = document.getElementById('submit');
let feedback = document.getElementById('feedback');

//question sound effects
let sfxCorrect = new Audio("assets/sfx/correct.wav");
let sfxIncorrect = new Audio("assets/sfx/incorrect.wav");

// Start of quiz
function getQuestion(){
 let currentQuestion = questions[currentQuestionIndex];
 let questionTitle = document.getElementById("question-title");
 questionTitle.textContent = currentQuestion.title;
 choicesElement.innerHTML = "";
 currentQuestion.choices.forEach(function(choices, i) {
    let choiceButton = document.createElement("button");
    choiceButton.setAttribute("class", "choice");
    choiceButton.setAttribute("value", choices);
    choiceButton.textContent = `${i + 1} . ${choices}`
    choiceButton.addEventListener("click", questionClick)
    choicesElement.append(choiceButton);
 })
}

function questionClick(){
if(this.value !== questions[currentQuestionIndex].answer) {
    time -= 10;
if(time < 0) {
    time = 0;
}

timerElement.textContent = time;

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

// Clock timer countdown 

function countDown(){
 time--;
 timerElement.textContent = time;
 if(time <= 0){
    quizEnd();
 }
}

function startQuiz(){
let startQuiz = document.getElementById("start-screen");
startQuiz.setAttribute("class", "hide");

questionTitle.removeAttribute("class");
timerID = setInterval(countDown, 1000)

timerElement.textContent = time;
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

//Highscore table

function saveHighScore(){
let initials = initialElement.value.trim();
console.log(initials);

if(initials !== "") {
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



submitButton.addEventListener("click", saveHighScore);

initialElement.addEventListener("keyup", checkForEnter);

