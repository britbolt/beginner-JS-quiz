
var buttonEl = document.getElementById('btn-start');

//Start screen & button to start quiz
window.onload = function() {
    document.getElementById('start-page').style.display ='block';
    document.getElementById('end-page').style.display = "none";
    document.getElementById('questions').style.display = "none"; 
};

//functionality for "start quiz" button
//btn will change display to first question and begin timer

 buttonEl.addEventListener("onClick", startQuiz ()); 

function startQuiz() {
    document.getElementById('q1').style.display = "block"
    //q2.style.display = "none";
//q3.style.display = "none";
//q4.style.display = "none";
//q5.style.display = "none";  
};

