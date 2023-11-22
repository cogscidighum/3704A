var results = 0;
var playAgain = true;

while (playAgain) {
  var userChoice = prompt("rock (r), paper (p) or scissor (s)?");
  var computerChoice = Math.random();

  if (computerChoice > 0 && computerChoice < 0.33) {
    computerChoice = "r";
  } else if (computerChoice > 0.34 && computerChoice < 0.67) {
    computerChoice = "p";
  } else {
    computerChoice = "s";
  }

  var resultMessage = "";

  if (userChoice + computerChoice == "sp" || userChoice + computerChoice == "rs" || userChoice + computerChoice == "pr") {
    results += 1;
    resultMessage = "You win!";
  } else if (userChoice + computerChoice == "sr" || userChoice + computerChoice == "rp" || userChoice + computerChoice == "ps") {
    resultMessage = "You lose!";
  } else {
    resultMessage = "It's a tie!";
  }

  document.write("<div style='background-color: #add8e6; padding: 10px; margin: 5px; font-size: 18px; display: inline-block;'>Your choice: " + userChoice + "<br>Computer's choice: " + computerChoice + "<br>Result: " + resultMessage + "</div><br>");

  playAgain = confirm("Do you want to play again?");
}
