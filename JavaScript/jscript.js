function getComputerChoice() {
    let result = Math.floor(Math.random() * 3);
    if (result === 0) {
        return 'rock';
    } else if (result === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}
//console.log(getComputerChoice()); // rock, paper, or scissors

function getHumanChoice() {
    let result = prompt('Choose between rock, paper or scissors');
    result = result.toLowerCase();
    while (result!== 'rock' && result !== 'paper' && result !== 'scissors') {
        console.log('Invalid choice');
        result = prompt('Choose between rock, paper or scissors');
    }
    return result;
}
//console.log(getHumanChoice()); // rock, paper, or scissors

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`Computer score: ${computerScore}`);
        console.log(`Human score: ${humanScore}`);
        return `It's a tie!`;
    } else if (humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        console.log(`Computer score: ${computerScore}`);
        console.log(`Human score: ${humanScore}`);
        return `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        console.log(`Computer score: ${computerScore}`);
        console.log(`Human score: ${humanScore}`);
        return `You lose! ${computerChoice} beats ${humanChoice}`;
    }   
}