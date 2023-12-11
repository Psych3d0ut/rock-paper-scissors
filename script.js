'use strict';

const ROCK_TITLE = document.getElementById('title1');
const PAPER_TITLE = document.getElementById('title2');
const SCISSOR_TITLE = document.getElementById('title3');
const titleDiv = document.getElementById(`titleDiv`);

let titleOpacity = 0;
let computerScore = 0;
let playerScore = 0;
let computerGameScore = 0;
let playerGameScore = 0;
let roundWinner = '';
let computerChoice = 0;

let fadeIn = setTimeout(() => {
    let fadeIn2 = setInterval(() => {
        if (titleOpacity <= .5)
            titleDiv.style.background = `rgba(31, 36, 36, ${titleOpacity})`;
        titleOpacity += 0.01;
    }, 80);
}, 2000);


timeoutTitle(ROCK_TITLE, 2000);
timeoutTitle(PAPER_TITLE, 4000);
timeoutTitle(SCISSOR_TITLE, 6000);

function timeoutTitle(title, delay) {
    setTimeout(() => {
        title.style.display=`inline`;
    }, delay);
}

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

function playRound(playerChoice) {
    computerChoice = getComputerChoice();
    playerChoice = playerChoice.toUpperCase();
    if (playerChoice === computerChoice) {
        roundWinner = 'tie'
    } else if ((playerChoice === 'ROCK' && computerChoice === 'SCISSORS')
                || playerChoice === 'PAPER' && computerChoice === 'ROCK'
                || playerChoice === 'SCISSORS' && computerChoice === 'PAPER') {
        playerScore++;
    } else {
        computerScore++;
    }

    if (playerScore === 5) {
        playerWin();
    } else if (computerScore === 5) {
        computerWin();
    }
}

function playerWin() {

}

function computerWin() {
    
}
