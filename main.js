function computerPlay() {

  let computerDecision = Math.floor(Math.random() * 3) + 1;
  let choice;

  switch (computerDecision) {
    case 1:
      choice = "rock";
      return choice;
    case 2:
      choice = "paper";
      return choice;
    case 3:
      choice = "scissors";
      return choice;
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


