function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * options.length);    
    return options[randomChoice];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            console.log("It's a Tie! I also picked Rock.");
            alert("It's a Tie! I also picked Rock.");
            return "tie";
        } else if (computerSelection === "paper") {
            console.log("You Lose! Rock loses to Paper.");
            alert("You Lose! Rock loses to Paper.");
            return "loss";
        } else if (computerSelection === "scissors") {
            console.log("You Win!! Rock beats Scissors!!");
            alert("You Win!! Rock beats Scissors!!");
            return "win";
        }

    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            console.log("You Win!! Paper beats Rock!!");
            alert("You Win!! Paper beats Rock!!");
            return "win";
        } else if (computerSelection === "paper") {
            console.log("It's a Tie! I also picked Paper.");
            alert("It's a Tie! I also picked Paper.");
            return "tie";
        } else if (computerSelection === "scissors") {
            console.log("You Lose! Paper loses to Scissors.");
            alert("You Lose! Paper loses to Scissors.");
            return "loss";
        }

    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            console.log("You Lose! Scissors loses to Rock.");
            alert("You Lose! Scissors loses to Rock.");
            return "loss";
        } else if (computerSelection === "paper") {
            console.log("You Win!! Scissors beats Paper!!");
            alert("You Win!! Scissors beats Paper!!");
            return "win";
        } else if (computerSelection === "scissors") {
            console.log("It's a Tie! I also picked Scissors.");
            alert("It's a Tie! I also picked Scissors.");
            return "tie";
        }

    } else {
        alert("You didn't pick rock, paper or scissors!");
        playRound();
    }
}

function game() {
    let winCount = 0;
    let tieCount = 0;
    let lossCount = 0;
    let playerChoice;
    let round;
    let playAgain;

    for (let i = 0; i < 5; i++) {
        playerChoice = (prompt("***Jokenpo!***\nRock, Paper or Scissors?")).toLowerCase();
        round = playRound(playerChoice, getComputerChoice());
        if (round === "win") {
            winCount++;
        } else if (round === "tie") {
            tieCount++;
        } else if (round === "loss") {
            lossCount++;
        }
    }

    alert(`Here's how our match went:\n- You won ${winCount} round(s)\n`+
    `- You lost ${lossCount} round(s)\n- We tied ${tieCount} round(s)`);
    console.log(`Here's how our match went:\n- You won ${winCount} round(s)\n`+
    `- You lost ${lossCount} round(s)\n- We tied ${tieCount} round(s)`);

    if (winCount > lossCount) {
        alert("*****You Win!! ò.ó*****");
        console.log("*****You Win!! ò.ó*****");
        playAgain = confirm("Give me another chance and I'll beat you");
        if (playAgain) {
            game();
        }

    } else if (lossCount > winCount) {
        alert("*You Lose! ;)*");
        console.log("*You Lose! ;)*");
        playAgain = confirm("Would you like to try again?");
        if (playAgain) {
            game();
        }
    } else if (winCount == lossCount) {
        alert("**We Tied!**  ¯\\_(ツ)_/¯");
        console.log("**We Tied!**  ¯\\_(ツ)_/¯");
        playAgain = confirm("Would you like to play again?");
        if (playAgain) {
            game();
        }
    }    
}

game();