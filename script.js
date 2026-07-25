function getComputerChoice() {
    const randomNumber = Math.random();
    if (randomNumber <= 0.33) { return "Rock"; }
    else if (randomNumber > 0.33 && randomNumber <= 0.66) { return "Paper"; }
    else { return "Scissors"; }
}

function getHumanChoice () { return prompt("Rock, Paper or Scissors?"); }

let computerScore = 0;
let humanScore = 0;