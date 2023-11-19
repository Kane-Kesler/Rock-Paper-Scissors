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
    let game_status = '';
    playerSelection = prompt('enter rock paper scissors').toLocaleLowerCase();
    computerSelection = getComputerChoice();    
    if (playerSelection === computerSelection) {
        game_status = 'Draw';
    }

    else if (playerSelection === 'rock' && computerSelection === 'scissors' ||
             playerSelection === 'paper' && computerSelection === 'rock' ||
             playerSelection === 'scissors' && computerSelection === 'paper') {
             game_status = 'Win';
    }

    else if (playerSelection === 'scissors' && computerSelection === 'rock' ||
             playerSelection === 'rock' && computerSelection === 'paper' ||
             playerSelection === 'paper' && computerSelection === 'scissors') {
             game_status = 'Lose';
    }

    else {
        game_status = 'Invalid'; 
    }
    return game_status
  }

function game() {
    let player_score = 0;
    let computer_score = 0;
    let game_result;
    while (player_score !== 5 && computer_score !== 5) {
        game_result = playRound()
        if (game_result === 'Invalid') {
            console.log('Please enter rock, paper or scissors');
            continue;
        }
        else if (game_result === 'Draw')  {
            continue;
        }
        else if (game_result === 'Win') {
            player_score++
        }
        else {
            computer_score++
        }
        console.log(`player score, ${player_score} : computer score ${computer_score}`)
    }
    player_score === 5 ? console.log('You win') : console.log('You lose')
}
   
game();