function getComputerChoice() {
    const numOfOption = 3
    const randNum = Math.floor(Math.random() * numOfOption);

    if (randNum === 0) {
        return 'rock'
    }

    else if (randNum === 1) {
        return 'paper'
    }

    else {
        return 'scissors'
    }
}

function playRound(playerSelection, computerSelection) {
    let gameStatus = '';
    playerSelection = prompt('enter rock paper scissors').toLocaleLowerCase();
    computerSelection = getComputerChoice();    
    if (playerSelection === computerSelection) {
        gameStatus = 'Draw';
    }

    else if (playerSelection === 'rock' && computerSelection === 'scissors' ||
             playerSelection === 'paper' && computerSelection === 'rock' ||
             playerSelection === 'scissors' && computerSelection === 'paper') {
             gameStatus = 'Win';
    }

    else if (playerSelection === 'scissors' && computerSelection === 'rock' ||
             playerSelection === 'rock' && computerSelection === 'paper' ||
             playerSelection === 'paper' && computerSelection === 'scissors') {
             gameStatus = 'Lose';
    }

    else {
        gameStatus = 'Invalid'; 
    }
    return gameStatus
  }

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let gameResult;
    while (playerScore !== 5 && computerScore !== 5) {
        gameResult = playRound();
        if (gameResult === 'Invalid') {
            console.log('Please enter rock, paper or scissors');
            continue;
        }
        else if (gameResult === 'Draw')  {
            console.log(`player score, ${playerScore} : computer score ${computerScore}`)
            continue;
        }
        else if (gameResult === 'Win') {
            playerScore++;
        }
        else {
            computerScore++;
        }
        console.log(`player score, ${playerScore} : computer score ${computerScore}`);
    }
    playerScore === 5 ? console.log('You win') : console.log('You lose');
}
   
