var computerScore = 0;
var playerScore = 0;

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
    if (playerScore === computerScore) {
        return "Tie game."
    } else if (playerScore > computerScore){
        return "You win."
    } else {
        return "You lost."
    }
}

// The conclusion after the player chooses
function playRound(playerSelection, computerSelection) {
    var playerSelection = prompt("Rock, Scissors or Paper ?").toLowerCase();
    var computerSelection = computerPlay();
    if (playerSelection === computerSelection) {
        return "It`s a draw";
    } else if ((computerSelection=='rock' && playerSelection=='scissors') 
            || (computerSelection=='scissors' && playerSelection=='paper') 
            || (computerSelection=='paper' && playerSelection=='rock')) {
        alert('You lose! ' + computerSelection + ' beats ' + playerSelection);
        return computerScore ++;   
    } else  {
        alert('You win! ' + playerSelection + ' beats ' + computerSelection);
        return playerScore ++;
    }
}

// The actual game    
function game() {
    for(let i = 0; i < 5; i++) {   
        playRound();
    }
    console.log(winner())
}

game();