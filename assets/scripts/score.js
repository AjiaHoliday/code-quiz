function printHighScores() {
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
    
    // sort by highest score
    highscores.sort(function(a,b) {
        return b.score - a.score;
    });

    highscores.forEach(function(score) {
        var liTag = document.createElement("li");
        liTag.textContent = score.initials + " - " + score.score;

        var olEl = document.getElementById("highscores");
        olEl.appendChild(liTag);
    });
}


//function to clean highscore board
function clearScore() {
    window.localStorage.removeItem("highscores");
    window.location.reload();
}

// show scores when page loads
printHighScores();