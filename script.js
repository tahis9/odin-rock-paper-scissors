const playerSelectRock = document.querySelector("#rock");
const playerSelectPaper = document.querySelector("#paper");
const playerSelectScissors = document.querySelector("#scissors");
const resultsContainer = document.querySelector(".results-container")

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
  const resultPara = document.createElement("p");
  resultPara.textContent = "You " + result + "! " + calcResultChoices(humanChoice,computerChoice);
  resultsContainer.appendChild(resultPara);

  return (result)
}

function playGame() {
  // Create variable to track Player's score
  let humanScore = 0;

  // Create var to track Computer's score
  let computerScore = 0;


  // for every round up to 5 total
  // for (let i = 1; i <=5; i++) {
    // result = playRound();
    // if (result === "win") {
    //   humanScore += 1;
    // }
    // if (result === "lose") {
    //   computerScore += 1;
    // }
    // let score = "player points = " + humanScore + " and computer points = " + computerScore;
    // if (i === 5) {
    //   if (humanScore > computerScore) {
    //     console.log("You won the match! Final scores are " + score)
    //   } else if (humanScore > computerScore) {
    //     console.log("You lost the match! Final scores are " + score)
    //   } else {
    //     console.log("You drew the match with the Computer! Final scores are " + score)
    //   }
    // } else {
    //   console.log("Current points are " + score);
    // }
  // }

}

playerSelectRock.addEventListener("click", () => {playRound("Rock")});
playerSelectPaper.addEventListener("click", () => {playRound("Paper")});
playerSelectScissors.addEventListener("click", () => {playRound("Scissors")});




