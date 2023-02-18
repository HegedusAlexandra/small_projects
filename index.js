"use strict";

//tartalom :
//GMN1
//GMN2
//EINSTEIN
//Pig Game
//Yahtzee

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

//EINSTEIN

document.querySelector("#einsteinRiddle").textContent = "Einstein's riddle";

const statement = [
  "The Brit lives in the red house",
  "The Swede keeps dogs as pets",
  "The Dane drinks tea",
  "The green house is on the left of the white house",
  "The green house’s owner drinks coffee",
  "The person who smokes Pall Mall rears birds",
  "The owner of the yellow house smokes Dunhill",
  "The man living in the center house drinks milk",
  "The Norwegian lives in the first house",
  "The man who smokes blends lives next to the one who keeps cats",
  "The man who keeps horses lives next to the man who smokes Dunhill",
  "The owner who smokes BlueMaster drinks beer",
  "The German smokes Prince",
  "The Norwegian lives next to the blue house",
  "The man who smokes blend has a neighbor who drinks water",
];

function addModal(arr) {
  let tag = document.createElement("button");
  let text = document.createTextNode("Click for the riddle");
  let input = document.createElement("input");
  let textSend = document.createTextNode("Check!");

  let send = document.createElement("button");
  let question = document.createElement("h4");
  let textQuestion = document.createTextNode("Who owns the fish?");

  tag.classList.add("show-modal");
  input.classList.add("solvedRiddle");
  send.classList.add("checkIt");

  tag.appendChild(text);
  send.appendChild(textSend);
  question.appendChild(textQuestion);

  let element = document.getElementById("einstein");

  element.appendChild(tag);
  element.appendChild(question);
  element.appendChild(input);
  element.appendChild(send);

  for (let i = 0; i < arr.length; i++) {
    let p = document.createElement("p");
    let textP = document.createTextNode(`${arr[i]}`);
    p.appendChild(textP);
    let elementP = document.querySelector(".modal");
    elementP.appendChild(p);
  }
}

addModal(statement);

const dragIt = [
  "Norwegian",
  "Swede",
  "Dane",
  "German",
  "British",
  "dogs ",
  "cats",
  "birds",
  "horses",
  "fish",
  "beer",
  "tea",
  "milk",
  "coffee",
  "water",
  "red house",
  "green house",
  "yellow house",
  "white house",
  "blue house",
  "Pall Mall",
  "Dunhill",
  "Blends",
  "BlueMaster",
  "Prince",
];

function addInteractModal(arr) {
  for (let i = 0; i < arr.length; i++) {
    let interactDiv = document.createElement("div");
    let interactText = document.createTextNode(`${arr[i]}`);
    interactDiv.appendChild(interactText);
    interactDiv.classList.add("draggable");
    let element = document.querySelector(".interactContainer");
    element.appendChild(interactDiv);
  }
}

addInteractModal(dragIt);

document.querySelector(".checkIt").addEventListener("click", function () {
  let guess2 = document.querySelector(".solvedRiddle").value;

  let specials = /[^A-Za-z]/g;
  guess2 = guess2.replace(specials, "");

  // When there is no input
  if (guess2.toLowerCase() === "german") {
    document.querySelector(".beer").classList.add("winner");
    document.querySelector(".interactContainer").style.display = "none";
    document.querySelector(".solvedRiddle").style.backgroundColor = "white";
  } else {
    document.querySelector(".solvedRiddle").style.backgroundColor = "red";
    setTimeout(() => {
      document.querySelector(".solvedRiddle").style.backgroundColor = "white";
    }, "3000");
  }
});

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  console.log(e.key);

  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

//EINSTEIN draggable

// Code goes here

// target elements with the "draggable" class
interact(".draggable").draggable({
  // enable inertial throwing
  inertia: true,
  // keep the element within the area of it's parent
  restrict: {
    /* restriction: "parent", */
    endOnly: true,
    elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
  },
  // enable autoScroll
  autoScroll: true,

  // call this function on every dragmove event
  onmove: dragMoveListener,
  // call this function on every dragend event
  onend: function (event) {
    var textEl = event.target.querySelector("p");

    textEl &&
      (textEl.textContent =
        "moved a distance of " +
        Math.sqrt(
          (Math.pow(event.pageX - event.x0, 2) +
            Math.pow(event.pageY - event.y0, 2)) |
            0
        ).toFixed(2) +
        "px");
  },
});

function dragMoveListener(event) {
  var target = event.target,
    // keep the dragged position in the data-x/data-y attributes
    x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx,
    y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

  // translate the element
  target.style.webkitTransform = target.style.transform =
    "translate(" + x + "px, " + y + "px)";

  // update the posiion attributes
  target.setAttribute("data-x", x);
  target.setAttribute("data-y", y);

  let rectp = target.getBoundingClientRect();
  let i = document.querySelector(".solvedRiddle");
  let recti = i.getBoundingClientRect();

  if (
    rectp.top >= recti.top &&
    rectp.bottom <= recti.bottom &&
    rectp.right <= recti.right &&
    rectp.left >= recti.left
  ) {
    console.log("winner");
    i.value = target.textContent;
  } else {
    console.log("looser");
  }
  /* console.log(rectp.top, rectp.right, rectp.bottom, rectp.left); */
  /* console.log(recti.top, recti.right, recti.bottom, recti.left); */
}

// this is used later in the resizing and gesture demos
window.dragMoveListener = dragMoveListener;

//Pig Game

//selecting elements

document.querySelector("#pigGameHead").textContent = "pig game";
const pplayer0El = document.querySelector(".pplayer--0");
const pplayer1El = document.querySelector(".pplayer--1");
const pscore0El = document.querySelector("#pscore--0");
const pscore1El = document.getElementById("pscore--1");
const pdiceEl = document.querySelector(".pdice");
const pbtnNew = document.querySelector(".pbtn--new");
const pbtnRoll = document.querySelector(".pbtn--roll");
const pbtnHold = document.querySelector(".pbtn--hold");
const pcurrent0El = document.getElementById("current--0");
const pcurrent1El = document.getElementById("current--1");

let pscores, pcurrentScore, pactivePlayer, pplaying;

function init() {
  pscores = [0, 0];
  pcurrentScore = 0;
  pactivePlayer = 0;
  pplaying = true;
  pscore0El.textContent = 0;
  pscore1El.textContent = 0;
  pcurrent0El.textContent = 0;
  pcurrent1El.textContent = 0;
  pdiceEl.classList.add("phidden");
  pplayer0El.classList.remove("pplayer--winner");
  pplayer1El.classList.remove("pplayer--winner");
  pplayer0El.classList.add("pplayer--active");
  pplayer1El.classList.remove("pplayer--active");
}
init();

const switchPlayer = function () {
  document.getElementById(`current--${pactivePlayer}`).textContent = 0;
  pcurrentScore = 0;
  pactivePlayer = pactivePlayer === 0 ? 1 : 0;
  pplayer0El.classList.toggle("pplayer--active");
  pplayer1El.classList.toggle("pplayer--active");
};

//rolling dice func
pbtnRoll.addEventListener("click", function () {
  if (pplaying) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    pdiceEl.classList.remove("phidden");
    pdiceEl.src = `dice-${dice}.png`;
    if (dice !== 1) {
      pcurrentScore += dice;
      document.getElementById(`current--${pactivePlayer}`).textContent =
        pcurrentScore;
    } else {
      switchPlayer();
    }
  }
});

pbtnHold.addEventListener("click", function () {
  if (pplaying) {
    pscores[pactivePlayer] += pcurrentScore;
    document.getElementById(`pscore--${pactivePlayer}`).textContent =
      pscores[pactivePlayer];

    if (pscores[pactivePlayer] >= 100) {
      pplaying = false;
      document
        .querySelector(`.pplayer--${pactivePlayer}`)
        .classList.add("pplayer--winner");
      document
        .querySelector(`.pplayer--${pactivePlayer}`)
        .classList.remove("pplayer--active");
      pdiceEl.classList.add("phidden");
    }

    switchPlayer();
  }
});

pbtnNew.addEventListener("click", init);

// Yahtzee

// generate table

const y_table = [
  { name: "aces", count: "nod*1" },
  { name: "twos", count: "nod*2" },
  { name: "threes", count: "nod*3" },
  { name: "fours", count: "nod*4" },
  { name: "fives", count: "nod*5" },
  { name: "sixes", count: "nod*6" },
  { name: "3 of a kind", count: "sum of dice" },
  { name: "4 of a kind", count: "sum of dice" },
  //three of one number two of another
  { name: "full house", count: 25 },
  //four sequential dice
  { name: "Low Straight", count: 30 },
  //five sequential dice
  { name: "High Straight", count: 40 },
  //five of a kind
  { name: "YAHTZEE", count: 50 },
  //any combination
  { name: "CHANCE", count: "sum of dice" },
  { name: "YAHTZEE BONUS", count: 100 },
];

const tbody = document.querySelector("tbody");
const ybtnRoll = document.querySelector(".y--roll");
const ydiceEls = document.querySelectorAll(".y--dice");
const yPlayer0Roll = document.querySelector(".y--player--0--roll");
const yPlayer1Roll = document.querySelector(".y--player--1--roll");

function table(arr) {
  const rowtableRR = document.createElement("tr");
  const datatablenameRR = document.createElement("th");
  const datatableplayer0RR = document.createElement("th");
  const datatableplayer1RR = document.createElement("th");

  datatablenameRR.textContent = "remaining rolls";
  datatablenameRR.colSpan = "2";
  datatableplayer0RR.textContent = 3;
  datatableplayer1RR.textContent = 3;
  datatableplayer0RR.classList.add("y--player--0--roll");
  datatableplayer1RR.classList.add("y--player--1--roll");

  rowtableRR.appendChild(datatablenameRR);
  rowtableRR.appendChild(datatableplayer0RR);
  rowtableRR.appendChild(datatableplayer1RR);

  tbody.appendChild(rowtableRR);

  for (let i = 0; i < arr.length; i++) {
    const rowtable = document.createElement("tr");
    const headtable = document.createElement("th");
    const datatablename = document.createElement("td");
    const datatableplayer0 = document.createElement("td");
    const datatableplayer1 = document.createElement("td");

    headtable.textContent = arr[i].name;
    datatablename.textContent = arr[i].count;
    datatableplayer0.classList.add(`player0--${i}`);
    datatableplayer1.classList.add(`player1--${i}`);

    rowtable.appendChild(headtable);
    rowtable.appendChild(datatablename);
    rowtable.appendChild(datatableplayer0);
    rowtable.appendChild(datatableplayer1);

    tbody.appendChild(rowtable);
  }

  const rowtableGT = document.createElement("tr");
  const datatablenameGT = document.createElement("th");
  const datatableplayer0GT = document.createElement("th");
  const datatableplayer1GT = document.createElement("th");

  datatablenameGT.textContent = "grand total";
  datatablenameGT.colSpan = "2";
  datatableplayer0GT.textContent = 0;
  datatableplayer1GT.textContent = 0;

  rowtableGT.appendChild(datatablenameGT);
  rowtableGT.appendChild(datatableplayer0GT);
  rowtableGT.appendChild(datatableplayer1GT);

  tbody.appendChild(rowtableGT);
}

table(y_table);

ybtnRoll.addEventListener("click", function () {
  for (let i = 0; i < ydiceEls.length; i++) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    ydiceEls[i].src = `dice-${dice}.png`;
  }
});
