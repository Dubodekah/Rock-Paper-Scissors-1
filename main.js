function computerSelection() {

  let computerChoice = Math.floor(Math.random() * 3) + 1;
  let result;

  switch (computerDecision) {
    case 1:
      result = "rock";
      return result;
    case 2:
      result = "paper";
      return result;
    case 3:
      result = "scissors";
      return result;
  }
}

let playerSelection = () => {
  let playerChoice = prompt(
    " Please, enter your choice between rock, paper and scissors: ",
    "rock"
  );
  playerChoice = playerChoice.toLowerCase();

  if (
    playerChoice === "rock" ||
    playerChoice === "paper" ||
    playerChoice === "scissors"
  ) {
    return playerChoice;
  } else {
    return "Wrong input, you must select either rock, paper or scissors.";
  }
};


