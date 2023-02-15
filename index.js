"use strict";

//tartalom :
//GMN1
//GMN2
//EINSTEIN

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
  let text = document.createTextNode("Who owns the fish?");
  let input = document.createElement("input");
  let textSend = document.createTextNode("Check!");
  let send = document.createElement("button");

  tag.classList.add("show-modal");
  input.classList.add("solvedRiddle");
  send.classList.add("checkIt");

  tag.appendChild(text);
  send.appendChild(textSend);

  let element = document.getElementById("einstein");

  element.appendChild(tag);
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
  "German",
  "Norwegian",
  "Swede",
  "Dane",
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
    restriction: "parent",
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
}

// this is used later in the resizing and gesture demos
window.dragMoveListener = dragMoveListener;
