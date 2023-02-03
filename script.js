const Options = new Array("Rock", "Paper", "Scissors");
let buttons = document.querySelectorAll(".playerChoice")
for(i=0; i<buttons.length; i++){
  buttons[i].addEventListener('click', setPlayerChoice)
}
let playerChoice;

function setPlayerChoice(){
  playerChoice = this.id
}
let computerChoice;
function randomComputerChoice() {
  I = Math.floor(Math.random() * 3);
  computerChoice = Options[I];
  return computerChoice;
}

function gameRound(computer, player) {
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
console.log(`Your hand is ${playerChoice}`);
gameRound(randomComputerChoice(), playerChoice);
