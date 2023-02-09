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
resetButton.addEventListener("click", resetGame);

const rock = document.querySelector("#rock");
rock.addEventListener("click", choiceListener)
const paper = document.querySelector("#paper");
paper.addEventListener("click", choiceListener);
const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", choiceListener);

const playerImage = document.querySelector("#player-img");
const computerImage = document.querySelector("#computer-img");

const playerPoints = document.querySelector("#player-points");
const computerPoints = document.querySelector("#computer-points");

const winScore = document.querySelector("#score-win");
const lossScore = document.querySelector("#score-loss");
const tieScore = document.querySelector("#score-tie");

const finalResults = document.querySelector("#final-results");
let checkListener = true;

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

function choiceListener(event) {
    playRound(event.target.id, getComputerChoice());
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

    rock.classList.remove("disabled");
    paper.classList.remove("disabled");
    scissors.classList.remove("disabled");
    
    if (!checkListener) {
        rock.addEventListener("click", choiceListener);    
        paper.addEventListener("click", choiceListener);
        scissors.addEventListener("click", choiceListener);
        checkListener = true;
    }

    playerImage.classList.remove("disabled");
    playerImage.setAttribute("src", "");
    playerImage.setAttribute("alt", "");
    computerImage.classList.remove("disabled");
    computerImage.setAttribute("src", "");
    computerImage.setAttribute("alt", "");
    
    finalResults.classList.add("hidden");
    finalResults.classList.remove("results-animation");
    finalResults.textContent = "";
}

function addPoint() {
    const onePoint = document.createElement("p");
    onePoint.textContent = "+1 POINT!";
    onePoint.classList.add("points");
    onePoint.setAttribute("id", "added-point"); 
    return onePoint;
}

function removePoint() {
    var checkPoint = document.getElementById("added-point");
    if(checkPoint !== null) {
        checkPoint.remove();
    }
}

function finishGame() {
    rock.classList.add("disabled");
    paper.classList.add("disabled");
    scissors.classList.add("disabled");
    playerImage.classList.add("disabled");
    computerImage.classList.add("disabled");


    rock.removeEventListener("click", choiceListener);    
    paper.removeEventListener("click", choiceListener);
    scissors.removeEventListener("click", choiceListener);
    checkListener = false;
}

function playRound(playerSelection, computerSelection) {
    removePoint();
    if (playerSelection === "rock") {    
        playerImage.setAttribute("src", "./resources/Player-Rock.png");
        playerImage.setAttribute("alt", "You picked Rock");

        if (computerSelection === "rock") {
            tieCount++;
            renderScore();            
        } else if (computerSelection === "paper") {
            computerPoints.appendChild(addPoint());
            lossCount++;
            renderScore();                                 
        } else if (computerSelection === "scissors") {
            playerPoints.appendChild(addPoint());
            winCount++;
            renderScore();        
        }

    } else if (playerSelection === "paper") {
        playerImage.setAttribute("src", "./resources/Player-Paper.png");
        playerImage.setAttribute("alt", "You picked Paper");

        if (computerSelection === "rock") {
            playerPoints.appendChild(addPoint());
            winCount++;
            renderScore();            
        } else if (computerSelection === "paper") {
            tieCount++;
            renderScore();        
        } else if (computerSelection === "scissors") {
            computerPoints.appendChild(addPoint());
            lossCount++;
            renderScore();               
        }

    } else if (playerSelection === "scissors") {
        playerImage.setAttribute("src", "./resources/Player-Scissors.png");
        playerImage.setAttribute("alt", "You picked Scissors");

        if (computerSelection === "rock") {
            computerPoints.appendChild(addPoint());
            lossCount++;
            renderScore();              
        } else if (computerSelection === "paper") {
            playerPoints.appendChild(addPoint());
            winCount++;
            renderScore();            
        } else if (computerSelection === "scissors") {
            tieCount++;
            renderScore();
        }
    }

    if (winCount === 5) {        
        finalResults.textContent = "*** YOU WIN! ***";        
        finalResults.classList.remove("hidden");
        finalResults.classList.add("results-animation");
        finishGame();   
    } else if (lossCount === 5) {        
        finalResults.textContent = "XxX YOU LOSE! XxX";       
        finalResults.classList.remove("hidden");
        finalResults.classList.add("results-animation");
        finishGame();
    }
}