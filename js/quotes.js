const quotes = [
  {
    quote: "E = mc²",
    author: "--- mass-energy equivalence",
  },
  {
    quote: "∫E•da = Q/ε₀",
    author: "--- Gauss's law",
  },
  {
    quote: "λ = ħ/p",
    author: "--- De Broglie relations",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const randQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = randQuote.quote;
author.innerText = randQuote.author;
