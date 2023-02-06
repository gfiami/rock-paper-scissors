const Options = new Array("Rock", "Paper", "Scissors");
const result = document.querySelector(".results");
const pResult = document.querySelector(".playerResults");
const cResult = document.querySelector(".computerResults")
const pPoints = document.querySelector(".playerPoints")
const cPoints = document.querySelector(".computerPoints")
const finalResult = document.querySelector(".finalResult")
const finalResult2 = document.querySelector(".finalResult2")
const startMessage = document.querySelector(".startMessage")
const game = document.querySelector(".game")
//create node for each type of hand
const rockComputer = document.createElement("img")
rockComputer.setAttribute('src', './images/rock.jpg')
rockComputer.setAttribute('class', 'handImages')
const paperComputer = document.createElement("img")
paperComputer.setAttribute('src', './images/paper.jpg')
paperComputer.setAttribute('class', 'handImages')
const scissorsComputer = document.createElement("img")
scissorsComputer.setAttribute('src', './images/scissors.jpg')
scissorsComputer.setAttribute('class', 'handImages')
const rockPlayer = document.createElement("img")
rockPlayer.setAttribute('src', './images/rockReversed.jpg')
rockPlayer.setAttribute('class', 'handImages')
const paperPlayer = document.createElement("img")
paperPlayer.setAttribute('src', './images/paperReversed.jpg')
paperPlayer.setAttribute('class', 'handImages')
const scissorsPlayer = document.createElement("img")
scissorsPlayer.setAttribute('src', './images/scissorsReversed.jpg')
scissorsPlayer.setAttribute('class', 'handImages')


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
  switch(playerChoise){
    case 'Rock':
      playerChoise = rockPlayer;
      break;
    case 'Paper':
      playerChoise = paperPlayer;
      break;
    case 'Scissors':
      playerChoise = scissorsPlayer;
      break;
  }
  return playerChoise
}

function randomComputerChoise() {
  I = Math.floor(Math.random() * 3);
  computerChoise = Options[I];
  switch(computerChoise){
    case 'Rock':
      computerChoise = rockComputer;
      break;
    case 'Paper':
      computerChoise = paperComputer;
      break;
    case 'Scissors':
      computerChoise = scissorsComputer;
      break;
}
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
  pResult.innerHTML = `Player <br>`
  pResult.appendChild(playerChoise)
  cResult.innerHTML = `Computer <br>`
  cResult.appendChild(computerChoise)
  result.innerHTML = `${results}`
}
function endGame(){
if(computerPoints == 5){
  finalResult.innerHTML = "The Computer has 5 points :( <br> Player Lost... The age of man has come to an end."
  finalResult2.innerHTML = "<small>Trust me! Click the button and we will time travel and try again!!</small>"
  finalResult2.innerHTML += " <br> <button class='restartButton'onclick='window.location.reload()'>Time Travel!</button>"

}
if(playerPoints == 5){
  finalResult.innerHTML = "Player has 5 points :) <br> You won!"
  finalResult2.innerHTML = "<small>Give the computers another chance?</small>"
  finalResult2.innerHTML += " <br> <button class='restartButton'onclick='window.location.reload()'>Another Chance</button>"

}

if((playerPoints == 5 || computerPoints == 5)){
for(i=0; i<buttons.length; i++){
  buttons[i].disabled = 'true'
}
}}