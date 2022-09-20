let gameStart = false, level = 0, gamePattern = [], userClickedPattern = [];
let buttonColours = ["red", "blue", "green", "yellow"];

function startOver(){
  level = 0, gameStart = false, gamePattern = [], userClickedPattern = [];
}

function nextSequence(){
  let randomNumber = Math.floor(Math.random()*4);
  let colour = buttonColours[randomNumber];
  gamePattern.push(colour);
  level++;

  $("#level-title").text("Level: "+level)
  $("#"+colour).fadeOut(100).fadeIn(100);
}

function checkAnswer(){

  for(let i = 0; i < userClickedPattern.length; i++){
    if(userClickedPattern[i] != gamePattern[i]){

      $("body").addClass("game-over");
  
      setTimeout(() => {
        $("body").removeClass("game-over");
      }, 200);

      $("#level-title").text("Game Over, Press Any Key to Restart");

      playSound("wrong");

      startOver();
      break;

    }

    if(i == gamePattern.length-1){
      userClickedPattern = [];
      setTimeout(() => {
        nextSequence();
      }, 1000);
    }

  }

}

function animatePress(currentColour){
  $("#"+currentColour).addClass("pressed");
  
  setTimeout(() => {
    $("#"+currentColour).removeClass("pressed");
  }, 150);
}

function playSound(name){
  let btnAudio = new Audio("sounds/"+name+".mp3");
  btnAudio.play();
}

$(document).on('keypress',function(e) {
  if(!gameStart){
    gameStart = true;
    nextSequence();
  }
});


$(".btn").click(function() {
  if(!gameStart) return;
  let btnColour = this.attributes.id.value;
  userClickedPattern.push(btnColour);
  animatePress(btnColour);
  playSound(btnColour);
  checkAnswer();
});

