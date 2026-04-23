let humanScore = 0;
let computerScore = 0;

const roundMessage = document.getElementById("round-message");
const scoreTracker = document.getElementById("score-tracker");
const winnerAnnouncment = document.getElementById("winner-announcment");

function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3);
  let result;

  switch (choice) {
    case 0:
      result = "rock";
      break;
    case 1:
      result = "paper";
      break;
    case 2:
      result = "scissors";
      break;
  }
  console.log("computer: " + result);
  return result;
}

function checkWinner() {
  if (humanScore === 5) {
    winnerAnnouncment.textContent = "Congratulations! you won the game";
    winnerAnnouncment.style.color = "green";
  } else if (computerScore === 5) {
    winnerAnnouncment.textContent = "Game over! the computer won";
    winnerAnnouncment.style.color = "red";
  }
}

function playRound(humanChoice) {
  if (humanScore >= 5 || computerScore >= 5) {
    return;
  }

  const computerChoice = getComputerChoice();

  if (humanChoice === computerChoice) {
    roundMessage.textContent = `It is tie! both choice ${humanChoice}`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    roundMessage.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    roundMessage.textContent = `You lose! ${computerChoice} beats ${humanChoice} `;
  }

  scoreTracker.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;

  checkWinner();
}

document.getElementById("rock").addEventListener("click", function () {
  playRound("rock");
});

document.getElementById("paper").addEventListener("click", function () {
  playRound("paper");
});

document.getElementById("scissors").addEventListener("click", function () {
  playRound("scissors");
});
