const orderOfCards = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "J",
  "Q",
  "K",
  "A",
];

function getCardValue(card) {
  return card
    .charAt(0)
    .toString()
    .toUpperCase();
}

export { orderOfCards, getCardValue };
