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
    while (result!== 'rock' && result !== 'paper' && result !== 'scissors') {
        console.log('Invalid choice');
        result = prompt('Choose between rock, paper or scissors');
    }
    return result.toLowerCase();
}

//console.log(getHumanChoice()); // rock, paper, or scissors