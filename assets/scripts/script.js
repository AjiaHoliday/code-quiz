// DOM elements
var questionsEl = document.querySelector("#questions");
var timerEl = document.querySelector("#time");
var choicesEl = document.querySelector("#choices");
var submitBtn = document.querySelector("#submit");
var startBtn = document.querySelector("#start");
var initialsEl = document.querySelector("#userInitials");
var feedbackEl = document.querySelector("#feedback");

// quiz variables
var currentQuestionIndex= 0;
var time = questions.length * 10;
var timeCount;

// time function to start counting when quiz starts
function setUpQuiz() {
    // hide start screen
    var startScreenEl = document.getElementById("start");
        startScreenEl.setAttribute("class","hide");
    
    // reveal questions
    questionsEl.removeAttribute("class");

    // start timer
    timeCount = setInterval(countDown,1000);

    // show starting time
    timerEl.textContent = time;

    getQuestion();
}

function getQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    var titleEl = document.getElementById("question-title");
        titleEl.textContent = currentQuestion.title;
    choicesEl.innerHTML = "";

    // loop through choices
    currentQuestion.choices.forEach(function(choice,i) {
        var choiceOptions = document.createElement("button");
        choiceOptions.setAttribute("class","choice col-md-9 col-sm-12");
        choiceOptions.setAttribute("value", choice);

        choiceOptions.textContent= i+1+". "+choice;

        // add click event listener to each choice
        choiceOptions.onclick = onClick;

        //display on the page
        choicesEl.appendChild(choiceOptions);
    });
}

// function to compare answers and display each questions when answer buttons are clicked
function onClick() {
    if (this.value !== questions[currentQuestionIndex].answer) {
        // subtract time for wrong answer
        time -= 15;
        
        if(time <0) {
            time=0;
        }

        // display new time on page
        timerEl.textContent = time;
        feedbackEl.textContent = "Oh no! Wrong answer!"
        feedbackEl.style.color = "red";
        feedbackEl.style.fontsize = "200%";
    } else {
        feedbackEl.textContent = "Yay! Correct!"
        feedbackEl.style.color = "green";
        feedbackEl.style.fontsize = "200%";
    }

    // flash feedback
    feedbackEl.setAttribute("class", "feedback");
    setTimeout(function() {
        feedbackEl.setAttribute("class","feedback hide");
    }, 1000);

    // next question
    currentQuestionIndex++;

    // time check
    if (currentQuestionIndex === questions.length) {
        //hide questions
        questionsEl.setAttribute("class", "hide");
        quizEnd();
    } else {
        getQuestion();
    }
}

function quizEnd () {
    clearInterval(timeCount);
    var endScreenEl = document.getElementById("finish");
    endScreenEl.removeAttribute("class");

    // show final score
    var finalScoreEl = document.getElementById("final-score");
    finalScoreEl.textContent=time;
}

function countDown() {
    time--;
    timerEl.textContent = time;

    // end quiz when user runs out of time
    if (time <= 0) {
        quizEnd();
    }
}

function saveHighScore() {
    var initials = initialsEl.value.trim().toUpperCase();

    if (initials) {
        var highscores = JSON.parse(window.localStorage.getItem("highscores"))||[];
        var newScore = {
            score: time,
            initials: initials
        };

        // save to local storage
        highscores.push(newScore);
        window.localStorage.setItem("highscores",JSON.stringify(highscores));

        // take user to score page
        window.location.href="score.html";
    }
}

function onEnter(event) {
    if (event.key === "Enter") {
        saveHighScore();
    }
}

// listeners
submitBtn.onclick = saveHighScore;
startBtn.onclick = setUpQuiz;

