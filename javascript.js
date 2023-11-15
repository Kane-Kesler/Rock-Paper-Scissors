function getComputerChoice() {
    const num_of_options = 3
    const rand_num = Math.floor(Math.random() * num_of_options);
    if (rand_num === 0) {
        return "rock"
    }

    else if (rand_num === 1) {
        return "paper"
    }

    else {
        return "scissors"
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt('enter rock paper scissors').toLocaleLowerCase()
    
    if (playerSelection === computerSelection) {
        return 'Draw'
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors' ||
             playerSelection === 'paper' && computerSelection === 'rock' ||
             playerSelection === 'scissors' && computerSelection === 'paper') {
        return `You win!, ${playerSelection}  beats ${computerSelection}`
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock' ||
             playerSelection === 'rock' && computerSelection === 'paper' ||
             playerSelection === 'paper' && computerSelection === 'scissors') {
        return `You lose!, ${computerSelection}  beats ${playerSelection}`
    }
    else {
        return 'Please enter rock, paper in scissors'
    }
  }
   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));