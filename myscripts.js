let computerScore = 0;
let playerScore = 0;
let computerSelection;
let playerSelection;
const results = document.querySelector('#results-container')


// The computer`s choice
function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return 'rock';
    } else if (randomNumber === 1) {
        return 'paper';
    } else if (randomNumber === 2) {
        return 'scissors';
    }
}

// returns the winner
function winner() {
    if (playerScore === 5) {
        alert("Player wins");
    } else if (computerScore === 5){
        alert("Computer wins")
    }
}

let buttons = document.querySelectorAll(".buttons");
buttons.forEach(button => { button.addEventListener("click", () => {
    const img = button.querySelector("img")
    playerSelection = img.alt.toLowerCase()

    playRound(playerSelection, computerSelection)
    

    if (playerScore === 5 || computerScore === 5) {
        declareWinner();
        }
    })
})

function playRound() {
    computerSelection = computerPlay();
    if (computerSelection == playerSelection) {
        displayResults("Tie game!");
    } else if (
        (computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "scissors" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "rock")
    ) {
        computerScore = ++computerScore;
        keepComputerScore();
        if (computerScore === 1) {
        displayResults(
            `Oh no! You lost.
            ${capitalize(computerSelection)} beats ${playerSelection}.`);
        } else if (computerScore === 2) {
        displayResults(
            `Arghh. ${capitalize(computerSelection)} beats ${playerSelection}.
            Give it another shot!`
        );
        } else if (computerScore === 3) {
        displayResults(
            `${capitalize(
            computerSelection
            )} beats ${playerSelection}. It's ok. You got this!!`
        );
        } else if (computerScore === 4) {
        displayResults(
            `Oh no. It's match point!! ${capitalize(computerSelection)} 
            beats ${playerSelection}. Don't let us down!`
        );
        } else {
        displayResults(`${computerSelection} beats ${playerSelection}`);
        }
    } else {
        playerScore = ++playerScore;
        keepPlayerScore();
        if (playerScore === 1) {
        displayResults(
            `Lets go!!! You won.
            ${capitalize(playerSelection)} beats ${computerSelection}.`
        );
        } else if (playerScore === 2) {
        displayResults(
            `You're pretty good at this. ${capitalize(playerSelection)} beats ${computerSelection}.`
        );
        } else if (playerScore === 3) {
        displayResults(
            `${capitalize(playerSelection)} beats ${computerSelection}! 
            You can do this !!`
        );
        } else if (playerScore === 4) {
        displayResults(
            `${capitalize(playerSelection)} beats ${computerSelection}.
            One more and you're a winner!`
        );
        } else {
        displayResults(`${playerSelection} beats ${computerSelection}`);
        }
    }
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function displayResults(str) {
    results.textContent = str;
}


function declareWinner() {
    if (playerScore > computerScore) {
        displayResults("You won !")
    } else {
        displayResults("You lost !")
    }
    resetGame();
}

function resetGame() {
    //results.textContent = ''
    playerScore = 0;
    computerScore = 0;
    keepPlayerScore();
    keepComputerScore();
}

function keepPlayerScore() {
    let playerScoreBox = document.querySelector("#player-score");
    playerScoreBox.textContent = playerScore;
}

function keepComputerScore() {
    let computerScoreBox = document.querySelector("#computer-score");
    computerScoreBox.textContent = computerScore;
}
