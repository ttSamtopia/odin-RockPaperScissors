function getComputerChoice() {
    const randomNumber = Math.random();
    if (randomNumber <= 0.33) { return "rock"; }
    else if (randomNumber > 0.33 && randomNumber <= 0.66) { return "paper"; }
    else { return "scissors"; }
}

function getHumanChoice () { return prompt("Rock, Paper or Scissors?"); }

function playGame() {

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

    for (let i = 0; i < 5; i++) {
        alert(playRound());
    }

    if (humanScore > computerScore) {
        return(`You won the game! Final score: You ${humanScore} - Computer ${computerScore}`);
    } else if (humanScore < computerScore) {
        return(`You lost the game! Final score: You ${humanScore} - Computer ${computerScore}`);
    } else {
        return(`The game is a tie! Final score: You ${humanScore} - Computer ${computerScore}`);
    }
}

alert(playGame());