let scoreHuman = 0;
let scoreComputer = 0;
let roundNumber = 1;

function getUserInput() {
    const selectElement = document.querySelector('.choice');
    return selectElement.value;
}

function getComputerChoice() {
    let randomInt = Math.floor(Math.random() * 3) + 1;
    if (randomInt == 1) {
        return "rock";
    } else if (randomInt == 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getWinner(humanChoice, computerChoice) {
    const outcomes = {
        "rock": {"rock": "Tie", "paper": "Computer wins", "scissors": "Human wins"},
        "paper": {"rock": "Human wins", "paper": "Tie", "scissors": "Computer wins"},
        "scissors": {"rock": "Computer wins", "paper": "Human wins", "scissors": "Tie"}
    };

    return outcomes[humanChoice][computerChoice];
}

function getWinnerBasedOnScore(scoreHuman, scoreComputer) {
    if (scoreHuman > scoreComputer) {
        return "You won with a score of " + scoreHuman + " to " + scoreComputer;
    } else if (scoreHuman < scoreComputer) {
        return "You lose with a score of " + scoreComputer + " to " + scoreHuman;
    } else {
        return "It is a tie. Score: " + scoreHuman + "-" + scoreComputer;
    }
}

function playRound() {
    if (roundNumber <= 3) {
        const humanChoice = getUserInput();
        const computerChoice = getComputerChoice();
        const winner = getWinner(humanChoice, computerChoice);
        let paragraph = document.querySelector('.result');
        
        if (winner === "Tie") {
            paragraph.textContent = "Round " + roundNumber + ": It's a tie! You both chose " + humanChoice;
        } else if (winner === "You win") {
            paragraph.textContent = "Round " + roundNumber + ": You won! " + humanChoice + " beats " + computerChoice;
            scoreHuman++;
        } else {
            paragraph.textContent = "Round " + roundNumber + ": You lost! " + computerChoice + " beats " + humanChoice;
            scoreComputer++;
        }

        roundNumber++;
        
        if (roundNumber > 3) {
            paragraph.textContent += " Final Result: " + getWinnerBasedOnScore(scoreHuman, scoreComputer);
            resetGame(); 
        }
    }
}

function resetGame() {
    scoreHuman = 0;
    scoreComputer = 0;
    roundNumber = 1;
}

const playButton = document.querySelector('.play');
playButton.addEventListener("click", playRound);
