const Options = new Array("Rock", "Paper", "Scissors");
let computerChoice;
function randomComputerChoice() {
  I = Math.floor(Math.random() * 3);
  computerChoice = Options[I];
  console.log(computerChoice);
}
