import TScorer from "./tscorer.js";

const first = document.querySelector("#player1");
const second = document.querySelector("#player2");
const form = document.querySelector("#tscorer-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  const scorer = new TScorer();
  scorer.player1Points = firstNumber;
  scorer.player2Points = secondNumber;
  
  div.innerHTML = scorer.showScore();
  //div.innerHTML = "<p>" + scorer.showScore() + "</p>";
});