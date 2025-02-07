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

// function getHumanChoice() {
//     let result = prompt('Choose between rock, paper or scissors');
//     result = result.toLowerCase();
//     while (result!== 'rock' && result !== 'paper' && result !== 'scissors') {
//         console.log('Invalid choice');
//         result = prompt('Choose between rock, paper or scissors');
//     }
//     return result;
// }
//console.log(getHumanChoice()); // rock, paper, or scissors

let humanScore = 0;
let computerScore = 0;

const score = document.querySelector(".score");


function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        score.textContent = `${computerScore} - ${humanScore}`

        return `It's a tie!`;

    } else if (humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        score.textContent = `${computerScore} - ${humanScore}`

        return `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        score.textContent = `${computerScore} - ${humanScore}`

        return `You lose! ${computerChoice} beats ${humanChoice}`;
    }   
}

function playGame(){
    while (humanScore < 3 && computerScore < 3) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        console.log(playRound(humanChoice, computerChoice));
    }
    if (humanScore === 3) {
        console.log('You won the game!');
    } else {
        console.log('You lost the game!');
    }
}


const options = document.querySelectorAll("button");

options.forEach(button => {
    button.addEventListener("click", (event) => {
        let target = event.target;

        switch(target.className) {
            case "rock" :
                playRound("rock",getComputerChoice());
                break;
            
            case "paper" :
                playRound("paper",getComputerChoice());
                break;
        
            case "scissors" :
                playRound("scissors",getComputerChoice());
                break;
        }
    });
});