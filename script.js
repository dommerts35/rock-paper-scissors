const scoreEl = document.getElementById("score");
const resultEl = document.getElementById("winText");
const restartBtn = document.getElementById("restart");
const choiceButtons = document.querySelectorAll(".choice-btn");

let humanScore = 0;
let computerScore = 0;
const WINNING_SCORE = 5;

const choices = ["rock", "paper", "scissors"];

const getComputerChoice = () =>
  choices[Math.floor(Math.random() * choices.length)];

const getRoundResult = (human, computer) => {
  if (human === computer) return "draw";

  const winMap = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  return winMap[human] === computer ? "human" : "computer";
};

const updateScoreDisplay = () => {
  scoreEl.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
};

const showWinnerMessage = (winner) => {
  if (winner === "human") {
    resultEl.textContent = "🎉 You reached 5 first — You win!";
  } else {
    resultEl.textContent = "💀 The computer wins this time...";
  }
  restartBtn.classList.remove("hidden");
};

const handleChoice = (humanChoice) => {
  const computerChoice = getComputerChoice();
  const result = getRoundResult(humanChoice, computerChoice);

  if (result === "draw") {
    resultEl.textContent = `🤝 It's a draw! You both chose ${humanChoice}.`;
  } else if (result === "human") {
    humanScore++;
    resultEl.textContent = `✅ You win! ${humanChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    resultEl.textContent = `❌ Computer wins! ${computerChoice} beats ${humanChoice}.`;
  }

  updateScoreDisplay();

  if (humanScore === WINNING_SCORE || computerScore === WINNING_SCORE) {
    showWinnerMessage(humanScore === WINNING_SCORE ? "human" : "computer");
    choiceButtons.forEach(btn => btn.disabled = true);
  }
};

choiceButtons.forEach((btn) => {
  btn.addEventListener("click", () => handleChoice(btn.dataset.choice));
});

restartBtn.addEventListener("click", () => {
  humanScore = 0;
  computerScore = 0;
  updateScoreDisplay();
  resultEl.textContent = "Press a button to start...";
  choiceButtons.forEach(btn => (btn.disabled = false));
  restartBtn.classList.add("hidden");
});
