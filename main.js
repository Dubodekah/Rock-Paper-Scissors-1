function computerSelection() {
  let computerChoice = Math.floor(Math.random() * 3) + 1;
  let result;

  switch (computerChoice) {
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
    "Please, enter your choice between rock, paper and scissors:",
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

let match = (playerChoice, computerChoice) => {
  let playerScore = false;

  switch (playerChoice) {
    case "rock":
      if (computerChoice === playerChoice) {
        console.log("Rock, It's a tie between you and the computer.");

        return "tie";
      } else if (computerChoice === "paper") {
        console.log("You Lose! Paper beats Rock");
        playerScore = false;

        return playerScore;
      } else {
        console.log("You Win! Rock beats Scissors!.");
        playerScore = true;

        return playerScore;
      }

    case "paper":
      if (computerChoice === playerChoice) {
        console.log("Paper!, It's a tie between you and the computer.");

        return "tie";
      } else if (computerChoice === "scissors") {
        console.log("You Lose! Scissors beats Paper!");
        playerScore = false;

        return playerScore;
      } else {
        console.log("You Win! Paper beats Rock!.");
        playerScore = true;

        return playerScore;
      }

    case "scissors":
      if (computerChoice === playerChoice) {
        console.log("Scissors!, It's a tie between you and the computer.");
    
        return "tie";
      } else if (computerChoice === "rock") {
        console.log("You Lose! Rock beats Scissors!");
        playerScore = false;

        return playerScore;
      } else {
        console.log("You Win! Scissors beats Paper!.");
        playerScore = true;

        return playerScore;
      }
  }
};

function game() {

    let result = false;
    let playerWin = 0; 
    let computerWin = 0;
    let tie = 0;

    for (let i = 1; i <= 5; i++) {

        let roundMessage = `Round ${i}`;
        let player = playerSelection();
        let computer = computerSelection();
        console.log(roundMessage);

        result = match(player, computer);

        if (result == "tie") {

            tie++;
        } else if (result == true) {

            playerWin++;
        } else {

            computerWin++;
        }
    }

    console.log("End of the best of five match! results: ");
    console.log(`Player: ${playerWin} points.`);
    console.log(`Computer: ${computerWin} points.`);
    console.log(`Ties: ${tie}`);

    if (playerWin > computerWin) {

        console.log(`Player wins! by a difference in points of: ${playerWin - computerWin} points.`);
    } else if (computerWin > playerWin) {

        console.log(`Computer wins! by a difference in points of: ${computerWin - playerWin} points!`);
    } else {

        console.log(`Best of five ended in a tie, Player: ${playerWin}, Computer:${computerWin}`);
    }
};
