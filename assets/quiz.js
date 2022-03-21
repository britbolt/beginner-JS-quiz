//Start screen & button to start quiz
const begin = document.getElementById('start-page');

window.onload = function() {
    begin.style.display = 'block';
  };

//functionality for "start quiz" button
//btn will change display to first question and begin timer
const buttonEl = document.getElementById('btn-start');
const question1 = document.getElementById('q1');

 //define scoreTimer function

 var time = document.getElementById("clock-score");
  function scoreTimer() {
     let time = 60;
     const score = setInterval(function frame() {
            if (time == 0) {
            clearInterval(score);
            document.getElementById("clock-score").textContent = "TIME'S UP";
            document.getElementById('final-score').style.display = "block";
            document.getElementById('questions', 'start-page').style.display = "none";
        } else {
            document.getElementById("clock-score").innerHTML = time + "s";
            time--;
        }
        console.log(time);
    },1000);
    };

//start timer with "start quiz" button click
//hide start-page div with button click
buttonEl.addEventListener("click", function showNext() {
        question1.style.display = 'block';
        begin.style.display = 'none';
//call for timer function
    scoreTimer();
    });


const question2 = document.getElementById('q2');
const correctq1 = document.getElementById('correct-q1c4');

//question 1 - correct answer click to go to next question
    correctq1.addEventListener("click", function showCorrect1() {
       document.getElementById('right-wrong').innerHTML = 'Correct!';
       question1.style.display = 'none';
       question2.style.display = 'block';
    });

    /*document.querySelectorAll('.incorrect').addEventListener('click', function loseTime () {
            document.getElementById('right-wrong').innerHTML = 'Incorrect!';
            question1.style.display = 'none';
            question2.style.display = 'block';
            time-=5;
            document.getElementById('clock-score').innerHTML = `0${time}`;
        });*/


const question3 = document.getElementById('q3');
const correctq2 = document.getElementById('correct-q2c2');

    correctq2.addEventListener("click", function showCorrect2 () {
        document.getElementById('right-wrong').innerHTML = 'Correct!';
        question2.style.display = 'none';
        question3.style.display = 'block';
    });

const question4 = document.getElementById('q4');
const correctq3 = document.getElementById('correct-q3c3');
    
    correctq3.addEventListener("click", function showCorrect3 () {
        document.getElementById('right-wrong').innerHTML = 'Correct!';
        question3.style.display = 'none';
        question4.style.display = 'block';
    });

const question5 = document.getElementById('q5');
const correctq4 = document.getElementById('correct-q4c3');
        
    correctq4.addEventListener("click", function showCorrec4 () {
         document.getElementById('right-wrong').innerHTML = 'Correct!';
        question4.style.display = 'none';
        question5.style.display = 'block';
    });

const finalScore = document.getElementById('final-score');
const correctq5 = document.getElementById('correct-q5c1');
            
    correctq5.addEventListener("click", function showCorrect5 () {
        document.getElementById('right-wrong').innerHTML = 'Correct!';
        question5.style.display = 'none';
        finalScore.style.display = 'block';
        clearInterval(time);
        localStorage.setItem('seconds', time);
    });

    function storeName() {
        let name = document.getElementById("submit").value;
        localStorage.setItem(name);
    }

    