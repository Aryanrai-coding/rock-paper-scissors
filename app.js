let options = ['Rock', 'Paper', 'Scissors'];

pScore = 0;
cScore = 0;



function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}


function playRound(playerSelection, computerSelection) {


    // Check for a tie
    if (playerSelection === computerSelection) {
        // pScore += 0;
        // cScore += 0;

    } else {

        if (
            (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
            (playerSelection === 'Paper' && computerSelection === 'Rock') ||
            (playerSelection === 'Scissors' && computerSelection === 'Paper')
        ) {
            pScore += 1;
        } else {
            // If not a tie and not a player win, it's a computer win
            cScore += 1;
        }
    }


    let pDisplay = document.querySelector('#pDisplay');
    let cDisplay = document.querySelector('#cDisplay');


    pDisplay.innerHTML = `Player Score: ${pScore} ( ${playerSelection})`;
    cDisplay.innerHTML = `Comp Score: ${cScore} (${computerSelection})`;


    if (pScore === 5 || cScore === 5) {
        let display = document.querySelector('#Display');
        if (pScore === 5) {
            display.innerHTML = 'You Win!';
        } else if (cScore === 5) {
            display.innerHTML = 'You Lose!';
        }
    }
}


let btnDiv = document.querySelector('#btnContainer');

let rockBtn = document.createElement('button');
rockBtn.innerHTML = 'Rock';

let paperBtn = document.createElement('button');
paperBtn.innerHTML = 'Paper';

let scissorsBtn = document.createElement('button');
scissorsBtn.innerHTML = 'Scissors';



btnDiv.appendChild(rockBtn);
btnDiv.appendChild(paperBtn);
btnDiv.appendChild(scissorsBtn);

rockBtn.addEventListener('click', () => playRound('Rock', getComputerChoice()));
paperBtn.addEventListener('click', () => playRound('Paper', getComputerChoice()))
scissorsBtn.addEventListener('click', () => playRound('Scissors', getComputerChoice()));


