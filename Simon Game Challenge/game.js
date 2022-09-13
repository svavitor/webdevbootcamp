let gamePattern = [];
let buttonColours = ["red", "blue", "green", "yellow"];
let level = 0;

function nextSequence(){
  let randomNumber = Math.floor(Math.random()*4);
  level++;
  return buttonColours[randomNumber];
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
  $("#level-title").text("Level: "+level)
  $("#"+nextSequence()).fadeOut(100).fadeIn(100);
});


$(".btn").click(function() {
  let btnColour = this.attributes.id.value;
  animatePress(btnColour);
  playSound(btnColour)
});

