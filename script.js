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
    }
}

function validChoice(input) {
    if (input === "rock" || input === "paper" || input === "scissors") {
        return true;
    } else {
        return false;
    }
}

function game() {
    let winCount = 0;
    let tieCount = 0;
    let lossCount = 0;
    let playerChoice;
    let round;
    let playAgain;

    alert("<#*#*#>    Jokenpo!    <#*#*#>\n\n" + 
    "Rules:\n- This is a best of 5\n- You can choose between rock, paper or scissors\n\n" +
    "Press OK to Start!");

    for (let i = 0; i < 5; i++) {
        playerChoice = (prompt("Rock, Paper or Scissors?")).toLowerCase();
        while(!validChoice(playerChoice)) {
            alert("You didn't pick rock, paper or scissors!");
            playerChoice = (prompt("Rock, Paper or Scissors?")).toLowerCase();            
        }
        round = playRound(playerChoice, getComputerChoice());
        if (round === "win") {
            winCount++;
        } else if (round === "tie") {
            tieCount++;
        } else if (round === "loss") {
            lossCount++;
        }
    }

    alert(`Here's how our game went:\n- You won ${winCount} round(s)\n`+
    `- You lost ${lossCount} round(s)\n- We tied ${tieCount} round(s)`);
    console.log(`Here's how our game went:\n- You won ${winCount} round(s)\n`+
    `- You lost ${lossCount} round(s)\n- We tied ${tieCount} round(s)`);

    if (winCount > lossCount) {
        alert("****************\n\n       You Win!!       \n\n****************");
        console.log("****************\n\n       You Win!!       \n\n****************");
        playAgain = confirm("Give me another chance and I'll beat you (¬､¬)");
        if (playAgain) {
            game();
        }

    } else if (lossCount > winCount) {
        alert("XxXxXxXxXxXxXxX\n\n       You Lose!       \n\nXxXxXxXxXxXxXxX");
        console.log("XxXxXxXxXxXxXxX\n\n       You Lose!       \n\nXxXxXxXxXxXxXxX");
        playAgain = confirm("Would you like to try again? ;)");
        if (playAgain) {
            game();
        }
    } else if (winCount == lossCount) {
        alert("*#*#*#*#*#*#*#*\n\nWe Tied!  ¯\\_(ツ)_/¯\n\n*#*#*#*#*#*#*#*");
        console.log("*#*#*#*#*#*#*#*\n\nWe Tied!  ¯\\_(ツ)_/¯\n\n*#*#*#*#*#*#*#*");
        playAgain = confirm("Would you like to play again?");
        if (playAgain) {
            game();
        }
    }    
}

game();