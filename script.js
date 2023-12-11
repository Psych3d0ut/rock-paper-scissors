'use strict';

let computerScore = 0;
let playerScore = 0;
let roundWinner = '';

function getComputerChoice() {
    let choice =  Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return 'ROCK';
        case 1:
            return 'PAPER';
        case 2:
            return 'SCISSORS';
    }
}

function playRound(playerChoice, computerChoice) {
    //computerChoice = getComputerChoice();
    playerChoice = playerChoice.toUpperCase();
    if (playerChoice === computerChoice) {
        roundWinner = 'tie'
        console.log(roundWinner);
        return playRound(playerChoice, getComputerChoice());
    } else if ((playerChoice === 'ROCK' && computerChoice === 'SCISSORS')
                || playerChoice === 'PAPER' && computerChoice === 'ROCK'
                || playerChoice === 'SCISSORS' && computerChoice === 'PAPER') {
        playerScore++;
        return `You win! ${playerChoice} beats ${computerChoice}!`;
    } else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${playerChoice}!`
    }
}

let playerSelection = '';
const computerSelection = getComputerChoice();
//console.log(playRound(playerSelection, getComputerChoice()));

function game() {
    while (computerScore <= 5 || playerScore <= 5) {
        playerSelection = prompt(`Choose Your Fate! (rock, paper, or scissors)`);
        console.log(playRound(playerSelection, getComputerChoice()));
    }
}

game();