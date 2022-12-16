const Options = new Array("Rock", "Paper", "Scissors");
function randomIndex() {
  I = Math.floor(Math.random() * 3);
  return I;
}
console.log(Options[randomIndex()]);
let computerChoice = console.log(Options[randomIndex()]);
