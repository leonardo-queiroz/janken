const rock = document.querySelector("#rock");
rock.addEventListener("click", function() {
    playRound("rock", getComputerChoice())
});
const paper = document.querySelector("#paper");
paper.addEventListener("click", function() {
    playRound("paper", getComputerChoice())
});
const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", function() {
    playRound("scissors", getComputerChoice())
});

const winScore = document.querySelector("#score-win");
const lossScore = document.querySelector("#score-loss");
const tieScore = document.querySelector("#score-tie");

const resultsDiv = document.querySelector("#results");
const finalResults = document.querySelector("#final-results");
const resetMsg = document.querySelector("#reset-message");

const playAgainBtn = document.querySelector("#play-again");
playAgainBtn.addEventListener("click", function() {
   resetGame();    
})
const notAgainBtn = document.querySelector("#not-again");
notAgainBtn.addEventListener("click", function() {
    resultsDiv.classList.add("hidden");
});

let winCount = 0;
let lossCount = 0;
let tieCount = 0;

function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * options.length);    
    return options[randomChoice];
}

function renderScore() {
    winScore.textContent = winCount;
    lossScore.textContent = lossCount;
    tieScore.textContent = tieCount;
}

function resetGame() {
    winCount = 0;
    lossCount = 0;
    tieCount = 0;
    renderScore();
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
    resetMsg.textContent = "";
    finalResults.textContent = "";
    resultsDiv.classList.add("hidden");
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            tieCount++;
            renderScore();            
        } else if (computerSelection === "paper") {
            lossCount++;
            renderScore();           
        } else if (computerSelection === "scissors") {
            winCount++;
            renderScore();
        }

    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            winCount++;
            renderScore();
        } else if (computerSelection === "paper") {
            tieCount++;
            renderScore();        
        } else if (computerSelection === "scissors") {
            lossCount++;
            renderScore();   
        }

    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            lossCount++;
            renderScore();   
        } else if (computerSelection === "paper") {
            winCount++;
            renderScore();
        } else if (computerSelection === "scissors") {
            tieCount++;
            renderScore();
        }
    }

    if (winCount === 5) {
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
        finalResults.textContent = "YOU WIN!";
        resetMsg.textContent = "Would you like to play again? I'm going to beat you for sure next time!"
        resultsDiv.classList.remove("hidden");      
    } else if (lossCount === 5) {
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
        finalResults.textContent = "YOU LOSE!";        
        resetMsg.textContent = "Would you like to try one more time? I'll do my best to go easy on you this time."
        resultsDiv.classList.remove("hidden");        
    }
}