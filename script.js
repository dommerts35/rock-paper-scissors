const score = document.getElementById("score");
const winTag = document.getElementById("winText");
let humanScore = 0;
let computerScore = 0;

let resetGame = () => {
    const sect = document.getElementById("below");
    const btn = document.createElement("button");

    btn.textContent = "Restart?";
    sect.appendChild(btn);
    btn.addEventListener("click", () => {
        humanScore = 0;
        computerScore = 0;
        btn.remove();
        winTag.textContent = "Choose your weapon to start...";
        score.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
    });
}

let updateScore = (code) => {
    if (code === 1) {
        humanScore++;
    } else {
        computerScore++;
    }
    if (humanScore === 5) {
        winTag.textContent = "You have won!";
        score.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
        resetGame();
    } else if (computerScore === 5) {
        winTag.textContent = "The Clanker won...";
        score.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
        resetGame();
    } else {
        score.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
    }
}

let getComputerChoice = () => {
    let randomNum = Math.random();
    let choice = null;
    if (randomNum < .66 && randomNum > .33) {
        choice = "paper";
    } else if (randomNum > .66) {
        choice = "rock";
    } else {
        choice = "scissors";
    }
    return choice
}

let playRound = (human, computer) => {
    if (human === "paper" && computer === "rock") {
        updateScore(1);
        return "Human wins! Paper beats rock!";
    } else if (human === "rock" && computer === "scissors") {
        updateScore(1);
        return "Human wins! Rock beats scissors!";
    } else if (human === "scissors" && computer === "paper") {
        updateScore(1);
        return "Human wins! Scissors beat paper";
    } else if (computer === "paper" && human === "rock") {
        updateScore(2);
        return "Computer wins! Paper beats rock!";
    } else if (computer === "rock" && human === "scissors") {
        updateScore(2);
        return "Computer wins! Rock beats scissors!";
    } else if (computer === "scissors" && human === "paper") {
        updateScore(2);
        return "Computer wins! Scissors beat paper";
    } else {
        return `It's a draw! You put ${human} and Computer put ${computer}.`;
    }
}

const rockBtn = document.getElementById("rock");
const scissorsBtn = document.getElementById("scissors");
const paperBtn = document.getElementById("paper");

rockBtn.addEventListener("click", (e) => {
    const comp = getComputerChoice();
    winTag.textContent = playRound("rock", comp);
});
scissorsBtn.addEventListener("click", (e) => {
    const comp = getComputerChoice();
    winTag.textContent = playRound("scissors", comp);
});
paperBtn.addEventListener("click", (e) => {
    const comp = getComputerChoice();
    winTag.textContent = playRound("paper", comp);
});
