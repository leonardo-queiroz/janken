const scoreDiv = document.querySelector("#score");
const resultsDiv = document.querySelector("#results");
const resetDiv = document.querySelector("#reset");
const resetMsg = document.querySelector("#reset-message");
const playAgainBtn = document.querySelector("#play-again");
playAgainBtn.addEventListener("click", function() {
   resetGame();    
})
const notAgainBtn = document.querySelector("#not-again");
notAgainBtn.addEventListener("click", function() {
    resetDiv.classList.add("hidden");
});
const roundResults = document.createElement("p");
roundResults.setAttribute("id", "round-results");
const finalResults = document.createElement("p");
finalResults.setAttribute("id", "final-results");
const winScore = document.querySelector("#score-win");
const lossScore = document.querySelector("#score-loss");
const tieScore = document.querySelector("#score-tie");

let winCount = 0;
let lossCount = 0;
let tieCount = 0;

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
    roundResults.textContent = "";
    finalResults.textContent = "";
    resetDiv.classList.add("hidden");
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            roundResults.textContent = "It's a Tie! I also picked Rock.";
            resultsDiv.appendChild(roundResults);
            tieCount++;
            renderScore();            
        } else if (computerSelection === "paper") {
            roundResults.textContent = "You Lose! Rock loses to Paper.";
            resultsDiv.appendChild(roundResults);
            lossCount++;
            renderScore();           
        } else if (computerSelection === "scissors") {
            roundResults.textContent = "You Win!! Rock beats Scissors!!";
            resultsDiv.appendChild(roundResults);
            winCount++;
            renderScore();
        }

    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            roundResults.textContent = "You Win!! Paper beats Rock!!";
            resultsDiv.appendChild(roundResults);
            winCount++;
            renderScore();
        } else if (computerSelection === "paper") {
            roundResults.textContent = "It's a Tie! I also picked Paper.";
            resultsDiv.appendChild(roundResults);
            tieCount++;
            renderScore();        
        } else if (computerSelection === "scissors") {
            roundResults.textContent = "You Lose! Paper loses to Rock.";
            resultsDiv.appendChild(roundResults);
            lossCount++;
            renderScore();   
        }

    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            roundResults.textContent = "You Lose! Scissors loses to Rock.";
            resultsDiv.appendChild(roundResults);
            lossCount++;
            renderScore();   
        } else if (computerSelection === "paper") {
            roundResults.textContent = "You Win!! Scissors beats Paper!!";
            resultsDiv.appendChild(roundResults);
            winCount++;
            renderScore();
        } else if (computerSelection === "scissors") {
            roundResults.textContent = "It's a Tie! I also picked Rock.";
            resultsDiv.appendChild(roundResults);
            tieCount++;
            renderScore();
        }
    }

    if (winCount === 5) {
        finalResults.textContent = "****************       You Win!!       ****************";
        resultsDiv.appendChild(finalResults);
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
        resetMsg.textContent = "Would you like to play again? I'm going to beat you for sure next time!"
        resetDiv.classList.remove("hidden");      
    } else if (lossCount === 5) {
        finalResults.textContent = "XxXxXxXxXxXxXxX       You Lose!       XxXxXxXxXxXxXxX";
        resultsDiv.appendChild(finalResults);
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
        resetMsg.textContent = "Would you like to try one more time? I'll do my best to go easy on you this time."
        resetDiv.classList.remove("hidden");        
    }
}