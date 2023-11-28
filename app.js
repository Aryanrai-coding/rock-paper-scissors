let options = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    // Make playerSelection case-insensitive
    playerSelection = playerSelection.toLowerCase();

    // Check for a tie
    if (playerSelection === computerSelection.toLowerCase()) {
        return 'It\'s a tie!';

    } else {
        // Check for player win conditions
        if (
            (playerSelection === 'rock' && computerSelection.toLowerCase() === 'scissors') ||
            (playerSelection === 'paper' && computerSelection.toLowerCase() === 'rock') ||
            (playerSelection === 'scissors' && computerSelection.toLowerCase() === 'paper')
        ) {
            return `You Win! ${playerSelection} beats ${computerSelection}.`;

        } else {
            // If not a tie and not a player win, it's a computer win
            return `You Lose! ${computerSelection} beats ${playerSelection}.`;
        }
    }
}



function game() {
    let playerScore = 0;
    let compScore = 0;
    for (let i = 1; i <= 5; i++) {
        let computerSelection = getComputerChoice();
        let playerSelection = prompt(`Round ${i}`);
        let result = playRound(playerSelection, computerSelection);
        console.log(result);

        if (result.includes('Win')) {
            playerScore++;
        } else if (result.includes('Lose')) {
            compScore++
        }
    }
    if (playerScore > compScore) {
        console.log('You win the game!');
    } else if (compScore > playerScore) {
        console.log('You lose the game!')
    }
}

game();