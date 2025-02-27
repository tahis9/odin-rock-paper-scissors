const selectionContainer = document.querySelector(".selection-container");
const playerSelectRock = document.querySelector("#rock");
const playerSelectPaper = document.querySelector("#paper");
const playerSelectScissors = document.querySelector("#scissors");
const selectButtons = document.querySelectorAll(".selection-box");
const resultsContainer = document.querySelector(".results-container");
// Create variable to track Player's score
let humanScore = 0;
// Create var to track Computer's score
let computerScore = 0;
// Create var to track rounds
let rounds = 0;


function getComputerChoice() {
  // Create Random Number
  let randDec = Math.random();
  // Convert Random number to integer of 1, 2 or 3
  let randInt = Math.ceil(randDec*3);
  // Convert Int to Rock, Paper or Scissors
  let choice = (randInt === 1) ? "Rock" :
    (randInt === 2) ? "Paper" : "Scissors";
  // Return string
  return choice;
}
// console.log(getComputerChoice())

function calcResult(humanChoice,computerChoice) {
  let result = "";
  if (humanChoice == "Rock") {
    if (computerChoice == "Paper") {
      result = "lose"
    } else if (computerChoice == "Scissors") {
      result = "win"
    } 
  }
  if (humanChoice == "Paper") {
    if (computerChoice == "Scissors") {
      result = "lose"
    } else if (computerChoice == "Rock") {
      result = "win"
    }
  } 
  if (humanChoice == "Scissors") {
    if (computerChoice == "Rock") {
      result = "lose"
    } else if (computerChoice == "Paper") {
      result = "win"
    }
  } 
  if (result == "") {
    result = "drew" }
  return result;
}

function calcResultChoices(a,b) {
  if (a === b) {
    return (a + " draws with itself");
  } else {
    let result = calcResult(a,b)
    if (result == "win") {
      return (a + " beats " + b);
    } else {
      return (b + " beats " + a);
    } 
  }
}

function playRound(humanChoice) {
  // let humanChoice = getHumanChoice();

  let computerChoice = getComputerChoice(); 
  result = calcResult(humanChoice,computerChoice);
  resultsContainer.replaceChildren();
  const roundResult = document.createElement("p");
  roundResult.textContent = "You " + result + "! " + calcResultChoices(humanChoice,computerChoice);
  resultsContainer.appendChild(roundResult);

  return (result)
}

function trackPoints(result) {
  rounds += 1;
  // for every round up to 5 total
  if (result === "win") {
    humanScore += 1;
  }
  if (result === "lose") {
    computerScore += 1;
  }
  const roundScores = document.createElement("p");
  let score = "Player points = " + humanScore + " and Computer points = " + computerScore;
  if (rounds === 5) {

    if (humanScore > computerScore) {
        roundScores.textContent = "You won the match! Final scores are " + score;
    } else if (humanScore > computerScore) {
        roundScores.textContent = "You lost the match! Final scores are " + score;
    } else {
        roundScores.textContent = "You drew the match with the Computer! Final scores are " + score;
    }
    // selectButtons.style.display = "none";
    selectButtons.forEach((i) => {
      i.style.display = "none";
    });
    const resetButton = document.createElement("button")
    resetButton.textContent = "Reset";
    selectionContainer.appendChild(resetButton);
    resetButton.addEventListener("click", () => {
      window.location.reload();
    });
    
  } else {
      roundScores.textContent = "Current points are " + score;
  }
  resultsContainer.appendChild(roundScores);
}

function selectedRock() {
  let result = playRound("Rock");
  trackPoints(result);

}

function selectedPaper() {
  playRound("Paper");
  trackPoints(result);
}

function selectedScissors() {
  playRound("Scissors");
  trackPoints(result);
}

playerSelectRock.addEventListener("click", selectedRock);
playerSelectPaper.addEventListener("click", selectedPaper);
playerSelectScissors.addEventListener("click", selectedScissors);




