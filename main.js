function computerSelection() {

  let computerChoice = Math.floor(Math.random() * 3) + 1;
  let result;

  switch (computerChoice) {
    case 1:
      result = 'rock';
      return result;
    case 2:
      result = 'paper';
      return result;
    case 3:
      result = 'scissors';
      return result;
  }
}

let playerSelection = () => {
  let playerChoice = prompt(
     'Please, enter your choice between rock, paper and scissors:' ,
    'rock'
  );
  playerChoice = playerChoice.toLowerCase();

  if (
    playerChoice === 'rock' ||
    playerChoice === 'paper' ||
    playerChoice === 'scissors'
  ) {
    return playerChoice;
  } else {
    return 'Wrong input, you must select either rock, paper or scissors.';
  }
};


let play = (playerChoice, computerChoice) => {
    
    let playerDecision = playerChoice();
    let computerDecision = computerChoice();

};

let finalDecision = (playerChoice, computerChoice) =>  {

    let playerWin = false;
    let playerLose = false;
    let tie = false;

    switch (playerChoice) {

        case "rock":
            if (computerChoice === playerChoice) {

                finalDecision = console.log('It\'s a tie between you and the computer.');
                tie = false;

                return tie;
            } else if (computerChoice == "paper") {

                finalDecision = console.log('You Lose! Paper beats Rock');
                playerLose = true;

                return playerLose;
            } else {

                console.log('You Win! Rock beats Scissors!.');
                playerWin = true;
                
                return playerWin;
            }
            
            break;
    }
}

