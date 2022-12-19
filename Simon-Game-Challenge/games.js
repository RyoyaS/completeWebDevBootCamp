var userClickedPattern = [];
var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var level = 0;
var started = false;

$(".btn").on("click", function(e) {
    var userChosenColor =  e.target.id;
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userChosenColor);
    
})

$(document).on("keydown",function () {
    if (!started) {
        nextSequence();
        started = true;
    }
})

function nextSequence(){
    userClickedPattern = [];
    $("#level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColor = buttonColors[randomNumber];

    $("#"+randomChosenColor).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
    gamePattern.push(randomChosenColor);
    level++;
}

function playSound(name) {
    var audio = new Audio("./sounds/"+name + ".mp3");
    audio.play();   
}

function animatePress(currentColor) {
    $("#"+currentColor).addClass("pressed");
    setTimeout(function () {
        $("#"+currentColor).removeClass("pressed");
    },100)
}

function checkAnswer() {
    if (userClickedPattern[userClickedPattern.length -1] === gamePattern[gamePattern.length - 1]) {
        setTimeout(function () {
            nextSequence();
        },1000)
    }else{
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        },200)
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}


function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}