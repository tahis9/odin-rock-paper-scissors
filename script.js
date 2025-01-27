
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

function getHumanChoice() {
  // Create variable to store user choice
  let choice = "";
  // Ask user for their choice
  choice = window.prompt("Do you choose Rock, Paper or Scissors?");
  return choice;
}

// Create variable to track Player's score
let humanScore = 0;

// Create var to track Computer's score
let computerScore = 0;

function calcResult(humanChoice,computerChoice) {
  let result = "";
  if (humanChoice == "rock") {
    if (computerChoice == "paper") {
      result = "lose"
    } else if (computerChoice == "scissors") {
      result = "win"
    } 
  }
  if (humanChoice == "paper") {
    if (computerChoice == "scissors") {
      result = "lose"
    } else if (computerChoice == "rock") {
      result = "win"
    }
  } 
  if (humanChoice == "scissors") {
    if (computerChoice == "rock") {
      result = "lose"
    } else if (computerChoice == "paper") {
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


function playRound() {
  let humanChoice = getHumanChoice().toLowerCase();
  let computerChoice = getComputerChoice().toLowerCase(); 
  result = calcResult(humanChoice,computerChoice);
  console.log("You " + result + "! " + calcResultChoices(humanChoice,computerChoice));
  if (result === "win") {
    humanScore += 1;
  }
  if (result === "lose") {
    computerScore += 1;
  }
}



