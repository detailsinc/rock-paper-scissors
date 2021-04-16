//Rock, Paper, Scissors (RPS)

//Global Declarations

let playerScore = 0;
let computerScore = 0;

let playerSelection;
let computerSelection = computerPlay();

const buttons = document.querySelectorAll('.btn');

const pScore = document.querySelector('#p-score');
pScore.textContent = `Player Score: ${playerScore}`;

const cScore = document.querySelector('#c-score');
cScore.textContent = `Computer Score: ${computerScore}`;


//Button onclick
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.id;
        computerSelection = computerPlay();
        playGame();

    })
})


//computerPlay() will randomly return either rock, paper, or scissors.

function computerPlay() {
    let options = ['rock', 'paper', 'scissors'];
    let aiSelection
    aiSelection = options[Math.floor(Math.random() * options.length)];
    return (aiSelection);
}

//playRound() will loop through 1 round of RPS

function playRound() {

    //TIE
    if (playerSelection === computerSelection) {
        output.textContent = 'Result: Tie!';
    }
    //WIN
    else if (playerSelection == 'rock' && computerSelection == 'scissors' ||
        playerSelection == 'paper' && computerSelection == 'rock' ||
        playerSelection == 'scissors' && computerSelection == 'paper') {
        playerSelection = playerSelection.toUpperCase();
        computerSelection = computerSelection.toUpperCase();
        output.textContent = `Result: You Win! ${playerSelection} beats ${computerSelection}!`;
        playerScore++;

    }
    //Lose
    else if (playerSelection == 'rock' && computerSelection == 'paper' ||
        playerSelection == 'paper' && computerSelection == 'scissors' ||
        playerSelection == 'scissors' && computerSelection == 'rock') {
        playerSelection = playerSelection.toUpperCase();
        computerSelection = computerSelection.toUpperCase();
        output.textContent = `Result: You Lose! ${computerSelection} beats ${playerSelection}!`;
        computerScore++;
    }
}

//playGame() will continuosly play RPS

function playGame() {

    instruc.textContent = 'Pick Rock, Paper, or Scissors';
    playRound();
    pScore.textContent = `Player Score: ${playerScore}`;
    cScore.textContent = `Ai Score: ${computerScore}`;
    //If player wins
    if (playerScore == 5) {
        gameResults.textContent = 'Game Results: You Won! Great Job!';
        playerScore = 0;
        computerScore = 0;
        pScore.textContent = `Player Score: ${playerScore}`;
        cScore.textContent = `Ai Score: ${computerScore}`;
    }
    //If ai wins
    else if (computerScore == 5) {
        gameResults.textContent = 'Game Results: You Lost! Yikes!';
        playerScore = 0;
        computerScore = 0;
        pScore.textContent = `Player Score: ${playerScore}`;
        cScore.textContent = `Ai Score: ${computerScore}`;
    }
}







