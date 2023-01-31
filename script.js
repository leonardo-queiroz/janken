const rock = document.querySelector("#rock");
rock.addEventListener("click", playRound("rock", getComputerChoice()));
const paper = document.querySelector("#paper");
paper.addEventListener("click", playRound("paper", getComputerChoice()));
const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", playRound("scissors", getComputerChoice()));

const resultsDiv = document.querySelector("#results");
const roundResults = document.createElement("p");
roundResults.setAttribute("id", "round-results");
const gameResults = document.createElement("p");
gameResults.setAttribute("id", "game-results");
const finalResults = document.createElement("p");
finalResults.setAttribute("id", "final-results");


let winCount = 0;
let tieCount = 0;
let lossCount = 0;


function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * options.length);    
    return options[randomChoice];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            roundResults.textContent = "It's a Tie! I also picked Rock.";
            resultsDiv.appendChild(roundResults);
            tieCount++;
        } else if (computerSelection === "paper") {
            roundResults.textContent = "You Lose! Rock loses to Paper.";
            resultsDiv.appendChild(roundResults);
            lossCount++;           
        } else if (computerSelection === "scissors") {
            roundResults.textContent = "You Win!! Rock beats Scissors!!";
            resultsDiv.appendChild(roundResults);
            winCount++;
        }

    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            roundResults.textContent = "You Win!! Paper beats Rock!!";
            resultsDiv.appendChild(roundResults);
            winCount++;
        } else if (computerSelection === "paper") {
            roundResults.textContent = "It's a Tie! I also picked Paper.";
            resultsDiv.appendChild(roundResults);
            tieCount++;        
        } else if (computerSelection === "scissors") {
            roundResults.textContent = "You Lose! Paper loses to Rock.";
            resultsDiv.appendChild(roundResults);
            lossCount++;   
        }

    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            roundResults.textContent = "You Lose! Scissors loses to Rock.";
            resultsDiv.appendChild(roundResults);
            lossCount++;   
        } else if (computerSelection === "paper") {
            roundResults.textContent = "You Win!! Scissors beats Paper!!";
            resultsDiv.appendChild(roundResults);
            winCount++;
        } else if (computerSelection === "scissors") {
            roundResults.textContent = "It's a Tie! I also picked Rock.";
            resultsDiv.appendChild(roundResults);
            tieCount++;
        }
    }
}

function game() {
    let winCount = 0;
    let tieCount = 0;
    let lossCount = 0;
    let round;
    let playAgain;

    /* for (let i = 0; i < 5; i++) {
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
    } */

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