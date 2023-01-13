function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * options.length);    
    return options[randomChoice];
}

function playRound(playerSelection, computerSelection) {    
    if (playerChoice === "rock") {
        if (computerSelection === "rock") {
            console.log("It's a draw! Rock VS Rock!");
            return "draw";
        } else if (computerSelection === "paper") {
            console.log("You Lose! Rock loses to Paper...");
            return "loss";
        } else if (computerSelection === "scissors") {
            console.log("You Win!! Rock beats Scissors!!");
            return "win";
        }

    } else if (playerChoice === "paper") {
        if (computerSelection === "rock") {
            console.log("You Win!! Paper beats Rock!!");
            return "win";
        } else if (computerSelection === "paper") {
            console.log("It's a draw! Paper VS Paper!");
            return "draw";
        } else if (computerSelection === "scissors") {
            console.log("You Lose! Paper loses to Scissors...");
            return "loss";
        }

    } else if (playerChoice === "scissors") {
        if (computerSelection === "rock") {
            console.log("You Lose! Scissors loses to Rock...");
            return "loss";
        } else if (computerSelection === "paper") {
            console.log("You Win!! Scissors beats Paper!!");
            return "win";
        } else if (computerSelection === "scissors") {
            console.log("It's a draw! Scissors VS Scissors!");
            return "draw";
        }

    } else {
        alert("You didn't pick rock, paper or scissors!");
        return null;
    }
}
