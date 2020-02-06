let playerCount = 0;
let computerCount = 0;
let matchsPlayed = 0;
let ties = 0;
let currentMatch;
let playerChoice;
let computerChoice;
const buttons = document.querySelectorAll(".btn");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const gamecount = document.querySelector(".gamecount");
const scoreboard = document.querySelector(".scoreboard");
const playerSelect = document.querySelector("#playerSelect");
const computerSelect = document.querySelector("#computerSelect");
const matchResult = document.querySelector("#matchResult");
const buttonContainer = document.querySelector(".btncontainer");

addEvenListeners();

function game() {
  computerChoice = computerSelection();
  computerSelect.textContent = `Computer selected: ${computerChoice}`;


  currentMatch = round(playerChoice, computerChoice);
  
  if (computerCount === 5 || playerCount === 5) {

    if (computerCount === 5) {

      matchResult.textContent = `${decideBo5("computer")}`
      disableButtons();
      playAgain();
    } else {

      matchResult.textContent = `${decideBo5("player")}`
      disableButtons();
      playAgain();
    }

  } else {
    decideOutcome(currentMatch);
  }
}

function playAgain() {
  playerSelect.textContent = '';
  computerSelect.textContent = '';

  const playAgainBtn = document.createElement('button');
  playAgainBtn.setAttribute("style", ".btn");
  playAgainBtn.textContent = "Play again?";
  buttonContainer.appendChild(playAgainBtn);

  playAgainBtn.addEventListener('click', (e) => {
    
    location.reload();
  });
}

function decideOutcome(outcome) {
  if (outcome === "tie") {
    countTies();
    countGame();
  } else if (outcome ) {
    countPlayer();
    countGame();
  } else {
    countComputer();
    countGame();
  }
}

function decideBo5(winner) {

  if (winner === "player") {

    return "The player is the winner of the Best of Five match!";
  } else  if (winner === "computer"){

    return "The computer is the winner of the Best of Five match!";
  }
}

function disableButtons(){
  buttons.forEach((btn) => {
      btn.disabled = true;
  });
}

function enableButtons(){
  buttons.forEach((btn) => {
      btn.disabled = false;
  });
}

function countPlayer() {
  ++playerCount;
  scoreboard.textContent = `Player ${playerCount} -  ${computerCount} Computer`;
  matchResult.textContent = "Player wins the round!";
}

function countComputer() {
  ++computerCount;
  scoreboard.textContent = `Player ${playerCount} -  ${computerCount} Computer`;
  matchResult.textContent = "Computer wins the round!";
}

function countTies() {
  ties++;
  matchResult.textContent = "Match resulted in a tie, better try next time.";
  console.log(matchResult);
}

function countGame() {
  matchsPlayed++;
  gamecount.textContent = `Game ${matchsPlayed}`;
}

function addEvenListeners() {
  rock.addEventListener("click", e => {
    playerChoice = "rock";
    playerSelect.textContent = `Player selected: ${playerChoice}`;

    game();
  });

  paper.addEventListener("click", e => {
    playerChoice = "paper";
    playerSelect.textContent = `Player selected: ${playerChoice}`;

    game();
  });

  scissors.addEventListener("click", e => {
    playerChoice = "scissors";
    playerSelect.textContent = `Player selected: ${playerChoice}`;

    game();
  });
}

function reset() {
  playerCount = 0;
  computerCount = 0;
  matchsPlayed = 0;
  ties = 0;
  currentMatch = 0;
  playerChoice = "";
  computerChoice = "";
  gamecount.textContent = `Game: ${matchsPlayed}`;
  scoreboard.textContent = `Player ${playerCount} - ${computerCount} Computer`;
  playerSelect.textContent = "";
  computerSelect.textContent = "";
  matchResult.textContent = "";
}

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

let round = (playerChoice, computerChoice) => {
  let playerScore = false;

  switch (playerChoice) {
    case "rock":
      if (computerChoice === playerChoice) {
        return "tie";
      } else if (computerChoice === "paper") {
        playerScore = false;

        return playerScore;
      } else {
        playerScore = true;

        return playerScore;
      }

    case "paper":
      if (computerChoice === playerChoice) {
        return "tie";
      } else if (computerChoice === "scissors") {
        playerScore = false;

        return playerScore;
      } else {
        playerScore = true;

        return playerScore;
      }

    case "scissors":
      if (computerChoice === playerChoice) {
        return "tie";
      } else if (computerChoice === "rock") {
        playerScore = false;

        return playerScore;
      } else {
        playerScore = true;

        return playerScore;
      }
  }
};
