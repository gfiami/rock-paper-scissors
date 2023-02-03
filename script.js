const Options = new Array("Rock", "Paper", "Scissors");
const result = document.querySelector(".results");

let computerChoise;
let playerChoise;
let playerPoints = 0
let computerPoints = 0
let results;

let buttons = document.querySelectorAll(".playerChoise")
for(i=0; i<buttons.length; i++){
  buttons[i].addEventListener('click', gameSettings)
}
function gameSettings(){
  result.innerHTML = ""
  results = gameRound(randomComputerChoise(), setPlayerChoise(this))
  showResults(results)
  endGame()
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
  if (computer == player) {
    return "It's a tie!"
  } else {
    //computer == rock
    if (computer == "Rock" && player == "Paper") {
      playerPoints++
      return "Player won! Paper beats Rock"
    }
    if (computer == "Rock" && player == "Scissors") {
      computerPoints++
      return "Computer won! Rock beats Scissors"
    }
    //computer == paper
    if (computer == "Paper" && player == "Rock") {
      computerPoints++
      return "Computer won! Paper beats Rock"
    }
    if (computer == "Paper" && player == "Scissors") {
      playerPoints++
      return "Player won! Scissors beats Paper"
    }
    //computer == scissors
    if (computer == "Scissors" && player == "Rock") {
      playerPoints++
      return "Player won! Rock beats Scissors"
    }
    if (computer == "Scissors" && player == "Paper") {
      computerPoints++
      return "Computer won! Scissors beats Paper"
    }
  }
}

function showResults(results){
  result.innerHTML += `<BR> Player choose ${playerChoise} <BR> Computer choose ${computerChoise}<BR>` 
  result.innerHTML += `${results}`
}

function endGame(){

}