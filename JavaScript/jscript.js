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

let humanScore = 0;
let computerScore = 0;

const score = document.querySelector(".score");
const resultText = document.querySelector(".result");

function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        resultText.textContent = `It's a tie!`
        score.textContent = `${humanScore} - ${computerScore}`
        return;

    } else if (humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;

        resultText.textContent = `You won this round!`
        score.textContent = `${humanScore} - ${computerScore}`
        return;
    } else {
        computerScore++;

        resultText.textContent = `You lost this round!`
        score.textContent = `${humanScore} - ${computerScore}`
        return;
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
        if(humanScore === 5){
            resultText.textContent = `You won ${humanScore} to ${computerScore}!`;
            score.textContent = "Congratulations, you beat the Bot!";
            humanScore = 0;
            computerScore = 0;
        }

        if(computerScore === 5){
            resultText.textContent = `You lost ${computerScore} to ${humanScore}`;
            score.textContent = "Better luck next time!";
            humanScore = 0;
            computerScore = 0;
        }
    });
});