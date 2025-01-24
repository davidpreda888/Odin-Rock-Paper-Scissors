function getComputerChoice() {
    let result = Math.floor(Math.random() * 3);
    return result;
}

console.log(getComputerChoice()); // 0, 1 or 2