/*
let scores = [];
Data.forEach(entry => {
    entry.scoreHistory.forEach(score => {
      scores.push({score:score, player:entry.username});
    });
});


scores.sort((a, b) => b.score - a.score);


for (let i = 0; i < 10; i++) {
    console.log(scores[i]);
}
*/

function printHighScore() {

}

function clearHighScore() {

}

let clearButton = document.getElementById("clear");
clearButton.addEventListener("click", clearHighScore);

printHighScore();
