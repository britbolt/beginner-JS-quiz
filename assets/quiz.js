//Start screen & button to start quiz
window.onload = function() {
    document.getElementById('start-page').style.display ='block';
    document.getElementById('end-page').style.display = "none";
    document.getElementById('questions').style.display = "none";  
};


//functionality for "start quiz" button
//btn will change display to first question and begin timer

const buttonEl = document.getElementById('btn-start');

 //define scoreTimer function
 var time = document.getElementById("clock-score");
  function scoreTimer() {
     let time = 60;
     const score = setInterval(function frame() {
        if (time == 0) {
            clearInterval(score);
            document.getElementById("clock-score").textContent = "TIME'S UP";
        } else {
            document.getElementById("clock-score").innerHTML = time + "s";
            time--;
        }
        console.log(time);
    },1000);
};

//start timer with button click
buttonEl.addEventListener("click", function () {
    document.getElementById('start-page').style.display ='none';
    document.getElementById('questions').style.display = "block";
    document.getElementById('q2', 'q3', 'q4', 'q5').style.display = "none";
    document.getElementById('q1').style.display = "block";

    scoreTimer();
    });



    const buttonQ1 = document.getElementById('q1-c4');

    buttonQ1.addEventListener("click", function () {
        document.getElementById('start-page').style.display ='none';
        document.getElementById('questions').style.display = "block";
        document.getElementById('q1', 'q3', 'q4', 'q5').style.display = "none";
        document.getElementById('q2').style.display = "block";
    });
       



 //function() {
                //document.getElementById('clock-score').innerHTML = '0' +sec;
                //sec--;
                //if (sec < 0) {
                  //  clearInterval(scoreTimer);
                //}

   /* var x = setInterval (function() {
        var scoreTimer = new Date ("0").getTime();
        var now = new Date("60");
        var distance = scoreTimer - now;
        var seconds = Math.floor((distance % (1000*60)) / 1000);
        document.getElementById("clock-score").textContent = seconds + "s";

    // if timer gets to 0 display Times up message
    if (distance < 0) {
            clearInterval(x);
            
        } 
    }, 1000);*/

    


