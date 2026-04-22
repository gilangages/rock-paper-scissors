// make function for computer with switch statement
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

// make function for human choice
function getHumanChoice() {
  let choice = prompt("Input rock / paper / scissors");
  console.log("human: " + choice);
  return choice;
}

// play game
function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  // compare human and computer choice
  function playRound(humanChoice, computerChoice) {
    const human = humanChoice.toLowerCase();

    if (human === computerChoice) {
      console.log(`It's a tie! Both chose ${human}!`);
    } else if (
      (human === "rock" && computerChoice === "scissors") ||
      (human === "paper" && computerChoice === "rock") ||
      (human === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      console.log(`You win! ${human} beats ${computerChoice} `);
    } else {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${human} `);
    }
  }

  // iteration for game just start with 5 round
  for (let i = 1; i <= 5; i++) {
    console.log(`--- Round ${i} ---`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  //declare who is the winner
  console.log("--- FINAL SCORE ---");
  console.log(`Human: ${humanScore} | Computer: ${computerScore}`);

  if (humanScore > computerScore) {
    console.log("Congratulations! You won the game!");
  } else if (humanScore < computerScore) {
    console.log("Game over! The computer won.");
  } else {
    console.log("The game ended in a draw!");
  }
}

// call function to start the game
playGame();
