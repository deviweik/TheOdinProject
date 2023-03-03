const choices = ["rock", "paper", "scissors"];

function getUserChoice() {
    while (true) {
        const choice = prompt("Rock, Paper, or Scissors?").toLowerCase();
        if (choice === "rock" || choice === "paper" || choice === "scissors") {
            return choice;
        }
        alert("Invalid input. Please try again.");
    }
}


function getComputerChoice() {
    let choice = choices[Math.floor(Math.random() * 3)];
    return choice;
    
}

function playRound(computerSelection, userSelection) {
    userSelection = getUserChoice();
    computerSelection = getComputerChoice();

    switch (userSelection) {
        case "rock":
            switch (computerSelection) {
                case "rock":
                    return "It's a tie! Rock ties Rock";
                    break;
                case "paper":
                    return "You lose! Paper beats Rock";
                    break;
                case "scissors":
                    return "You win! Rock beats Scissors";
                    break;
            }
            break;
        case "paper":
            switch (computerSelection) {
                case "rock":
                    return "You win! Paper beats Rock";
                    break;
                case "paper":
                    return "It's a tie! Paper ties Paper";
                    break;
                case "scissors":
                    return "You lose! Scissors beats Paper";
                    break;
            }
            break;
        case "scissors":
            switch (computerSelection) {
                case "rock":
                    return "You lose! Rock beats Scissors";
                    break;
                case "paper":
                    return "You win! Scissors beats Paper";
                    break;
                case "scissors":
                    return "It's a tie! Scissors ties Scissors";
                    break;
            }
            break;
    }
}

function game() {
    let userScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let result = playRound();
        console.log(result);
        switch (result.split("!")[0]) {
            case "It's a tie":
                break;
            case "You win":
                userScore++;
                break;
            case "You lose":
                computerScore++;
                break;
        }
    }

    if (userScore > computerScore) {
        return `You won the game! ${userScore} to ${computerScore}`;
    } else if (userScore == computerScore) {
        return `The game ended in a tie! ${userScore} to ${computerScore}`;
    } else {
        return `You lost the game! ${computerScore} to ${userScore}`;
    }
}
