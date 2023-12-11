'use strict';

const ROCK_TITLE = document.getElementById('title1');
const PAPER_TITLE = document.getElementById('title2');
const SCISSOR_TITLE = document.getElementById('title3');
const overlay = document.getElementById(`overlay`);
const overlayText = document.getElementById(`overlayWinText`);
const gameContainer = document.getElementById(`gameContainer`);
const titleDiv = document.getElementById(`titleDiv`);
const playerScoreDisplay = document.getElementById(`playerScore`);
const gameScoreDisplay = document.getElementById(`gameScore`);
const compScoreDisplay = document.getElementById(`compScore`);
const winDisplay = document.getElementById(`winDisplay`);

let titleOpacity = 0;
let computerScore = 0;
let playerScore = 0;
let computerGameScore = 0;
let playerGameScore = 0;
let roundWinner = '';
let computerChoice = 0;

let fadeInTimeout = setTimeout(() => {
    let fadeIn = setInterval(() => {
        if (titleOpacity <= .45) titleDiv.style.background = `rgba(31, 36, 36, ${titleOpacity})`;
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

let bodyTimeout = setTimeout(() => {
    gameContainer.style.display = `flex`;
}, 8000);

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
        winDisplay.innerText = `It was a tie!`;
    } else if ((playerChoice === 'ROCK' && computerChoice === 'SCISSORS')
                || playerChoice === 'PAPER' && computerChoice === 'ROCK'
                || playerChoice === 'SCISSORS' && computerChoice === 'PAPER') {
        playerScore++;
        playerScoreDisplay.innerText = playerScore;
        winDisplay.innerText = `You win! ${playerChoice} beats ${computerChoice}!`;

    } else {
        computerScore++;
        compScoreDisplay.innerText = computerScore;
        winDisplay.innerText = `You lose! ${computerChoice} beats ${playerChoice}!`;
    }

    if (playerScore === 5) {
        playerWin();
    } else if (computerScore === 5) {
        computerWin();
    }
}

function showOverlay(winner) {
    overlay.style.display = `block`;
    if (winner === `player`) 
        overlayText.textContent = `Congratulation! You won the round! Current Score: ${playerGameScore}-${computerGameScore}`;
    else 
        overlayText.textContent = `Sorry, you lost this round. Current Score: ${playerGameScore}-${computerGameScore}`;
}

function resetGame() {
    overlay.style.display = `none`;
    computerScore = 0;
    playerScore = 0;
    playerScoreDisplay.innerText = playerScore;
    compScoreDisplay.innerText = computerScore;
    winDisplay.innerText = `Score`;
    gameScoreDisplay.innerText = `${playerGameScore}-${computerGameScore}`;
}

function playerWin() {
    playerGameScore++;
    showOverlay(`player`);
}

function computerWin() {
    computerGameScore++;
    showOverlay(`computer`);
}
