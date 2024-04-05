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
console.log("hi");
console.log(getComputerChoice());