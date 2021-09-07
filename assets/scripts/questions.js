var timeElement = document.querySelector("#time");
var wrapperElement = document.querySelector(".wrapper");
var btnElement = document.querySelector("#start");
var divContainerEl = document.querySelector(".divContainer");
var hElement = document.querySelector("#title");
var orderListEl = document.querySelector("#q-list");
var finishDiv = document.querySelector(".finish");
var finalScore = document.querySelector("#result");
var errMsg = document.querySelector("#errorMsg");
var initialInput = document.querySelector("#inputInitial").value;
var submitEl = document.querySelector(".btn btn-primary mb-2");
var responseDiv = document.querySelector("#response");
var finaPageEl = document.querySelector(".final");
var initialAndScore = document.querySelector("#userInScore");
var firstPageEl = document.querySelector(".first");



// Create an  array of questions
var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["alerts", "strings", "booleans", "numbers"],
        answer: "alerts",
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ['"quotes"', "{curly brackets}", "(parentheses)", "[square brackets]"],
        answer: "(parentheses)",
    },
    {
        title: "There are 3 different ways in which a JavaScript code can be involved in an HTML file. Selct the one that's not correct.",
        choices: ["Inline", "Import", "External", "Internal"],
        answer: "Import",
    },
    {
        title: "How to create an array in js ?",
        choices: ["var A[]=", "var A=[]", "var A{}=", "var A={}"],

        answer: "var A=[]",
    },
    {   
        title: "HTML element that can be accessed in a Javascript code: Chose the one that will return an array of elements",
        choices: ["getElementById(‘idname’)", "getElementsByClass(‘classname’)", 
        "getElementsByTagName(‘tagname’)", "querySelectorAll()"],
        answer: "querySelectorAll()",
    }
]


 /**Create next questions to be added to the HTML document dynamically*/
var displayQuestions=function() {
    var holdQ1Title = questions[i].title
    hElement.textContent = holdQ1Title
    var holdq1Choice1 = questions[i].choices[0];
    var holdq1Choice2 = questions[i].choices[1];
    var holdq1Choice3 = questions[i].choices[2];
    var holdq1Choice4 = questions[i].choices[3];

    orderListEl.innerHTML = '';

    var liTag1 = document.createElement("li");
        liTag1.setAttribute("class", "all_li")
    var btn = document.createElement('button');
        btn.setAttribute("class", "all_btn")
        btn.textContent = holdq1Choice1;
        liTag1.appendChild(btn)
        orderListEl.appendChild(liTag1);
        divContainerEl.appendChild(orderListEl);

    var liTag2 = document.createElement("li");
        liTag2.setAttribute("class", "all_li");
    var btn2 = document.createElement('button');
        btn2.setAttribute("class", "all_btn")
        btn2.textContent = holdq1Choice2;
        liTag2.appendChild(btn2)
        orderListEl.appendChild(liTag2)
        divContainerEl.appendChild(orderListEl);

    var liTag3 = document.createElement("li");
        liTag3.setAttribute("class", "all_li")
    var btn3 = document.createElement('button');
        btn3.setAttribute("class", "all_btn")
        btn3.textContent = holdq1Choice3;
        liTag3.appendChild(btn3)
        orderListEl.appendChild(liTag3)
        divContainerEl.appendChild(orderListEl);

    var liTag4 = document.createElement("li");
        liTag4.setAttribute("class", "all_li")
    var btn4 = document.createElement('button');
        btn4.setAttribute("class", "all_btn");
        btn4.textContent = holdq1Choice4;
        liTag4.appendChild(btn4);
        orderListEl.appendChild(liTag4);
        divContainerEl.appendChild(orderListEl);
    var allBtnEl = document.querySelectorAll(".all_btn")
        allBtnEl.forEach(function (event) {
        event.addEventListener("click", onClickHandler)
    });

}
