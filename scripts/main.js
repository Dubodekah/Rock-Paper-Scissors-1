const buttons = document.querySelectorAll(".btn");
let playerCount = 0;
let computerCount = 0;
let matchsPlayed = 0;
let ties = 0;
let currentMatch;
let playerChoice;
let computerChoice;
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#Scissors');
const gamecount = document.querySelector(".gamecount");
const scoreboard = document.querySelector(".scoreboard");
const playerSelect = document.querySelector("#playerSelect");
const computerSelect = document.querySelector("#computerSelect");
const matchResult = document.querySelector("#matchResult");


addEvenListeners();

function addEvenListeners() {

  rock.addEventListener('click', (e) => {

    playerChoice = 'rock';
    startGame();
  })

  paper.addEventListener('click', (e) => {

    playerChoice = 'paper';
    startGame();
  })

  scissors.addEventListener('click', (e) => {

    playerChoice = 'scissors';
    startGame();
  })
}

function reset() {

  playerCount = 0;
  computerCount = 0;
  matchsPlayed = 0;
  ties = 0;
  currentMatch = 0;
  playerChoice = '';
  computerChoice = '';
  gamecount.textContent = `Game: ${matchsPlayed}`;
  scoreboard.textContent = `Player ${playerCount} - ${computerCount} Computer`;
  playerSelect.textContent = '';
  computerSelect.textContent = '';
  matchResult.textContent = '';

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
