var timer = 76;
var timeCount;

// timer function to start counting when quiz starts
function setUpTimer() {
    timeCount = setInterval(function () {
        timer--;
        var timeReset = timeElement.textContent = "Time: "+timer;
        timer = timer;
            if(timer<=0) {
                clearInterval(timeCount);
                timeElement.textContent = timeReset;
            }
    }, 1000)
}

//event listener to start timer and hide the quiz button
document.addEventListener("click",function (event) {
    if (event.target === btnElement) {
        wrapperElement.style.display = "none";
        setUpTimer();
        displayQuestions();
    }
})

var i = 0;

// function to compare answers and display each questions when answer buttons are clicked
function onClickHandler(event) {

    if (timer <= 0) {
        clearInterval(timeCount);
        divContainerEl.style.display="none";
        displayResult();
    }

    var answerText = event.target.textContent
    if (answerText === questions[i].answer) {
        timer = timer;
        responseDiv.setAttribute("style", "color: green")
        responseDiv.textContent = "Correct - GOOD JOB!";
    } else {
        responseDiv.setAttribute("style","color:red")
        responseDiv.textContent = "Wrong";
        timer = timer - 10;
    }

    if (i < questions.length-1) {
        i++;
        setTimeout(function() {
            displayQuestions();
            responseDiv.textContent="";
        }, 1000)
    } else {
        setTimeout(function() {
            responseDiv.textContent= "";
            displayResult();
            clearInterval(timeCount);
        }, 500)

        divContainerEl.innerHTML = '';
    }
    // Display final score to user
    function displayResult() {
        finishDiv.style.visibility= "visible";
        timeElement.textContent = "Time " + timer;
        var highScores = timer;
        localStorage.getItem(highScores)
        finalScore.textContent = "Your final score is: " + highScores+"!";
        localStorage.setItem("HighScores", highScores)
    }
}

// function to show the highscore/last page

var showLastPage =  function() {
    var userScore = localStorage.getItem("highScores");
    var userInitials = localStorage.getItem ("Initial");
    if (userScore && userInitial === "") {
        return;
    }
    finishDiv.textContent = "";
    var lastPageEl = document.querySelector(".final");
    lastPageEl.style.visibility="visible";
    var userInfo = document.querySelector("#userInScore");
    userInfo.value = userInitial+": "+userScore
};




//event listener to submit user initials and score to local storage
document.addEventListener("submit", function (event) {
    event.preventDefault();
    var initialInput = document.querySelector("#inputInitial").value;
    if (initialInput === "") {
        errMsg.setAttribute("style", "color: red");
        errMsg.textContent = "Initial input field cannot be empty";
    } else {
        errMsg.textContent = ""
        localStorage.getItem(initialInput);;
         renderLastItem();
    }

})


// function to refresh page back to the beginning
function reset() {
    location.reload();
}

//function to clean highscore board
function clearScore() {
    userInfo.value="";
}

