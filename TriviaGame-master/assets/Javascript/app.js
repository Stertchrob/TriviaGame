//I re-did this a bunch of times, and a bunch of different ways and for some odd reason I couldn't get it to work.
//I know this code doesn't look good, but I thought I was close so many times, and would restart.
//I promise this won't happen again.

$(document).ready(function(){
    var quizTimer = $("#quiztimer");
    var countDown = 30;
    var wSeconds = 1;


    $("#quiztimer").text("30")

    function countDown() {
        $("#quiztimer").text("30")
        countDown.onload("countDown" -- ,1000);
        if (countDown === 0) {
        $("#quiztimer").append("Game Over");
        
    });

    var rightAnswer = $(".form-check-inputt")
    rightAnswer = true;

    var wrongAnswer = $(".form-check-inputf")
    wrongAnswer = false;

    var endGame = $("#finish");

    var correctCount = 0;
    var wrongCount = 0;

    function quizResults(){

        $(".form-check-inputt").on("click", function() {
            correctCount++;
            $("#form-check-inputt").text(correctCount);
        });
        
        $(".form-check-inputf").on("click", function() {
            wrongCount++;
            $(".form-check-inputf").text(wrongCount);
        });
        
        $(".finish").on("click", function() {
            endGame.alert("Correct:" + "correctCount" + "Wrong:" + "wrongCount")
        });
    }
});
