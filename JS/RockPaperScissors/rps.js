window.addEventListener('load', function () {
    localStorage.clear(); //clears playerName from local storage on page load so new player can enter name.
  });

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
    switch (userSelection.toLowerCase()) {
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

let gameCount = 0;

function game() {
    let nameInput = localStorage.getItem("playerName"); // try to get the name from localStorage
    if (!nameInput && gameCount === 0) { // if it's not in localStorage and it's the first game
        nameInput = prompt("Welcome to Rock, Paper, Scissors. \nWhat is your name?");
        if (nameInput == null) {
            nameInput = "Player";
        }
        localStorage.setItem("playerName", nameInput); // save the name to localStorage
    }
    const playerName = document.getElementById("player-name");
    const compName = document.getElementById("comp-name");
    playerName.textContent = nameInput;
    compName.textContent = "Computer";

    const resultDisplay = document.querySelector("#winner");
    let result;
    resultDisplay.textContent = result;
    

    const playerScore = document.getElementById("player-score");
    const compScore = document.getElementById("comp-score");

    let userScore = 0;
    let computerScore = 0;
    console.log("player", userScore, "comp",computerScore);

    playerScore.textContent = userScore;
    compScore.textContent = computerScore;

    buttons.forEach((button) => {
        button.disabled = false;
        button.addEventListener('click', function(e) {
            result = playRound(getComputerChoice(), e.srcElement.innerText);
            console.log(result);
            switch (result.split("!")[0]) {
                case "It's a tie":
                    break;
                case "You win":
                    userScore++;
                    console.log("player", userScore)
                    break;
                case "You lose":
                    computerScore++;
                    console.log("comp", computerScore)
                    break;
            };

            resultDisplay.style.fontSize = "1.5rem";
            resultDisplay.textContent = result;

            playerScore.textContent = userScore;
            compScore.textContent = computerScore;

            if (userScore >= 5 || computerScore >= 5) {
                buttons.forEach((button) => {
                    button.disabled = true;
                    console.log("why tho", "user", userScore, "comp", computerScore);
                });

                if (userScore > computerScore) {
                    resultDisplay.textContent = `You won the game! ${userScore} to ${computerScore}`;
                } else if (userScore == computerScore) {
                    resultDisplay.textContent = `The game ended in a tie! ${userScore} to ${computerScore}`;
                } else {
                    resultDisplay.textContent = `You lost the game! ${computerScore} to ${userScore}`;
                }

                resultDisplay.style.fontSize = "2rem";
            };
        });
    });
    gameCount++;
};


const buttons = document.querySelectorAll('button.element-button');

const settingsButtons = document.querySelectorAll('button.settings-button');

buttons.forEach((button) => {
    button.disabled = true;
    console.log("for real why tho");
});

settingsButtons.forEach((button) => {

    button.addEventListener('click', function(e) {
        let command = e.srcElement.id;
        if (command == "new-game"){
            game();
        } else {
            console.log("Error - settings button not registering");
        }
    });
});















/* Original Code (game played in console)
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
*/