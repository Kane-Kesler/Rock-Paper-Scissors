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
    game_status = ''
    playerSelection = prompt('enter rock paper scissors').toLocaleLowerCase()
    
    if (playerSelection === computerSelection) {
        game_status = 'Draw'
        console.log('Draw')
    }

    else if (playerSelection === 'rock' && computerSelection === 'scissors' ||
             playerSelection === 'paper' && computerSelection === 'rock' ||
             playerSelection === 'scissors' && computerSelection === 'paper') {
              game_status = 'Win'  
        console.log(`You win!, ${playerSelection} beats ${computerSelection}`)
    }

    else if (playerSelection === 'scissors' && computerSelection === 'rock' ||
             playerSelection === 'rock' && computerSelection === 'paper' ||
             playerSelection === 'paper' && computerSelection === 'scissors') {
                game_status = 'Lose'
        console.log(`You lose!, ${computerSelection} beats ${playerSelection}`)
    }

    else {
        game_status = 'Invalid'
        
    }
    return game_status
  }

function game() {
    let player_score = 0;
    let computer_score = 0;
    let game_result;
    while (player_score + computer_score !== 5) {
        game_result = playRound()
        if (game_result === 'Invalid') {
            console.log('Please enter rock, paper in scissors');
            continue;
        }
        else if (game_result === 'Draw')  {
            console.log('Draw');
            continue;
        }
        else if (game_result === 'Win') {
            player_score++
        }
        else {
            computer_score++
        }
    }
}
   
  const playerSelection = 'rock';
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));