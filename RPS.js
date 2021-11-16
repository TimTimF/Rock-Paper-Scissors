document.querySelector("#playerName").innerHTML = playerName;
assignName();

function assignName (playerName) {
    playerName = prompt("Please enter your name");
    document.querySelector("#playerName").innerHTML = playerName;
    if (playerName == null) {
        document.querySelector("#playerName").innerHTML = "John Doe"
    }
}

let choice;
const rockClick = document.querySelector("#choice1").addEventListener("click", () => {choice = rock; game(choice)});
const paperClick = document.querySelector("#choice2").addEventListener("click", () => {choice = paper; game(choice)});
const scissorsClick = document.querySelector("#choice3").addEventListener("click", () => {choice = scissors; game(choice)});

let rockButton = document.querySelector("#choice1");
let paperButton = document.querySelector("#choice2");
let scissorsButton = document.querySelector("#choice3");
let playerButtons = [rockButton, paperButton, scissorsButton];

let rock = "rock";
let paper = "paper";
let scissors = "scissors";

let compChoice = compRandomChoice();

const roundCounter = document.querySelector("#Round");
let imageContainers = document.querySelectorAll("#playerCompHandImage");


let tie = 0;
let playerWins = 0;
let computerWins = 0;
let roundCount = 0;


function compRandomChoice() {
    let randomChoice = (Math.random());
    if (randomChoice < .33) {
        return rock;
    } else if (randomChoice >= .33 && randomChoice < .66) {
        return paper;
    } else {
        return scissors;
    }
}

function playRound(player, computer) {
    // rock selection
    if (player == rock && computer == rock) {
        tie++
        return tie;
    } else if (player == rock && computer == paper) {
        computerWins++;
        return computerWins;
    } else if (player == rock && computer == scissors) {
        playerWins++;
        return playerWins;
        //paper selection
    } else if (player == paper && computer == rock) {
        playerWins++;
        return playerWins;
    } else if (player == paper && computer == paper) {
        tie++
        return tie;
    } else if (player == paper && computer == scissors) {
        computerWins++;
        return computerWins;
        //scissors selection
    } else if (player == scissors && computer == rock) {
        computerWins++;
        return computerWins;
    } else if (player == scissors && computer == paper) {
        playerWins++;
        return playerWins;
    } else {
        tie++
        return tie;
    }
}

function game(choice) {
    let computerSelection = compRandomChoice();
    if (choice == rock) {
        playRound(rock, compRandomChoice());
        document.querySelector(".playerChoices").classList.add("hide");
        for (i = 0; i < imageContainers.length; i++) {
            imageContainers[i].classList.remove("hide");
        }
        handAnimation(rock, computerSelection);
        roundCount++;
        roundCounter.innerHTML = "Round : " + roundCount;
    } else if (choice == paper) {
        playRound(paper, compRandomChoice());
        document.querySelector(".playerChoices").classList.add("hide");
        for (i = 0; i < imageContainers.length; i++) {
            imageContainers[i].classList.remove("hide");
        }
        handAnimation(paper, computerSelection);
        roundCount++;
        roundCounter.innerHTML = "Round : " + roundCount;
    } else {
        playRound(scissors, compRandomChoice());
        document.querySelector(".playerChoices").classList.add("hide");
        for (i = 0; i < imageContainers.length; i++) {
            imageContainers[i].classList.remove("hide");
        }
        handAnimation(scissors, computerSelection);
        roundCount++;
        roundCounter.innerHTML = "Round : " + roundCount;
    }
}

function handAnimation (playerselection, computerSelection) {
    for (i = 0; i< imageContainers.length; i++) {
        imageContainers[i].style.animation = "handAnimation 500ms linear 1.5s 3"
    } if (playerselection == rock && computerSelection == rock) {
        //rock selection
        setTimeout(() => {
            paperButton.remove(); scissorsButton.classList.replace("Pscissors", "Prock");
            document.querySelector(".playerChoices").classList.remove("hide");}, 3500);
            setTimeout(() => {alert("It's a tie!"); resetRoundDisplay(rock, rock);}, 4000);
    } else if (playerselection == rock && computerSelection == paper) {
        setTimeout(() => {
            paperButton.remove(); scissorsButton.classList.replace("Pscissors", "Ppaper");
            document.querySelector(".playerChoices").classList.remove("hide");}, 3500);
            setTimeout(() => {alert("You lose!"); resetRoundDisplay(rock, paper)}, 4000);
    } else if (playerselection == rock && computerSelection == scissors) {
        setTimeout(() => {
            paperButton.remove(); document.querySelector(".playerChoices").classList.remove("hide");}, 3500);
            setTimeout(() => {alert("You win!"); resetRoundDisplay(rock, scissors)}, 4000);
    } else if (playerselection == paper && computerSelection == rock) {
        //paper selection
        setTimeout(() => {
            rockButton.remove(); scissorsButton.classList.replace("Pscissors", "Prock");
            document.querySelector(".playerChoices").classList.remove("hide");}, 3500);
            setTimeout(() => {alert("You win!"); resetRoundDisplay(paper, rock)}, 4000);
    } else if (playerselection == paper && computerSelection == paper) {
        setTimeout(() => {
            rockButton.remove(); scissorsButton.classList.replace("Pscissors", "Ppaper");
            document.querySelector(".playerChoices").classList.remove("hide");}, 3500);
            setTimeout(() => {alert("It's a tie!"); resetRoundDisplay(paper, paper)}, 4000);
    } else if (playerselection == paper && computerSelection == scissors) {
        setTimeout(() => {
            rockButton.remove(); document.querySelector(".playerChoices").classList.remove("hide");}, 3500);
            setTimeout(() => {alert("You lose!"); resetRoundDisplay(paper, scissors)}, 4000);
    } else if (playerselection == scissors && computerSelection == rock) {
        //scissors selection
        setTimeout(() => {
            paperButton.remove(); scissorsButton.classList.replace("Pscissors", "Prock"); rockButton.classList.remove("Prock"); rockButton.classList.add("Pscissors");
            document.querySelector(".playerChoices").classList.remove("hide");}, 3500);
            setTimeout(() => {alert("You lose!"); resetRoundDisplay(scissors, rock)}, 4000);
    } else if (playerselection == scissors && computerSelection == paper) {
        setTimeout(() => {
            paperButton.remove(); scissorsButton.classList.replace("Pscissors", "Ppaper"); rockButton.classList.remove("Prock"); rockButton.classList.add("Pscissors");
            document.querySelector(".playerChoices").classList.remove("hide");}, 3500);
            setTimeout(() => {alert("You win!"); resetRoundDisplay(scissors, paper)}, 4000);
    } else {
        setTimeout(() => {
            paperButton.remove(); rockButton.classList.remove("Prock"); rockButton.classList.add("Pscissors");
            document.querySelector(".playerChoices").classList.remove("hide");}, 3500);
            setTimeout(() => {alert("It's a tie!"); resetRoundDisplay(scissors, scissors)}, 4000);
    }  
}

let choiceContainer = document.querySelector(".playerChoices");


function resetRoundDisplay(playerselection, compChoice) {
    for (i = 0; i < imageContainers.length; i++) {
        imageContainers[i].classList.add("hide");
        imageContainers[i].style.removeProperty("animation");
    }
    if (playerselection == rock && compChoice == rock) { //rock
        choiceContainer.insertBefore(paperButton, scissorsButton);
        scissorsButton.classList.replace("Prock", "Pscissors");
    } else if (playerselection == rock && compChoice == paper) {
        choiceContainer.insertBefore(paperButton, scissorsButton);
        scissorsButton.classList.replace("Ppaper", "Pscissors");
    } else if (playerselection == rock && compChoice == scissors) {
        choiceContainer.insertBefore(paperButton, scissorsButton);
    } else if (playerselection == paper && compChoice == rock) { //paper
        choiceContainer.insertBefore(rockButton, paperButton);
        scissorsButton.classList.replace("Prock", "Pscissors");
    } else if (playerselection == paper && compChoice == paper) { 
        choiceContainer.insertBefore(rockButton, paperButton);
        scissorsButton.classList.replace("Ppaper", "Pscissors");
    } else if (playerselection == paper && compChoice == scissors) { 
        choiceContainer.insertBefore(rockButton, paperButton);
    } else if (playerselection == scissors && compChoice == rock) { //scissors
        choiceContainer.insertBefore(paperButton, scissorsButton);
        scissorsButton.classList.replace("Prock", "Pscissors");
        rockButton.classList.replace("Pscissors", "Prock");
    } else if (playerselection == scissors && compChoice == paper) { 
        choiceContainer.insertBefore(paperButton, scissorsButton);
        scissorsButton.classList.replace("Ppaper", "Pscissors");
        rockButton.classList.replace("Pscissors", "Prock");
    } else {
        choiceContainer.insertBefore(paperButton, scissorsButton);
        rockButton.classList.replace("Pscissors", "Prock");
    }
} 
