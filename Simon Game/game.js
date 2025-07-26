$("h1").css("color","orange");

var buttonColors=["red","blue","green","yellow"];
var gamePattern=[];
var userClickedPattern=[];
var level=0;
var started = false;


function checkAnswer(currentLevel){
     if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      console.log("success");
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);}
    }
    else {
      console.log("wrong");
      $("body").addClass("game-over");
      setTimeout(function () {
      $("body").removeClass("game-over")
      },100);
      playAudio("wrong");
      $("h1").text("Game Over, Press Any Key to Restart");
      startOver();
    }
}
$(document).keypress(function () {
    if(!started){
        $("h1").text("Level "+level);
    nextSequence();
    started = true;
    }
});

$(".btn").click(function() {
    var userChosenColour=$(this).attr("id");
    userClickedPattern.push(userChosenColour);
    
    playAudio(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1)
    
})
function nextSequence(){
    userClickedPattern=[];
    level++;
    $("#level-title").text("Level " + level);
    var r=Math.floor(Math.random()*4);
    var randomChosenColour=buttonColors[r];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
    playAudio(randomChosenColour);
}
function playAudio(randomChosenColour) {
    var audio = new Audio('./sounds/'+randomChosenColour+'.mp3');
    audio.play();
}
function animatePress(CurrentColor){
    $("."+CurrentColor).addClass("pressed");
    setTimeout(function () {
        $("." + CurrentColor).removeClass("pressed");  
    }, 100);
}
function startOver(){
   level = 0;
  gamePattern = [];
  started = false;
}