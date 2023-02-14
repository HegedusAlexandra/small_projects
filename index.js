"use strict";

//tartalom :
//GMN1
//GMN2

//GMN1

document.querySelector("#hGMN").textContent = "guess my number";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔️ No number!';
    displayMessage("⛔️ No number!");

    // When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage("🎉 Correct Number!");
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("#guessMyNum").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥 You lost the game!';
      displayMessage("💥 You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("#guessMyNum").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});

// GMN2

let row = "6,2,5,5,4,5,6,4,7";
let aimNum = 6;
let sc = 100;
let highsc = 0;

document.querySelector(".change").addEventListener("click", function () {
  row = "39,27,14";
  aimNum = 4;
  document.querySelector(
    ".between2"
  ).textContent = `Find the missing piece! : ${row}...X?`;
});

document.querySelector("#hGMN2").textContent = "find my number";
document.querySelector(
  ".between2"
).textContent = `Find the missing piece! : ${row}...X?`;

function displayMes(message) {
  document.querySelector(".message2").textContent = message;
}

document.querySelector("#check2").addEventListener("click", function () {
  const guess2 = Number(document.querySelector(".guess2").value);
  console.log(guess2, typeof guess2);

  // When there is no input
  if (!guess2) {
    // document.querySelector('.message').textContent = '⛔️ No number!';
    displayMes("⛔️ No number!");

    // When player wins
  } else if (guess2 === aimNum) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage("Correct!");
    document.querySelector(".number2").textContent = aimNum;
    document.querySelector(".number2").style.background = "green";

    if (sc > highsc) {
      highsc = sc;
      document.querySelector(".highscore2").textContent = highsc;
    }

    // When guess is wrong
  } else if (guess2 !== aimNum) {
    if (sc > 1) {
      displayMessage("Still not");
      sc = Math.floor(sc / 2);
      document.querySelector(".score2").textContent = sc;
      document.querySelector(".number2").textContent = guess2;
      document.querySelector(".number2").style.background = "red";
    } else {
      // document.querySelector('.message').textContent = '💥 You lost the game!';
      displayMessage("💥 You lost the game!");
      document.querySelector(".score2").textContent = 0;
    }
  }
});

document.querySelector(".again2").addEventListener("click", function () {
  sc = 100;
  aimNum = 6;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage("Start guessing...");
  document.querySelector(".score2").textContent = sc;
  document.querySelector(".number2").textContent = "X";
  document.querySelector(".guess2").value = "";

  document.querySelector(".number2").style.background =
    "linear-gradient(145deg, #7abce6, #92e0ff)";
});
