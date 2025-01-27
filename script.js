
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

function getHumanChoice() {
  // Create variable to store user choice
  let choice = "";
  // Ask user for their choice
  choice = window.prompt("Do you choose Rock, Paper or Scissors?");
  return choice;
}


console.log(getComputerChoice())

