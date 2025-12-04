import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const cardValues = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];

const suits = {
  hearts: {
    color: "red",
    symbol: "♥",
  },
  diamonds: {
    color: "red",
    symbol: "♦",
  },
  clubs: {
    color: "black",
    symbol: "♣",
  },
  spades: {
    color: "black",
    symbol: "♠",
  },
};

const card = document.querySelector("#card");
const topSuit = document.querySelector("#suit-top");
const cardValue = document.querySelector("#card-value");
const bottomSuit = document.querySelector("#suit-bottom");
const generateCardButton = document.querySelector("#generateCardBtn");
const setSizeButton = document.querySelector("#setSizeBtn");
const widthInput = document.querySelector("#card-width");
const heightInput = document.querySelector("#card-height");

function generateRandomCard() {
  let suitNames = Object.keys(suits);
  let randomSuitSelected =
    suitNames[Math.floor(Math.random() * suitNames.length)];
  let randomValueSelected =
    cardValues[Math.floor(Math.random() * cardValues.length)];
  topSuit.innerText = suits[randomSuitSelected].symbol;
  cardValue.innerText = randomValueSelected;
  bottomSuit.innerText = suits[randomSuitSelected].symbol;
  if (suits[randomSuitSelected].color === "red") {
    topSuit.classList.add("text-danger");
    cardValue.classList.add("text-danger");
    bottomSuit.classList.add("text-danger");
  } else {
    topSuit.classList.remove("text-danger");
    cardValue.classList.remove("text-danger");
    bottomSuit.classList.remove("text-danger");
  }
}

generateRandomCard();

setInterval(() => {
  generateRandomCard();
}, 10000);

generateCardButton.addEventListener("click", (event) => {
  event.preventDefault();
  generateRandomCard();
});

setSizeButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (isNaN(widthInput.value) || isNaN(heightInput.value)) {
    document.querySelector("#customAlert").style.display = "block";
    return;
  }
  document.querySelector("#customAlert").style.display = "none";
  card.style.width = widthInput.value + "px";
  card.style.height = heightInput.value + "px";
});
