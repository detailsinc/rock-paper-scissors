//Rock, Paper, Scissors (RPS)

let options = ['rock', 'paper', 'scissors'];

//computerPlay() will randomly return either rock, paper, or scissors.

function computerPlay() {
    let aiSelection
    aiSelection = options[Math.floor(Math.random() * options.length)];
    return(aiSelection);
}

//Two parameters for game = playerSelection, computerSelection

let playerSelection = '';


//Function to play a round of RPS

function playRound(playerSelection) {

    const computerSelection = computerPlay();
    let playerChoice = playerSelection.toLowerCase();
    

    //Condition = Rock
    if (playerChoice === 'rock' && computerSelection === 'rock') {
        console.log('It\'s a tie!');
    } else if (playerChoice === 'rock' && computerSelection === 'scissors') {
        console.log('You Win: Rock beats Scissors')
    } else if (playerChoice === 'rock' && computerSelection === 'paper') {
        console.log('You Lose: Paper beats Rock');
    }

    //Condition = Paper
    if (playerChoice === 'paper' && computerSelection === 'paper') {
        console.log('It\'s a tie!');
    } else if (playerChoice === 'paper' && computerSelection === 'rock') {
        console.log('You Win: Paper beats Rock')
    } else if (playerChoice === 'paper' && computerSelection === 'scissors') {
        console.log('You Lose: Scissors beat Paper');
    }

    //Condition = Scissors
    if (playerChoice === 'scissors' && computerSelection === 'scissors') {
        console.log('It\'s a tie!');
    } else if (playerChoice === 'scissors' && computerSelection === 'paper') {
        console.log('You Win: Scissors beat Paper')
    } else if (playerChoice === 'scissors' && computerSelection === 'rock') {
        console.log('You Lose: Rock beats Scissors');
    }

}





