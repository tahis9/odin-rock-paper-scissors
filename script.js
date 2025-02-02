
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
  // Check if is valid choice
  let humanChoice = choice.toLowerCase();
  if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
    return choice;
  } else {
    choice = window.prompt('Invalid response. Please type "Rock", "Paper" or "Scissors"');
    humanChoice = choice.toLowerCase();
  }
  
}


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

function playRound(humanScore, computerScore) {
  let humanChoice = getHumanChoice().toLowerCase();

  let computerChoice = getComputerChoice().toLowerCase(); 
  result = calcResult(humanChoice,computerChoice);
  console.log("You " + result + "! " + calcResultChoices(humanChoice,computerChoice));

  return (result)
}

function playGame() {
  // Create variable to track Player's score
  let humanScore = 0;

  // Create var to track Computer's score
  let computerScore = 0;

  // for every round up to 5 total
  for (let i = 1; i <=5; i++) {
    result = playRound();
    if (result === "win") {
      humanScore += 1;
    }
    if (result === "lose") {
      computerScore += 1;
    }
    let score = "player points = " + humanScore + " and computer points = " + computerScore;
    if (i === 5) {
      if (humanScore > computerScore) {
        console.log("You won the match! \nFinal scores are " + score)
      } else if (humanScore > computerScore) {
        console.log("You lost the match! \nFinal scores are " + score)
      } else {
        console.log("You drew the match with the Computer! \nFinal scores are " + score)
      }
    } else {
      console.log("Current points are " + score);
    }
  }

}

