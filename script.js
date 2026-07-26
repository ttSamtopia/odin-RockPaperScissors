function getComputerChoice() {
    const randomNumber = Math.random();
    if (randomNumber <= 0.33) { return "rock"; }
    else if (randomNumber > 0.33 && randomNumber <= 0.66) { return "paper"; }
    else { return "scissors"; }
}

function getHumanChoice () { return prompt("Rock, Paper or Scissors?"); }

function playRound () {
    const humanChoice = getHumanChoice().toLowerCase();
    const computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if ( (humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper") ) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}.`;
    }
}

let computerScore = 0;
let humanScore = 0;