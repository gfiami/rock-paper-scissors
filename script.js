const Options = new Array("Rock", "Paper", "Scissors");
let computerChoise;
let playerChoise;

let buttons = document.querySelectorAll(".playerChoise")
for(i=0; i<buttons.length; i++){
  buttons[i].addEventListener('click', gameSettings)
}
function gameSettings(){
  gameRound(randomComputerChoise(), setPlayerChoise(this))
}
function setPlayerChoise(choise){
  playerChoise = choise.id
  return playerChoise
}

function randomComputerChoise() {
  I = Math.floor(Math.random() * 3);
  computerChoise = Options[I];
  return computerChoise;
}

function gameRound(computer, player) {
  console.log(`You choose ${player}`)
  console.log(`Computer choose ${computer}`);
  if (computer == player) {
    console.log("It's a tie!");
  } else {
    //computer == rock
    if (computer == "Rock" && player == "Paper") {
      console.log("You won! Paper beats Rock");
    }
    if (computer == "Rock" && player == "Scissors") {
      console.log("You lose! Rock beats Scissors");
    }
    //computer == paper
    if (computer == "Paper" && player == "Rock") {
      console.log("You lose! Paper beats Rock");
    }
    if (computer == "Paper" && player == "Scissors") {
      console.log("You lose! Rock beats Scissors");
    }
    //computer == scissors
    if (computer == "Scissors" && player == "Rock") {
      console.log("You won! Rock beats Scissors");
    }
    if (computer == "Scissors" && player == "Paper") {
      console.log("You lose! Scissors beats Paper");
    }
  }
}

