alert("Hey Guys!.. Welcome To Musical Show ☺");
function makeSound(beat){
  // var audio = new Audio("sounds/tom-1.mp3");
  // audio.play();
  switch(beat){
    case 'r': var audio = new Audio("sounds/crash.mp3");
              audio.play();
              changeColor();
              addAnimation(beat);
              break;
    case 'a': var audio = new Audio("sounds/kick-bass.mp3");
              audio.play();
              changeColor();
              addAnimation(beat);
              break;
    case 'd': var audio = new Audio("sounds/snare.mp3");
              audio.play();
              changeColor();
              addAnimation(beat);
              break;
    case 'k': var audio = new Audio("sounds/tom-1.mp3");
              audio.play();
              changeColor();
              addAnimation(beat);
              break;
    case 'i': var audio = new Audio("sounds/tom-2.mp3");
              audio.play();
              changeColor();
              addAnimation(beat);
              break;
    case 's': var audio = new Audio("sounds/tom-3.mp3");
              audio.play();
              changeColor();
              addAnimation(beat);
              break;
    case 'n': var audio = new Audio("sounds/tom-4.mp3");
              audio.play();
              changeColor();
              addAnimation(beat);
              break;
    default: console.log(beat);
  }
}

function changeColor(){
  var arr=["#CCFFBD", "#FFF600", "#E40017", "#A7D129", "#F4C7AB", "#DDDDDD", "#2F5D62"];
  document.body.style.backgroundColor = arr[Math.floor(Math.random()*7)]
}
// TO DETECT MOUSE CLICKS
arr = document.querySelectorAll(".drum");
for(var i=0; i<arr.length;i++){
  arr[i].addEventListener("click", function(){
    makeSound(this.textContent);
  });
}
//TO DETECT THE KEYBOARD PRESSES
document.addEventListener("keydown",function(event){
  makeSound(event.key);
});

function addAnimation(button){
  var activeButton = document.querySelector("."+button);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed")
  }, 100);
}
