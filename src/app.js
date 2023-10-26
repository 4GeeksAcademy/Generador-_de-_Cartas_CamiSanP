/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  console.log(generateRandomSuit());
  document.querySelector(".card").className = generateRandomSuit();
  document.querySelector(".card").innerHTML = generateRandomNumber();
};

window.change = () => {
  console.log(generateRandomSuit());
  document.querySelector(".card").className = generateRandomSuit();
  document.querySelector(".card").innerHTML = generateRandomNumber();
  let cardWidthInput = document.querySelector("#cardWidth");
  let cardHeightInput = document.querySelector("#cardHeight");

  const width = parseInt(cardWidthInput.value) / 250;
  const height = parseInt(cardHeightInput.value) / 200;

  document.querySelector(
    ".card"
  ).style.transform = `scale(${width}, ${height})`;
};

let generateRandomNumber = () => {
  let numbers = [
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
    "11",
    "J",
    "Q",
    "K"
  ];
  let indexNumbers = Math.floor(Math.random() * numbers.length);

  return numbers[indexNumbers];
};

let generateRandomSuit = () => {
  let suit = ["diamond", "spade", "heart", "club"];
  let indexSuit = Math.floor(Math.random() * suit.length);
  return "card " + suit[indexSuit];
};

setInterval(change, 5000); // Timer
