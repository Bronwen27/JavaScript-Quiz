var questionTag = document.getElementById('questions')
var questionTitle = document.getElementById('questions-title')
var questionChoices = document.getElementById('question-choices')
var startScreen = document.getElementById('start-screen')
var startButton = document.getElementById('start')

startButton.addEventListener('click', function (evt){
    evt.preventDefault()
    startScreen.setAttribute('class', 'hide')
    displayQuestion(0)
})

//how to set timer in JavaScript?

function displayQuestion(questionIndex){
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