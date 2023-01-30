game();

function game () {
    let playerWins = 0;
    let computerWins = 0;

    for(let i = 0; i < 5; i++) {
        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();

        let roundWinner = playRound(playerChoice, computerChoice);

        if (roundWinner == "draw") {
            playerWins++;
            computerWins++;

            console.log("This round was a draw!");
        }
        else if (roundWinner == "player") {
            playerWins++;

            console.log("You won this round!");
        }
        else {
            computerWins++;

            console.log("You lost this round!");
        }


    }

    if (playerWins == computerWins) {
        console.log("The game was a draw!");
        return;
    }
    else if (playerWins > computerWins) {
        console.log("You won the game!");
        return;
    }
    else {
        console.log("You lost the game!");
        return;
    }

}

function getPlayerChoice () {
    let computerChoice = prompt("Rock, Paper, Scissors?");

    return computerChoice.toLowerCase();
}

function getComputerChoice () { 
    let possibleChoices  = ["Rock", "Paper", "Scissors"]
    let computerChoice = Math.floor(Math.random()*possibleChoices.length);
    
    return possibleChoices[computerChoice].toLowerCase();
    }

function playRound(playerChoice, computerChoice) {
    let winner;

    if (playerChoice == computerChoice) {
        winner = 'draw';
    }
    else if ((playerChoice == "rock" && computerChoice == "scissors") || (playerChoice == "paper" && computerChoice == "rock") || (playerChoice == "scissors" && computerChoice == "paper")) {
        winner = "player";
    }
    else {
        winner = "computer";
    }

    return winner;

}