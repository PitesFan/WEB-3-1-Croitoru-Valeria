const suma = (a, b) => {
  return a + b;
};

console.log(suma(3, 4));
console.log(suma(4.4, 5.6));

const student = {
  name: "Valeria",
  age: "18",
  grade: 10,
  introducere: () => {
    console.log("My name's " + student.name + " and I'm " + student.age);
  },
};

console.log("Grade: " + student.grade);
student.introducere();
student.grade = 9;
console.log("Grade: " + student.grade);

const gameScore = {
  player: 0,
  pc: 0,
  draws: 0,
  rounds: 0,
};

const checkFinalWinner = (gameResult) => {
  if (gameScore.player == 5) {
    gameResult.textContent = "You won the game";
    return true;
  } else if (gameScore.pc == 5) {
    gameResult.textContent = "Game Over";
    return true;
  }
  return false;
};

const getLeaderMessage = () => {
  if (gameScore.player > gameScore.pc) {
    return "Keep going!!!";
  } else if (gameScore.pc > gameScore.player) {
    return "Feel sorry for you";
  } else {
    return "Just the same";
  }
};

const game = (choice) => {
  const pcChoice = document.getElementById("pc-choice");
  const gameResult = document.getElementById("game-result");
  const playerChoice = document.getElementById("player-choice");
  const scoreDisplay = document.getElementById("score");
  const roundsDisplay = document.getElementById("rounds");
  const leaderDisplay = document.getElementById("leader");

  if (choice == "reset") {
    gameScore.player = 0;
    gameScore.pc = 0;
    gameScore.draws = 0;
    gameScore.rounds = 0;

    pcChoice.textContent = "PC: ";
    playerChoice.textContent = "Player: ";
    gameResult.textContent = "Game reset";
    scoreDisplay.textContent = "0 / 0 Draws: 0";
    if (roundsDisplay) roundsDisplay.textContent = "Rounds: 0";
    if (leaderDisplay) leaderDisplay.textContent = "";

    return;
  }

  if (gameScore.player == 5 || gameScore.pc == 5) {
    gameResult.textContent = "The game is over, pls click reset";
    return;
  }

  const randomInt = Math.floor(Math.random() * 3);
  let pc;
  let player = choice;

  if (randomInt == 0) {
    pc = "rock";
  } else if (randomInt == 1) {
    pc = "paper";
  } else {
    pc = "scissors";
  }

  pcChoice.textContent = "PC: " + pc;
  playerChoice.textContent = "Player: " + player;

  gameScore.rounds++;

  if (pc == player) {
    gameResult.textContent = "Draw";
    gameScore.draws++;
  } else if (player == "rock" && pc == "scissors") {
    gameResult.textContent = "You won";
    gameScore.player++;
  } else if (player == "paper" && pc == "rock") {
    gameResult.textContent = "You won";
    gameScore.player++;
  } else if (player == "scissors" && pc == "paper") {
    gameResult.textContent = "You won";
    gameScore.player++;
  } else if (player == "rock" && pc == "paper") {
    gameResult.textContent = "You lost";
    gameScore.pc++;
  } else if (player == "paper" && pc == "scissors") {
    gameResult.textContent = "You lost";
    gameScore.pc++;
  } else if (player == "scissors" && pc == "rock") {
    gameResult.textContent = "You lost";
    gameScore.pc++;
  }

  scoreDisplay.textContent =
    gameScore.player + " / " + gameScore.pc + " Draws: " + gameScore.draws;
  if (roundsDisplay) roundsDisplay.textContent = "Rounds: " + gameScore.rounds;
  if (leaderDisplay) leaderDisplay.textContent = getLeaderMessage();

  checkFinalWinner(gameResult);
};
