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

function playRound(playerSelection, computerSelection) { 
    playerSelection = playerSelection.toLowerCase();
    //player is rock
    if (playerSelection == 'rock' && computerSelection == 'paper') {
        return "You lose the round. Paper beats rock";
    } else if (playerSelection == 'rock' && computerSelection == 'rock') {
        return "Its a tie round. Both players picked rock";
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return "You win the round. Rock beats scissors";
    //player is scissors
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return "You win the round. Scissors beats paper";
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return "You lose the round. Rock beats scissors";
    } else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
        return "Its a tie round. Both players picked scissors";
    //player is paper
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return "You lose the round. Scissors beats paper";
    } else if (playerSelection == 'paper' && computerSelection == 'paper') {
        return "Its a tie round. Both players picked paper";
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return "You win the round. Paper beats rock";
    }
    return 1;
}

function playGame() {
    //keep track of both scores, 5 rounds, whoever has score 3 wins
    let playerScore = 0;
    let computerScore = 0;
    const  CPU_WINS = "Computer wins the 5 round game!";
    const PLAYER_WINS = "You wins the 5 round game!";
    for (let i = 0; i < 5; i++) {
        let message = playRound(prompt("Pick Rock, Paper, or Scissors"), getComputerChoice());
        console.log(message);
        if (message.charAt(4) == 'l') computerScore++;
        else if (message.charAt(4) == 'w') playerScore++;

        if (playerScore == 3) console.log(PLAYER_WINS);
        else if (computerScore == 3) console.log(CPU_WINS);
    }
    if (playerScore < 3 && computerScore < 3) {
        if (computerScore > playerScore) console.log(CPU_WINS);
        else if (computerScore < playerScore) console.log(PLAYER_WINS);
        else console.log("Its a tie");
    }
    console.log(`Computer's score: ${computerScore}`);
    console.log(`Player's score ${playerScore}`);
}

playGame();