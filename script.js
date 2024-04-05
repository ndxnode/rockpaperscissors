function getComputerChoice() {
    // random number generator from 0-2 so 3 numbers for 3 choices
    // switch statement
    const randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "scissors";
        case 2: 
            return "paper";
    }
}

function playGame(playerSelection, computerSelection) { 
    playerSelection = playerSelection.toLowerCase();
    //player is rock
    if (playerSelection == 'rock' && computerSelection == 'paper') {
        return "You lose! Paper beats rock";
    } else if (playerSelection == 'rock' && computerSelection == 'rock') {
        return "Its a tie! Both players picked rock";
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return "You win! Rock beats scissors";
    //player is scissors
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return "You win! Scissors beats paper";
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return "You lose! Rock beats scissors";
    } else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
        return "Its a tie! Both players picked scissors";
    //player is paper
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return "You lose! Scissors beats paper";
    } else if (playerSelection == 'paper' && computerSelection == 'paper') {
        return "Its a tie! Both players picked paper";
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return "You win! Paper beats rock";
    }
    return 1;
}

let playerSelection = 'paper';
const computerSelection = getComputerChoice();

console.log(playGame(playerSelection, computerSelection));
