const instructions = document.querySelector("#instructions");
const instructionsButtons = document.querySelector("#instructions-toggle");
let instructionsClicked = false;
instructionsButtons.addEventListener("click", function() {
    if (instructionsClicked === false) {
        instructions.classList.remove("hidden");
        instructionsButtons.classList.add("instructions-active");
        instructionsClicked = true;
    } else if (instructionsClicked === true) {
        instructions.classList.add("hidden");
        instructionsButtons.classList.remove("instructions-active");
        instructionsClicked = false;
    }
});

const resetButton = document.querySelector("#reset-button");
resetButton.addEventListener("click", function() {
    resetGame();
});

const rock = document.querySelector("#rock");
rock.addEventListener("click", function() {
    playRound("rock", getComputerChoice());
});
const paper = document.querySelector("#paper");
paper.addEventListener("click", function() {
    playRound("paper", getComputerChoice());
});
const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", function() {
    playRound("scissors", getComputerChoice());
});

const playerImage = document.querySelector("#player-img");
const computerImage = document.querySelector("#computer-img");

const playerPoints = document.querySelector("#player-points");
const computerPoints = document.querySelector("#computer-points");

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
    const computerChoice = options[randomChoice];
    
    if (computerChoice === "rock") {
        computerImage.setAttribute("src", "./resources/CPU-Rock.png");
        computerImage.setAttribute("alt", "CPU picked Rock");
    } else if (computerChoice === "paper") {
        computerImage.setAttribute("src", "./resources/CPU-Paper.png");
        computerImage.setAttribute("alt", "CPU picked Paper");
    } else if (computerChoice === "scissors") {
        computerImage.setAttribute("src", "./resources/CPU-Scissors.png");
        computerImage.setAttribute("alt", "CPU picked Scissors");
    }

    return computerChoice;
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
    
    playerImage.setAttribute("src", "");
    playerImage.setAttribute("alt", "");
    computerImage.setAttribute("src", "");
    computerImage.setAttribute("alt", "");
    resultsDiv.classList.add("hidden");
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock") {        
        playerImage.setAttribute("src", "./resources/Player-Rock.png");
        playerImage.setAttribute("alt", "You picked Rock");

        if (computerSelection === "rock") {
            tieCount++;
            renderScore();            
        } else if (computerSelection === "paper") {
            lossCount++;
            renderScore();
            computerPoints.classList.add("points-animation");                       
        } else if (computerSelection === "scissors") {
            winCount++;
            renderScore();
            playerPoints.classList.add("points-animation");
        }

    } else if (playerSelection === "paper") {
        playerImage.setAttribute("src", "./resources/Player-Paper.png");
        playerImage.setAttribute("alt", "You picked Paper");

        if (computerSelection === "rock") {
            winCount++;
            renderScore();
            playerPoints.classList.add("points-animation");
        } else if (computerSelection === "paper") {
            tieCount++;
            renderScore();        
        } else if (computerSelection === "scissors") {
            lossCount++;
            renderScore();
            computerPoints.classList.add("points-animation");    
        }

    } else if (playerSelection === "scissors") {
        playerImage.setAttribute("src", "./resources/Player-Scissors.png");
        playerImage.setAttribute("alt", "You picked Scissors");

        if (computerSelection === "rock") {
            lossCount++;
            renderScore();
            computerPoints.classList.add("points-animation");   
        } else if (computerSelection === "paper") {
            winCount++;
            renderScore();
            playerPoints.classList.add("points-animation");
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