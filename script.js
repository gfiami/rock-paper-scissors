const Options = new Array("Rock", "Paper", "Scissors");
const result = document.querySelector(".results");
const pResult = document.querySelector(".playerResults");
const cResult = document.querySelector(".computerResults")
const pPoints = document.querySelector(".playerPoints")
const cPoints = document.querySelector(".computerPoints")
const finalResult = document.querySelector(".finalResult")
const startMessage = document.querySelector(".startMessage")
const game = document.querySelector(".game")

function startGame(){
  startMessage.style.display = 'none'
  game.style.display = 'block'
}
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
  showPoints()
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

function showPoints(){
  pPoints.innerHTML = ` Player - <b>${playerPoints}</b>`
  cPoints.innerHTML = ` <b>${computerPoints}</b> - Computer`
}
function showResults(results){
  pResult.innerHTML = `Player - <b>${playerChoise}</b> `
  cResult.innerHTML = `<b>${computerChoise}</b> - Computer`
  result.innerHTML = `${results}`
}
function endGame(){
if(computerPoints == 5){
  finalResult.innerHTML = "The Computer has 5 points :( Player Lost"
}
if(playerPoints == 5){
  finalResult.innerHTML = "Player has 5 points :) You won!"
}

if((playerPoints == 5 || computerPoints == 5)){
for(i=0; i<buttons.length; i++){
  buttons[i].disabled = 'true'
}
finalResult.innerHTML += " <br> <button class='restartButton'onclick='window.location.reload()'>Restart</button>"
}}